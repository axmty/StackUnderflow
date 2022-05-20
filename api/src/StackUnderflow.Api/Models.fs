namespace StackUnderflow.Api.Models

type Message = { Text: string }

type PostSummaryDto =
  { VoteCount: int
    AnswerCount: int
    ViewCount: int
    PostId: int
    Title: string
    Excerpt: string }
