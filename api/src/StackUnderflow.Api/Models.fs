namespace StackUnderflow.Api.Models

type PaginatedListResultDto<'a> = { Data: 'a seq; Total: int }

type PostSummaryDto =
  { VoteCount: int
    AnswerCount: int
    ViewCount: int
    PostId: int
    Title: string
    Excerpt: string
    Tags: string list }
