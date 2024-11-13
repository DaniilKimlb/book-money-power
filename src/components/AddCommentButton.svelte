<script>
  import { openAddComment } from 'lib/commentsService'
  import { CommentIcon } from 'components/icons'
  import { isInBastion } from 'lib/sdkService'

  export let postId

  function _openAddComment() {
    if ($isInBastion) {
      openAddComment(postId)
    } else {
      window.open(`https://bastyon.com/post?s=${postId}`, '_blank')
    }
  }
</script>

<button on:click={_openAddComment} class="btn btn-comment flex items-center gap-2">
  <CommentIcon />Оставить комментарий
</button>
