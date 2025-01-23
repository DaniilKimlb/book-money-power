<script lang="ts">
  import { openExternalLink } from 'lib/openExternalLink'

  export let paypalDonateLink: string
    
  function _openDonationPayPalWindow() {
    openExternalLink(paypalDonateLink)
  }
</script>

<button
  on:click={_openDonationPayPalWindow}
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
