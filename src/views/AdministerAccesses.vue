import { Accesses } from '../types/Accesses'
<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<VContainer>
		<SideBar>Administrer tilganger</SideBar>
		<HeaderJumbotron title="Administrer tilganger" style="width:80%; padding-top: 16px; margin-left: 0; height: 110px"/>
		<div style="margin-bottom: 16px;" class="card-container view-container mt-4" >
			<CardBase class="mt-4" v-for="doctors in doctorValuesDB" v-bind:key="doctors.values.id">
				<AdministerEditCard
					v-if="doctors.values.hide"
					:doctor="doctors.values"
					:fkData="doctors.values.hasAccessTo"
					@update="test"
				></AdministerEditCard>
				<AdministerCard
					v-if="!doctors.values.hide"
					:doctor="doctors.values"
					:hide="doctors.values.hide"/>
				<VBtn flat class="administer__save-button" @click="toggleAccess(doctors.values.id)">
					<VIcon style="z-index: 1;" class="administer__save-button__icon">{{ !doctors.values.hide ? 'fas fa-lock' : 'fas fa-check' }}</VIcon>
					<h6 style="z-index: 1;" class="administer__save-button__text">{{ !doctors.values.hide ? 'Administrer tilgang' : 'Lagre' }}</h6>
				</VBtn>
			</CardBase>
		</div>
	</VContainer>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import HeaderJumbotron from '@/components/HeaderJumbotron.vue'
	import SideBar from '@/components/SideBar.vue'
	import CardBase from '@/components/CardBase.vue'
	import AdministerEditCard from '@/components/Cards/AdministerEditCard.vue'
	import AdministerCard from '@/components/Cards/AdministerCard.vue'
	import { Doctor } from '@/types/Doctor'
	import VueI18n from 'vue-i18n'
	import { Accesses } from '@/types/Accesses'

  @Component({
		components: { AdministerCard, AdministerEditCard, CardBase, SideBar, HeaderJumbotron }
	})
	export default class AdministerAccesses extends Vue {
		fkData= [
      { name: 'Prescriptions & Medications', checked: false },
      { name: 'Diagnosis', checked: false },
      { name: 'Allergies & Intolerances', checked: false },
      { name: 'Vacines', checked: false }
      ]

    doctorValuesDB: DoctorValues[] = [
      {
        values: {
          id: '0',
          nameOfDoctor: 'Ragnar Andreassen',
          doctorsOffice: 'Lillegrensen Legesenter',
          doctorType: 'Fastlege',
          hasAccessTo: [
            { name: 'Resepter og medisiner',
              checked: false,
              expanded: false,
              indeterminate: false,
              subCat: [
                {
                name: 'Microgynon',
                checked: false
                },
                {
                  name: 'Paralgin forte',
                  checked: false
                },
                {
                  name: 'Apo-Amoxi',
                  checked: false
                },
                {
                  name: 'Hydrocodone',
                  checked: false
                },
              ]
            },
            {
              name: 'Diagnoser',
              checked: true,
              expanded: false,
              indeterminate: false,
              subCat: [
                {
                  name: 'Koronararteriesykdom',
                  checked: false
                },
                {
                  name: 'Hjerneslag',
                  checked: false
                },
                {
                  name: 'Inflammatorisk tarmsykdom',
                  checked: false
                },
                {
                  name: 'Dehydrering på grunn av diarrésykdommer',
                  checked: false
                },
              ]
            },
            {
              name: 'Allergier og intoleranser',
              checked: true,
              expanded: false,
              indeterminate: false,
              subCat: [
                {
                  name: 'Sitrusallergi',
                  checked: false
                },
                {
                  name: 'Laktoseintoleranse',
                  checked: false
                },
                {
                  name: 'Pelsallergi',
                  checked: false
                },
              ]
            },
            { name: 'Vaksiner',
              checked: false,
              expanded: false,
              indeterminate: false,
              subCat: [
                {
                  name: 'Microgynon',
                  checked: false
                },
                {
                  name: 'Paralgin forte',
                  checked: false
                },
                {
                  name: 'Apo-Amoxi',
                  checked: false
                },
                {
                  name: 'Hydrocodone',
                  checked: false
                },
              ]
            }
          ],
          hide: false
        }
      },
      {
        values: {
          id: '1',
          nameOfDoctor: 'Tobias Olsen',
          doctorsOffice: 'Oslo Legevakt',
          doctorType: 'Fysioterapeut',
          hasAccessTo: [
            {
              name: 'Resepter og medisiner',
              checked: false,
              expanded: false,
              indeterminate: false,
              subCat: [
                {
                  name: 'Microgynon',
                  checked: false
                },
                {
                  name: 'Paralgin forte',
                  checked: false
                },
                {
                  name: 'Apo-Amoxi',
                  checked: false
                },
                {
                  name: 'Hydrocodone',
                  checked: false
                },
              ]
            },
            {
              name: 'Diagnoser',
              checked: true,
              expanded: false,
              indeterminate: false,
              subCat: [
                {
                  name: 'Koronararteriesykdom',
                  checked: false
                },
                {
                  name: 'Hjerneslag',
                  checked: false
                },
                {
                  name: 'Inflammatorisk tarmsykdom',
                  checked: false
                },
                {
                  name: 'Dehydrering på grunn av diarrésykdommer',
                  checked: false
                },
              ]
            },
            {
              name: 'Vaksiner',
              checked: false,
              expanded: false,
              indeterminate: false,
              subCat: [
                {
                  name: 'Influensavaksine',
                  checked: false
                },
                {
                  name: 'Pollenallergi Vaksine',
                  checked: false
                },
                {
                  name: 'Polio Vaksine',
                  checked: false
                },
                {
                  name: 'Småkopper Vaksine',
                  checked: false
                },
                {
                  name: 'Gardasil 9',
                  checked: false
                },
                {
                  name: 'HBV Vaksine',
                  checked: false
                },
              ]
            },
            {
              name: 'Vaksiner',
              checked: false,
              expanded: false,
              indeterminate: false,
              subCat: [
                {
                  name: 'Influensavaksine',
                  checked: false
                },
                {
                  name: 'Pollenallergi Vaksine',
                  checked: false
                },
                {
                  name: 'Polio Vaksine',
                  checked: false
                },
                {
                  name: 'Kopper Vaksine',
                  checked: false
                },
                {
                  name: 'Gardasil 9',
                  checked: false
                },
                {
                  name: 'HBV Vaksine',
                  checked: false
                },
              ]
            }],
          hide: false
        }
      }
    ]
    hide = false
    checked = false
    doctor = null

    mounted() {
      this.returnFilteredResults()
      this.checkAll()
    }

		toggleAccess(id:string) {
      this.doctorValuesDB.forEach(e => {
        if (id === e.values.id) {
          e.values.hide = !e.values.hide
        }
      })
		}

    test(value:Doctor) {
      Object.values(this.doctorValuesDB).map((values, index) => {
        if (values.values.id === value.id) {
          values.values = value
        }
      })
      this.checkAll()
    }
		returnFilteredResults() {
      Object.values(this.doctorValuesDB).map((value, index) => {
        value.values.hasAccessTo.forEach((e:any) => {
          this.fkData.forEach(x => {
              if (x.name === e) {
                x.checked = true
              }
            }
          )
        })
      })
    }
    checkAll() {
      Object.values(this.doctorValuesDB).map((value, index) => {
        value.values.hasAccessTo.forEach((e:any) => {
          if (e.checked === true) {
            e.subCat.forEach((x:any) => {
              x.checked = true
            })
          } else {
            e.subCat.forEach((x:any) => {
              x.checked = false
            })
          }
        })
      })
    }
	}
	interface DoctorValues{
    values: Doctor
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
