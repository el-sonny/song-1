import Tone from 'tone';
//const EventEmitter = require('events');

let vol = new Tone.Volume(-12).toMaster();


let seq = new Tone.Sequence((time,idx) => {emmiter.emit('newMeasure', {time:time,idx:idx})}
	,[0,1,2,3,4,5,6,7,8,9,10,11],'1m');

// other code in the module that does something to trigger events
// this is just one example using a timer
setInterval(function() {
    obj
}, 10 * 1000);


const toggle = function() {
	Tone.Transport.latencyHint = 'fastest';
	Tone.Transport.start('+0.2');
    seq.start();
}

export { toggle, emmiter };