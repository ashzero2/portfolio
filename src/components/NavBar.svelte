<script lang="ts">
	import Sun from 'svelte-radix/Sun.svelte';
	import Moon from 'svelte-radix/Moon.svelte';
	import GitLab from 'phosphor-svelte/lib/GitlabLogo'
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<nav class="flex border-b items-center justify-between">
	<div>
		<h2 class="text-xl m-3">Rahul Aswin</h2>
	</div>
	<div class="flex flex-row gap-3">
		<div>
			<Button on:click={toggleMode} variant="ghost" size="icon">
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
		<div class="mr-3">
			<Button size="icon" variant="ghost">
				<GitLab size={22}/>
			</Button>
		</div>
	</div>
</nav>