<script>
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
				`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=Y539x3gNFZbriWjlPKavmFxgZojJYtHxFZcoQ1Ku`
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

	// Subscribe to the sol store and fetch data when it changes
	$: {
		sol = $solStore;
		fetchData();
	}

	// Fetch data when the component is mounted
	onMount(() => {
		console.log('Component mounted with sol:', sol);
	});

	// Function to handle input changes and update sol
	function handleInputChange(event) {
		const inputValue = parseInt(event.target.value, 10);
		if (!isNaN(inputValue)) {
			solStore.set(inputValue);
		}
	}
</script>

<div class="navbar bg-slate-700 text-white">
	<div class="navbar-start">
		SOL: {sol}
	</div>
	<div class="navbar-center">
		<div class="inline-flex rounded-md shadow-sm" role="group">
			<button
				type="button"
				class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border bg-slate-100 border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
				on:click={() => {
					sol--;
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
				Previous
			</button>
			<button
				type="button"
				class="px-4 py-2 text-sm font-medium text-gray-900 bg-white bg-slate-100 border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white cursor-not-allowed"
			>
				SOL
				<span
					class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
				>
					{sol}
				</span>
			</button>
			<button
				type="button"
				class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent bg-slate-100 border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
				on:click={() => {
					sol++;
					fetchData();
				}}
			>
				Next
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
		<form>
			<label for=""> Search by SOL </label>
			<input
				type="number"
				id="quantity-input"
				data-input-counter
				aria-describedby="helper-text-explanation"
				class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				bind:value={sol}
				on:input={handleInputChange}
				required
			/>
		</form>
	</div>
</div>

<div class="grid grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4">
	{#each photos as photo}
		<figure class="relative max-w-sm cursor-pointer">
			<a href={photo.img_src}>
				<img
					class="rounded-lg w-full"
					src={photo.img_src}
					alt={`Image taken by ${photo.rover.name} on SOL ${photo.sol}`}
				/>
			</a>
			<figcaption class="absolute px-2 text-lg text-white bottom-4">
				<span
					class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-blue-600"
					>{photo.earth_date}</span
				>
				<span
					class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-red-700"
					>{photo.rover.name}</span
				>
				<span
					class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800"
					>SOL {photo.sol}</span
				>
				<span
					class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-purple-800"
					>CAM: {photo.camera.name}</span
				>
			</figcaption>
		</figure>
	{/each}
</div>
