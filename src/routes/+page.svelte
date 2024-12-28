<script lang="ts">
  import { observable } from '$lib'
  import { HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { code } from './code'

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

<button onclick={observedWait1Sec} aria-label="Success"> Success </button>
<button onclick={observedWait1SecThrow} aria-label="Error"> Error </button>
<output>{status}</output>
<HighlightSvelte {code} />
