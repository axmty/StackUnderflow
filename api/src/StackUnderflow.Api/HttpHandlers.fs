namespace StackUnderflow.Api

module HttpHandlers =
  open Microsoft.AspNetCore.Http
  open Giraffe
  open StackUnderflow.Api.Models

  let handleGetPostSummaries =
    fun (next: HttpFunc) (ctx: HttpContext) ->
      task {
        let response: PostSummaryDto list =
          [ for i in 1..5 ->
              { VoteCount = 3
                AnswerCount = i - 1
                ViewCount = 2
                PostId = i
                Title = "how do i get error documentation hint in xcode"
                Excerpt =
                  "I'm watching a tutorial and a question mark shows up by the purple error "
                  + "message with a link straight to the docs that answers why. I'm losing what's left "
                  + "of my sanity trying to figure out how to turn ..." } ]

        return! json response next ctx
      }
