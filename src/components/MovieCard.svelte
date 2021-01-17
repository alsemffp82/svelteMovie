<script>
  import { link } from 'svelte-spa-router'
  import Loader from '~/components/Loader'

  let imageLoading = true

  export let movie

  if (movie.Poster === 'N/A') {
    imageLoading = false
  } else {
    const img = document.createElement('img')
    img.src = movie.Poster
    img.addEventListener('load', () => {
      imageLoading = false
    })
  }
</script>

<a
  use:link
  href={`/movie/${movie.imdbID}`}
  class="movie">
  {#if imageLoading}
    <Loader 
      scale="0.5" 
      absolute />
  {/if}
  <div 
    class="poster"
    style="background-image: url({movie.Poster});">
    {#if movie.Poster === 'N/A'} 
      OMDbAPI<br />
      N/A
    {/if}
  </div>
  <div class="info">
    <div 
      class="poster"
      style="background-image: url({movie.Poster});"></div>
    <div class="year">{movie.Year}</div>
    <div class="title">{movie.Title}</div>
  </div>
</a>

<style lang="scss">
  .movie {
    position: relative;
    display: block;
    width: 200px;
    height: 300px;
    margin: 10px;
    border-radius: 6px;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 6px solid $color--primary;
        box-sizing: border-box;
        content: ""
      }
    }
    
    .poster {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: $color--area;
      background-position: center;
      background-size: cover;
      font-family: 'Oswald', sans-serif;
      font-size: 20px;
      color: $color--white-5;
      text-align: center;
    }

    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 66px;
      padding: 14px;
      box-sizing: border-box;
      overflow: hidden;

      .poster {
        position: absolute;
        z-index: 0;
        bottom: 0;
        left: 0;
        transform: scale(2);
        filter: blur(5px);

        &:after {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          content: "";
          background-color: $color--black-50;
        }
      }
      .year {
        position: relative;
        color: $color--primary;
        font-size: 12px;
      }
      .title {
        position: relative;
        color: $color--white;
        overflow: hidden;
        font-family: 'Oswald', sans-serif;
        font-size: 15px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>