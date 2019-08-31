<template>
    <img :class="classes" class="svg-icon" :src="require(`@/assets/icons/${svgName}.svg`)" :alt="alt" :title="title">
</template>

<script>
export default {
	props: {
		svgName: String,
		alt: String,
		title: String,
		classes: String
	}
}
</script>

<style lang="scss">
.svg-icon {
    width:20px;
    height:20px;
    &.margin-top-negative-3px {
        margin-top: -3px /* specific case to center the icon with the checkbox when on transcription row */
    }
    &.margin-right-16px {
        margin-right:16px;
    }
    &:hover {
        cursor:pointer;
    }
}
</style>
