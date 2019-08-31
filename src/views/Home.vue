<template>
    <div>
        <app-header></app-header>
        <app-table></app-table>
    </div>
</template>

<script>
import Header from '@/components/transcriptions/Header'
import Table from '@/components/transcriptions/Table'
export default {
	data () {
		return {}
	},
	components: {
		'app-header': Header,
		'app-table': Table
	}
}
</script>

<style lang="scss">
</style>
