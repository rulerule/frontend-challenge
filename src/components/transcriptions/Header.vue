<template>
    <header class="transcription-header-wrapper">
        <!-- header content -->
        <div class="transcription-header-content center-element add-max-width-80">
            <title class="header-title"> {{$t('headerTitle')}} </title>
            <div class="buttons-container">
                <!-- upload data -->
                <image-button
                svgName="upload"
                alt="upload information"
                title="upload data"
                :clickCallback="uploadClickHandler">
                </image-button>
                <!-- get data -->
                <image-button
                svgName="fetch-document"
                alt="fetch information"
                title="get data"
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
		fetchClickHandler () {
			this.$store.dispatch(this.$c.ACTIONS.FETCH_TRANSCRITPIONS)
		},
		uploadClickHandler () {
			this.$store.dispatch(this.$c.ACTIONS.UPLOAD_TRANSCRIPTIONS)
		}
	}
}
</script>

<style lang="scss">
.transcription-header-wrapper {
    width:100%;
    height: 60px;
    background-color:white;
    border-top-left-radius:6px;
    border-top-right-radius:6px;
    border-bottom:1px solid gray;
    box-shadow: 0 4px 2px -2px gray;
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
