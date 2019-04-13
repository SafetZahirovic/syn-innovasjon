//import { Module, VuexModule, mutation, action } from 'vuex-class-component'
//import { Patient } from '../../../../backend/src/entities/Patient'
//import { vueApollo } from '@/plugins/vue-apollo'
//import gql from 'graphql-tag'
//import { Vaccine } from '../../../../backend/src/entities/Vaccine'
//
//@Module({ namespacedPath: 'vaccine/' })
//export class VaccineModule extends VuexModule {
//	vaccines: Vaccine[] = []
//
//	@mutation
//	setVaccines(vaccines: Vaccine[]) {
//		this.vaccines = vaccines
//	}
//
//	@action()
//	async fetchVaccines(patientId: string) {
//		const vaccines = await vueApollo.defaultClient.query({
//			query: gql`query($patientId: String!){
//					vaccines(patientId: $patientId) {
//						id
//						name
//						status
//						expiresAt
//						description
//						vaccinationPlan
//					}
//			}
//			`,
//			variables: {
//				patientId
//			}
//		})
//		this.setVaccines(vaccines.data.vaccines)
//	}
//}
