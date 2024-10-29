import { Comment, UserProfile } from '../types/sdkTypes'
import { SdkService } from './sdkService'
import { formatDate } from './date'

export async function loadFormattedComments(
  params: Parameters<typeof SdkService.prototype.getComments>[0],
) {
  const sdkService = SdkService.getInstance()

  const comments: Comment[] = await sdkService.getComments(params)

  const userIds = [...new Set(comments.map((comment) => comment.address))]

  const userProfiles: UserProfile[] = await sdkService.getUserProfiles({ userIds })

  return comments.map((comment) => {
    const user = userProfiles.find((profile) => profile.address === comment.address)

    return {
      userName: user?.name || 'Unknown',
      avatar: user?.i || '',
      id: comment.id,
      postId: comment.postid,
      children: comment.children,
      message: JSON.parse(comment.msg)?.message || '',
      date: formatDate(Number(comment.time)),
      isEdited: comment.edit,
      likes: Number(comment.scoreUp),
      dislikes: Number(comment.scoreDown),
    }
  })
}

export async function openAddComment(postId: string) {
  const sdkService = SdkService.getInstance()

  sdkService.openAddComment({ postId })
}
