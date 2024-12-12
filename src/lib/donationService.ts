import { openExternalLink } from './openExternalLink'
import { BastyonService } from './bastyonService'
export function openDonationWindowPkoin(reciever: string) {
  const bastyonService = BastyonService.getInstance()

  if (bastyonService.isInBastion) {
    return bastyonService.openDonationWindowPkoin(reciever)
  } else {
    openExternalLink(bastyonService.createPKOINDonationURL())
  }
}
