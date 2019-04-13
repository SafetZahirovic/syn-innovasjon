import Vue from 'vue'
import Vuex from 'vuex'
//import { PatientModule } from '@/store/modules/PatientModule'
//import { VaccineModule } from '@/store/modules/VaccineModule'
//import { AllergyModule } from '@/store/modules/AllergyModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
	modules: {
		//patient: PatientModule.ExtractVuexModule(PatientModule),
		//vaccine: VaccineModule.ExtractVuexModule(VaccineModule),
		//allergy: AllergyModule.ExtractVuexModule(AllergyModule)
	}
})

export const vxm = {
	//patient: PatientModule.CreateProxy(store, PatientModule),
	//vaccine: VaccineModule.CreateProxy(store, VaccineModule),
	//allergy: AllergyModule.CreateProxy(store, AllergyModule)
}
