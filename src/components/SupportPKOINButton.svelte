<script lang="ts">
  import { openDonationWindowPkoin } from 'lib/donationService'

  export let reciever: string
  export let payment

  function _openDonationWindowPkoin() {
    openDonationWindowPkoin({ reciever, payment })
  }
</script>

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
  Поддержать через PKOIN
</button>
