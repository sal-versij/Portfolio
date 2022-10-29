<script lang="ts">
	import { Router, Link, Route } from 'svelte-routing';
	import TailwindCSS from './TailwindCSS.svelte';

	import NotFound from './pages/NotFound.svelte';
	import Home from './pages/Home.svelte';
	import AboutMe from './pages/AboutMe.svelte';
	import Contacts from './pages/Contacts.svelte';

	import type { FirebaseApp } from 'firebase/app';

	export let app: FirebaseApp;
</script>

<TailwindCSS />
<Router>
	<section class="wrapper">
		<header>
			<nav class="flex justify-center">
				<Link class="text-white text-3xl font-bold p-3" to="/">
					SALVERSIJ
				</Link>
			</nav>
		</header>
		<hr class=zinc-800/>
		<main class="container lg:max-w-5xl">
			<Route path="/" component={Home} />
			<Route path="/about-me" component={AboutMe} />
			<Route path="/contacts" component={Contacts} />
			<Route component={NotFound} />
		</main>
		<footer class="bg-zinc-800 text-white py-3">
			<div class="container mx.auto">
				<div class="flex justify-center">
					<p class="text-center">
						© {new Date().getFullYear()} Sal-versij
					</p>
				</div>
			</div>
		</footer>
	</section>
</Router>
