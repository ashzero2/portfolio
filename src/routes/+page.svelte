<script lang="ts">
	// @ts-ignore
	import Typewriter from 'svelte-typewriter';
	import NavBar from '../components/NavBar.svelte';

	const text = ['Web Developer', 'Linux Enthusiast'];
</script>

<main>
	<NavBar />
	<div class="flex flex-row items-center justify-center h-5/6 gap-4">
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
</main>

<style>
	main {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
  }
</style>