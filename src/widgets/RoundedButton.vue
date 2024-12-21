<template>
  <div
    class="flex flex-row items-center justify-center gap-2 rounded-full px-8 py-4 border cursor-pointer hover:opacity-85"
    :class="{
      'border-primer bg-primer text-white': isPrimary,
      'border-transparent text-primer': !isPrimary, 'w-fit': isFit
    }"
  >
    <font-awesome-icon v-if="iconPosition != 'right'" :icon="['fas', btnIcon]" />
		<span>{{ btnLabel }}</span>
    <font-awesome-icon v-if="iconPosition == 'right'" :icon="['fas', btnIcon]" />
  </div>
</template>

<script>
export default {
	name: 'RoundedButton',
	props: {
		btnIcon: {
			type: String,
			default: ""
		},
		btnLabel: {
			type: String,
			default: ""
		},
		isPrimary: {
			type: Boolean,
			default: false,
		},
		iconPosition: {
			type: String,
			default: 'right'
		},
		isFit: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
