<script>
  import { NotificationDisplay, notifier } from '../src'
</script>

<NotificationDisplay />

<button on:click={() => notifier.danger('hello', 7000)}>
  notify
</button>
