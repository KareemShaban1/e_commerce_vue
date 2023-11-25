<template>
  <div class="product-details mt-16">
    <!-- <div class="title">
      <h2>product details</h2>
    </div> -->
    <v-container fluid>
      <v-row>
        <v-col cols="7">
          <img
            :src="tab ? tab : singleProduct.thumbnail"
            class="w-100"
            alt=""
            height="500"
            v-if="!loading"
          />
          <v-skeleton-loader
            v-if="loading"
            type="image,image,image"
          ></v-skeleton-loader>
          <v-tabs center-active height="100" v-model="tab" class="mt-10">
            <v-tab
              v-for="(img, i) in singleProduct.images"
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
              style="font-size: 20px; font-weight: bold"
              >({{ singleProduct.title }}) Sample -
              {{ singleProduct.category }} For Sale</v-card-title
            >
            <div class="rating-parent d-flex align-center" style="gap: 10px">
              <v-rating
                class="pt-0"
                v-model="singleProduct.rating"
                half-increments
                readonly
                color="yellow-darken-2"
                size="x-small"
                density="compact"
              ></v-rating>
              <span style="font-size: 13px"
                >Stock : {{ singleProduct.stock }}</span
              >
            </div>

            <v-card-text class="mb-4 px-0 text--primary">
              <p>{{ singleProduct.description }}</p>
            </v-card-text>

            <v-card-text class="mb-4 px-0 pt-0 text--primary">
              <p>Brand: {{ singleProduct.brand }}</p>
            </v-card-text>
            <v-card-text class="mb-4 px-0 pt-0 text--primary">
              <p>
                Availability:
                {{ singleProduct.stock > 0 ? "In Stock" : "Out Of Stock" }}
              </p>
            </v-card-text>

            <v-card-text class="pl-0 pt-0">
              <del> ${{ singleProduct.price }}</del> From
              <span style="font-weight: 900; font-size: 16px">
                ${{
                  Math.ceil(
                    singleProduct.price -
                      singleProduct.price *
                        (singleProduct.discountPercentage / 100)
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
                >Add To Cart</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
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
      loading: false,
      tab: "",
      quantity: 1,
      product: {
        id: 2,
        title: "iPhone X",
        description:
          "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/2/1.jpg",
          "https://i.dummyjson.com/data/products/2/2.jpg",
          "https://i.dummyjson.com/data/products/2/3.jpg",
          "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        ],
      },
    };
  },
  methods: {
    ...mapActions(productsModule, ["getSingleProduct"]),
  },
  computed: {
    ...mapState(productsModule, ["singleProduct"]),
  },
  async beforeMount() {
    this.loading = true;
    await this.getSingleProduct(this.$route.params.productId);
    this.loading = false;
  },
  components: {
    VSkeletonLoader,
  },
};
</script>
