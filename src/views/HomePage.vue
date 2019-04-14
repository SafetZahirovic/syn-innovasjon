<template>
	<div>
		<h1 class="home-headline">My Health</h1>
		<div class="card-list">
			<div class="card-row">
				<CardBase
					v-for="card in menuItems1"
					:key="card.cardName"
					class="card"
					v-on:click.native="routeTo(card.linkTo)">
					<v-icon class="icon mt-2 mb-2 ">{{ card.cardIcon}}</v-icon>
					<h4 class="pb-1">{{ card.cardName }}</h4>
				</CardBase>
			</div>
			<div class="card-row">
				<CardBase
					v-for="card in menuItems2"
					:key="card.cardName"
					class="card"
					v-on:click.native="routeTo(card.linkTo)">
					<v-icon class="icon mt-2 mb-2">{{ card.cardIcon}}</v-icon>
					<h4 class="pb-1">{{ card.cardName }}</h4>
				</CardBase>
			</div>
			<div class="card-row">
				<CardBase class="card bottom-card" v-on:click.native="routeTo(bottomCard.linkTo)">
					<v-icon class="icon mt-2 mb-2">{{ bottomCard.cardIcon }}</v-icon>
					<h4 class="pb-1">{{ bottomCard.cardName }}</h4>
				</CardBase>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import CardBase from '@/components/CardBase.vue'
	import HeaderJumbotron from '@/components/HeaderJumbotron.vue'
	@Component({
		components: { HeaderJumbotron, CardBase }
	})
	export default class HomePage extends Vue {
		menuItems1 = [
			{
				cardName: 'Prescriptions & Medications',
				cardIcon: 'fal fa-capsules',
				linkTo: '/prescriptions'
			},
			{
				cardName: 'Diagnosis',
				cardIcon: 'fal fa-notes-medical',
				linkTo: '/diagnosis'
			},
		]
		menuItems2 = [
			{
				cardName: 'Allergies and Intolerances',
				cardIcon: 'fal fa-allergies',
				linkTo: '/allergies'
			},
			{
				cardName: 'Vaccination',
				cardIcon: 'fal fa-syringe',
				linkTo: '/vaccines'
			},
		]
		bottomCard = {
			cardName: 'Administer access',
			cardIcon: 'fal fa-eye',
			linkTo: '/administer'
		}

		routeTo(route: string) {
			console.log(route)
			this.$router.push(route)
		}
	}
</script>

<style lang="sass" scoped>
	.home-headline
		margin: 16px 36px 36px

	.icon
		color: $color-dark-green
		font-size: 4.2rem

	.card
		text-align: center
		width: 47%
		margin: 0
		display: flex
		flex-direction: column
		justify-content: space-between

	.card:nth-child(2n + 2)
		margin-left: 6%

	.bottom-card
		width: 100%
		align-self: center

	.card-row
		display: flex
		flex-direction: row
		width: 85%
		padding-top: 16px
		margin: 0 auto

	.card-list
		display: flex
		flex-direction: column
		justify-content: center

	h4
		font-weight: bold
</style>
