export const code = /* html */ `
<script lang="ts">
  import { observable } from '@jill64/svelte-observer'

  const wait1Sec = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }
  
  const wait1SecThrow = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    throw new Error('Expected Error')
  }

  let { status, observed } = $derived(observable())
  
  let observedWait1Sec = $derived(observed(wait1Sec))
  let observedWait1SecThrow = $derived(observed(wait1SecThrow))
</script>

<button onclick={observedWait1Sec}> Success </button>
<button onclick={observedWait1SecThrow}> Error </button>
<output>{status}</output>
`.trim()
