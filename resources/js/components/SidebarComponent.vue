<template>
    <div>
      <!-- <ul class="uk-background-secondary uk-light" data-uk-nav id="offcanvas-reveal" uk-offcanvas="mode: reveal; overlay: true">
      <li class="uk-text-bold uk-text-uppercase">
        <router-link :to="{name: 'home'}">home</router-link>
      </li>
      <li class="uk-text-bold uk-text-uppercase">
        <router-link :to="{name: 'gallery'}">gallery</router-link>
      </li>
      <li class="uk-text-bold uk-text-uppercase">
        <router-link :to="{name: 'blog'}">blog</router-link>
      </li>
    </ul> -->
    <div id="offcanvas-reveal" uk-offcanvas="mode: reveal; overlay: true">
    <div class="uk-offcanvas-bar">

        <button class="uk-offcanvas-close" type="button" uk-close></button>

              <ul class="uk-nav uk-margin-large-top">
                <li class="uk-text-bold uk-text-uppercase">
                  <router-link :to="{name: 'home'}">home</router-link>
                </li>
                <li class="uk-text-bold uk-text-uppercase">
                  <router-link :to="{name: 'gallery'}">gallery</router-link>
                </li>
                <li class="uk-text-bold uk-text-uppercase">
                  <router-link :to="{name: 'blog'}">blog</router-link>
                </li>
              </ul>

          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'sidebar-component',
  data(){
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>

  .uk-offcanvas-bar{
    padding: 0px;
  }

  li {
    padding: 10px 30px;

    &:hover {
      background-color: #333;
    }
  }
</style>

