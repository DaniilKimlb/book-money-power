<script>
  import { onMount } from 'svelte'
  import Comment from './Comment.svelte'
  import Spinner from './Spinner.svelte'
  import { loadFormattedComments } from 'lib/commentsService'
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
  {#if comments.length > 0}
    {#each maybeReverseComments(comments) as comment (comment.id)}
      <Comment {comment} />
    {/each}
  {:else}
    <p>Комментарии ещё не добавлены.</p>
  {/if}
{:catch someError}
  Не удалось получить комментарии
{/await}
