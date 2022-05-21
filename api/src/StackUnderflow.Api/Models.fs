namespace StackUnderflow.Api.Models

type PostSummaryDto =
  { VoteCount: int
    AnswerCount: int
    ViewCount: int
    PostId: int
    Title: string
    Excerpt: string }
