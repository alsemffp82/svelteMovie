<script>
  import { link, push } from 'svelte-spa-router'
  import active from 'svelte-spa-router/active'
  import Logo from '~/components/Logo'

  const menus = [
    {
      href: '/',
      name: 'Search',
    },
    {
      href: '/movie/tt4520988',
      name: 'Movie',
      path: '/movie/*'
    },
    {
      href: '/about',
      name: 'About',
      path: /^\/about/
    }

  ]
</script>

<header>
  <Logo />
  <nav>
    <ul>
      {#each menus as {href, name, path} (name)}
        <li>
          <a 
            use:link
            use:active={path}
            {href}>
            {name}
          </a>      
        </li>
      {/each}
    </ul>
  </nav>
  <div 
    on:click={event => {
      console.log(event)
      push('/about?name=Martin&email=hello@martin.com&image=%2Fassets%2Fnetlify.png')
    }}
    class="user" >
    <img src="/assets/svelte.png" alt="User" />
  </div>
</header>

<style lang="scss">
  header {
    position: sticky;
    top: 0;
    z-index: 9;
    display: flex;
    align-items: flex-end;
    padding: 20px 40px;
    background-color: $color--black-90;
    @media #{$mobile} {
      padding: 14px 20px;
    }
    nav {
      margin-left: 40px;
      @media #{$mobile} {
        display: none;
      }
      ul {
        display: flex;
        li {
          margin-left: 10px;
          &:first-child {
            margin-left: 0;
          }
          a {
            font-size: 14px;
            font-weight: 700;
            color: $color--white-50;
            text-decoration: none;
          }
        }
      }
    }
    .user {
      position: absolute;
      top: 0;
      right: 40px;
      bottom: 0;
      margin: auto;
      width: 40px;
      height: 40px;
      padding: 6px;
      box-sizing: border-box;
      border-radius: 50%;
      background-color: $color--area;
      cursor: pointer;
      transition: 0.3s;
      @media #{$mobile} {
        right: 20px;
      }
      &:hover {
        background-color: lighten($color--area, 20%);
      }
      img {
        width: 100%;
      }
    }
  }
  header :global(a.active) {
    color: $color--primary !important;
  }
</style>