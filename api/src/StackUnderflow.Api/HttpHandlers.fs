namespace StackUnderflow.Api

module HttpHandlers =
  open System
  open Giraffe
  open Microsoft.AspNetCore.Http
  open StackUnderflow.Api.Models

  let tags =
    [ [ "html"; "css" ]
      [ "c++" ]
      [ "r"; "data" ]
      [ "java"; "spring"; "orm" ]
      [ "c#"; "dotnet" ]
      [ "f#" ] ]

  let rand = Random()

  let allItems =
    new Collections.Generic.List<PostSummaryDto>(
      [ for i in 1..3 ->
          { VoteCount = i - 1
            AnswerCount = i - 1
            ViewCount = i - 1
            PostId = i
            Title = "how do i get error documentation hint in xcode"
            Excerpt =
              "I'm watching a tutorial and a question mark shows up by the purple error "
              + "message with a link straight to the docs that answers why. I'm losing what's left "
              + "of my sanity trying to figure out how to turn ..."
            Tags = tags[rand.Next(tags.Length)] } ]
    )

  let handleGetPostSummaries =
    fun (next: HttpFunc) (ctx: HttpContext) ->
      let page =
        match ctx.TryGetQueryStringValue "page" with
        | None -> 1
        | Some page ->
          match Int32.TryParse page with
          | true, page when page > 0 -> page
          | _ -> 1

      let pageSize =
        match ctx.TryGetQueryStringValue "page_size" with
        | None -> 15
        | Some pageSize ->
          match Int32.TryParse pageSize with
          | true, pageSize when pageSize > 0 -> pageSize
          | _ -> 15

      let items =
        allItems
        |> Seq.skip (pageSize * (page - 1))
        |> Seq.truncate pageSize

      let response =
        { Data = items
          Total = Seq.length allItems }

      task { return! json response next ctx }

  let handleCreateQuestion =
    fun (next: HttpFunc) (ctx: HttpContext) ->
      task {
        let! command = ctx.BindJsonAsync<CreateQuestionCommand>()

        let newQuestion =
          { VoteCount = 0
            AnswerCount = 0
            ViewCount = 0
            PostId = allItems.Count + 1
            Title = command.Title
            Excerpt = command.Excerpt
            Tags = command.Tags }

        allItems.Add(newQuestion)
        return! Successful.CREATED newQuestion next ctx
      }
