<template>
	<div className="py-4 flex flex-col gap-4 w-full">
		<rounded-button
			btn-icon="chevron-left"
			btn-label="Back"
			icon-position="left"
			:is-primary="false"
			@click="goBack()"
		/>
		<h1 className="flex items-center justify-center h-full w-full text-super text-slate-500 py-24">Page Not Found | 404</h1>
	</div>
	
</template>

<script>
import RoundedButton from "../widgets/RoundedButton.vue";
export default {
	name: "ErrorPage",
	components: {
		RoundedButton
  },
	data() {
		return {};
	},
	methods: {
		goBack() {
			this.$router.replace({
        name: "HomePage",
      });
		},
	},
	created() {},
};
</script>
