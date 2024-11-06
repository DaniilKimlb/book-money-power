<script lang="ts">
  import { openDonationWindowPkoin } from 'lib/donationService.ts'
  import { openExternalLink } from 'lib/openExternalLink.ts'

  function _openDonationPayPalWindow() {
    openExternalLink('https://paypal.me/pocketnet')
  }
</script>

<button
  on:click={_openDonationPayPalWindow}
  rel="noopener noreferrer"
  class="btn btn-paypal btn-full flex items-center justify-center gap-2"
>
  <!-- Иконка PayPal -->
  <img
    src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
    alt="PayPal Logo"
    class="h-5 w-5"
  />
  Поддержать через PayPal
</button>
