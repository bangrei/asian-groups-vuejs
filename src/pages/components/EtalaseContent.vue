<template>
  <div class="etalase-container">
    <div class="etalase-head">
      <h4>{{ title }}</h4>
      <span class="show-all">Show all</span>
    </div>
    <div class="etalase-content">
      <div class="etalase-card" v-for="(item, i) in listItems" :key="i">
        <img :class="{'rounded': isRounded}" :src="item.image" :alt="item.name" />
        <span class="etalase-name" v-if="!hideTitle">{{ item.name }}</span>
        <span class="etalase-desc">{{ item.desc }}</span>
				<div class="overlay">
					<font-awesome-icon class="etalase-icon" :icon="['fas', 'play']" />
				</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EtalaseContent",
  props: {
    title: {
      type: String,
      required: true,
    },
    listItems: {
      type: Array,
      required: true,
    },
    isRounded: {
      type: Boolean,
      default: false,
		},
		hideTitle: {
      type: Boolean,
      default: false,
    },
  },
  setup() {},
};
</script>

<style lang="scss">
.etalase-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
	color: #FFF;
  .etalase-head {
    display: flex;
    gap: 24px;
		padding-inline: 16px;
    align-items: center;
    justify-content: space-between;
    h4 {
      margin: 0;
			font-size: 1.5em;
    }
		.show-all {
			font-size: 0.9em;
			color: #ccc;
			cursor: pointer;
		}
  }
  .etalase-content {
    width: 100%;
    display: flex;
    overflow: hidden;
    overflow-x: auto;
		color: #FFF;
		&:hover {
			.etalase-card:not(:hover) {
				opacity: 0.6;
			}
		}
		.etalase-card {
			display: flex;
			flex-direction: column;
			gap: 8px;
			cursor: pointer;
			padding: 16px;
			position: relative;
			border-radius: 8px;
			&:hover {
				background: #1f1f1f;
				.overlay {
					top: 40%;
					opacity: 1;
				}
			}
			img {
				width: 145px;
				height: 145px;
				object-fit: cover;
				border-radius: 6px;
				&.rounded {
					border-radius: 50%;
				}
				& + * {
					margin-top: 16px;
				}
			}
			.etalase-name {
				color: #FFF;
				text-align: center;
			}
			.etalase-desc {
				color: #808080;
				font-size: 0.9em;
				text-align: center;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
			.overlay {
				width: 45px;
				height: 45px;
				border-radius: 50%;
				background: #1ed760;
				padding: 4px;
				position: absolute;
				top: 50%;
				right: 0;
				opacity: 0;
				transition: all 0.25s linear;
				-webkit-transition: all 0.25s linear;
				display: flex;
				align-items: center;
				justify-content: center;
				.etalase-icon {
					color: #000;
					font-size: large;
				}
			}
		}
  }
}
@media(max-width: 800px) {
	.etalase-container {
		.etalase-head {
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			gap: 8px;
		}
		.etalase-content {
			.etalase-name,
			.etalase-desc {
				text-align: left;
			}
		}
	}
}
</style>
