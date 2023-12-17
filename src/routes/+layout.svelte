<script>
	import '../app.css';
	import SideNavBar from '../components/SideNavBar.svelte';
</script>

<div class="flex flex-row">
	<SideNavBar />

	<slot />
</div>
