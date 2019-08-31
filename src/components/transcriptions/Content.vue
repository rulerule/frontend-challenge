<template>
    <main class="transcription-content-wrapper center-element add-max-width-80">
        <!-- table -->
        <transcription-table
        :transcriptionsData="transcriptionsData"
        classes="margin-bottom-20px">
        </transcription-table>
        <!-- add new one button -->
        <image-button
        svgName="add-row"
        alt="add table row"
        title="add table row"
        classes="center-manually get-svg-bigger"
        :clickCallback="addTableRowHandler">
        </image-button>
    </main>
</template>

<script>
import Table from '@/components/transcriptions/Table'
import ImageButton from '@/components/common/ImgButton'
export default {
	data () {
		return {}
	},
	components: {
		'transcription-table': Table,
		'image-button': ImageButton
	},
	methods: {
		addTableRowHandler () {
			this.$store.dispatch(this.$c.ACTIONS.TRANSCRITPIONS_ADD_TABLE_ROW)
		}
	},
	computed: {
		transcriptionsData () {
			return this.$store.getters.transcriptionsGetData
		}
	}
}
</script>

<style lang="scss">
.transcription-content-wrapper {
    width:100%;
    box-sizing:border-box;
    padding-top:100px; /* 20px of the element, and 80px for the header */
}
</style>
