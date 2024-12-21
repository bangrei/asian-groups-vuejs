<template>
  <div class="footer-wrapper">
		<div class="footer-head">
			<div class="footer-head-title">Preview of Spotify</div>
			<div class="footer-head-subtitle">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</div>
		</div>
		<div class="footer-button">Sign up free</div>
	</div>
</template>

<script>
export default {
  name: "FooterContent",
};
</script>
<style lang="scss">
	.footer-wrapper {
		padding: 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		background-image: linear-gradient(90deg, #af2896, #509bf5);
		.footer-head {
			display: flex;
			flex-direction: column;
			.footer-head-title {
				font-weight: 700;
				color: #FFF !important;
				font-size: small;
			}
			.footer-head-subtitle {
				font-size: 0.9em;
				color: #FFF !important;
			}
		}
		.footer-button {
			cursor: pointer;
			padding: 12px 24px;
			border-radius: 24px;
			background: #FFF;
			color: #000;
			font-weight: 600;
			font-size: medium;
			white-space: nowrap;
			&:hover {
				transform: scale(1.05);
				-webkit-transform: scale(1.05);
			}
		}
	}
</style>
