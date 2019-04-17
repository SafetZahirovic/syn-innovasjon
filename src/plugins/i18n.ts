import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
	en: {
		'Category': 'Category',
		'Meeting point': 'Meeting point',
		'Create': 'Create',
		'Regular Practitioner': 'Regular Practitioner'
	},
	nb: {
		'Category': 'Kategori',
		'Meeting point': 'Møtested',
		'Create': 'Opprett',
		'Regular Practitioner': 'Fastlege'
	}
}

export default new VueI18n({
	locale: 'nb',
	fallbackLocale: 'en',
	messages,
	silentTranslationWarn: true
})
