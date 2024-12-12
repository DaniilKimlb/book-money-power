import { Comment, UserProfile } from '../types/sdkTypes'
import { BastyonService } from './bastyonService'
import { formatDate } from './date'

export async function loadFormattedComments(
  params: Parameters<typeof BastyonService.prototype.getComments>[0],
) {
  const bastyonService = BastyonService.getInstance()

  const comments: Comment[] = await bastyonService.getComments(params)
  
  const userIds = [...new Set(comments.map((comment) => comment.address))]

  const userProfiles: UserProfile[] = await bastyonService.getUserProfiles({ userIds })

  const commentsOnlyWithMsg = comments.filter((comment) => typeof comment.msg === 'string')
  
  return commentsOnlyWithMsg.map((comment) => {
    const user = userProfiles.find((profile) => profile.address === comment.address)

    const msg = JSON.parse(comment.msg) 

    return {
      userName: user?.name || 'Unknown',
      avatar: user?.i || `https://ui-avatars.com/api/?name=${user?.name}&background=random`,
      id: comment.id,
      postId: comment.postid,
      children: comment.children,
      message: msg?.message || '',
      date: formatDate(Number(comment.time)),
      isEdited: comment.edit,
      likes: Number(comment.scoreUp),
      dislikes: Number(comment.scoreDown),
    }
  })
}

export async function openAddComment(postId: string) {
  const bastyonService = BastyonService.getInstance()

  bastyonService.openAddComment({ postId })
}
