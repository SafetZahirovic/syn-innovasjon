<template>
	<VContainer>
		<SideBar>Allergies & Intolerances</SideBar>
		<HeaderJumbotron title="Allergies & Intolerances" icon="fal fa-allergies" />
		<div class="card-container view-container">
			<CardBase v-for="allergy in allergies" :key="allergy.id" class="mb-4">
				<VContainer>
					<VLayout pb-3>
						<VFlex xs9>
							<VCardTitle class="card-title">
								<h4>{{ allergy.name }}</h4>
							</VCardTitle>
							<p class="italic-txt">{{ allergy.allergicTo }}</p>
						</VFlex>
						<VFlex xs3 text-xs-center>
							<VAvatar size="32" color="secondary" pa-0>
								<VIcon v-if="allergy.allergySeverity === 'SevereAllergy'" small color="error">fas fa-exclamation-triangle</VIcon>
								<VIcon v-if="allergy.allergySeverity === 'ModerateAllergy'" small color="warning">fas fa-exclamation</VIcon>
								<VIcon v-if="allergy.allergySeverity === 'MildAllergy'" small color="success">far fa-check</VIcon>
							</VAvatar>
							<h6>Allergy severity</h6>
						</VFlex>
					</VLayout>
					<VDivider></VDivider>
					<VLayout pt-3>
						<VFlex xs12>
							<p><span class="bolded-txt">Detected date: </span>{{ allergy.detected }}</p>
							<p><span class="bolded-txt">Last tested: </span>{{ allergy.lastTested }}</p>
							<p><span class="bolded-txt">Reaction: </span>{{ allergy.reaction }}</p>
						</VFlex>
					</VLayout>
				</VContainer>
			</CardBase>
		</div>
	</VContainer>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'
	import SideBar from '@/components/SideBar.vue'
	import HeaderJumbotron from '@/components/HeaderJumbotron.vue'
	import CardBase from '@/components/CardBase.vue'
	import { vxm } from '@/store'
	import { AllergySeverity } from '@/types/AllergySeverity'

	@Component({
		components: { CardBase, HeaderJumbotron, SideBar }
	})
	export default class Allergies extends Vue {
		//get allergies() {
		//	return vxm.allergy.allergies
		//}

		mounted() {
			//vxm.allergy.fetchAllergies('90ca942a-734e-417b-b021-1e5b4a77fd59')
		}
	}
</script>

<style lang="sass" scoped>
	.card-title
		padding: 0

	.allergy-description-text
		font-weight: 300
		font-size: 1.1rem
		color: $color-lighter-gray
</style>
