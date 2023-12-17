<script>
	export let data;

	let currentSolIndex = 0;

	/**
	 * @param {number} increment
	 */
	function changeSolValue(increment) {
		currentSolIndex += increment;

		if (currentSolIndex >= data.items.length) {
			currentSolIndex = 0;
		} else if (currentSolIndex < 0) {
			currentSolIndex = data.items.length - 1;
		}
	}
</script>

{#each data.item.photos as photo (photo.id)}
	<div class="card w-96 bg-base-100 shadow-xl">
		<figure>
			<img
				src={photo.img_src}
				alt="Shoes"
			/>
		</figure>
		<div class="card-body">
			<h2 class="card-title">
				ID
				<div class="badge badge-secondary">{photo.id}</div>
			</h2>
			<p>If a dog chews shoes whose shoes does he choose?</p>
			<div class="card-actions justify-end">
				<div class="badge badge-outline">Fashion</div>
				<div class="badge badge-outline">Products</div>
			</div>
		</div>
	</div>
	<h1 class="text-lg"></h1>
	<img class="place-self-stretch" src= alt="" />
{/each}
