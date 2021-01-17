<script>
  import { movies, loading, message } from '~/store/movie'
  import MovieCard from '~/components/MovieCard'
  import Loader from '~/components/Loader'
</script>

<div 
  class:no-result={!movies.length}
  class="movie-list">
  {#if $loading}
    <Loader />
  {:else}
    <div class="message">{$message}</div>
    <div class="movies">
      {#each $movies as movie (movie.imdbID)}
      <MovieCard {movie} />
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .movie-list {
    margin-top: 30px;
    padding: 10px;
    background-color: $color--area;
    border-radius: 6px;
    text-align: center;
    &.no-result {
      padding: 70px 0;
    }
    .message {
      color: $color--primary;
      font-size: 20px;
      text-align: center;
    }
    .movies {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>