<template>
  <header>
    <div class="uk-navbar-container uk-navbar-transparent uk-light" data-uk-navbar>
      <div class="uk-navbar-left">
        <a class="uk-navbar-toggle" uk-navbar-toggle-icon uk-toggle="target: #offcanvas-reveal"></a>
        <router-link :to="{name:'home'}" class="uk-text-bold uk-text-large uk-text-uppercase">laravel-cms</router-link>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li>
            <a href="#" class="uk-text-bold">John J. Keeshan</a>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li>
                  <a href="#" class="uk-text-bold uk-text-uppercase">
                    <span data-uk-icon="icon: sign-out"></span>
                    log out
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'navbar-component'
}
</script>

<style lang="scss" scoped>
  header {
    padding: 0 30px;
    background-color: #0a2774;

    a {
      text-decoration: none;
    }
  }
</style>

