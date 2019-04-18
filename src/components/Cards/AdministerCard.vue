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
			<VFlex ml-3 xs11>
				<h4>{{ doctor.nameOfDoctor }}</h4>
				<p><span class="italic-txt">{{ doctor.doctorsOffice }}</span></p>
				<p class="green-txt">{{ doctor.doctorType }}</p>
			</VFlex>
		</VLayout>
		<VDivider/>
		<VLayout pt-2 column>
			<h4>Har tilgang til:
				<span class="administer__access-text" v-for="(item, i) in doctor.hasAccessTo" :key="i">
					{{ `${item.checked ? item.name + "," : ''}`}}
				</span>
			</h4>
		</VLayout>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'
	import { Doctor } from '@/types/Doctor'

	@Component
	export default class AdministerCard extends Vue {
    @Prop() doctor !: Doctor
    @Prop() hide !: boolean
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
