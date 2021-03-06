module StackUnderflow.Api.App

open System
open Giraffe
open Microsoft.AspNetCore.Builder
open Microsoft.AspNetCore.Cors.Infrastructure
open Microsoft.AspNetCore.Hosting
open Microsoft.Extensions.Hosting
open Microsoft.Extensions.Logging
open Microsoft.Extensions.DependencyInjection
open StackUnderflow.Api.HttpHandlers

// ---------------------------------
// Web app
// ---------------------------------

let webApp =
  choose [ subRoute
             "/api"
             (choose [ GET
                       >=> choose [ route "/post-summaries" >=> handleGetPostSummaries ]
                       POST
                       >=> choose [ route "/questions" >=> handleCreateQuestion ] ])
           setStatusCode 404 >=> text "Not Found" ]

// ---------------------------------
// Error handler
// ---------------------------------

let errorHandler (ex: Exception) (logger: ILogger) =
  logger.LogError(ex, "An unhandled exception has occurred while executing the request.")

  clearResponse
  >=> setStatusCode 500
  >=> text ex.Message

// ---------------------------------
// Config and Main
// ---------------------------------

let configureCors (builder: CorsPolicyBuilder) =
  builder
    .WithOrigins("http://localhost:5000", "https://localhost:5001", "http://localhost:3000")
    .AllowAnyMethod()
    .AllowAnyHeader()
  |> ignore

let configureApp (app: IApplicationBuilder) =
  let env = app.ApplicationServices.GetService<IWebHostEnvironment>()

  (match env.IsDevelopment() with
   | true -> app.UseDeveloperExceptionPage()
   | false ->
     app
       .UseGiraffeErrorHandler(errorHandler)
       .UseHttpsRedirection())
    .UseCors(configureCors)
    .UseGiraffe(webApp)

let configureServices (services: IServiceCollection) =
  services.AddCors() |> ignore
  services.AddGiraffe() |> ignore

let configureLogging (builder: ILoggingBuilder) =
  builder.AddConsole().AddDebug() |> ignore

[<EntryPoint>]
let main args =
  Host
    .CreateDefaultBuilder(args)
    .ConfigureWebHostDefaults(fun webHostBuilder ->
      webHostBuilder
        .Configure(Action<IApplicationBuilder> configureApp)
        .ConfigureServices(configureServices)
        .ConfigureLogging(configureLogging)
      |> ignore)
    .Build()
    .Run()

  0
