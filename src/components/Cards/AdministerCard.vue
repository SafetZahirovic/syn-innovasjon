<template>
	<div>
		<VLayout
			align-start
			justify-start
			row
			pb-2>
			<VFlex xs1>
				<VIcon>fas fa-user-md</VIcon>
			</VFlex>
			<VFlex xs11>
				<h4>{{ nameOfDoctor }}</h4>
				<p><span class="italic-txt">{{ doctorsOffice }}</span></p>
				<p class="green-txt">{{ doctorType }}</p>
			</VFlex>
		</VLayout>
		<VDivider/>
		<VLayout pt-2 column>
			<h4>Has access to:
				<span class="administer__access-text" v-for="(item, i) in fkData" :key="i">
					{{ `${item},`}}
				</span>
			</h4>
		</VLayout>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'

	@Component
	export default class AdministerCard extends Vue {
			@Prop() nameOfDoctor !: string
			@Prop() fkData !: string[]
			@Prop() doctorsOffice !: string
			@Prop() doctorType !: string
	}
</script>

<style lang="sass" scoped>
	.administer
		&__panel
			box-shadow: none
		&__expand
			display: flex
			flex-grow: 0!important
			justify-content: flex-start
			&__header
				justify-content: space-evenly
			&__content
				margin-left: auto
				width: 85%
		&__icon
			display: flex
			justify-content: start
			width: 10%
			flex: 0
			margin-right: 2rem
		&__save-button
			margin: 30px 0 0 0
			background: $color-dark-gray
			color: $color-neon-green
			border-radius: 5em
			&__icon
				margin-right: 10px
			&__text
				color: $color-neon-green
		&__access-text
			font-family: 'Maison Neue'
			font-weight: 300
			font-size: 1.1rem
			color: $color-lighter-gray
			margin-bottom: 0
			line-height: 1.7rem
</style>
