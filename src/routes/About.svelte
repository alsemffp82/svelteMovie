<script>
  import { querystring } from 'svelte-spa-router'
  import qs from 'qs'

  console.log($querystring)
  console.log(qs.parse($querystring))

  s: query = qs.parse($querystring)
  s: name = query.name || 'Martin Cho'
  s: email = query.email || 'martinchonz@gmail.com'
  s: blog = query.blog || 'https://martincho.co.nz'
  s: phone = query.phone || '+64 21 197 7703'

</script>

<div class="user-profile">
  <div class="photos">
    <div class="photo">
      <img src="/assets/svelte.png" alt="User">
    </div>
    <div class="photo">
      <img src="https://picsum.photos/200" alt="Logo">
    </div>
  </div>
  <div class="details">
    <div class="name">{name}</div>
    <div class="email">{email}</div>
    <div class="blog">{blog}</div>
    <div class="phone">{phone}</div>
  </div>
</div>

<style lang="scss">
  .user-profile {
    padding: 80px 0;

    .photos {
      display: flex;
      justify-content: center;

      .photo {
        flex-shrink: 0;
        width: 230px;
        height: 230px;
        padding: 30px;
        box-sizing: border-box;
        background-color: $color--area;
        border-radius: 50%;
        border: 12px solid $color--black;

        &:first-child {
          margin-right: -80px;
        }

        img {
          width: 100%;
          border-radius: 50%;
        }
      }
    }
    .details {
      margin-top: 20px;
      text-align: center;
      .name {
        font-family: 'Oswald', sans-serif;
        font-size: 14px;
      }
    }
  }
</style>