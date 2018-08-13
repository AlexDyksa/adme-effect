'use strict';

let slide = document.getElementById('slide'),
	layoutAfter = document.querySelector('.after'),
	width;

slide.onmousemove = event => {
	width = event.offsetX;
	layoutAfter.style.width = width + 'px';
}

