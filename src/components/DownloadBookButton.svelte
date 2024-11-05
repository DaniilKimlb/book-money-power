<script lang="ts">
  import { openDonationWindowPkoin } from 'lib/donationService.ts'
  import { openExternalLink } from 'lib/openExternalLink.ts'
  import { isInBastion } from 'lib/sdkService.ts'
  import { DownloadIcon } from 'components/icons'

  function _downloadBook() {
    openExternalLink('/books/Деньги Власть Деньги.pdf')
  }
</script>

<button
  on:click={_downloadBook}
  class="btn btn-primary btn-full flex items-center justify-center gap-2 text-center"
>
  <DownloadIcon />
  Скачать книгу
</button>
