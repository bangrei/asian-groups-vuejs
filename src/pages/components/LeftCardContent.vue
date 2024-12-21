<template>
  <div class="left-wrapper">
		<div class="library-content">
			<div class="library-body">
				<img :src="require('../../assets/images/library.svg')" alt="" />
				<span>Your Library</span>
			</div>
			<font-awesome-icon class="library-icon" :icon="['fas', 'plus']" />
		</div>
		<div class="left-content">
			<div class="left-card" v-for="(card, i) in leftCards" :key="i">
				<h4>{{ card.title }}</h4>
				<span class="card-subtitle">{{ card.subtitle }}</span>
				<div class="card-button">{{ card.button }}</div>
			</div>
		</div>
		<div class="left-navs">
			<span v-for="nav in leftNavs" :key="nav">{{ nav }}</span>
		</div>
		<div class="lang-button">
			<font-awesome-icon class="library-icon" :icon="['fas', 'globe']" />
			<span>English</span>
		</div>
	</div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: "LeftCardContent",
  setup() {
    const leftCards = ref([]);
    const leftNavs = ref([]);

    onMounted(() => {
      leftCards.value = [
        {
          title: "Create your first playlist",
          subtitle: `It's easy, we'll help you`,
          button: "Create playlist",
        },
        {
          title: `Let's find some podcasts to follow`,
          subtitle: `We'll keep you updated on new episodes`,
          button: "Browse podcasts",
        },
      ];
      leftNavs.value = [
        "Legal",
        "Safety & Privacy Center",
        "Privacy Policy",
        "Cookies",
        "About Ads",
        "Accessibility",
      ];
    });

    return {
      leftCards,
      leftNavs,
    };
  },
};
</script>

<style lang="scss">
.left-wrapper {
	display: flex;
	flex-direction: column;
}
.library-content {
  padding-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
  color: #ccc;
  .library-body {
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 12px;
    img {
      width: 24px;
    }
  }
  .library-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ccc;
    font-size: medium;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    &:hover {
      background: #1f1f1f;
    }
  }
}
.left-content {
  display: flex;
  flex-direction: column;
  padding-block: 16px;
  gap: 16px;
  .left-card {
    padding: 24px;
    border-radius: 8px;
    background: #1f1f1f;
    h4 {
      margin-top: 0;
      margin-bottom: 6px;
      color: #fff;
    }
    .card-subtitle {
      font-size: small;
      color: #fff;
    }
    .card-button {
      padding: 8px 24px;
      border-radius: 24px;
      background: #fff;
      color: #232323;
      font-size: small;
      font-weight: bold;
      margin-top: 24px;
      width: fit-content;
      cursor: pointer;
      &:hover {
        transform: scale(1.05);
        -webkit-transform: scale(1.05);
      }
    }
  }
}
.left-navs {
  padding-block: 24px;
  margin-top: auto;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  font-size: x-small;
  cursor: pointer;
  color: #ccc;
}
.lang-button {
  padding: 6px 24px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  width: fit-content;
  font-size: 0.85em;
  gap: 8px;
  cursor: pointer;
  margin-bottom: 32px;
  &:hover {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
  }
  & * {
    color: #fff !important;
  }
}
</style>
