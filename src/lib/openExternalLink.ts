import { BastyonService } from './bastyonService'

export const openExternalLink = (url: string) => {
  const sdk = BastyonService.getInstance()
  if (sdk.isInBastion) {
    sdk.openExternalLink(url)
  } else {
    window.open(url, '_blank')
  }
}
