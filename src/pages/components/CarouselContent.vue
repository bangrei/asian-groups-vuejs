<template>
  <div class="flex flex-col flex-1">
		<carousel class="w-full"
      ref="carousel"
      :transition="500"
      :wrap-around="false"
      :autoplay="autoPlayTimer"
    >
      <slide v-for="content in contents" :key="content.index">
        <div class="flex items-center justify-center rounded-lg overflow-hidden border">
					<img class="object-contain" :src="require(`../../assets/${content}`)" :alt="content" />
        </div>
      </slide>
      <template #addons>
        <navigation>
          <template #next>
            <span class="carousel__icon material-icons-outlined">
              <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </span>
          </template>
          <template #prev>
            <span class="carousel__icon material-icons-outlined">
              <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </span>
          </template>
        </navigation>
        <pagination />
      </template>
    </carousel>
	</div>
</template>

<script>
import { isEmpty } from "lodash";
import { reactive, ref } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
	name: "CarouselContent",
	components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
	},
	data() {
    return {
      swiperRef: null,
      contents: null,
      currentContent: null,
      currentActiveIndex: 0,
      slidesPerView: 1,
      autoPlayTimer: 5000,
			banners: [
				"image-1.png",
				"image-2.png",
				"image-3.png",
				"image-4.png",
			],
    };
	},
	async created() {
    this.contents = ref(this.banners);
    this.currentContent = reactive({});
    if (!isEmpty(this.contents)) this.currentContent.value = this.contents[0];
  },
};
</script>
