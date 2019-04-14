<template>
	<div>
		<v-toolbar
			flat
			app
			scroll-off-screen
			height="60px"
			color="#F9FAF9">
			<v-spacer></v-spacer>
			<v-btn
				class="pl-5"
				flat
				target="_blank"
				@click.stop="drawer = !drawer"
			>
				<v-icon class="icon">fal fa-bars</v-icon>
			</v-btn>
		</v-toolbar>

		<v-navigation-drawer
			v-model="drawer"
			absolute
			temporar
			width="500"
			class="nav-drawer"
		>
			<v-toolbar
				flat
				color="#9BD6CE"
				height="60px">
				<v-spacer></v-spacer>
				<v-btn
					class="pl-5"
					flat
					target="_blank"
					@click.stop="drawer = !drawer"
				>
					<v-icon class="icon">fal fa-times</v-icon>
				</v-btn>
			</v-toolbar>

			<v-list style="padding-top: 16px">
				<h1 class="ml-5 menu-headline">Menu</h1>

				<v-list-tile
					v-for="item in menuItemsOne"
					:key="item.title"
					avatar
				>
					<router-link :to="item.navTo">
						<v-list-tile-avatar>
							<v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
						</v-list-tile-avatar>

						<v-list-tile-content>
							<h4>
								<v-list-tile-title>{{ item.title }}</v-list-tile-title>
							</h4>
						</v-list-tile-content>
					</router-link>
				</v-list-tile>

				<v-divider
					color="#000000"
					class="ml-3 mt-3 mb-3"
				></v-divider>

				<v-list-tile
					v-for="item in items2"
					:key="item.title"
					avatar
				>
					<router-link :to="item.navTo">
						<v-list-tile-avatar>
							<v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
						</v-list-tile-avatar>

						<v-list-tile-content>
							<h4>
								<v-list-tile-title>{{ item.title }}</v-list-tile-title>
							</h4>
						</v-list-tile-content>
					</router-link>

				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'

	@Component
	export default class NavigationBar extends Vue {
		drawer = null

		menuItemsOne = [
			{ icon: 'far fa-capsules', iconClass: 'icon', title: 'Prescriptions & Medications', navTo: '/prescriptions' },
			{ icon: 'far fa-notes-medical', iconClass: 'icon', title: 'Diagnosis', navTo: '/diagnosis' },
			{ icon: 'far fa-allergies', iconClass: 'icon', title: 'Allergies & Intolerances', navTo: '/allergies' },
			{ icon: 'far fa-syringe', iconClass: 'icon', title: 'Vaccination', navTo: '/vaccines' },
			{ icon: 'far fa-eye', iconClass: 'icon', title: 'Administer Accesses', navTo: '/administer' }
		]
		items2 = [
			{ icon: 'far fa-user-alt', iconClass: 'icon', title: 'My Profile', navTo: '/profile' },
			{ icon: 'far fa-sign-out-alt', iconClass: 'icon', title: 'Sign Out', navTo: '/' },
			{ icon: 'far fa-home', iconClass: 'icon', title: 'Home', navTo: '/' }
		]
	}
</script>

<style lang="sass" scoped>
	.hamburger
		height: 40px

	.nav-drawer
		background: #9BD6CE
		padding-left: 20px

	.icon
		font-size: 2.5rem
		color: $color-dark-green

	.menu-headline
		margin-left: 16px !important
		margin-bottom: 48px

	a
		display: flex
		text-decoration: none

	h4
		margin-top: 10px

	hr
		margin-right: 32px
</style>
