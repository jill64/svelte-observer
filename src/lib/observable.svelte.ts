import type { Options } from './types/Options.js'
import type { PromiseStatus } from './types/PromiseStatus.js'

export const observable = (options?: Options) => {
  const { resolveToIdle = 5000, rejectToIdle = 5000 } = options ?? {}

  let status = $state<PromiseStatus>('IDLE')

  let id = 0

  let observed = $derived(
    <T, Fn extends (...args: (string & number & object)[]) => T>(fn: Fn) =>
      (async (...arg) => {
        id += 1

        const localId = id

        const setStatus = (value: PromiseStatus) => {
          if (localId === id) {
            status = value
          }
        }

        status = 'PENDING'

        try {
          const res = await fn(...arg)

          setStatus('FULFILLED')
          setTimeout(() => setStatus('IDLE'), resolveToIdle)

          return res
        } catch (e) {
          setStatus('REJECTED')
          setTimeout(() => setStatus('IDLE'), rejectToIdle)

          throw e
        }
      }) as Fn
  )

  return {
    get status() {
      return status
    },
    observed
  }
}
