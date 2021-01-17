<script>
  import Headline from '~/components/Headline'
  import Search from '~/components/Search'
  import MovieList from '~/components/MovieList'
  import { initMovies } from '~/store/movie'

  initMovies()
</script>

<div class="container">
  <Headline />
  <Search />
  <MovieList />
</div>

<style lang="scss"></style>