import { BloodType } from '../types/BloodType'
<template>
	<VContainer>
		<SideBar>My Profile</SideBar>
		<HeaderJumbotron title="My Profile" icon="fal fa-user-alt"></HeaderJumbotron>
		<div class="card-container view-container" v-if="patient">
			<CardBase>
				<VLayout>
					<VFlex>
						<div class="d-inline-flex">
							<div class="profile__icon">
								<VIcon>far fa-user-alt</VIcon>
							</div>
							<h4>Name: <span class="normal-txt">{{ fullName }}</span></h4>
						</div>
						<div class="d-inline-flex">
							<div class="profile__icon"><VIcon>far fa-calendar-day</VIcon></div>
							<h4>Birth Date: <span class="normal-txt">{{ birthDate }}</span></h4>
						</div>
						<div class="d-inline-flex">
							<div class="profile__icon"><VIcon>far fa-user-md</VIcon></div>
							<h4>Regular General Practitioner: <br><span class="normal-txt">Ola Normann</span></h4>
						</div>
						<div class="d-inline-flex">
							<div class="profile__icon"><VIcon>far fa-tint</VIcon></div>
							<h4>Blood type: <span class="normal-txt">O-positive</span></h4>
						</div>
						<div class="profile__donor">
							<div class="profile__icon"><VIcon>far fa-hand-holding-heart</VIcon></div>
							<h4>Organ Donor: </h4>
							<VSwitch class="mt-0 pt-0 profile__donor__switch"></VSwitch>
						</div>
					</VFlex>
				</VLayout>
				<VDivider/>
				<VLayout pt-4>
					<VFlex >
						<VFlex class="profile__emergency">
							<VFlex xs1 style="margin-right: 5px" class="profile__icon">
								<VIcon>far fa-address-book</VIcon>
							</VFlex>
							<VFlex xs10>
								<h4>Emergency Contacts</h4>
								<p v-if="!editMode">{{ users[0].emergencyContact.name }}</p>
								<p v-if="!editMode">{{ users[0].emergencyContact.number }}</p>
								<VTextField
									v-if="editMode"
									v-model="users[0].emergencyContact.name"
									class="pa0 ma0"
									hide-details
									label="Edit name"></VTextField>
								<VTextField
									v-if="editMode"
									v-model="users[0].emergencyContact.number"
									hide-details
									class="pa0 ma0"
									label="Edit phone number"></VTextField>

							</VFlex>
							<VFlex xs1>
								<VIcon @click="setEditMode" class="end-icon">fas fa-pen</VIcon>
							</VFlex>

						</VFlex>
						<VCardActions v-if="editMode" @click="setEditMode" class="justify-center">
							<VBtn flat class="profile__emergency__btn">
								<VIcon class="mx-2">fas fa-check</VIcon>
								<h6 class="neon-green-txt">Save changes</h6>
							</VBtn>
						</VCardActions>
					</VFlex>
				</VLayout>

			</CardBase>
		</div>
	</VContainer>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import SideBar from '@/components/SideBar.vue'
	import HeaderJumbotron from '@/components/HeaderJumbotron.vue'
	import CardBase from '@/components/CardBase.vue'
	import { BloodType } from '@/types/BloodType'
	import { oc } from 'ts-optchain'

  @Component({
		components: { CardBase, HeaderJumbotron, SideBar }
	})
	export default class Profile extends Vue {
    users: {
      firstName: String,
      lastName: String,
      birthDate: String,
      organDonor: Boolean,
      bloodType: BloodType,
      emergencyContact: {name: string, number: string}
    }[] = [{
      firstName: 'Ola',
      lastName: 'Nordmann',
      birthDate: '1814-05-17',
      organDonor: true,
      bloodType: BloodType.ABpositive,
      emergencyContact: {
        name: 'Per Olav',
        number: '56 77 21 99'
      }
    }]

    editMode = false

		get patient() {
			return this.users.find(() => true)
		}

		get fullName() {
			return oc(this.patient).firstName('') + ' ' + oc(this.patient).lastName('')
		}

		get birthDate() : string {
			if (this.patient) {
				// @ts-ignore
				return (this.patient.birthDate as string).slice(0, 10)
			}
			return ''
		}

		mounted() {
			// vxm.patient.fetchPatients()
		}
    setEditMode() {
      this.editMode = !this.editMode
      console.log(this.editMode)
    }
	}
</script>

<style lang="sass" scoped>
	.profile
		&__icon
			width: 30px
		&__donor
			display: flex
			justify-content: space-between
			align-content: center
			&__switch
				justify-content: flex-end
				left: 8px
		&__emergency
			display: flex
			justify-content: space-between
			&__btn
				width: 100%
				background: $color-dark-gray
				border-radius: 5em
				color: $color-neon-green
				margin-top: 24px
	.v-input__control
		position: absolute!important
		right: 8px!important

	.d-inline-flex
		margin-bottom: 8px

	.end-icon
		flex-grow: 1
		text-align: right
		color: $color-medium-green

	.justify-center
		padding: 0

	h6
		margin-top: 0
</style>
