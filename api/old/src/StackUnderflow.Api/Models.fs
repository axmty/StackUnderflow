namespace StackUnderflow.Api.Models

type PaginatedListResultDto<'a> = { Data: 'a seq; Total: int }

type PostSummaryDto =
  { VoteCount: int
    AnswerCount: int
    ViewCount: int
    PostId: int
    Title: string
    Excerpt: string
    Tags: string list
    HasAcceptedAnswer: bool
    Username: string
    UserReputationScore: int
    LastActivityRelativeTime: string
    LastActivityType: string }

type CreateQuestionCommand =
  { Title: string
    Excerpt: string
    Tags: string list
    Username: string }
