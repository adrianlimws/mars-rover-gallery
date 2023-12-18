<script>
	import { onMount } from 'svelte';

	export let sol = 1;
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

	// Fetch data when the component is mounted or when sol changes
	onMount(() => {
		console.log('Component mounted with sol:', sol);
		fetchData();
	});
</script>

<div class="bg-gray-800 p-4">
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-white">Sol: {sol}</h1>
		</div>
		<div class="flex space-x-4">
			<button
				class="btn"
				on:click={() => {
					sol--;
					fetchData();
				}}
			>
				Previous Sol
			</button>

			<button
				class="btn"
				on:click={() => {
					sol++;
					fetchData();
				}}
			>
				Next Sol
			</button>
		</div>
	</div>
</div>
<div class="grid grid-cols-4 gap-2 p-2">
	{#each photos as photo}
		<figure class="relative max-w-sm cursor-pointer">
			<a href="#">
				<img
					class="rounded-lg w-full"
					src={photo.img_src}
					alt={`Image taken by ${photo.rover.name} on SOL ${photo.sol}`}
				/>
			</a>
			<figcaption class="absolute px-4 text-lg text-white bottom-6">
				<span
					class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
					>{photo.earth_date}</span
				>
				<span
					class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
					>{photo.rover.name}</span
				>
				<span
					class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
					>SOL {photo.sol}</span
				>
			</figcaption>
		</figure>
	{/each}
</div>
