import { SdkService } from './sdkService'

export const openExternalLink = (url: string) => {
  const sdk = SdkService.getInstance()
  if (sdk.isInBastion) {
    sdk.openExternalLink(url)
  } else {
    window.open(url, '_blank')
  }
}
