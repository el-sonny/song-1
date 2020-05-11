<script>
	import Tone from 'tone';
	import StepSequencer from './components/StepSequencer.svelte';
	import Conductor from './components/Conductor.svelte';
	import * as Chords from 'chords';

	let vol = new Tone.Volume(0).toMaster();
	let polySynth = new Tone.PolySynth(3, Tone.FMSynth);
	var distortion = new Tone.Distortion(1);
	var tremolo = new Tone.Tremolo().start();

	polySynth.chain(distortion,tremolo,vol);

	let sequencerArray;
	let currentStep = -1;
	function step(e){
		const noteIdx = sequencerArray[e.detail.idx].indexOf(1);
		const note = Chords.noteNames[noteIdx]+'2';
		polySynth.triggerAttackRelease(note,'16n',e.detail.time);
		currentStep = e.detail.idx;
	}
</script>

<main>
	<h1>Fuck your cat!</h1>
	<Conductor on:16th={step}/>
	<StepSequencer bind:sequencerArray currentStep={currentStep} />
</main>

<style>
	h1{
		text-align: center
	}
</style>