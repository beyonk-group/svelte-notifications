<ul class="toasts">
	{#each toasts as toast (toast.id)}
		<li class="toast" style="background: {toast.background};" out:animateOut>
			<div class="content">
				{toast.msg}
      </div>
      {#if closeable}
        <svg on:click={() => removeToast(toast.id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" preserveAspectRatio="xMidYMid meet" fill="white" aria-hidden="true" focusable="false">
          <path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path>
        </svg>
      {/if}
			<div 
        class="progress" 
        style="animation-duration: {toast.timeout}ms;"
        on:animationend={() => removeToast(toast.id) }>
			</div>
		</li>	
	{/each}
</ul>

<style>
	:global(.toasts) {
		list-style: none;
		position: fixed;
		top: 0;
		right: 0;
		padding: 0;
		margin: 0;
		z-index: 9999;
	}
	
	:global(.toasts) > .toast {
    display: flex;
    align-items: center;
		position: relative;
		margin: 1vh 1vw;
		min-width: 40vw;
		position: relative;
		animation: animate-in 600ms forwards;
		color: #fff;
	}
	
	:global(.toasts) > .toast > .content {
		padding: 1vw;
		display: block;
		font-weight: 500;
	}

  :global(.toasts) > .toast > :global(svg) {
    margin: 0 1vw 0 auto;
    cursor: pointer;
  }
	
	:global(.toasts) > .toast > .progress {
		position: absolute;
		bottom: 0;
		background-color: rgb(0, 0, 0, 0.3);
		height: 6px;
    width: 100%;
	  animation-name: shrink;
	  animation-timing-function: linear;
	  animation-fill-mode: forwards;
	}
	
	:global(.toasts) > .toast:before,
	:global(.toasts) > .toast:after {
			content:"";
			position:absolute;
			z-index:-1;
			top:50%;
			bottom:0;
			left:1vw;
			right:1vw;
			border-radius:100px / 10px;
	}
	
	:global(.toasts) > .toast:after {
			right: 1vw;
			left: auto;
			transform:skew(8deg) rotate(3deg);
	}

	@keyframes animate-in {
		0%,
		60%,
		75%,
		90%,
		to {
			-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			animation-timing-function: cubic-bezier(.215, .61, .355, 1);
		}

		0% {
			opacity: 0;
			transform: translate3d(3000px, 0, 0);
		}

		60% {
			opacity: 1;
			transform: translate3d(-25px, 0, 0);
		}

		75% {
			transform: translate3d(10px, 0, 0);
		}

		90% {
			transform: translate3d(-5px, 0, 0);
		}

		to {
			transform: none;
		}
	}

	@keyframes shrink { 
		0% { 
			width: 40vw; 
		}
		100% { 
			width: 0; 
		}
	}

	@media (min-width: 480px) {
		@keyframes animate-in {
			0%,
			60%,
			75%,
			90%,
			to {
				-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
				animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			}

			0% {
				opacity: 0;
				transform: translate3d(3000px, 0, 0);
			}

			60% {
				opacity: 1;
				transform: translate3d(-25px, 0, 0);
			}

			75% {
				transform: translate3d(10px, 0, 0);
			}

			90% {
				transform: translate3d(-5px, 0, 0);
			}

			to {
				transform: none;
			}
		}
	}
</style>

<script>
  import { notification } from './store.js'
  import { onDestroy } from 'svelte'

	export let themes = {
		danger: '#bb2124',
		success: '#22bb33',
		warning: '#f0ad4e',
		info: '#5bc0de',
		default: '#aaaaaa'
  }

  export let timeout = 3000
  export let closeable = true

	let count = 0
	let toasts = []
  let unsubscribe

	const animateOut = (node, { delay = 0, duration = 1000 }) => ({
		delay,
		duration,
		css: t => `opacity: ${(t-.7) * 1}; transform-origin: top right;`
	})

	const createToast = (msg, theme, to) => {
		const background = themes[theme] || themes['default']
		toasts = [{
			id: count,
			msg, 
			background, 
			timeout: to || timeout,
			width: '100%'
		}, ...toasts]
		count += 1
  }
  
  unsubscribe = notification.subscribe(value => {
    if (!value) return
    createToast(value.message, value.type, value.timeout)
    notification.set()
  })
  
  onDestroy(unsubscribe)
	
	const removeToast = id => (toasts = toasts.filter(t => t.id != id))
</script>
