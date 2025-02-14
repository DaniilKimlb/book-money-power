<script>
  import { openAddComment } from 'lib/commentsService'
  import { CommentIcon } from 'components/icons'
  import { isInBastyon } from 'lib/bastyonService'

  export let postId

  function _openAddComment() {
    if ($isInBastyon) {
      openAddComment(postId)
    } else {
      window.open(`https://bastyon.com/post?s=${postId}`, '_blank')
    }
  }
</script>

<button on:click={_openAddComment} class="btn btn-accent flex items-center gap-2">
  <CommentIcon />Оставить комментарий
</button>
