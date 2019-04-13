<template>
	<div>
		<side-bar>Vaccines</side-bar>
		<div class="header">
			<h1 class="vaccines-headline"> Vaccines </h1>
			<v-icon class="header-icon ml-4 mb-3">fal fa-syringe</v-icon>
		</div>
		<div class="chips-container">
			<v-chip
				v-for="(chip, index) in chipsInformation"
				:key="chip.chipsText"
				@click="selectChip(index)"
				:class="[ isSelected(index) ? 'chip-selected' : 'chip' ]">
				<v-avatar>
					<v-icon class="chip-icon">{{ chip.chipsIcon }}</v-icon>
				</v-avatar>
				<h6>{{ chip.chipsText }}</h6>
			</v-chip>
		</div>
		<div class="card-wrapper">
			<h3 v-if="chipSelected === 0 || chipSelected === 1" class="ml-5 pl-3 mt-4 text-uppercase">Ongoing Vaccinations</h3>
			<card-base
				v-if="chipSelected === 0 || chipSelected === 1"
				v-for="vaccine in onGoingVaccines"
				:key="vaccine.name"
				class="card mr-3 mt-2"
			>
				<div class="subheader-card">
					<div>
						<h4 class="mb-1"> {{ vaccine.name }}</h4>
						<p class="italic-txt"> {{ vaccine.description }}</p>
					</div>
					<div>
						<h2 class="vaccines-taken">1/{{ vaccine.vaccinationPlan.length }}</h2>
						<h6>Taken</h6>
					</div>
				</div>
				<v-divider
					color="#ededed"
					class="mb-3 mt-3"
				></v-divider>
				<div>
					<p class="mb-1"><span class="bolded-txt">First vaccine should be taken: </span> {{ vaccine.vaccinationPlan[0] }}</p>
					<p class="mb-1"><span class="bolded-txt">Second vaccine should be taken after: </span> <br> {{ vaccine.vaccinationPlan[0] }}</p>
					<p v-if="vaccine.vaccinationPlan.length > 2" class="mb-1"><span class="bolded-txt">First vaccine should be taken: </span> <br> Six months after the first </p>
				</div>
			</card-base>

			<h3 v-if="chipSelected === 0 || chipSelected === 2" class="ml-5 pl-3 mt-5 text-uppercase">Active Immunity Vaccines</h3>
			<card-base
				v-if="chipSelected === 0 || chipSelected === 2"
				v-for="vaccine in permanentVaccines"
				:key="vaccine.name"
				class="card mr-3 mt-2"
			>
				<div class="subheader-card">
					<div>
						<h4 class="mb-1"> {{ vaccine.name }}</h4>
						<p class="italic-txt"> {{ vaccine.description }}</p>
					</div>
				</div>
				<v-divider
					color="#ededed"
					class="mb-3 mt-3"
				></v-divider>
				<div>
					<p class="mb-1"><span class="bolded-txt">Vaccine taken: </span> {{ vaccine.vaccinationPlan[0] }}</p>
				</div>
			</card-base>

			<h3 v-if="chipSelected === 0 || chipSelected === 3" class="ml-5 pl-3 mt-5 text-uppercase">Renewable Vaccines</h3>
			<card-base
				v-if="chipSelected === 0 || chipSelected === 3"
				v-for="vaccine in renewableVaccines"
				:key="vaccine.name"
				class="card mr-3 mt-2">
				<div class="subheader-card">
					<div>
						<h4 class="mb-1"> {{ vaccine.name }}</h4>
						<p class="italic-txt"> {{ vaccine.description }}</p>
					</div>
				</div>
				<v-divider
					color="#ededed"
					class="mb-3 mt-3"
				></v-divider>
				<div>
					<p class="mb-1"><span class="bolded-txt">Vaccine taken: </span> {{ vaccine.vaccinationPlan[0] }}</p>
					<p class="mb-1"><span class="bolded-txt">Experation: </span> {{ vaccine.vaccinationPlan[0] }}</p>
				</div>
			</card-base>

			<h3 v-if="chipSelected === 0 || chipSelected === 4" class="ml-5 pl-3 mt-5 text-uppercase">Expired Vaccines</h3>
			<card-base
				v-if="chipSelected === 0 || chipSelected === 4"
				v-for="vaccine in expiredVaccines"
				:key="vaccine.name"
				class="card mr-3 mt-2">
				<div class="subheader-card">
					<div>
						<h4 class="mb-1"> {{ vaccine.name }}</h4>
						<p class="italic-txt"> {{ vaccine.description }}</p>
					</div>
				</div>
				<v-divider
					color="#ededed"
					class="mb-3 mt-3"
				></v-divider>
				<div>
					<p class="mb-1"><span class="bolded-txt">Vaccine taken: </span> {{ vaccine.vaccinationPlan[0] }}</p>
					<p class="mb-1"><span class="bolded-txt">Experation: </span> {{ vaccine.vaccinationPlan[0] }}</p>
				</div>
			</card-base>
		</div>
	</div>

</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'
	import SideBar from '@/components/SideBar.vue'
	import CardBase from '@/components/CardBase.vue'
	import { vxm } from '@/store'
	import { oc } from 'ts-optchain'

	@Component({
		components: { SideBar, CardBase }
	})

	export default class Vaccines extends Vue {
		chipSelected = 0
		chipsInformation = [
			{ chipsText: 'All', chipsIcon: 'far fa-check-double' },
			{ chipsText: 'Ongoing', chipsIcon: 'far fa-spinner' },
			{ chipsText: 'Permanent', chipsIcon: 'far fa-infinity' },
			{ chipsText: 'Renewable', chipsIcon: 'far fa-sync' },
			{ chipsText: 'Expired', chipsIcon: 'far fa-times' }
		]
		//get vaccineData() {
		//	return vxm.vaccine.vaccines
		//}
//
		//get onGoingVaccines() {
		//		return vxm.vaccine.vaccines.filter(vaccine => {
		//			return vaccine.status === 'Ongoing'
		//		})
		//}
//
		//get renewableVaccines() {
		//	return vxm.vaccine.vaccines.filter(vaccine => {
		//		return vaccine.status === 'Renewable'
		//	})
		//}
//
		//get permanentVaccines() {
		//	return vxm.vaccine.vaccines.filter(vaccine => {
		//		return vaccine.status === 'Permanent'
		//	})
		//}
//
		//get expiredVaccines() {
		//	return vxm.vaccine.vaccines.filter(vaccine => {
		//		return vaccine.status === 'Expired'
		//	})
		//}
//
		//mounted() {
		//	vxm.vaccine.fetchVaccines('90ca942a-734e-417b-b021-1e5b4a77fd59')
		//	console.log(this.onGoingVaccines)
		//}

		selectChip(index: number) {
			console.log(index)
			this.chipSelected = index
		}

		isSelected(index: number) {
			return index === this.chipSelected
		}
	}
</script>

<style lang="sass" scoped>
	.vaccines-headline
		margin-top: 16px
		margin-left: 40px

	h2
		line-height:  1.8rem
		margin-bottom: 6px

	h6
		margin-top: 0

	.header
		display: flex
		flex-direction: row

	.header-icon
		font-size: 5rem
		transform: rotate(270deg)
		color: $color-light-green

	.chips-container
		display: flex
		flex-direction: row
		overflow: hidden
		overflow-x: scroll
		padding-left: 48px !important
		padding-right: 24px

	.chip
		background: $color-light-green
		padding: 4px

	.chip-icon
		font-size: 1rem
		color: $color-dark-gray

	.chip-selected
		background-color: $color-neon-green
		padding: 4px

	.subheader-card
		display: flex
		flex-direction: row
		justify-content: space-between

	.card
		width: 80%

	.vaccines-taken
		text-align: center
		color: $color-dark-green

	.card-wrapper
		padding-bottom: 32px
		padding-right: 12px

</style>
