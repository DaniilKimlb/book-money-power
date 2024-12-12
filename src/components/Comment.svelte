<script>
  import Comments from './Comments.svelte'
  import { DislikeIcon, LikeIcon, ChevronDownIcon } from 'components/icons'

  export let comment = null

  let showReplies = false

  const toggleReplies = () => {
    showReplies = !showReplies
  }
</script>
<div class="flex flex-wrap items-start p-4 rounded-lg">
  <img
    loading="lazy"
    src={comment.avatar}
    alt="User avatar"
    class="h-10 w-10 rounded-full object-cover sm:mb-0 mb-2 mr-4 flex-shrink-0"
  />
  <div class="flex-1 min-w-0 w-full">
    <div class="flex flex-col sm:flex-row sm:items-center sm:gap-2 mb-1">
      <h3 class="font-semibold truncate">{comment.userName}</h3>
      <span class="text-sm text-gray-500 dark:text-gray-400">{comment.date}</span>
    </div>

    <p class="mb-3 break-words">{comment.message}</p>

    <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
      <div class="flex items-center gap-1">
        <LikeIcon />
        {comment.likes}
      </div>

      <div class="flex items-center gap-1">
        <DislikeIcon />
        {comment.dislikes}
      </div>

      {#if +comment.children !== 0}
        <button
          on:click={toggleReplies}
          class="flex items-center gap-1 px-2 py-1 rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Ответы ({comment.children})
          <ChevronDownIcon class={showReplies ? 'rotate-180' : ''} />
        </button>
      {/if}
    </div>

    {#if showReplies}
      <Comments postId={comment.postId} commentId={comment.id} />
    {/if}
  </div>
</div>
