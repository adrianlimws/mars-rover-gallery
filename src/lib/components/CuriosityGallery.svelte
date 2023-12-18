<script>
	import { LightboxGallery, GalleryImage, GalleryThumbnail } from 'svelte-lightbox';
</script>

<Lightbox description="Simple lightbox">
	<img src={photo.img_src} alt="Simple lightbox" />
</Lightbox>

<!-- <figure class="relative max-w-sm cursor-pointer">
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
</figure> -->
