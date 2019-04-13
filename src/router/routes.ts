import { RouteConfig } from 'vue-router'
// @ts-ignore
import Vue, { ComponentOptions, CreateElement, RenderContext } from 'vue'
import { AsyncComponentFactory, DefaultProps } from 'vue/types/options'

export const routes: RouteConfig[] = [
	{
		path: '/',
		name: 'homepage',
		component: () => lazyLoadView(import('@/views/HomePage.vue'))
	},
	{
		path: '/about',
		name: 'about',
		component: () => lazyLoadView(import('@/views/About.vue'))
	},
	{
		path: '/profile',
		name: 'profile',
		component: () => lazyLoadView(import('@/views/Profile.vue'))
	},
	{
		path: '/allergies',
		name: 'allergies',
		component: () => lazyLoadView(import('@/views/Allergies.vue'))
	},
	{
		path: '/diagnosis',
		name: 'diagnosis',
		component: () => lazyLoadView(import('@/views/Diagnosis.vue'))
	},
	{
		path: '/vaccines',
		name: 'vaccines',
		component: () => lazyLoadView(import('@/views/Vaccines.vue'))
	},
	{
		path: '/prescriptions',
		name: 'prescriptions',
		component: () => lazyLoadView(import('@/views/PrescriptionsMedications.vue'))
	},
	{
		path: '/administer',
		name: 'administer',
		component: () => lazyLoadView(import('@/views/AdministerAccesses.vue'))
	}
]

function lazyLoadView(AsyncView: any): Promise<ComponentOptions<Vue>> {
	const AsyncHandler: AsyncComponentFactory = () => ({
		component: AsyncView,
		// A component to use while the component is loading.
		loading: require('@/views/_loading.vue').default,
		// Delay before showing the loading component.
		// Default: 200 (milliseconds).
		delay: 400,
		// A fallback component in case the timeout is exceeded
		// when loading the component.
		error: require('@/views/_timeout.vue').default,
		// Time before giving up trying to load the component.
		// Default: Infinity (milliseconds).
		timeout: 10000
	})

	return Promise.resolve({
		functional: true,
		render(h: CreateElement, { data, children }: RenderContext<DefaultProps>) {
			// Transparently pass any props or children
			// to the view component.
			return h(AsyncHandler, data, children)
		}
	})
}
