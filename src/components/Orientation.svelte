<script>
	export let x = .5;
	export let y = .5;
	//window.addEventListener('deviceorientation', handleOrientation, true);
	function handleOrientation(e){
		if(e.beta !== null){
			let _x = e.beta;
			let _y = e.gamma;
			if (_x >  90) _x =  90;
	  		if (_x < -90) _x = -90;
	  		x = (_x + 90)/180;
	  		y = (_y + 90)/180;
	  	}
	}
</script>
<svelte:window on:deviceorientation={handleOrientation}/>
<p>Beta : {Math.round(x*100)}%</p>
<p>Gamma: {Math.round(y*100)}%</p>
<style>
	p{
		color:white;
	}
</style>