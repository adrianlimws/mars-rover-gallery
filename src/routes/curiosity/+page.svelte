<script>
	export async function load({ fetch }) {
		const res = await fetch(
			`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Y539x3gNFZbriWjlPKavmFxgZojJYtHxFZcoQ1Ku`
		);
		const curiosityAlbum = await res.json();

		return { curiosityAlbum };
	}

	export let curiosityAlbum;
</script>

<p>test</p>

<p>ID: {curiosityAlbum.photos[0].id}</p>
<p>Camera: {curiosityAlbum.photos[0].camera.full_name}</p>
<p>Earth Date: {curiosityAlbum.photos[0].earth_date}</p>
<p>Rover Name: {curiosityAlbum.photos[0].rover.name}</p>
