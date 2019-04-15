/* get elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelector('.player_slider');

/* functions */

function togglePlay(){
	const action = video.paused ? 'play':'pause';
	video[action]();
}


function updateButton(){
	const txt = this.paused ? 'play':'pause';
	toggle.textContent = txt;
}

/* event listeners */

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

