<template>
    <td
    @mouseover="contentEditVisible = true"
    @mouseleave="contentEditVisible = false"
    class="transcription-table-row">
        <div class="top-row">
            <div class="fixed-content">
                <!-- checkbox -->
                <custom-checkbox
                classes="margin-right-16px">
                </custom-checkbox>
                <!-- person icon -->
                <svg-loader
                svgName="person"
                classes="margin-top-negative-3px margin-right-16px">
                </svg-loader>
            </div>
            <!-- title -->
            <title-input
            :content="title"
            :forceFocus="justCreated"
            :visible="contentEditVisible"
            @inputChanged="inputUpdateHandler">
            </title-input>
        </div>
        <div class="bottom-row">
            <text-area
            :content="description"
            :visible="contentEditVisible"
            @sizeChanged="textAreaSizeChanged"
            @valueChanged="textAreaValueChanged">
            </text-area>
        </div>

    </td>
</template>

<script>
import CustomCheckbox from '@/components/common/CustomCheckbox'
import SvgLoader from '@/components/common/SvgLoader'
import TitleInput from '@/components/common/TitleInput'
import TextArea from '@/components/common/TextArea'
export default {
	props: {
		title: String,
		description: String,
		justCreated: Boolean
	},
	data () {
		return {
			contentEditVisible: false
		}
	},
	components: {
		'custom-checkbox': CustomCheckbox,
		'svg-loader': SvgLoader,
		'title-input': TitleInput,
		'text-area': TextArea
	},
	methods: {
		textAreaSizeChanged (newHeight) {
			let bottomRow = this.$el.getElementsByClassName('bottom-row')[0]
			let tableRow = this.$el
			bottomRow.style.height = `${newHeight}px`
			/* table row new height
            65px( 90px(total) - 25px(base of bottomRow) ) + X(new bottomRow Height)
            */
			let tableRowNewHeight = 65 + newHeight
			tableRow.style.height = `${tableRowNewHeight}px`
		},
		textAreaValueChanged (newVal) { this.descriptionContent = newVal },
		inputUpdateHandler (value) { this.titleContent = value }
	},
	mounted () {
		if (!this.justCreated) return
		this.$store.dispatch(this.$c.ACTIONS.TRANSCRIPTIONS_UPDATE_JUST_CREATED)
	}
}
</script>

<style lang="scss">
.transcription-table-row {
    width:100%;
    height:90px;
    background-color:white;
    box-sizing:border-box;
    padding:20px;
    display:flex;
    flex-direction:column;
    border-bottom:1px solid lightgray;
    .top-row {
        width:100%;
        height:25px;
        display:flex;
        flex-direction:row;
        align-items:flex-start;
        margin-bottom:10px;
        .fixed-content {
            width: 68px;
            display:flex;
            flex-direction:row;
        }
    }
    .bottom-row {
        width:100%;
        height:25px;
        box-sizing:border-box;
        padding-left:68px; /* fixed content from top row */
    }
    &:first-of-type {
        border-top-right-radius:6px;
        border-top-left-radius:6px;
    }
    &:last-of-type {
        border-bottom-left-radius:6px;
        border-bottom-right-radius:6px;
        border-bottom:unset;
    }
}
</style>
