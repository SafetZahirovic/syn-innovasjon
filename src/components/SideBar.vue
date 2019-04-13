<template>
	<VCard class="sidebar-main pa-2">
		<h5>
			<slot></slot>
		</h5>
	</VCard>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'

	@Component
	export default class SideBar extends Vue {

	}
</script>

<style lang="sass" scoped>
	.sidebar-main
		transform: rotate(-90deg)
		background: $color-medium-green
		position: fixed
		left: -131px
		top: 50%
		height: 38px
		border-radius: 0
		width: 300px
		box-shadow: -10px 10px 20px -4px rgba(157, 214, 206, 0.77)
		-moz-box-shadow: -10px 10px 20px -4px rgba(157, 214, 206, 0.77)
		-o-box-shadow: -10px 10px 20px -4px rgba(157, 214, 206, 0.77)
		-webkit-box-shadow: -10px 10px 20px -4px rgba(157, 214, 206, 0.77)
</style>
