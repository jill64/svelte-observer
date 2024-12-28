<!----- BEGIN GHOST DOCS HEADER ----->
<!----- END GHOST DOCS HEADER ----->

## Installation

```bash
npm i @jill64/svelte-observer
```

## Usage

```svelte
<script lang="ts">
  import { observable } from '@jill64/svelte-observer'

  // Define the asynchronous function you want to observe
  const wait1Sec = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }
  const wait1SecThrow = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    throw new Error('Expected Error')
  } // Create Proxy

  let { status, observed } = $derived(observable())

  // Define proxied functions
  let observedWait1Sec = $derived(observed(wait1Sec))
  let observedWait1SecThrow = $derived(observed(wait1SecThrow))
</script>

<!-- `IDLE` => Click => `PENDING` => 1sec => `FULFILLED` => 5sec(default) => `IDLE` -->
<button onclick={observedWait1Sec} aria-label="Success"> Success </button>

<!-- `IDLE` => Click => `PENDING` => 1sec => `REJECTED` => 5sec(default) => `IDLE` -->
<button onclick={observedWait1SecThrow} aria-label="Error"> Error </button>

<!-- PromiseStatus -->
<output>{status}</output>
```
