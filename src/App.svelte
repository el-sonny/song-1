<script>
	import Tone from 'tone';
	import StepSequencer from './components/StepSequencer.svelte';
	import Conductor from './components/Conductor.svelte';
	import Orientation from './components/Orientation.svelte';
	import Colors from 'color-generator';
	import * as Chords from 'chords';

	let bgcolor = Colors().hexString();
	let vol = new Tone.Volume(0).toMaster();
	let polySynth = new Tone.PolySynth(3, Tone.FMSynth);
	let distortion = new Tone.Distortion(.2);
	let tremolo = new Tone.Tremolo().start();

	polySynth.chain(distortion,vol);

	let sequencerArray;
	let currentStep = -1;
	let x = .5;
	function step(e){
		const noteIdx = sequencerArray[e.detail.idx].indexOf(1);
		const note = Chords.noteNames[noteIdx]+'2';
		polySynth.triggerAttackRelease(note,'16n',e.detail.time);
		currentStep = e.detail.idx;
		if(e.detail.idx === 0) bgcolor = Colors().hexString();
	}
	$: distortion.distortion = x;
</script>

<main style="background: {bgcolor}">
	<div class='container'>
		<h1>Fuck your cat!</h1>
		<p><Orientation bind:x /></p>
		<Conductor on:16th={step}/>
		<StepSequencer bind:sequencerArray currentStep={currentStep} />
	</div>
</main>

<style>
	h1{
		text-align: center;
		color:white;
	}
	main{
		height: 100%;
		background: #333;
		padding:20px 0;
		transition: background-color 1s linear;
	}
	.container{
		max-width:700px;
		margin:0 auto;
	}
</style>