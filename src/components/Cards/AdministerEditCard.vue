<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
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
				<p class="green-txt">R{{ doctorType }}</p>
			</VFlex>
		</VLayout>
		<VDivider/>
		<VLayout pt-2 column>
			<h4>Has access to:</h4>
			<VFlex v-for="(item, i) in fkData" :key="i" xs12>
				<VCheckbox
					hide-details="true"
					class="checkbox"
					:label="item"></VCheckbox>
			</VFlex>
		</VLayout>
	</div>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'
	import HeaderJumbotron from '@/components/HeaderJumbotron.vue'
	import SideBar from '@/components/SideBar.vue'
	import CardBase from '@/components/CardBase.vue'
	@Component({
		components: { CardBase, SideBar, HeaderJumbotron }
	})
	export default class AdministerEditCard extends Vue {
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
</style>
