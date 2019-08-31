<template>
    <textarea
    class="custom-text-area"
    v-model="localContent"
    type="text"
    @change="textAreaChangeHandler"
    :class="{'visible': visible }"
    ></textarea>
</template>

<script>
export default {
	props: {
		content: String,
		visible: {
			type: Boolean,
			default: () => { return false }
		}
	},
	data () {
		return {
			localContent: this.content
		}
	},
	methods: {
		textAreaChangeHandler () {
			this.$emit('textAreaChanged', this.localContent)
		},
		updateSize () {
			/* get the text area element */
			let textarea = this.$el
			/* set it style to the 25px we want it to have as base */
			textarea.style.height = '25px'
			/* check the scrollHeight to set as the new height */
			let heightNeeded = textarea.scrollHeight
			/* set the height as the needed height for it */
			textarea.style.height = `${heightNeeded}px`
			/* emit the size changed so the row can update his size aswell */
			this.$emit('sizeChanged', heightNeeded)
		}
	},
	watch: {
		localContent (newVal, oldVal) {
			if (newVal === oldVal) return
			this.updateSize()
			this.$emit('valueChanged', newVal)
		},
		content (newVal) { this.localContent = newVal }
	},
	mounted () {
		setTimeout(() => {
			this.$nextTick(() => {
				this.updateSize()
			})
		}, 150) /* 150ms to be higher than monitor refresh rate */
	}
}
</script>

<style lang="scss">
.custom-text-area {
    width:100%;
    height:25px;
    overflow:hidden;

    resize:none;
    border:none;
    box-sizing:border-box;

    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size:1.6rem;
    color: #778195;
    &.visible {
        border-bottom:1px solid gray;
    }
    &:focus {
        border-bottom:1px solid gray;
    }

}
</style>
