<template>
	<VContainer class="main-container">
		<VLayout>
			<VFlex>
				<h1>
					{{ title }}
				</h1>
			</VFlex>
			<VIcon class="icon">
				{{ icon }}
			</VIcon>
		</VLayout>
	</VContainer>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'

	@Component
	export default class HeaderJumbotron extends Vue {
		@Prop() title !: string
		@Prop() icon !: string
	}
</script>

<style lang="sass" scoped>
	.main-container
		padding-left: 24px
		padding-right: 0
		padding-top: 0
		height: 100px
	.icon
		top: 70px
		position: absolute
		font-size: 7rem
		color: $color-light-green
		right: 24px
</style>
