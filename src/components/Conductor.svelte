<script>
	import Tone from 'tone';
	import { createEventDispatcher } from 'svelte';

	let vol = new Tone.Volume(-12).toMaster();
	let polySynth = new Tone.PolySynth(3, Tone.FMSynth).connect(vol);

	const emmiter = createEventDispatcher();
	let seq = new Tone.Sequence((time,idx) => emmiter('16th', {time:time,idx:idx}),[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],'16n');

	const start = () => {
		Tone.Transport.latencyHint = 'fastest';
		Tone.Transport.start('+0.1');
	    seq.start();
	};
</script>

<button on:click={start} >Play</button>