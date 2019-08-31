<template>
    <header class="transcription-header-wrapper">
        <!-- header content -->
        <div class="transcription-header-content add-max-width-80 center-element">
            <title class="header-title"> {{$t('headerTitle')}} </title>
            <div class="buttons-container">
                <!-- upload data -->
                <image-button
                svgName="upload"
                :alt="$t('uploadButtonAlt')"
                :title="$t('uploadButtonTitle')"
                :clickCallback="uploadClickHandler">
                </image-button>
                <!-- get data -->
                <image-button
                svgName="fetch-document"
                :alt="$t('fetchButtonAlt')"
                :title="$t('fetchButtonTitle')"
                :clickCallback="fetchClickHandler">
                </image-button>
            </div>
        </div>
    </header>
</template>

<script>
import ImgButton from '@/components/common/ImgButton'
export default {
	data () {
		return {}
	},
	components: {
		'image-button': ImgButton
	},
	methods: {
		fetchClickHandler () { this.$store.dispatch(this.$c.ACTIONS.TRANSCRIPTIONS_FETCH) },
		uploadClickHandler () { this.$store.dispatch(this.$c.ACTIONS.TRANSCRIPTIONS_UPLOAD) }
	}
}
</script>

<style lang="scss">
.transcription-header-wrapper {
    position:fixed;
    width:calc(100% - 42px); /* distance to sides + borders*/
    height: 60px;
    background-color:white;
    border-top-left-radius:6px;
    border-top-right-radius:6px;
    border-bottom:1px solid gray;
    box-shadow: 0 4px 2px -2px gray;
    z-index:10;
}
.transcription-header-content {
    width:100%;
    height:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    .header-title {
        text-transform: capitalize;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size:1.8rem;
        color: #414c5E;
    }
}
</style>
