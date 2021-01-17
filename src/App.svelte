<script>
  import { fade } from 'svelte/transition'
  import Footer from '~/components/Footer'
  import Header from '~/components/Header'
  import Router, { location } from 'svelte-spa-router'
  import routes from '~/routes'
</script>

<Header />
{#key $location}
  <div in:fade>
    <Router 
    {routes} 
    restoreScrollState={true} />
  </div>
{/key}
<Footer />

<style lang="scss">
  /* your styles go here */
</style>