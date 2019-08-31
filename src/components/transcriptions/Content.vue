<template>
    <main class="transcription-content-wrapper center-element add-max-width-80">
        <transcription-table></transcription-table>
        <!-- <image-button></image-button> -->
    </main>
</template>

<script>
import Table from '@/components/transcriptions/Table'
// import ImageButton from '@/components/common/ImgButton'
export default {
	data () {
		return {}
	},
	components: {
		'transcription-table': Table
		// 'image-button': ImageButton
	}
}
</script>

<style lang="scss">
.transcription-content-wrapper {
    width:100%;
    box-sizing:border-box;
    padding-top:20px;
}
</style>
