<template>
	<VContainer>
		<SideBar>Resept og medisiner</SideBar>
		<HeaderJumbotron style="height: 110px" title="Resept og medisiner" icon="fal fa-pills" />
		<div class="card-container view-container">
			<CardBase class="mt-4" v-for='item in this.sortedByActive' v-bind:key="item.id">
				<VLayout pb-3>
					<VFlex xs8>
						<VCardTitle class="card-title">
							<!--<h4>{{ this.prescriptionMedication.name }}</h4>-->
							<h4>{{ item.values.name }}</h4>
						</VCardTitle>
						<!--<p class="italic-txt">{{ this.prescriptionMedication.description }}</p>-->
						<p class="italic-txt">{{ item.values.description }}</p>
					</VFlex>
					<VFlex xs4 text-xs-center>
						<!--<div :style="[this.prescriptionMedication.active ? {background:red} : {background:grey}]" class="prescription__status mb-2">{{ this.prescriptionMedication.active ? 'active' : 'expired' }}</div>-->
						<div :class="[item.values.active && {'background-neon':true}]" class="prescription__status mb-2">
							<h6>{{ item.values.active ? 'Aktive' : 'Utløpt' }}</h6>
						</div>
						<div class="d-flex align-center">
							<!--<h6 class="pr-1">{{ this.prescriptionMedication.isMedicationStrong && 'strong'}}</h6>-->
							<h6 class="pr-1">{{ item.values.isMedicationStrong ? 'Sterke' : ""}}</h6>
							<VAvatar
								size="32"
								class="warning-strong"
								v-bind:style="item.values.isMedicationStrong ? {'display':'block'} : {'display':'none'}"
								color="secondary"
								pa-0>
								<!--<VIcon :style="[this.prescriptionMedication.isMedicationStrong ? {display:block} : {display:none}]" small color="error">fas fa-exclamation-triangle</VIcon>-->
								<VIcon
									small
									color="error"
									class="warning-icon">fas fa-exclamation-triangle</VIcon>
							</VAvatar>
						</div>
					</VFlex>
				</VLayout>
				<VDivider></VDivider>
				<VLayout pt-3>
					<VFlex xs12>
						<!--<p><span class="bolded-txt">Issue date: </span>{{ this.prescriptionMedication.issueDate }}</p>
						<p><span class="bolded-txt">Expiration date: </span>{{ this.prescriptionMedication.expirationDate }}</p>
						<p><span class="bolded-txt">Dossage & Directions: </span>{{ this.prescriptionMedication.dossageDirection }}</p>-->
						<p><span class="bolded-txt">Utgivelsesdato: </span>{{ item.values.issueDate }}</p>
						<p><span class="bolded-txt">Utløpsdato: </span>{{ item.values.expirationDate }}</p>
						<p><span class="bolded-txt">Dosering og beskrivelse: </span>{{ item.values.dossageDirection }}</p>
					</VFlex>
				</VLayout>
			</CardBase>
		</div>
	</VContainer>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from 'vue-property-decorator'
	import SideBar from '@/components/SideBar.vue'
	import HeaderJumbotron from '@/components/HeaderJumbotron.vue'
	import CardBase from '@/components/CardBase.vue'
	import { PrescriptionMedication } from '@/types/PrescriptionMedication'
	@Component({
		components: { CardBase, HeaderJumbotron, SideBar }
	})
	export default class PrescriptionsMedications extends Vue {
		@Prop() prescriptionMedication !: PrescriptionMedication

    prescriptionMedicationDB: PMValues[] = [
      {
        values: {
        id: '0',
        name: 'Microgynon',
        description: 'Prevensjon',
        isMedicationStrong: false,
        issueDate: '2008-10-29',
        expirationDate: 'Aldri',
        dossageDirection: 'To piller hver morgen',
        active: true
      }
    },
      {
        values: {
          id: '1',
          name: 'Paralgin Forte',
          description: 'Sterke smertestillende',
          isMedicationStrong: true,
          issueDate: '2008-05-15',
          expirationDate: 'Aldri',
          dossageDirection: 'En pille etter dagens første måltid',
          active: true
        },
      },
      {
        values: {
          id: '2',
          name: 'Apo-Amoxi',
          description: 'Antibiotika',
          isMedicationStrong: false,
          issueDate: '2009-01-02',
          expirationDate: '2009-02-02',
          dossageDirection: 'To piller om dagen med minst seks timer mellom hver dosering',
          active: false
        },
      },
      {
        values: {
          id: '3',
          name: 'Hydrocodone',
          description: 'Opioid',
          isMedicationStrong: true,
          issueDate: '2004-11-18',
          expirationDate: 'Aldri',
          dossageDirection: 'Tre spiseskjeer om dagen med minst tre timer mellom hver dosering',
          active: false
        },
      }
    ]

    get sortedByActive() {
      return this.prescriptionMedicationDB.sort(function(x, y) {
        return (x.values.active === y.values.active) ? 0 : x.values.active ? -1 : 1
      })
    }
    mounted() {
    }
	}

  interface PMValues{
    values: PrescriptionMedication
  }

</script>

<style lang="sass" scoped>
	h6
		margin: 0

	.warning-icon
		font-size: 1em !important

	.prescription
		&__status
			background: $color-light-green
			border-radius: 5em
			padding: 4px
			margin-top: 3px

	.background-neon
		background: $color-neon-green

	.card-title
		padding: 0
		.allergy-description-text
			font-weight: 300
			font-size: 1.1rem
			color: $color-lighter-gray

</style>
