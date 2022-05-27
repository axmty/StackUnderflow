namespace StackUnderflow.Api

module HttpHandlers =
  open System
  open Giraffe
  open Microsoft.AspNetCore.Http
  open StackUnderflow.Api.Models

  let items =
    [ for i in 1..1000 ->
        { VoteCount = i - 1
          AnswerCount = i - 1
          ViewCount = i - 1
          PostId = i
          Title = "how do i get error documentation hint in xcode"
          Excerpt =
            "I'm watching a tutorial and a question mark shows up by the purple error "
            + "message with a link straight to the docs that answers why. I'm losing what's left "
            + "of my sanity trying to figure out how to turn ..." } ]

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

      task {
        let response =
          items
          |> Seq.skip (pageSize * (page - 1))
          |> Seq.truncate pageSize

        return! json response next ctx
      }
