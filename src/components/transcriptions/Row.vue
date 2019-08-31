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
                alt="person icon"
                classes="margin-top-negative-3px margin-right-16px">
                </svg-loader>
            </div>
            <!-- title -->
            <title-input
            :content="titleContent"
            :visible="contentEditVisible"
            @inputChanged="inputUpdateHandler">
            </title-input>
        </div>
        <div class="bottom-row">
            <text-area
            :content="descriptionContent"
            :visible="contentEditVisible"
            @valuesChanged="textAreaUpdateHandler">
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
	data () {
		return {
			contentEditVisible: false,
			titleContent: 'teste',
			descriptionContent: 'teste'
		}
	},
	components: {
		'custom-checkbox': CustomCheckbox,
		'svg-loader': SvgLoader,
		'title-input': TitleInput,
		'text-area': TextArea
	},
	methods: {
		textAreaUpdateHandler (params) {
			this.descriptionContent = params.newVal
			let bottomRow = this.$el.getElementsByClassName('bottom-row')[0]
			let tableRow = this.$el
			bottomRow.style.height = `${params.newHeight}px`
			/* table row new height
            55px( 80px(total) - 25px(base of bottomRow) ) + X(new bottomRow Height)
            */
			let tableRowNewHeight = 55 + params.newHeight
			tableRow.style.height = `${tableRowNewHeight}px`
		},
		inputUpdateHandler (value) {
			this.titleContent = value
		}
	}
}
</script>

<style lang="scss">
.transcription-table-row {
    width:100%;
    height:80px;
    background-color:white;
    box-sizing:border-box;
    padding:15px;
    display:flex;
    flex-direction:column;
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
    }
}
</style>
