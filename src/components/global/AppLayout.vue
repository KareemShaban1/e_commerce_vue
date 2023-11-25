<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer />
      <v-main
        :style="`padding-top: ${$route.name == 'checkout' ? '0px' : '150px'}`"
      >
        <slot></slot>
      </v-main>

      <AppNav v-show="$route.name != 'checkout' && windowWidth > 990" />
      <ResponsiveNav v-show="windowWidth <= 990 && $route.name != 'checkout'" />
      <FixedNav v-show="$route.name != 'checkout' && windowWidth > 990" />
      <AppFooter v-show="$route.name != 'checkout'" />
    </v-layout>
  </div>
</template>

<script>
import AppNav from "./AppNav.vue";
import FixedNav from "./FixedNav.vue";
import CartDrawer from "./CartDrawer.vue";
import AppFooter from "./AppFooter.vue";
import ResponsiveNav from "./ResponsiveNav.vue";
export default {
  data: () => {
    return {
      drawer: true,
      windowWidth: 0,
    };
  },
  components: {
    AppNav,
    CartDrawer,
    AppFooter,
    FixedNav,
    ResponsiveNav,
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
};
</script>
