<script>
	import marsVideo from '$lib/assets/bg-vid-mars.mp4';
</script>

<div class="hero min-h-screen">
	<div class="absolute w-full h-full">
		<video class="w-full h-full object-cover" src={marsVideo} type="video/mp4" autoplay muted loop
		></video>
	</div>
	<div class="hero-overlay bg-opacity-100"></div>
	<div class="hero-content text-center text-white">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Mars Rovers Gallery</h1>
			<p class="mb-5 text-lg">
				Showcasing images sent by NASA's mars rovers "Curiosity", "Opportunity", and "Spirit" since
				SOL 1.
			</p>
			<a class="btn btn-warning" href="/curiosity">Curiosity</a>
			<a class="btn btn-warning" href="/opportunity">Opportunity</a>
			<a class="btn btn-warning" href="/spirit">Spirit</a>
		</div>
	</div>
</div>
