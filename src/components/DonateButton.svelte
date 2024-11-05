<script lang="ts">
  import { openDonationWindowPkoin } from 'lib/donationService.ts'
  import { openExternalLink } from 'lib/openExternalLink.ts'
  import { isInBastion } from 'lib/sdkService.ts'
  import { HeartIcon } from 'components/icons'

  function _openDonationWindow() {
    openExternalLink('https://pkoin.net/daniel')
  }
</script>

<button
  on:click={_openDonationWindow}
  rel="noopener noreferrer"
  class="btn btn-bright flex items-center justify-center gap-2 text-center text-center"
>
  <HeartIcon />
  Поддержать автора
</button>
