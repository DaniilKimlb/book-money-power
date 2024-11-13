<script lang="ts">
  import { openExternalLink } from 'lib/openExternalLink'
  import { HeartIcon } from 'components/icons'

  function _openDonationWindow() {
    openExternalLink('https://www.vlast.xyz/cryptodonation')
  }
</script>

<button
  on:click={_openDonationWindow}
  class="btn btn-bright btn-full flex items-center justify-center gap-2 text-center"
>
  <HeartIcon />
  Поддержать криптовалютой
</button>
