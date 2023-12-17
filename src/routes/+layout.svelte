<script>
	import '../app.css';
	import SideNavBar from '../lib/components/SideNavBar.svelte';
</script>

<div class="flex flex-row">
	<SideNavBar />

	<div class="grid grid-cols-4 gap-4">
		<slot />
	</div>
</div>
