<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div>
		<SideBar>Administer accesses</SideBar>
		<HeaderJumbotron title="Administer  Accesses" style="padding-top: 16px; padding-left: 40px"/>
		<div class="card-container view-container" style="padding: 32px;">
			<CardBase>
				<AdministerEditCard
					v-if="changeAccessFirst"
					:fk-data="fkData"
					nameOfDoctor="Ragnar Andreassen"
					doctorsOffice="Lillegrensen Legesenter"
					doctorType="Regular Practitioner"></AdministerEditCard>
				<AdministerCard
					v-if="!changeAccessFirst"
					:fk-data="fkData"
					:hideDetails="this.changeAccessFirst"
					nameOfDoctor="Ragnar Andreassen"
					doctorsOffice="Lillegrensen Legesenter"
					doctorType="Regular Practitioner"/>
				<VBtn flat class="administer__save-button" @click="toggleAccessFirst()">
					<VIcon class="administer__save-button__icon">{{ !changeAccessFirst ? 'fas fa-lock' : 'fas fa-check' }}</VIcon>
					<h6 class="administer__save-button__text">{{ !changeAccessFirst ? 'Administer access' : 'Save changes' }}</h6>
				</VBtn>
			</CardBase>
			<CardBase class="mt-5">
				<AdministerEditCard
					v-if="changeAccessSecond"
					:fk-data="fkData"
					nameOfDoctor="Tobias Olsen"
					doctorsOffice="Oslo Legevakt"
					doctorType="Gynecologist"></AdministerEditCard>
				<AdministerCard
					v-if="!changeAccessSecond"
					:fk-data="fkData"
					:hideDetails="this.changeAccessSecond"
					nameOfDoctor="Tobias Olsen"
					doctorsOffice="Oslo Legevakt"
					doctorType="Gynecologist"/>
				<VBtn flat class="administer__save-button" @click="toggleAccessSecond()">
					<VIcon class="administer__save-button__icon">{{ !changeAccessSecond ? 'fas fa-lock' : 'fas fa-check' }}</VIcon>
					<h6 class="administer__save-button__text">{{ !changeAccessSecond ? 'Administer access' : 'Save changes' }}</h6>
				</VBtn>
			</CardBase>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import HeaderJumbotron from '@/components/HeaderJumbotron.vue'
	import SideBar from '@/components/SideBar.vue'
	import CardBase from '@/components/CardBase.vue'
	import AdministerEditCard from '@/components/Cards/AdministerEditCard.vue'
	import AdministerCard from '@/components/Cards/AdministerCard.vue'
	@Component({
		components: { AdministerCard, AdministerEditCard, CardBase, SideBar, HeaderJumbotron }
	})
	export default class AdministerAccesses extends Vue {
		fkData= ['Prescriptions & Medications', 'Diagnosis', 'Allergies & Intolerances', 'Vacines']
		changeAccessFirst = false
		changeAccessSecond = false
		toggleAccessFirst() {
			this.changeAccessFirst = !this.changeAccessFirst
		}
		toggleAccessSecond() {
			this.changeAccessSecond = !this.changeAccessSecond
		}
	}
</script>

<style lang="sass" scoped>
	h6
		margin: 0
	btn
		&__save-button
			margin: 30px 0 0 0
			background: $color-dark-gray
			color: $color-neon-green
			border-radius: 5em
	.administer
		&__save-button
			width: 100%
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
