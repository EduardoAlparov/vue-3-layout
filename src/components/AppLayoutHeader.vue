<template>
  <header class="app-header">
    <div class="site-container">
      <a href="/" class="logo"> LOGO </a>
      <nav class="haeder-nav">
        <ul class="menu">
          <li><a href="#" class="menu__link">main</a></li>
          <li><a href="#" class="menu__link">profile</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style lang="scss">
.app-header {
  padding: 2rem 0;
  color: lightgoldenrodyellow;
  background-color: lightslategrey;
  > .site-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.menu {
  display: flex;
  align-items: center;
  column-gap: 2rem;
  list-style: none;
}
</style>
