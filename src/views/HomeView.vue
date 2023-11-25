<template>
  <div class="home">
    <UpperBanner />
    <HomeFeatures />
    <TopOffers />
    <ProductsComponent
      :products="flashDeals"
      title="Flash Deals"
      titleColor="red"
    />
    <TopCategories />
    <NewProducts :products="newProducts" />
    <QualityFeatures />
    <ProductsComponent
      :products="mobilePhones"
      title="Top Mobile Phones"
      titleColor="black"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="6" class="pr-5">
          <img
            src="@/assets/images/band-left-cover.webp"
            class="w-100"
            alt=""
          />
        </v-col>
        <v-col cols="6" class="pr-6">
          <img
            src="@/assets/images/band-right-cover.webp"
            class="w-100"
            alt=""
          />
        </v-col>
      </v-row>
    </v-container>
    <ProductsComponent
      :products="fragrances"
      title="Top Fragrances"
      titleColor="black"
    />
    <img src="@/assets/images/tv-banner.webp" class="w-100 px-2 py-2" alt="" />
    <ProductsComponent
      :products="groceries"
      title="Top Groceries"
      titleColor="black"
    />
    <WhyShopWithUs />
  </div>
</template>

<script>
// @ is an alias to /src

import UpperBanner from "@/components/HomePage/UpperBanner.vue";
import HomeFeatures from "@/components/HomePage/HomeFeatures.vue";
import TopOffers from "@/components/HomePage/TopOffers";
import ProductsComponent from "@/components/HomePage/ProductsComponent.vue";
import TopCategories from "@/components/HomePage/TopCategories.vue";
import NewProducts from "@/components/HomePage/NewProducts.vue";
import QualityFeatures from "@/components/HomePage/QualityFeatures.vue";
import WhyShopWithUs from "@/components/HomePage/WhyShopWithUs";
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    HomeFeatures,
    TopOffers,
    ProductsComponent,
    TopCategories,
    NewProducts,
    QualityFeatures,
    WhyShopWithUs,
  },
  computed: {
    ...mapState(productsModule, [
      "flashDeals",
      "newProducts",
      "mobilePhones",
      "fragrances",
      "groceries",
    ]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },

  async mounted() {
    await this.getProducts();
  },
};
</script>
