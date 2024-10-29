<script>
  import { openAddComment } from 'lib/commentsService.ts'
  import { CommentIcon } from 'components/icons'

  export let postId
</script>

<button on:click={openAddComment(postId)} class="btn btn-comment flex items-center gap-2">
  <CommentIcon />Оставить комментарий
</button>
