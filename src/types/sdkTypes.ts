interface Comment {
  id: string
  postid: string
  address: string
  time: string
  timeUpd: string
  block: string
  msg: string
  scoreUp: string
  scoreDown: string
  reputation: string
  children: string
  flags: Record<string, any>
  deleted: boolean
  edit: boolean
}

interface UserProfile {
  hash: string
  address: string
  id: number
  name: string
  i: string
  b: string
  r: string
  postcnt: number
  dltdcnt: number
  reputation: number
  subscribes_count: number
  subscribers_count: number
  blockings_count: number
  blockers_count: number
  likers_count: number
  k: string
  a: string
  l: string
  s: string
  update: number
  regdate: number
  flags: Record<string, any>
  firstFlags: Record<string, any>
  actions: number
  bans: Record<string, any>
  badges: string[]
  subscribes: {
    adddress: string
    private: string
  }[]
  subscribers: string[]
  blocking: string[]
  content: Record<string, number>
}

export type { Comment, UserProfile }
