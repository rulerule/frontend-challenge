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
                <!-- NOTE: this is loaded in a different way cause we need
                to keep it as svg instead of image to change his color on hover
                -->
                <person-svg
                :class="{'change-to-purple': contentEditVisible }"
                class="person-svg">
                </person-svg>
            </div>
            <!-- title -->
            <title-input
            :content="title"
            :forceFocus="justCreated"
            :visible="contentEditVisible"
            @inputChanged="inputUpdateHandler">
            </title-input>
            <!-- remove button -->
            <image-button
            svgName="delete"
            :alt="$t('deleteButtonAlt')"
            :title="$t('deleteButtonTitle')"
            classes="align-self-top-right get-svg-smaller"
            :hidden="!contentEditVisible"
			class="delete-button"
            :clickCallback="deleteClickHandler">
            </image-button>
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
import TitleInput from '@/components/common/TitleInput'
import TextArea from '@/components/common/TextArea'
import ImgButton from '@/components/common/ImgButton'
import PersonSvg from '@/assets/icons/person.svg?inline'
export default {
	props: {
		title: String,
		description: String,
		justCreated: Boolean,
		elementId: [String, Number]
	},
	data () {
		return {
			contentEditVisible: false
		}
	},
	components: {
		'custom-checkbox': CustomCheckbox,
		'title-input': TitleInput,
		'text-area': TextArea,
		'image-button': ImgButton,
		'person-svg': PersonSvg
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
		deleteClickHandler () {
			this.$store.dispatch(this.$c.ACTIONS.TRANSCRIPTIONS_DELETE_ROW, this.elementId)
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
    position:relative;
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
            .person-svg {
                margin-right:16px;
                margin-top:-5px;
                &.change-to-purple {
                    /* change color class was manually added to the svg
                    so it is easier to go directly to the part of it i need
                    to change the color */
                    .change-color {
                        fill: #859EFF
                    }
                }
            }
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
