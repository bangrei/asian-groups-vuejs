<template>
  <div class="main-container">
		<EtalaseContent 
			title="Popular artists" 
			isRounded
			:listItems="popularArtists"
		/>
		<EtalaseContent 
			title="Popular albums and singles"
			:listItems="popularAlbums"
		/>
		<EtalaseContent 
			title="Popular radio"
			hideTitle
			:listItems="popularRadio"
		/>
		<EtalaseContent 
			title="Featured Charts"
			hideTitle
			:listItems="popularCharts"
		/>
		<EtalaseContent 
			title="Playlist from our editors"
			:listItems="popularEditors"
		/>
		<div class="media">
			<div class="links">
				<div class="link-item"
					v-for="(link, n) in footer"
					:key="n"
				>
					<div class="link-title">{{ link.name }}</div>
					<div class="link-content">
						<div class="link-child"
							v-for="item in link.items"
							:key="item"
						>{{ item }}</div>
					</div>
				</div>
			</div>
			<div class="social-media">
				<img class="link-icon" :src="require('../../assets/images/ig.svg')"/>
				<img class="link-icon" :src="require('../../assets/images/twitter.svg')"/>
				<img class="link-icon" :src="require('../../assets/images/fb.svg')"/>
			</div>
		</div>
		<div class="bottom">
			<div class="line"></div>
			<span>&copy;2024 Spotify AB</span>
		</div>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import albums from '../albums';
import artists from '../artists';
import charts from '../charts';
import editors from '../editors';
import footerContent from '../footerContent';
import radioList from '../radio';
import EtalaseContent from './EtalaseContent.vue';
export default {
	name: "MainContent",
	components: {
		EtalaseContent,
	},
	setup() {
		const popularArtists = ref([]);
		const popularAlbums = ref([]);
		const popularRadio = ref([]);
		const popularCharts = ref([]);
		const popularEditors = ref([]);
		const footer = ref([])

		onMounted(() => {
			popularArtists.value = artists;
			popularAlbums.value = albums;
			popularRadio.value = radioList;
			popularCharts.value = charts;
			popularEditors.value = editors;
			footer.value = footerContent;
		});

		return {
			popularArtists,
			popularAlbums,
			popularRadio,
			popularCharts,
			popularEditors,
			footer,
		}
	}
};
</script>
<style lang="scss">
.main-container {
	background: #111;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	position: relative;
	padding-block: 24px;
	padding-inline: 8px;
	gap: 40px;
}
.media {
	display: flex;
	-webkit-box-pack: justify;
	justify-content: space-between;
	flex-direction: row;
	padding-block: 32px;
	.links {
		display: flex;
		gap: 24px;
		flex: 1 1 150%;
		flex-wrap: wrap;
		.link-item {
			padding-inline: 16px;
			display: flex;
			flex-direction: column;
			gap: 8px;
			.link-title {
				color: #FFF;
				font-weight: 700;
			}
			.link-content {
				display: flex;
				flex-direction: column;
				gap: 8px;
				.link-child {
					color: #ccc;
					cursor: pointer;
					&:hover {
						text-decoration: underline;
						color: #FFF !important;
					}
				}
			}
		}
	}
	.social-media {
		display: flex;
		gap: 24px;
		justify-content: flex-start;
		padding-right: 24px;
		.link-icon {
			width: 16px;
			height: 16px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #FFF;
			padding: 8px;
			border-radius: 40%;
			background: #4f4f4f;
		}
	}
}
.bottom {
	padding: 32px 16px;
	color: #ccc;
	font-size: small;
	.line {
		border-top: 1px solid #2f2f2f;
		padding-bottom: 24px;
	}
}
@media(max-width: 800px) {
	.media {
		flex-direction: column;
		.links {
			flex: 1 1 1;
			flex-direction: column;
		}
		.social-media {
			margin-top: 24px;
			padding: 24px;
		}
	}
}
</style>
