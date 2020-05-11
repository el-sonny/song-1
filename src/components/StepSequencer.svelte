<script>
	import SequencerStep from './SequencerStep.svelte';
	import * as Chords from 'chords';
	let notes = 12;
	let steps = 16;
	export let sequencerArray;
	function regenerate(){
		sequencerArray = Array(steps).fill(0).map(x => Array(notes).fill(0));
		for(let i=0;i<steps;i++){
			let note = Chords.major[Math.floor(Math.random() * Chords.major.length)];
			sequencerArray[i][note] = 1;
		}
	}
	regenerate();
</script>
<button on:click={regenerate}>Switch</button>
<div class="grid">
	{#each sequencerArray as step}
		<div class='step'>
			<SequencerStep notes={step} />
		</div>
	{/each}
</div>

<style>
	.step{
		float:left;
		display:block;
		margin-right:1px;
	}
</style>