<!-- <script>
	export let data;
</script>

{#each data.item.photos as photo (photo.id)}
	<div class="card bg-base-100 shadow-xl">
		<figure>
			<img src={photo.img_src} alt="Shoes" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">
				<div class="badge badge-secondary">ID: {photo.id}</div>
			</h2>
			<p>Taken on {photo.earth_date}</p>
			<div class="card-actions justify-end">
				<div class="badge badge-outline">{photo.rover.name}</div>
				<div class="badge badge-outline">SOL {photo.sol}</div>
			</div>
		</div>
	</div>
{/each} -->
<!-- YourComponent.svelte -->

<script>
	import { onMount, afterUpdate, onDestroy } from 'svelte';

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

<!-- Your component HTML -->
<div>
	<h1 class="text-white">Sol: {sol}</h1>
	<!-- Display information from the first photo -->
	{#each photos as photo (photo.id)}
		<h1 class="text-white">ID: {photo.id}</h1>
		<p class="text-white">Camera: {photo.camera.full_name}</p>
		<img src={photo.img_src} alt="Mars Rover Photo" />
		<!-- Add more details as needed -->
	{/each}

	<button
		class="btn"
		on:click={() => {
			sol--;
			fetchData();
		}}>Previous Sol</button
	>
	<button
		class="btn"
		on:click={() => {
			sol++;
			fetchData();
		}}>Next Sol</button
	>
</div>
