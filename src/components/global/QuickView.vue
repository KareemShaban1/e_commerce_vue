<template>
  <div class="quick-view mt-16">
    <v-dialog v-model="dialog" max-width="1000" max-height="500">
      <v-icon
        style="
          position: absolute;
          right: -14px;
          top: -14px;
          background-color: gold;
          color: white;
          font-size: 18px;
          padding: 13px;
          z-index: 10;
        "
        @click="dialog = false"
        >mdi-close</v-icon
      >
      <v-card elevation="0" class="content-card">
        <v-container fluid class="bg-white pt-10">
          <v-row>
            <v-col cols="7">
              <img
                :src="tab ? tab : product.thumbnail"
                class="w-100"
                alt=""
                height="400"
                v-if="!loading"
              />
              <v-skeleton-loader
                v-if="loading"
                type="image,image,image"
              ></v-skeleton-loader>
              <v-tabs center-active height="100" v-model="tab" class="mt-10">
                <v-tab
                  v-for="(img, i) in product.images"
                  :key="i"
                  class="mx-10"
                  :value="img"
                >
                  <img :src="img" alt="" height="100" width="100" />
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="5" class="pt-0 pl-6">
              <v-skeleton-loader
                v-if="loading"
                type="article,article,article"
              ></v-skeleton-loader>
              <v-card elevation="0" v-if="!loading">
                <v-card-title
                  class="px-0"
                  style="
                    font-size: 20px;
                    font-weight: bold;
                    white-space: pre-wrap;
                  "
                  >({{ product.title }}) Sample - {{ product.category }} For
                  Sale</v-card-title
                >
                <div
                  class="rating-parent d-flex align-center"
                  style="gap: 10px"
                >
                  <v-rating
                    class="pt-0"
                    v-model="product.rating"
                    half-increments
                    readonly
                    color="yellow-darken-2"
                    size="x-small"
                    density="compact"
                  ></v-rating>
                  <span style="font-size: 13px"
                    >Stock : {{ product.stock }}</span
                  >
                </div>

                <v-card-text class="mb-4 px-0 text--primary">
                  <p>{{ product.description }}</p>
                </v-card-text>

                <v-card-text class="mb-4 px-0 pt-0 text--primary">
                  <p>Brand: {{ product.brand }}</p>
                </v-card-text>
                <v-card-text class="mb-4 px-0 pt-0 text--primary">
                  <p>
                    Availability:
                    {{ product.stock > 0 ? "In Stock" : "Out Of Stock" }}
                  </p>
                </v-card-text>

                <v-card-text class="pl-0 pt-0">
                  <del> ${{ product.price }}</del> From
                  <span style="font-weight: 900; font-size: 16px">
                    ${{
                      Math.ceil(
                        product.price -
                          product.price * (product.discountPercentage / 100)
                      )
                    }}
                  </span>
                </v-card-text>
                <v-card-text class="pl-0 pt-0 py-2"> Quantity : </v-card-text>
                <div
                  class="counter px-1"
                  style="
                    border-radius: 30px;
                    border: 1px solid black;
                    width: fit-content;
                  "
                >
                  <v-icon @click="quantity > 1 ? quantity-- : false"
                    >mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    style="
                      border: none;
                      outline: none;
                      width: 80px;
                      font-size: 13px;
                    "
                    class="text-center py-3"
                    min="1"
                    v-model="quantity"
                  />
                  <v-icon @click="quantity++">mdi-plus</v-icon>
                </div>

                <v-card-actions class="mt-7 w-100">
                  <v-btn
                    variant="outlined"
                    class="w-75 text-white"
                    density="compact"
                    height="45"
                    style="
                      text-transform: none;
                      border-radius: 30px;
                      background-color: black;
                    "
                    @click="addToCart(product)"
                    :loading="btnLoading"
                    >Add To Cart</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
import { cartStore } from "@/stores/cart";
import { mapActions } from "pinia";
export default {
  inject: ["Emitter"],
  data: () => {
    return {
      loading: false,
      tab: "",
      dialog: false,
      quantity: 1,
      product: "",
      btnLoading: false,
    };
  },
  methods: {
    ...mapActions(cartStore, ["addItem"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("openCart");
        this.Emitter.emit("showMsg", item.title);
        this.dialog = false;
      }, 1000);
    },
  },

  mounted() {
    this.Emitter.on("openQuickView", (data) => {
      this.loading = true;
      this.product = data;
      this.dialog = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  },

  components: {
    VSkeletonLoader,
  },
};
</script>

<style lang="scss">
.content-card {
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    width: 7px;
    background-color: rgb(149, 149, 149);
  }
  &::-webkit-scrollbar-track {
    width: 7px;
    background-color: rgb(200, 200, 200);
  }
}
</style>
