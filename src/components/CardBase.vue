<template>
	<VCard class="card-base">
		<slot></slot>
	</VCard>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'

	@Component
	export default class CardBase extends Vue {
	}
</script>

<style lang="sass" scoped>
	.card-base
		padding: 24px
		width: 100%
		margin-left: auto
		border-radius: 12px
		box-shadow: -5px 5px 20px 1px rgba(218, 234, 232, 0.7)
		-webkit-box-shadow: -5px 5px 20px 1px rgba(218, 234, 232, 0.7)
		-o-box-shadow: -5px 5px 20px 1px rgba(218, 234, 232, 0.7)
		-moz-box-shadow: -5px 5px 20px 1px rgba(218, 234, 232, 0.7)
</style>
