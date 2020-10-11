<script>
  import { NotificationDisplay, notifier } from '../src'

  let closeable = true
</script>

<NotificationDisplay {closeable} />

<button on:click={() => notifier.danger('hello')}>Notify</button>

<button on:click={() => closeable = !closeable}>Toggle close button</button>
