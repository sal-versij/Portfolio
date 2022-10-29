<style lang="scss" global>
	@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,700;1,300;1,500;1,700&display=swap');
	@tailwind utilities;
	@tailwind components;
	@tailwind base;
	html {
		@apply bg-black p-5;
		margin: 0;
		padding: 0;
		font-family: 'Cormorant Garamond', serif;
		scroll-behavior: smooth;
	}

	.wrapper {
		@apply min-h-screen flex flex-col;

		header,
		footer {
			@apply flex-shrink;
		}

		main {
			@apply flex-grow my-7 px-5;
		}
	}

	.panel {
		@apply bg-zinc-800 text-white p-3 rounded-lg;
		&.hoverable {
			transition: box-shadow 0.1s, transform 0.1s;
			&:hover {
				box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.6);
			}
		}
	}

	hr {
		@apply border-0;
		height: 1px;
		&.zinc-800 {
			background-image: linear-gradient(
				to right,
				rgba(39, 39, 42, 0),
				rgba(39, 39, 42, 1),
				rgba(39, 39, 42, 0)
			);
		}
		&.orange-500 {
			background-image: linear-gradient(
				to right,
				rgba(249, 115, 22, 0),
				rgba(249, 115, 22, 1),
				rgba(249, 115, 22, 0)
			);
		}
	}

	h1 {
		@apply text-3xl font-bold text-orange-500 text-center uppercase w-fit mx-auto;
	}
</style>
