<script>
	import Tone from 'tone';
	import StepSequencer from './components/StepSequencer.svelte';
	import Conductor from './components/Conductor.svelte';
	import * as Chords from 'chords';

	let vol = new Tone.Volume(0).toMaster();
	let polySynth = new Tone.PolySynth(5, Tone.FMSynth).connect(vol);
	let sequencerArray;
	function step(e){
		const noteIdx = sequencerArray[e.detail.idx].indexOf(1);
		const note = Chords.noteNames[noteIdx]+'2';
		polySynth.triggerAttackRelease(note,'32n',e.detail.time);
	}
</script>

<main>
	<h1>Fuck your cat!</h1>
	<Conductor on:16th={step}/>
	<StepSequencer bind:sequencerArray />
</main>

<style>
	h1{
		text-align: center
	}
</style>