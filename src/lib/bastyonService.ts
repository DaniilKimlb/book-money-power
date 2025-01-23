import { writable } from 'svelte/store'
import type { Comment, UserProfile } from '../types/sdkTypes'
import { apiBastyon } from './bastyonApi'

function filterFalsy<T>(values: (T | undefined | null | false | '' | 0)[]): T[] {
  return values.filter(Boolean) as T[]
}

export const isInBastyon = writable(false)

export class BastyonService {
  sdk: any
  isInBastion: boolean = false

  private static instance: BastyonService | null = null
  private constructor() {
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    this.sdk = new window.BastyonSdk()
    this.sdk.init().then(() => {
      isInBastyon.set(true)
      this.isInBastion = true
      this.sdk.emit('loaded')
    })
  }

  public static getInstance(): BastyonService {
    if (!BastyonService.instance) {
      BastyonService.instance = new BastyonService()
    }
    return BastyonService.instance
  }

  openExternalLink(url: string) {
    return this.sdk.openExternalLink(url)
  }

  async getComments({
    postId,
    commentId,
  }: {
    postId: string
    commentId?: string
  }): Promise<Comment[]> {
    const params = filterFalsy([postId, commentId])
    if (!this.isInBastion) {
      return apiBastyon.getComments(params)
    } else {
      return this.sdk.rpc('getcomments', params)
    }
  }
  openAddComment({ postId }: { postId: string }) {
    return this.sdk.open.post(postId)
  }

  openDonationWindowPkoin(reciever: string) {
    return this.sdk.open.donate(reciever)
  }

  async getUserProfiles({ userIds }: { userIds: string[] }): Promise<UserProfile[]> {
    const params = [userIds]

    if (!this.isInBastion) {
      return apiBastyon.getUserProfiles(params)
    } else {
      return this.sdk.rpc('getuserprofile', [userIds])
    }
  }

  createPKOINDonationURL(payment) {
    //@ts-ignore
    const payments = window.bastyonLib.payments({ payment })

    return payments.makeURL()
  }
}
