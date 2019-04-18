<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div>
		<VLayout
			align-start
			justify-start
			row
			pb-2>
			<VFlex mr-3 xs1>
				<VIcon>fas fa-user-md</VIcon>
			</VFlex>
			<VFlex xs11>
				<h4>{{ doctors.nameOfDoctor}}</h4>
				<p><span class="italic-txt">{{ doctors.doctorsOffice }}</span></p>
				<p class="green-txt">{{ doctors.doctorType }}</p>
			</VFlex>
		</VLayout>
		<VDivider/>
		<VLayout pt-2 column>
			<h4>Has access to:</h4>

			<VFlex
				style="position: relative"
				v-for="(item, id) in fkData"
				:key="id"
				xs12>

				<VCheckbox
					hide-details
					:indeterminate="item.indeterminate"
					v-model="item.checked"
					class="checkbox"
					@change="addToDoctors(item)"
					:label="item.name"></VCheckbox>
				<VIcon @click="toggleShowSubCat(item.name)" style=" position:absolute; right: 0; top:20px;">fal fa-chevron-down</VIcon>
				<div
					v-if="item.expanded"
					style="margin-left: 31.5px"
					v-for="(subcat, i) in item.subCat"
					:key="i">
					<VCheckbox
						@change="checkCatFromSubCat(item.name)"
						hide-details
						v-model="subcat.checked"
						:label="subcat.name"></VCheckbox>
				</div>
			</VFlex>
		</VLayout>
	</div>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'
	import HeaderJumbotron from '@/components/HeaderJumbotron.vue'
	import SideBar from '@/components/SideBar.vue'
	import CardBase from '@/components/CardBase.vue'
	import { Doctor } from '@/types/Doctor'
	import VueI18n from '@/plugins/i18n'
	@Component({
		components: { CardBase, SideBar, HeaderJumbotron }
	})
	export default class AdministerEditCard extends Vue {
		@Prop() doctor !: Doctor
    @Prop() fkData !: string[]
    @Prop() checked !: boolean
    private doctorsNew: Doctor = this.doctor
    showSubCat = false

    get doctors() {
      return this.doctorsNew
    }
    toggleShowSubCat(catName: string) {
      this.doctors.hasAccessTo.forEach((e:any) => {
          if (catName === e.name) {
            e.expanded = !e.expanded
          }
      })
      this.showSubCat = !this.showSubCat
    }

    addToDoctors(item:{name:string, checked:boolean}) {
      this.doctorsNew.hasAccessTo.forEach((e:any) => {
        if (e.name === item.name) {
          e.checked ? e.checked = true : e.checked = false
        }
      })
      this.$emit('update', this.doctorsNew)
    }
    checkCatFromSubCat(name: string) {
      this.doctors.hasAccessTo.forEach((e:any) => {
          if (Object.values(e.subCat).every((o:any) => o.checked === true)) {
            e.indeterminate = false
            e.checked = true
          } else if (Object.values(e.subCat).every((o: any) => o.checked === false)) {
            e.checked = false
            e.indeterminate = false
          } else if (e.name === name && Object.values(e.subCat).some((o: any) => o.checked === false)) {
            e.indeterminate = true
          }
      })
    }
	}
</script>
<style lang="sass" scoped>
	.administer
		&__panel
			box-shadow: none
		&__expand
			display: flex
			flex-grow: 0!important
			justify-content: flex-start
			&__header
				justify-content: space-evenly
			&__content
				margin-left: auto
				width: 85%
		&__icon
			display: flex
			justify-content: start
			width: 10%
			flex: 0
			margin-right: 2rem
		&__save-button
			margin: 30px 0 0 0
			background: $color-dark-gray
			color: $color-neon-green
			border-radius: 5em
			&__icon
				margin-right: 10px
			&__text
				color: $color-neon-green
</style>
