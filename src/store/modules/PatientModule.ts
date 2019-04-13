//import { Module, VuexModule, mutation, action } from 'vuex-class-component'
//import { Patient } from '../../../../backend/src/entities/Patient'
//import { vueApollo } from '@/plugins/vue-apollo'
//import gql from 'graphql-tag'
//
//@Module({ namespacedPath: 'patient/' })
//export class PatientModule extends VuexModule {
//	patients: Patient[] = []
//
//	@mutation
//	setPatients(patients: Patient[]) {
//		this.patients = patients
//	}
//
//	@action()
//	async fetchPatients() {
//		const patients = await vueApollo.defaultClient.query({
//			query: gql`
//				query {
//					patients {
//						id
//						firstName
//						lastName
//						birthDate
//						bloodType
//						organDonor
//					}
//				}
//			`
//		})
//		this.setPatients(patients.data.patients)
//	}
//}
