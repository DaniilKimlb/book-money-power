<script>
  import { onMount } from 'svelte'
  import Comment from './Comment.svelte'
  import Spinner from './Spinner.svelte'
  import { loadFormattedComments } from 'lib/commentsService.ts'
  import { CommentIcon } from 'components/icons'
  export let postId = null
  export let commentId = null
  function maybeReverseComments(comments) {
    return commentId ? [...comments].reverse() : comments
  }
  let commentsPromise = loadFormattedComments({
    postId,
    commentId,
  })
</script>

{#await commentsPromise}
  <div class="flex justify-center">
    <Spinner />
  </div>
{:then comments}
  {#each maybeReverseComments(comments) as comment}
    <Comment {comment} />
  {/each}
{:catch someError}
  Не удалось получить комментарии
{/await}
