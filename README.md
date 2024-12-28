<!----- BEGIN GHOST DOCS HEADER ----->

# @jill64/svelte-observer

<!----- BEGIN GHOST DOCS BADGES ----->

<a href="https://github.com/jill64/svelte-observer/actions/workflows/ci.yml"><img src="https://github.com/jill64/svelte-observer/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a>

<!----- END GHOST DOCS BADGES ----->

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

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

[MIT](LICENSE)

<!----- END GHOST DOCS FOOTER ----->
