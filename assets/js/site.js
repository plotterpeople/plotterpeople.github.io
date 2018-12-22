(function(document) {
	// the elements we're gonna put the doodles in
	const doodleBoxLeft = document.querySelector('.doodle-box--left');
	const doodleBoxRight = document.querySelector('.doodle-box--right');

	// stash a reference to the doodle shapes
	const bigDiamond = document.querySelector('.big-diamond');
	const smallDiamond = document.querySelector('.small-diamond');

	// height of the whole document
	const height = document.body.clientHeight;

	const leftDoodles = Array(40).fill(0).map((_, i) => {
		const isBig = Math.random() < 0.25;
		const node = (isBig ? bigDiamond : smallDiamond).cloneNode(true);
		node.style.left = `${Math.floor(Math.random() * 100 * 16) / 16}%`;
		node.style.top = `${Math.floor(Math.random() * 100 * 128) / 128}%`;
		(i < 20 ? doodleBoxLeft : doodleBoxRight).appendChild(node);
		// if (!isBig) {
		// 	node.style.animation = `small-dash ${Math.random() * 2 + 0.5}s linear infinite`
		// }

		return node;
	});

})(document);
