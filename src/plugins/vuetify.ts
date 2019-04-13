import Vue from 'vue'
import Vuetify from 'vuetify'
import '@/design/vuetify.styl'

Vue.use(Vuetify, {
	theme: {
		primary: '#00AA91',
		secondary: '#333333',
		accent: '#9DD6CE',
		error: '#FA035A',
		info: '#DAEAE8',
		success: '#2BFFB9',
		warning: '#FFB100'
	},
	iconfont: 'fa'
})
