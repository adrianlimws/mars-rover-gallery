<script>
	export let data;

	let curiosityItemId;

	$: {
		console.log('Data:', data.item.photos[0]);

		if (data && data.photos && data.photos.length > 0) {
			curiosityItemId = data.photos[0].id;
		} else {
			console.warn('Data not available or photos array is empty');
		}
	}
</script>

<p>Rover ID: {data.item.photos[0].id}</p>
