import { SdkService } from './sdkService'
export function openDonationWindowPkoin(reciever: string) {
  const sdkService = SdkService.getInstance()
  return sdkService.openDonationWindowPkoin(reciever)
}
