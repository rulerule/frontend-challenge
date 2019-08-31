<template>
    <table class="transcription-table center-content">
        <app-row></app-row>
    </table>
</template>

<script>
import Row from '@/components/transcriptions/Row'
export default {
	props: {},
	data () {
		return {}
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
