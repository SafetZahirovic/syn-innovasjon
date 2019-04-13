//import { Module, mutation, VuexModule } from 'vuex-class-component/dist'
//import { Allergy } from '@/types/Allergy'
//import { action } from 'vuex-class-component/dist/actions'
//import { vueApollo } from '@/plugins/vue-apollo'
//import gql from 'graphql-tag'
//
//@Module({ namespacedPath: 'allergy/' })
//export class AllergyModule extends VuexModule {
//	allergies: Allergy[] = []
//
//	@mutation
//	setAllergies(allergies: Allergy[]) {
//		this.allergies = allergies
//	}
//
//	@action()
//	async fetchAllergies(patientId: string) {
//		const allergies = await vueApollo.defaultClient.query({
//			query: gql`query($patientId: String!){
//				allergies(patientId: $patientId) {
//					id
//					name
//					reaction
//					detected
//					allergicTo
//					allergySeverity
//					lastTested
//				}
//			}
//			`,
//			variables: {
//				patientId
//			}
//		})
//		this.setAllergies(allergies.data.allergies)
//	}
//}
