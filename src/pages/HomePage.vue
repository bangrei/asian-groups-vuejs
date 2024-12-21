<template>
  <div class="page-layout">
    <nav>
      <NavContent/>
    </nav>
    <div class="left-side">
      <LeftCardContent/>
    </div>
    <main>
      <MainContent/>
    </main>
    <div class="footer">
      <FooterContent/>
    </div>
  </div>
</template>

<script>
import FooterContent from './components/FooterContent.vue';
import LeftCardContent from './components/LeftCardContent.vue';
import MainContent from './components/MainContent.vue';
import NavContent from './components/NavContent.vue';
export default {
  name: "HomePage",
  components: {
    LeftCardContent,
    NavContent,
    MainContent,
    FooterContent,
  }
};
</script>

<style lang="scss">
.page-layout {
  background: #000;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  display: grid;
  grid-template-areas: "nav nav nav" "left-side main main" "footer footer footer";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  row-gap: 8px;
  column-gap: 8px;
  nav {
    width: 100%;
    grid-area: nav;
  }
  .left-side {
    grid-area: left-side;
    background: #111;
    border-radius: 8px;
    width: 300px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    padding: 24px;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
  }
  main {
    grid-area: main;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
  }
  .footer {
    grid-area: footer;
    z-index: 2;
  }
}
@media (max-width: 800px) {
  .page-layout {
    display: flex;
    flex-direction: column;
    height: auto !important;
    .left-side {
      width: auto;
      height: unset !important;
    }
    main {
      height: unset !important;
    }
  }
}
</style>
