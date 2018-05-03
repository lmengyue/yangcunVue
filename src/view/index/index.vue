<template>
	<div>
		<Header></Header>
	     <router-view />
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '../../components/header'
import Footer from '../../components/footer'
export default {
	data(){
		return{
			
		}
	},
	components:{
		Header,
		Footer
	}
}
</script>

<style>

</style>