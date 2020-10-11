<script>
  import { NotificationDisplay, notifier } from '../src'

  let n
</script>

<NotificationDisplay bind:this={n} />

<button
  on:click={() => {
    notifier.danger('hello', 7000)
  }}>
  notify
</button>
