using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

var postSummaries = Enumerable
  .Range(1, 1000)
  .Select(
    i =>
      new PostSummary(
        i - 1,
        i - 1,
        i - 1,
        i,
        "how do i get error documentation hint in xcode",
        "I'm watching a tutorial and a question mark shows up by the purple error message with a link straight to the docs that answers why. I'm losing what's left of my sanity trying to figure out how to turn ..."
      )
  );

app.MapGet(
    "/api/post-summaries",
    ([FromQuery(Name = "page")] int? page, [FromQuery(Name = "page_size")] int? pageSize) =>
    {
      page ??= 1;
      pageSize ??= 15;
      return postSummaries.Skip(pageSize.Value * (page.Value - 1)).Take(pageSize.Value);
    }
  )
  .WithName("GetPostSummaries");

app.UseCors(options =>
{
  options
    .WithOrigins("http://localhost:5199", "https://localhost:7231", "http://localhost:3000")
    .AllowAnyMethod()
    .AllowAnyHeader();
});

app.Run();

record PostSummary(
  int VoteCount,
  int AnswerCount,
  int ViewCount,
  int PostId,
  string Title,
  string Excerpt
);
