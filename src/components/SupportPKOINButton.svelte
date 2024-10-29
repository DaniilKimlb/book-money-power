<script lang="ts">
  import { openDonationWindowPkoin } from 'lib/donationService.ts'

  export let reciever: string
</script>

<button
  on:click={openDonationWindowPkoin(reciever)}
  class="btn btn-outline btn-full flex items-center justify-center gap-2"
>
  <img
    aria-hidden="true"
    class="h-5 w-5"
    src="https://s2.coinmarketcap.com/static/img/coins/64x64/5925.png"
    alt=""
  />
  Поддержать PKOIN
</button>
