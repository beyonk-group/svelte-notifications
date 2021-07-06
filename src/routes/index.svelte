<script>
	import { NotificationDisplay, notifier } from '$lib'

const types = [ 'success', 'danger', 'warning', 'info', 'default' ]
	
let timeout = 3000
let type = 'success'
let text = 'This is the message which will display'
let persist = false

function demo () {
  notifier[type === 'default' ? 'send' : type](text, { timeout, persist })
}
</script>

<NotificationDisplay />

<form on:submit|preventDefault={demo}>
  <label class="form" for="text">
    Notification text
  </label>
  <input id="text" type="text" class="form" bind:value={text} />

  <label class="form" for="type">
    Notification type
  </label>
  <select id="type" class="form" bind:value={type}>
    {#each types as type}
      <option value={type}>{type}</option>
    {/each}
  </select>
  
  <label class="form" for="timeou">
    Timeout {timeout}
  </label>
  <input id="timeout" type="range" class="form" bind:value={timeout} min={1} max={10000} />

  <div>
    <input type="checkbox" class="form" bind:checked={persist} id="persist" />
    <label for="persist" class="form">
      Persist
    </label>
  </div>

  <button class="form">
    notify
  </button>
</form>

<style>
  form {
    margin: auto;
  }

  @media only screen and (min-width: 600px) {
    form {
      width: 60vw;
      margin-top: 10vh;
    }
  }
</style>