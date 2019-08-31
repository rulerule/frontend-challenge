<template>
    <button
    class="image-button"
    @click="clickCallback"
    :class="classes"
    :hidden="hidden">
        <svg-loader
        :svgName="svgName"
        :classes="classes"
        :alt="alt">
        </svg-loader>
    </button>
</template>

<script>
/* NOTE: There is no place for text since this button is a image only button
made to easier accessability in the page, if we need a button with text
in the future it will be better to just make a new component
*/
import SvgLoader from '@/components/common/SvgLoader'
export default {
	props: {
		classes: String,
		hidden: { /* by default we want it to be visible */
			type: Boolean,
			default: () => { return false }
		},
		svgName: String,
		alt: String,
		clickCallback: Function
	},
	components: {
		'svg-loader': SvgLoader
	}
}
</script>

<style lang="scss">
.image-button {
    background-color: transparent;
    outline: none;
    border: none;
    width:36px;
    height:36px;
    &:focus { box-shadow: 0 0 3px 1px #859EFF; }
    &.center-manually {
        position:relative;
        left:50%;
        transform:translateX(-50%);
    }
}
</style>
