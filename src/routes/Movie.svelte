<script>
  import Loader from '~/components/Loader'
  import { searchMovieWithId, theMovie, loading } from '~/store/movie'

  let imageLoading = true
  
  export let params = {}

  searchMovieWithId(params.id)

  function requestDifferentSizeImage(url, size) {
    const src = url.replace('SX300', `SX${size}`)
    const img = document.createElement('img')
    img.src = src
    img.addEventListener('load', () => {
      imageLoading = false
    })
    return src
  }
</script>

<div class="container">
  {#if $loading}
    <div class="skeleton-loader">
      <div class="poster">
      </div>
      <div class="skeletons">
        <div class="skeleton title"></div>
        <div class="skeleton specs"></div>
        <div class="skeleton plot"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
      </div>
      <Loader absolute />
    </div>
  {:else}
    <div class="movie-details">
      <div 
        style="background-image: url({requestDifferentSizeImage($theMovie.Poster)});"
        class="poster">
        {#if imageLoading}
          <Loader 
            scale="0.7"
            absolute />
        {/if}
      </div>
      <div class="specs">
        <div class="title">{$theMovie.Title}</div>
        <div class="labels">
          <span>{$theMovie.Released}</span>
          <span class="dot"></span>
          <span>{$theMovie.Runtime}</span>
          <span class="dot"></span>
          <span>{$theMovie.Country}</span>
        </div>
        <div class="plot">
          {$theMovie.Plot}
        </div>
        <div class="ratings">
          <h3>Ratings</h3>
          <div class="rating-wrap">
            {#each $theMovie.Ratings as rating (rating.Source) }
              <div 
                title={rating.Source}
                class="rating">
                <img 
                  src="/assets/{rating.Source}.png" 
                  alt={rating.Source} 
                  height="30" />
                  <span>{rating.Value}</span>
              </div>
            {/each}
          </div>
        </div>
        <div>
          <h3>Actors</h3>
          {$theMovie.Actors}
        </div>
        <div>
          <h3>Director</h3>
          {$theMovie.Director}
        </div>
        <div>
          <h3>Production</h3>
          {$theMovie.Production}
        </div>
        <div>
          <h3>Gene</h3>
          {$theMovie.Gene}
        </div>
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  .skeleton-loader {
    display: flex;
    .poster {
      @media #{$mobile} {
        display: none;
      }
    }
    .skeletons {
      flex: 1;
      .skeleton {
        width: 100%;
        height: 100px;
        margin-top: 20px;
        background-color: $color--area;
        border-radius: 8px;

        &:first-child {
          margin-top: 0;
        }

        &.title {
          height: 100px;
        }
        &.specs {
          width: 60%;
          height: 30px;
        }
        &.plot {
          height: 300px;
        }
        &.etc {
          width: 40%;
          height: 50px;
        }
      }
    }
  }
  .movie-details {
    display: flex;
    color: $color--white-50;
    @media #{$mobile} {
      display: block;
    }
  }
  .poster {
    position: relative;
    flex-shrink: 0;
    width: 500px;
    height: 500px * 3/2;
    border-radius: 10px;
    margin-right: 70px;
    background-color: $color--area;
    background-position: center;
    background-size: cover;
    @media #{$tablet} {
      width: 300px;
      height: 300px * 3/2;
      margin-right: 30px;
    }
    @media #{$mobile} {
      margin-right: 0;
      margin-bottom: 50px;
    }
  }
  .specs {
    .title {
      margin: 30px;
      font-family: 'Oswald', sans-serif;
      font-size: 70px;
      color: $color--white;
      line-height: 1;
      @media #{$mobile} {
        font-size: 50px;
      }
    }
    .labels {
      color: $color--primary;
      .dot {
        margin: 0 6px;
      }
    }
    .plot {
      margin-top: 20px;
    }
    .ratings {
      .rating-wrap {
        display: flex;
        .rating {
          display: flex;
          align-items: center;
          margin-right: 32px;
          @media #{$tablet} {
            transform: scale(0.85);
            transform-origin: left;
            margin-right: 0;
          }
          img {
            flex-shrink: 0;
            margin-right: 6px;
          }
        }
      }
    }
    h3 {
      margin: 24px 0 6px;
      color: $color--white;
      font-family: 'Oswald', sans-serif;
      font-weight: 700;
    }
  }
</style>