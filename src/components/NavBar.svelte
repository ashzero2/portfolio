<script lang="ts">
	import Sun from 'svelte-radix/Sun.svelte';
	import Moon from 'svelte-radix/Moon.svelte';
	import GitLab from 'phosphor-svelte/lib/GitlabLogo';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';

	function redirectGithub() {
		window.open('https://www.github.com/ashzero2', '_blank');
	}
</script>

<main>
	<nav class="flex items-center justify-between border-b">
		<div>
			<h2 class="m-3 font-qwitcher font-bold text-4xl">Rahul Aswin</h2>
		</div>
		<div class="flex flex-row gap-3">
			<div>
				<Button on:click={toggleMode} variant="ghost" size="icon" title="Toggle Theme">
					<Sun
						class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
					/>
					<Moon
						class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
					/>
				</Button>
			</div>
			<div class="mr-3">
				<Button on:click={redirectGithub} variant="ghost" size="icon" title="GitHub">
					<GitLab size={22} />
				</Button>
			</div>
		</div>
	</nav>
</main>