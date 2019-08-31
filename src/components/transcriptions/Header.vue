<template>
    <header>
        <!-- header content -->
        <div class="center-element add-max-width-1024">
            <title> teste title </title>
            <div class="buttons-container">
                <!-- get data -->
                <image-button
                svgName="fetch-document"
                alt="fetch information">
                </image-button>
                <!-- upload data -->
                <image-button
                svgName="upload"
                alt="upload information">
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
	}
}
</script>

<style lang="scss">
header {
    &:focus {
        background-color:red;
    }
}
</style>
