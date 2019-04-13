<template>
	<v-app id="app">
		<!--<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div>-->
		<!--<v-icon>fab fa-facebook-f</v-icon>-->
		<NavigationBar></NavigationBar>
		<VContent class="view-container">
			<router-view/>
		</VContent>
	</v-app>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import NavigationBar from '@/components/NavigationBar.vue'
	@Component({
		components: { NavigationBar }
	})
	export default class App extends Vue {

	}
</script>

<style lang="sass">
	@import "design/global"
</style>
