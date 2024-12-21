<template>
	<div class="nav-wrapper">
		<div class="main-logo">
			<img :src="require(`../../assets/images/spotify-logo.svg`)"/>
		</div>
		<div class="search-bar">
			<div class="home-icon">
				<img :src="require(`../../assets/images/home.svg`)"/>
			</div>
			<div :class="['input-area', isFocused ? 'focus' : '']">
				<font-awesome-icon class="input-icon" :icon="['fas', 'search']" />
				<input 
					@focus="isFocused = true"
					@blur="isFocused = false"
					type="text" 
					placeholder="What do you want to play?">
				<div class="search-placeholder">
					<img :src="require('../../assets/images/search-placeholder.svg')" alt="">
				</div>
			</div>
		</div>
		<div class="buttons">
			<span class="button secondary">Sign up</span>
			<span class="button">Login</span>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "NavContent",
  setup() {
    const isFocused = ref(false);
    return {
      isFocused,
    }
  }
};
</script>

<style lang="scss">
.nav-wrapper {
	width: 100%;
	-webkit-box-pack: justify;
	display: flex;
	gap: 24px;
	height: 64px;
	padding: 8px;
	align-items: center;
	justify-content: space-between;
	.main-logo {
		width: 32px;
		height: 32px;
		flex: 1;
		cursor: pointer;
	}
	.search-bar {
		flex: 2;
		display: flex;
		align-items: center;
		gap: 16px;
		.home-icon {
			width: 32px;
			height: 32px;
			background: #1f1f1f;
			padding: 8px;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			img {
				width: 24px;
			}
		}
		.input-area {
			border-radius: 32px;
			background: #1f1f1f;
			display: flex;
			align-items: center;
			flex: 1;
			gap: 8px;
			overflow: hidden;
			padding-inline: 16px;
			padding-block: 12px;
			border: 1px solid transparent;
			&.focus {
				border-color: #FFF;
			}
			input {
				outline: none;
				padding-inline: 8px;
				border: none;
				background: transparent;
				flex: 1;
				color: #ccc;
				font-size: 1rem;
			}
			.input-icon {
				font-size: 1.4rem;
				color: #ccc;
			}
			.search-placeholder {
				width: 24px;
				height: 24px;
				padding-left: 16px;
				border-left: 1px solid #808080;
			}
		}
	}
	.buttons {
		flex: 1;
		display: flex;
		gap: 8px;
		align-items: center;
		justify-content: flex-end;
		padding-right: 24px;
		.button {
			padding: 12px 24px;
			border-radius: 24px;
			cursor: pointer;
			background: #FFF;
			display: flex;
			align-items: center;
			font-weight: 700;
			color: #000;
			white-space: nowrap;
			&.secondary {
				background: #000 !important;
				color: #ccc;
				&:hover {
					color: #FFF !important;
				}
			}
			&:hover {
				background: #ccc;
				transform: scale(1.05);
				-webkit-transform: scale(1.05);
			}
		}
	}
}
@media(max-width: 800px) {
	.nav-wrapper {
		padding-inline: 16px !important;
		.search-bar {
			flex: auto;
			.input-area {
				display: none;
			}
		}
		.buttons {
			margin-right: 16px;
		}
	}
}
</style>
