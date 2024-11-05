<script>
  import { onMount } from 'svelte'
  import Comment from './Comment.svelte'
  import Spinner from './Spinner.svelte'
  import { isInBastion } from 'lib/sdkService.ts'
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

{#if $isInBastion}
  {#await commentsPromise}
    <div class="flex justify-center">
      <Spinner />
    </div>
  {:then comments}
    {#if comments.length > 0}
      {#each maybeReverseComments(comments) as comment}
        <Comment {comment} />
      {/each}
    {:else}
      <p>Комментарии ещё не добавлены.</p>
    {/if}
  {:catch someError}
    Не удалось получить комментарии
  {/await}
{:else}
  <p>Чтобы оставить комментарий, воспользуйтесь кнопкой выше.</p>
{/if}
