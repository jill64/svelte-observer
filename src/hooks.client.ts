import { init } from '@jill64/sentry-sveltekit-cloudflare/client'

const onError = init(
  'https://7373b9c41f6f9b34df1d075ecd42ac5c@o4505814639312896.ingest.us.sentry.io/4508542758879232'
)

export const handleError = onError()
