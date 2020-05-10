<script>
	export let notes;
</script>
<style>
	.note{
		background-color: #DBCBD8;
		display: block;
		margin: 1px 0;
		padding: 0;
		width:40px;
		height:30px;
		border:none;
		border-radius: 0;
	}
	.note.active{
		background: #564787;
	}
</style>
{#each notes as note}
	<button class="note" class:active="{note}"></button>
{/each}