<template>
	<VContainer>
		<SideBar>Prescriptions & Medications</SideBar>
		<HeaderJumbotron title="Prescriptions & Medications" icon="fal fa-pills" />
		<div class="card-container view-container">
			<CardBase>
				<VLayout pb-3>
					<VFlex xs8>
						<VCardTitle class="card-title">
							<!--<h4>{{ this.prescriptionMedication.name }}</h4>-->
							<h4>Microgynon</h4>
						</VCardTitle>
						<!--<p class="italic-txt">{{ this.prescriptionMedication.description }}</p>-->
						<p class="italic-txt">Birth control</p>
					</VFlex>
					<VFlex xs4 text-xs-center>
						<!--<div :style="[this.prescriptionMedication.active ? {background:red} : {background:grey}]" class="prescription__status mb-2">{{ this.prescriptionMedication.active ? 'active' : 'expired' }}</div>-->
						<div :class="{ 'background-neon': true}" class="prescription__status mb-2">
							<h6>{{ false ? 'active' : 'expired' }}</h6>
						</div>
						<div class="d-flex align-center">
							<!--<h6 class="pr-1">{{ this.prescriptionMedication.isMedicationStrong && 'strong'}}</h6>-->
							<h6 class="pr-1">{{ true && 'strong'}}</h6>
							<VAvatar class="warning-strong" color="secondary" pa-0>
								<!--<VIcon :style="[this.prescriptionMedication.isMedicationStrong ? {display:block} : {display:none}]" small color="error">fas fa-exclamation-triangle</VIcon>-->
								<VIcon
									:style="[true ? {display:block} : {display:none}]"
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
						<p><span class="bolded-txt">Issue date: </span>20.05.1990</p>
						<p><span class="bolded-txt">Expiration date: </span>Never</p>
						<p><span class="bolded-txt">Dossage & Directions: </span>Take 2 pills every morning</p>
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
	}
</script>

<style lang="sass" scoped>
	h6
		margin: 0

	.warning-strong
		width: 16px !important
		height: 25px !important

	.warning-icon
		font-size: 0.9em !important

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
