<p align="center">
  <img width="186" height="90" src="https://user-images.githubusercontent.com/218949/44782765-377e7c80-ab80-11e8-9dd8-fce0e37c235b.png" alt="Beyonk" />
</p>

## Svelte Notifications

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![CircleCI](https://circleci.com/gh/beyonk-adventures/svelte-notifications.svg?style=shield)](https://circleci.com/gh/beyonk-adventures/svelte-notifications) [![Svelte v2](https://img.shields.io/badge/svelte-v2-orange.svg)](https://v2.svelte.dev) [![Svelte v3](https://img.shields.io/badge/svelte-v3-blueviolet.svg)](https://svelte.dev)

Svelte Notifications component

* v3 compatible
* uses stores for completely hassle free operation

## Usage

```bash
npm i -D @beyonk/svelte-notifications
```

```jsx
<NotificationDisplay />

<button on:click={someFunction}>Show message</button>

<script>
import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'

function someFunction () {
  notifier.success('Notifications work!')
}
</script>
```

### Notification types

You can call multiple types of notification:

```js
notifier.show('danger', message, displayTimeMs)
notifier.danger(message, displayTimeMs),
notifier.warning(message, displayTimeMs),
notifier.info(message, displayTimeMs),
notifier.success(message, displayTimeMs)
```

### Notification themes

You can customise the themes:

```jsx
<NotificationDisplay {themes} />

<button on:click={someFunction}>Show message</button>

<script>
import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'

let themes = { // These are the defaults
  danger: '#bb2124',
  success: '#22bb33',
  warning: '#f0ad4e',
  info: '#5bc0de',
  default: '#aaaaaa' // relates to simply '.show()'
}

function someFunction () {
  notifier.success('Notifications work!')
}
</script>
```

##### Custom types

```jsx
<NotificationDisplay {themes} />

<button on:click={someFunction}>Show message</button>

<script>
import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'

let themes = {
  myColour: '#ff00bb'
}

function someFunction () {
  notifier.send('myColour', 'Notifications work!')
}
</script>
```

#### Timeouts

You can set a default timeout:

```jsx
<NotificationDisplay {timeout} />

<button on:click={someFunction}>Show message</button>

<script>
import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'

let timeout = 3000 // The default

function someFunction () {
  notifier.success('Notifications work!')
}
</script>
```

##### Custom timeout:

You can set a timeout per message

```jsx
<NotificationDisplay />

<button on:click={someFunction}>Show message</button>

<script>
import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'

function someFunction () {
  notifier.success('Notifications work!', 5000) // built in theme
  notifier.send('custom-theme', 'Notifications work!', 5000) // custom theme
}
</script>
```

## Credits

* Original code by [Antony Jones](https://github.com/antony)
* Animation and performance improvements by jg.
