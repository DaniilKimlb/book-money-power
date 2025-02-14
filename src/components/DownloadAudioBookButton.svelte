<script lang="ts">
  import { openExternalLink } from 'lib/openExternalLink'
  import { DownloadAudioIcon } from 'components/icons'

  export let linkToDownload: string

  function _downloadAudioBook() {    
    openExternalLink(linkToDownload)
  }
</script>


<button
  on:click={_downloadAudioBook}
  class="btn btn-accent btn-full flex items-center justify-center gap-2 text-center"
>
  <DownloadAudioIcon />
  Скачать аудиокнигу
</button>
