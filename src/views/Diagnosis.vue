<template>
	<VContainer>
		<SideBar>Diagnoser</SideBar>
		<HeaderJumbotron style="height: 110px" title="Diagnoser" icon="fal fa-notes-medical" />
		<div class="card-container view-container">
			<CardBase class="mt-4" v-for="diagnose in diagnoses" :key="diagnose.id">
				<VContainer class="card-content">
					<VLayout pb-3>
						<VFlex xs9>
							<VCardTitle class="card-title">
								<h4>{{ diagnose.name }}</h4>
							</VCardTitle>
						</VFlex>
						<VFlex xs3 text-xs-center>
							<VIcon class="cat-icon" v-if="diagnose.category === diagnosisCat.Heart">far fa-heartbeat</VIcon>
							<VIcon class="cat-icon" v-else-if="diagnose.category === diagnosisCat.Brain">far fa-brain</VIcon>
							<VIcon class="cat-icon" v-else>far fa-stomach</VIcon>
							<h6>{{ diagnose.category }}</h6>
						</VFlex>
					</VLayout>
					<VLayout pt-3>
						<VFlex xs12>
							<p><span class="bolded-txt">Dato diagnosert: </span>{{ diagnose.dateOfDiagnosis }}</p>
							<p><span class="bolded-txt">Beskrivelse: </span>{{ diagnose.description }}</p>
						</VFlex>
					</VLayout>
				</VContainer>
			</CardBase>
		</div>
	</VContainer>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import SideBar from '@/components/SideBar.vue'
	import HeaderJumbotron from '@/components/HeaderJumbotron.vue'
	import CardBase from '@/components/CardBase.vue'
	enum DiagnosisCategory {
		Heart = 'Hjerte',
		Brain = 'Hjerne',
		Intestines = 'Tarm'
	}

	@Component({
		components: { CardBase, HeaderJumbotron, SideBar }
	})
	export default class Diagnosis extends Vue {
		diagnoses = [{
				id: 0,
				name: 'Koronarsyndrom (KAD)',
				category: DiagnosisCategory.Heart,
				dateOfDiagnosis: '14.03.1995',
				description: 'Innsnevring av sentrale blodkar som fører blod til hjertet'
			},
			{
				id: 1,
				name: 'Hjerneslag',
				category: DiagnosisCategory.Brain,
				dateOfDiagnosis: '20.02.1992',
				description: 'Blokkering eller lekkasje i hjernearterier'
			},
			{
				id: 2,
				name: 'Inflammatorisk tarmsykdom',
				category: DiagnosisCategory.Intestines,
				dateOfDiagnosis: '05.10.1997',
				description: 'Kronisk betennelse i fordøyelseskanal'
			},
			{
				id: 3,
				name: 'Dehydrering påført av diarré',
				category: DiagnosisCategory.Intestines,
				dateOfDiagnosis: '18.07.2002',
				description: 'Kroppen mister hurtig væske og salt når man har diarré. Viktig med hyppig inntak av vann og salt mat'
			}]

		get diagnosisCat() {
			return DiagnosisCategory
		}
	}
</script>

<style lang="sass" scoped>
	.card-content
		padding: 0

	.card-title
		padding: 0

	.cat-icon
		color: $color-dark-gray
		font-size: 1.8rem
</style>
