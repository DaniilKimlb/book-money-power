<script lang="ts">
  import { openDonationWindowPkoin } from 'lib/donationService'
  import { isInBastion } from 'lib/sdkService'
    
  export let reciever: string

  function _openDonationWindowPkoin(){
    openDonationWindowPkoin(reciever)
  }
</script>

{#if $isInBastion}
  <button
    on:click={_openDonationWindowPkoin}
    class="btn btn-outline btn-full flex items-center justify-center gap-2"
  >
    <img
      aria-hidden="true"
      class="h-5 w-5"
      src="https://s2.coinmarketcap.com/static/img/coins/64x64/5925.png"
      alt=""
    />
    Поддержать автора PKOIN
  </button>
  {/if}
