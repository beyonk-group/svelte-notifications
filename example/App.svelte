<script>
  import { NotificationDisplay, notifier } from '../src'

  let closeable = true
</script>

<NotificationDisplay {closeable} />

<button on:click={() => notifier.danger('hello')}>Notify</button>
<button on:click={() => notifier.danger('hello', { close: false })}>Notify without close</button>
<button on:click={() => notifier.danger('hello', { close: true })}>Notify with close</button>

<button on:click={() => closeable = !closeable}>Toggle close button</button>
