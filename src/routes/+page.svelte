<script lang="ts">
	// @ts-nocheck
	import { onMount } from 'svelte';
	import Typewriter from 'svelte-typewriter';
	import NavBar from '../components/NavBar.svelte';
	import Progress from '$lib/components/ui/progress/progress.svelte';

	var showPage = false, value = 30;
	const text = ['Web Developer', 'Linux Enthusiast'];

	onMount(() => {
    const timer = setInterval(() => {
      value += Math.floor(Math.random() * (15 - 10 + 1)) + 15;
      if (value >= 100) {
        value = 100;
        showPage = true;
        clearInterval(timer);
      }
    }, 500);
  });
</script>

<main>
	{#if showPage}
		<NavBar />
		<div class="flex h-5/6 flex-row items-center justify-center gap-4">
			<div>
				<h1 class="text-6xl">Hi, I'am</h1>
			</div>
			<div class="text-6xl">
				<Typewriter mode="loop" cursor="true" interval="80" wordInterval="1500">
					<h1>Rahul Aswin</h1>
					<h1>Web Developer</h1>
					<h1>Linux Enthusiast</h1>
					<h1>Gamer</h1>
				</Typewriter>
			</div>
		</div>
	{:else}
		<div class="h-full flex justify-center items-center flex-col gap-10">
			<h1 class="font-qwitcher font-bold text-9xl">Rahul Aswin</h1>
			<Progress {value} max={100} class="w-[40%]"/>
		</div>
	{/if}
</main>

<style>
	main {
		height: 100vh;
		width: 100vw;
		margin: 0;
		padding: 0;
	}
</style>
