<script lang="ts">
	import { onMount } from 'svelte';

	let clazz;
	export { clazz as class };

	export let power = 5;
	let panel;
	onMount(() => {
		const height = panel.clientHeight;
		const width = panel.clientWidth;
		panel.addEventListener(
			'mousemove',
			createHandler(panel, height, width)
		);

		/* Add listener for mouseout event, remove the rotation */
		panel.addEventListener('mouseout', function () {
			console.log('mouseout');
			panel.style.transform = 'perspective(500px) rotateX(0) rotateY(0)';
		});
	});
	function createHandler(el, height, width) {
		return function (e) {
			/*
			 * Get position of mouse cursor
			 * With respect to the element
			 * On mouseover
			 */
			/* Store the x position */
			const xVal = e.layerX;
			/* Store the y position */
			const yVal = e.layerY;

			/*
			 * Calculate rotation valuee along the Y-axis
			 * Here the multiplier 20 is to
			 * Control the rotation
			 * You can change the value and see the results
			 */
			const yRotation = power * ((xVal - width / 2) / width);

			/* Calculate the rotation along the X-axis */
			const xRotation = -power * ((yVal - height / 2) / height);

			/* Generate string for CSS transform property */
			const string =
				'perspective(500px) rotateX(' +
				xRotation +
				'deg) rotateY(' +
				yRotation +
				'deg)';

			/* Apply the calculated transformation */
			el.style.transform = string;
		};
	}
</script>

<div class="panel hoverable {clazz || ''}" bind:this={panel}>
	<slot />
</div>
