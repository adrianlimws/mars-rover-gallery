<script>
	import HeroNotFound from '$lib/components/HeroNotFound.svelte';
	import CuriosityGallery from '$lib/components/CuriosityGallery.svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	// Create a writable store for sol
	const solStore = writable(1);

	export let sol;
	let photos = [];

	// Function to fetch data with the updated sol value
	async function fetchData() {
		try {
			console.log('Fetching data for sol:', sol);
			const response = await fetch(
				`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=${sol}&api_key=Y539x3gNFZbriWjlPKavmFxgZojJYtHxFZcoQ1Ku`
			);
			const responseData = await response.json();
			// Extract the photos array from the response
			photos = responseData.photos || [];
			// Handle data as needed
			console.log('Fetched data:', photos);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	// Fetch data when the component is mounted
	onMount(() => {
		console.log('Component mounted with sol:', sol);
		fetchData();
	});

	// Function to handle input changes and update sol
	function handleInputChange(event) {
		const inputValue = parseInt(event.target.value, 10);
		if (!isNaN(inputValue)) {
			solStore.set(Math.max(1, inputValue));
		}
	}
</script>

<div class="navbar bg-slate-700 text-white">
	<div class="navbar-start">
		You are browsing images from SOL: {sol}.
	</div>
	<div class="navbar-center">
		<div class="relative flex items-center max-w-[11rem]" role="group">
			<button
				type="button"
				id="decrement-button"
				data-input-counter-decrement="bedrooms-input"
				class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
				on:click={() => {
					sol = Math.max(1, sol - 1); // Ensure sol is not less than 1
					solStore.set(sol);
					fetchData();
				}}
			>
				<svg
					class="w-4 h-4 text-gray-800 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 10 16"
				>
					<path
						d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z"
					/>
				</svg>
			</button>
			<input
				type="text"
				id="sol-input"
				data-input-counter
				data-input-counter-min="1"
				data-input-counter-max="5"
				aria-describedby="helper-text-explanation"
				class="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				bind:value={sol}
				on:input={handleInputChange}
				required
			/>
			<div
				class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse"
			>
				<svg
					class="w-2.5 h-2.5 text-gray-800 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 21 20"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
					/>
				</svg>
				<span>Sol</span>
			</div>
			<button
				type="button"
				id="increment-button"
				data-input-counter-increment="bedrooms-input"
				class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
				on:click={() => {
					sol++;
					fetchData();
				}}
			>
				<svg
					class="w-4 h-4 text-gray-800 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 10 16"
				>
					<path
						d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"
					/>
				</svg>
			</button>
		</div>
	</div>
	<div class="navbar-end">
		<p>Rover: Opportunity</p>
	</div>
</div>

{#if photos.length === 0}
	<HeroNotFound />
{:else}
	<div class="grid place-content-center xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2">
		{#each photos as photo}
			<Lightbox description="Simple lightbox">
				<img src={photo.img_src} alt="Simple lightbox" />
			</Lightbox>
		{/each}
	</div>
{/if}
