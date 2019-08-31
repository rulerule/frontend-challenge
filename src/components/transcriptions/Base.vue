<template>
    <div class="transcription-wrapper">
        <transcription-header></transcription-header>
        <transcription-content></transcription-content>
    </div>
</template>

<script>
import Header from '@/components/transcriptions/Header'
import Content from '@/components/transcriptions/Content'
export default {
	components: {
		'transcription-header': Header,
		'transcription-content': Content
	}
}
</script>

<style lang="scss">
.transcription-wrapper {
    width:100%;
    height:100%;
    border-radius:6px;
    border: 1px solid gray;
    overflow:auto;
    box-sizing:border-box;
    padding-bottom:20px;
    &:hover {
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
    }
}
</style>
