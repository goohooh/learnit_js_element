window.helper = (function(win, doc){
  function renderElapsedString(elapsed, runningSince) {
    let totalElapsed = elapsed;
    if (runningSince) {
      totalElapsed += Date.now() - runningSince;
    }
    return millisecondsToHuman(totalElapsed);
  }

  function millisecondsToHuman(ms) {
  	const milliseconds = ms % 1000;
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    const humanized = [
      pad(hours.toString(), 2),
      pad(minutes.toString(), 2),
      pad(seconds.toString(), 2),
      pad(milliseconds.toString(), 3),
    ].join(':');

    return humanized;
  }

  function pad(numberString, size){
  	let padded = numberString;
  	while (padded.length < size) padded = `0${padded}`;
  	return padded;
  }

  return {
    millisecondsToHuman,
    renderElapsedString,
  };
})(window, document);


$(document).ready(function(){
	const $time = $('.time');
	const $start = $('.start');
	const $stop= $('.stop');

	let intervalId = null;
	let elapsed = 0;
	let runningSince = null;
  let isRunning = false;
	$time.text(helper.renderElapsedString(elapsed));

	function startTimer(){
    if(isRunning) return false;
    isRunning = true;

		if(runningSince === null){
			runningSince = Date.now();
		}
		intervalId = setInterval(function(){
			$time.text(helper.renderElapsedString(elapsed, runningSince));
		}, 43)
	}
	function stopTimer(){
    if(!isRunning) return false;
    isRunning = false;

		clearInterval(intervalId);
    const now = Date.now();
    let lastElapsed = now - runningSince;
    elapsed += lastElapsed;
    runningSince = null;
	}
	$start.on('click', startTimer);
	$stop.on('click', stopTimer);
});

