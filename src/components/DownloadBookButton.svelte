<script lang="ts">
  import { openExternalLink } from 'lib/openExternalLink'
  import { DownloadIcon } from 'components/icons'

  export let linkToDownload: string

  function _downloadBook() {
    openExternalLink(linkToDownload)
  }
</script>

<button
  on:click={_downloadBook}
  class="btn btn-primary btn-full flex items-center justify-center gap-2 text-center"
>
  <DownloadIcon />
  Скачать книгу
</button>
