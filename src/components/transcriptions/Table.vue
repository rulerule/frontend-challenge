<template>
    <table :class="classes" class="transcription-table center-content">
        <app-row
        v-for="element in transcriptionsData"
        :key="element.id"
        :title="element.voice"
        :description="element.text"
        :justCreated="element.justCreated">
        </app-row>
    </table>
</template>

<script>
import Row from '@/components/transcriptions/Row'
export default {
	props: {
		transcriptionsData: Array,
		classes: String
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
    &.margin-bottom-20px { margin-bottom:20px; }
}
</style>
