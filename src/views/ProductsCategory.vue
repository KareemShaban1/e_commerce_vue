<template>
  <div class="products-category">
    <h1 class="text-center mt-10">{{ $route.params.title }}</h1>
    <v-container>
      <v-card :loading="loading" class="pt-5" min-height="700px" elevation="0">
        <v-row v-if="loading">
          <v-col cols="3" v-for="num in 4" :key="num">
            <v-skeleton-loader type="image,article,button"></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-if="!loading">
          <v-col
            cols="3"
            v-for="item in categoryProducts.products"
            :key="item.id"
            class="px-5"
          >
            <v-card elevation="0" class="pb-5">
              <v-hover v-slot="{ isHovering, props }">
                <div class="img-parent" style="height: 170px; overflow: hidden">
                  <img
                    :src="
                      shownItem[item.title]
                        ? shownItem[item.title]
                        : item.thumbnail
                    "
                    class="w-100"
                    :style="`height: 200px; transition:0.5s all ease-in-out; scale:${
                      isHovering ? 1.05 : 1
                    }; cursor:pointer`"
                    alt=""
                    v-bind="props"
                  />
                </div>
              </v-hover>
              <v-card-text class="pl-0 pb-0">
                { {{ item.title }} }
                {{
                  item.description + " " + item.title.split(" ").length <= 5
                    ? item.description
                    : item.description
                        .split(" ")
                        .slice(0, 5 - item.title.split(" ").length)
                        .join(" ") + " ..."
                }}
              </v-card-text>
              <v-rating
                class="pt-0"
                v-model="item.rating"
                half-increments
                readonly
                color="yellow-darken-2"
                size="x-small"
                Density="compact"
              ></v-rating>
              <v-card-text class="pl-0 pt-0">
                <del> ${{ item.price }}</del> From
                <span
                  class="text-red"
                  style="font-weight: 900; font-size: 16px"
                >
                  ${{
                    Math.ceil(
                      item.price - item.price * (item.discountPercentage / 100)
                    )
                  }}
                </span>
              </v-card-text>
              <v-btn-toggle v-model="shownItem[item.title]">
                <v-btn
                  v-for="(pic, i) in item.images"
                  :value="pic"
                  :key="i"
                  size="x-small"
                  rounded="xl"
                >
                  <img
                    :src="pic"
                    alt=""
                    width="30"
                    height="30"
                    style="border-radius: 50%; border: 1px solid black"
                  />
                </v-btn>
              </v-btn-toggle>
              <div class="mt-5">
                <v-btn
                  @click="
                    $router.push({
                      name: 'product_details',
                      params: { productId: item.id },
                    })
                  "
                  density="compact"
                  width="220"
                  height="35"
                  style="text-transform: none; border-radius: 30px"
                  variant="outlined"
                >
                  Choose Options
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";

export default {
  data: () => {
    return {
      shownItem: {},
      loading: false,
    };
  },
  components: {
    VSkeletonLoader,
  },
  methods: {
    ...mapActions(productsModule, ["getProductByCategory"]),
  },
  computed: {
    ...mapState(productsModule, ["categoryProducts"]),
  },
  watch: {
    async $route() {
      document.documentElement.scrollTo(0, 0);
      this.loading = true;
      await this.getProductByCategory(this.$route.params.category);
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.getProductByCategory(this.$route.params.category);
    this.loading = false;
  },
};
</script>
