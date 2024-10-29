import type { Comment, UserProfile } from '../types/sdkTypes'

function filterFalsy<T>(values: (T | undefined | null | false | '' | 0)[]): T[] {
  return values.filter(Boolean) as T[]
}

export class SdkService {
  sdk: any
  private static instance: SdkService | null = null
  private constructor() {
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    this.sdk = new window.BastyonSdk()
    this.sdk.emit('loaded')
  }

  public static getInstance(): SdkService {
    if (!SdkService.instance) {
      SdkService.instance = new SdkService()
    }
    return SdkService.instance
  }

  async getComments({
    postId,
    commentId,
  }: {
    postId: string
    commentId?: string
  }): Promise<Comment[]> {
    return this.sdk.rpc('getcomments', filterFalsy([postId, commentId]))
  }
  openAddComment({ postId }: { postId: string }) {
    return this.sdk.open.post(postId)
  }

  openDonationWindowPkoin(reciever: string) {
    return this.sdk.open.donation(reciever)
  }

  async getUserProfiles({ userIds }: { userIds: string[] }): Promise<UserProfile[]> {
    return this.sdk.rpc('getuserprofile', [userIds])
  }
}
