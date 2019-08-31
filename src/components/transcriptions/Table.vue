<template>
    <table class="transcription-table center-content">
        <app-row
        v-for="element in transcriptionsData"
        :key="element.id"
        :title="element.voice"
        :description="element.text">
        </app-row>
    </table>
</template>

<script>
import Row from '@/components/transcriptions/Row'
export default {
	props: {
		transcriptionsData: Array
	},
	data () {
		return {
			// tableData: this.transcriptionsData
		}
	},
	components: {
		'app-row': Row
	}
}
</script>

<style lang="scss">
.transcription-table {
    width:100%;
    height:auto;
}
</style>
