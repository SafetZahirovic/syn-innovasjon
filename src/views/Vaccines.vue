<template>
	<div>
		<side-bar>Vaksinasjoner</side-bar>
		<div class="header">
			<h1 class="vaccines-headline"> Vaksinasjoner </h1>
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
			<h3 v-if="chipSelected === 0 || chipSelected === 1" class="ml-5 pl-3 mt-4 text-uppercase">Fornybare Vaksiner</h3>
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
						<h6>Tatt</h6>
					</div>
				</div>
				<v-divider
					color="#ededed"
					class="mb-3 mt-3"
				></v-divider>
				<div>
					<p class="mb-1"><span class="bolded-txt">Første vaksine ble tatt: </span> {{ vaccine.vaccinationPlan[0] }}</p>
					<p class="mb-1"><span class="bolded-txt">Andre vaksiner bør tas: </span> <br> Tre måneder etter den første</p>
					<p v-if="vaccine.vaccinationPlan.length > 2" class="mb-1"><span class="bolded-txt">Tredje vaksine bør tas: </span> <br> Seks måneder etter den første </p>
				</div>
			</card-base>

			<h3 v-if="chipSelected === 0 || chipSelected === 2" class="ml-5 pl-3 mt-5 text-uppercase">Permanente vaksiner</h3>
			<card-base
				v-if="chipSelected === 0 || chipSelected === 2"
				v-for="vaccine in permanentVaccines"
				:key="vaccine.name"
				class="card mr-3 mt-4"
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
					<p class="mb-1"><span class="bolded-txt">Vaksinen tatt: </span> {{ vaccine.vaccinationPlan[0] }}</p>
				</div>
			</card-base>

			<h3 v-if="chipSelected === 0 || chipSelected === 3" class="ml-5 pl-3 mt-5 text-uppercase">Fornybare Vaksiner</h3>
			<card-base
				v-if="chipSelected === 0 || chipSelected === 3"
				v-for="vaccine in renewableVaccines"
				:key="vaccine.name"
				class="card mr-3 mt-4">
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

			<h3 v-if="chipSelected === 0 || chipSelected === 4" class="ml-5 pl-3 mt-5 text-uppercase">Utløpte Vaksiner</h3>
			<card-base
				v-if="chipSelected === 0 || chipSelected === 4"
				v-for="vaccine in expiredVaccines"
				:key="vaccine.name"
				class="card mr-3 mt-4">
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
					<p class="mb-1"><span class="bolded-txt">Vaksinen tatt: </span> {{ vaccine.vaccinationPlan[0] }}</p>
					<p class="mb-1"><span class="bolded-txt">Utløpsdato: </span> {{ vaccine.vaccinationPlan[0] }}</p>
				</div>
			</card-base>
		</div>
	</div>

</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import SideBar from '@/components/SideBar.vue'
	import CardBase from '@/components/CardBase.vue'
	import { VaccinationStatus } from '@/types/VaccinationStatus'

  @Component({
		components: { SideBar, CardBase }
	})

	export default class Vaccines extends Vue {
		chipSelected = 0
		chipsInformation = [
			{ chipsText: 'Alle', chipsIcon: 'far fa-check-double' },
			{ chipsText: 'Pågående', chipsIcon: 'far fa-spinner' },
			{ chipsText: 'Permanente', chipsIcon: 'far fa-infinity' },
			{ chipsText: 'Fornybare', chipsIcon: 'far fa-sync' },
			{ chipsText: 'Utløpte', chipsIcon: 'far fa-times' }
		]

    vaccines: {
      patient: number;
      vaccinationPlan: string[];
      name: string;
      description: string;
      expiresAt: Date;
      status: VaccinationStatus
		}[] = [{
      name: 'Influensavaksine',
      patient: 0,
      status: VaccinationStatus.Renewable,
      expiresAt: new Date(),
      description: 'Vaksine mot infuensa',
      vaccinationPlan: [
        '2018-02-02',
        '2019-02-02'
      ]
		},
      {
        name: 'Pollenallergi Vaksine',
        patient: 0,
        status: VaccinationStatus.Renewable,
        expiresAt: new Date(),
        description: 'Vaksine mot forskjellige pollenallergier',
        vaccinationPlan: [
          '2017-02-01',
          '2019-06-20'
        ]
      },
      {
        name: 'Polio Vaksine',
        patient: 0,
        status: VaccinationStatus.Permanent,
        expiresAt: new Date(),
        description: 'Vaksine mot polio',
        vaccinationPlan: [
          '2017-02-01',
        ]
      },
      {
        name: 'Småkopp Vaksine',
        patient: 0,
        status: VaccinationStatus.Permanent,
        expiresAt: new Date(),
        description: 'Vaksine mot småkopper',
        vaccinationPlan: [
          '2017-02-01',
        ]
      },
      {
        name: 'Gardasil 9',
        patient: 0,
        status: VaccinationStatus.Ongoing,
        expiresAt: new Date(),
        description: 'HPV Vaccine',
        vaccinationPlan: [
          '2019-04-01',
          '2019-06-01',
          '2019-08-01',
        ]
      },
      {
        name: 'HBV Vaksine',
        patient: 0,
        status: VaccinationStatus.Expired,
        expiresAt: new Date(),
        description: 'Hepatitis B Virus Vaksine',
        vaccinationPlan: [
          '2017-04-01',
          '2019-01-01',
        ]
      },
    ]
    get onGoingVaccines() {
      return this.vaccines.filter(vaccine => {
        return vaccine.status === VaccinationStatus.Ongoing
       })
    }
    get vaccineData() {
      return this.vaccines
    }

    get renewableVaccines() {
      return this.vaccines.filter(vaccine => {
        return vaccine.status === VaccinationStatus.Renewable
      })
    }

    get permanentVaccines() {
      return this.vaccines.filter(vaccine => {
        return vaccine.status === VaccinationStatus.Permanent
      })
    }

    get expiredVaccines() {
      return this.vaccines.filter(vaccine => {
        return vaccine.status === VaccinationStatus.Expired
      })
    }

    mounted() {
    }

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
