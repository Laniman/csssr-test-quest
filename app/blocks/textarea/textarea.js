import autosize from 'autosize';

const block = document.querySelectorAll('.textarea');

// function autoGrow(e) {
// 	if (this.scrollHeight > this.clientHeight) {
// 		this.style.height = `${this.scrollHeight}px`;
// 	}
// }

// block.addEventListener('input', autoGrow);

autosize(block);
