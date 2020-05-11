<script>
	export let notes;
	export let current;
</script>
<style>
	.note{
		background-color: #9A6D38;
		display: block;
		margin: 0 0 1px 0;
		padding: 0;
		width:40px;
		height:30px;
		border:none;
		border-radius: 0;
	}
	.note.active{
		background: #19231A;
	}
	.note.active.current{
		background: #CC3F0C;
	}
</style>
{#each notes as note}
	<button class="note" class:active={note} class:current={current} ></button>
{/each}