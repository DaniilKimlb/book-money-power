import { Comment, UserProfile } from 'types/sdkTypes'
import { Api } from './api'

export const api = new Api('https://1.pocketnet.app:8899/rpc/')

export const apiBastyon = {
  getComments: async (parameters: string[]): Promise<Comment[]> => {
    const comments = await api.fetcher('getcomments', {
      method: 'POST',
      data: {
        parameters,
        method: 'getcomments',
        cachehash: 'e544f7a851281af45d602615b22adb30',
        options: {
          node: '45.26.189.183:38081',
        },
        state: 1,
      },
    })
    //@ts-ignore
    return comments.data as Comment[]
  },

  getUserProfiles: async (parameters: string[][]): Promise<UserProfile[]> => {
    const userProfiles = await api.fetcher('getuserprofile', {
      method: 'POST',
      data: {
        parameters,
        method: 'getuserprofile',
        cachehash: 'e544f7a851281af45d602615b22adb30',
        options: {
          node: '45.26.189.183:38081',
        },
        state: 1,
      },
    })
    //@ts-ignore
    return userProfiles.data as UserProfile[]
  },
}
