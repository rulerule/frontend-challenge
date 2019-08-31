<template>
    <input
    :class="{'visible': visible }"
    class="title-input"
    @change="inputChangeHandler"
    type="text"
    v-model="localContent">
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
		inputChangeHandler () {
			this.$emit('inputChanged', this.localContent)
		}
	}
}
</script>

<style lang="scss">
.title-input {
    height:16px; /* to match the checkbox, so they get centered together */
    border:none;
    font-size:1.6rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #566074;
    box-sizing:border-box;
    &.visible {
        border-bottom:1px solid gray;
    }
    &:focus {
        border-bottom: 1px solid gray;
    }
}
</style>
