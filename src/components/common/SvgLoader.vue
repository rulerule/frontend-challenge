<template>
    <img class="svg-icon" :src="require(`@/assets/icons/${svgName}.svg`)" :alt="alt" :title="title">
</template>

<script>
export default {
	props: {
		svgName: String,
		alt: String,
		title: String
	}
}
</script>

<style lang="scss">
.svg-icon {
    &:hover {
        cursor:pointer;
    }
}
</style>
