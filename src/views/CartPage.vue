<template>
  <div class="cart-page">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="pb-0 px-0">
          <v-breadcrumbs :items="['Home', 'Your Cart']" style="font-size: 14px">
            <template v-slot:divider>
              <v-icon> mdi-chevron-right </v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
        <v-col cols="12" class="pt-0">
          <v-card-title
            class="pl-0 pr-2 pb-0 d-flex justify-space-between align-center w-100"
            style="font-size: 30px; font-weight: bold"
          >
            Your Cart
          </v-card-title>
          <div
            class="bar-parent mt-3 position-relative"
            v-if="cartItems.length"
          >
            <svg
              class="icon-shipping-truck"
              viewBox="0 0 40.55 24"
              width="30"
              fill="#F44336"
              :style="`
                        position: absolute;
                        bottom: 50%;
                        z-index: 1;
                        left: calc(${
                          parseInt((calcTotalPrice / 10000) * 100) <= 100
                            ? parseInt((calcTotalPrice / 10000) * 100)
                            : 100
                        }% - 30px);
                        transition: 0.15s all ease-in-out;
                      `"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    class="truck-body"
                    d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
                  ></path>
                  <path
                    class="truck-body"
                    d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
                  ></path>
                  <path
                    class="wheel"
                    fill="white"
                    d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
                  ></path>
                  <path
                    fill="white"
                    class="wheel"
                    d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"
                  ></path>
                </g>
              </g>
            </svg>
            <v-progress-linear
              color="red"
              height="10"
              :model-value="
                parseInt((calcTotalPrice / 10000) * 100) <= 100
                  ? parseInt((calcTotalPrice / 10000) * 100)
                  : 100
              "
              striped
            >
            </v-progress-linear>
          </div>
          <v-card-text
            class="px-0 pt-2"
            v-if="cartItems.length && 10000 - calcTotalPrice > 0"
            >only ${{ 10000 - calcTotalPrice }} away from free
            shipping</v-card-text
          >
          <v-card-text
            class="px-0 pt-2"
            v-if="cartItems.length && 10000 - calcTotalPrice <= 0"
            >Your order now is included Free Shipping</v-card-text
          >
        </v-col>
        <v-col cols="8">
          <v-table class="w-100">
            <thead>
              <tr>
                <th style="font-size: 13px; font-weight: bold">Product</th>
                <th style="font-size: 13px; font-weight: bold">Price</th>
                <th style="font-size: 13px; font-weight: bold">Quantity</th>
                <th style="font-size: 13px; font-weight: bold">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartItems" :key="item.id">
                <td style="width: 55%">
                  <v-row class="align-center">
                    <v-col cols="5">
                      <img :src="item.thumbnail" class="w-100" alt="" />
                    </v-col>
                    <v-col cols="7">
                      <v-card-title
                        style="
                          white-space: pre-wrap;
                          font-size: 14px;
                          line-height: 1.2;
                        "
                      >
                        {{ item.title }} sample - {{ item.category }}
                      </v-card-title>
                    </v-col>
                  </v-row>
                </td>
                <td style="width: 15%">
                  ${{
                    Math.ceil(
                      item.price - item.price * (item.discountPercentage / 100)
                    )
                  }}
                </td>
                <td style="width: 15%">
                  <div
                    class="item-footer d-flex justify-space-between align-center"
                  >
                    <div
                      class="counter px-1"
                      style="
                        border-radius: 30px;
                        border: 1px solid black;
                        width: fit-content;
                      "
                    >
                      <v-icon
                        @click="item.quantity > 1 ? item.quantity-- : false"
                        size="20"
                        >mdi-minus</v-icon
                      >
                      <input
                        type="number"
                        style="
                          border: none;
                          outline: none;
                          width: 40px;
                          font-size: 13px;
                        "
                        class="text-center py-2"
                        min="1"
                        v-model="item.quantity"
                      />
                      <v-icon size="20" @click="item.quantity++"
                        >mdi-plus</v-icon
                      >
                    </div>
                  </div>
                </td>
                <td style="width: 15%">
                  <v-card-text>
                    <span style="font-weight: 900; font-size: 16px">
                      ${{
                        Math.ceil(
                          item.price -
                            item.price * (item.discountPercentage / 100)
                        ) * item.quantity
                      }}
                    </span>
                  </v-card-text>
                </td>
                <td>
                  <v-icon size="20" @click="deleteItem(item.id)"
                    >mdi-close</v-icon
                  >
                </td>
              </tr>
            </tbody>
          </v-table></v-col
        >
        <v-col cols="4">
          <v-card elevation="0">
            <v-card-title style="font-weight: bold">
              Order Summary
            </v-card-title>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text class="d-flex justify-space-between">
              <span>SubTotal</span>
              <span class="font-weight-bold" style="font-size: 16px"
                >${{ calcTotalPrice }}</span
              >
            </v-card-text>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text>Get Shipping Estimate</v-card-text>
            <select
              name=""
              id=""
              class="w-100 pa-2"
              style="
                border: 1px solid black;
                border-radius: 30px;
                font-size: 14px;
              "
            >
              <option
                :value="country"
                v-for="country in countries"
                :key="country"
              >
                {{ country }}
              </option>
            </select>
            <div class="states">
              <select
                name=""
                id=""
                class="pa-2 mt-4"
                style="
                  border: 1px solid black;
                  border-radius: 30px;
                  font-size: 14px;
                  width: 55%;
                  margin-right: 1%;
                "
              >
                <option
                  :value="country"
                  v-for="country in countries"
                  :key="country"
                >
                  {{ country }}
                </option>
              </select>
              <input
                class="pa-2 mt-4"
                type="text"
                name=""
                id=""
                style="
                  border: 1px solid black;
                  border-radius: 30px;
                  font-size: 14px;
                  width: 43%;
                  margin-left: 1%;
                "
              />
            </div>
            <v-card-actions class="px-0 mt-5">
              <v-btn
                style="
                  text-transform: none;
                  border-radius: 30px;
                  border-color: black;
                "
                class="w-100"
                variant="elevated"
                height="45"
                density="compact"
                elevation="0"
                color="#3673e2"
              >
                Calculate Shipping
              </v-btn>
            </v-card-actions>
            <v-card-text class="d-flex justify-space-between">
              <span>Total</span>
              <span class="font-weight-bold" style="font-size: 16px"
                >${{ calcTotalPrice }}</span
              >
            </v-card-text>
            <v-card-actions class="px-0 mt-5 flex-column" style="gap: 15px">
              <v-btn
                style="
                  text-transform: none;
                  border-radius: 0px;
                  border-color: black;
                "
                class="w-100 mx-0"
                variant="elevated"
                height="45"
                density="compact"
                elevation="0"
                color="#3673e2"
                @click="toCheckout"
              >
                Proceed to checkout
              </v-btn>

              <v-btn
                style="
                  text-transform: none;
                  border-radius: 0px;
                  border-color: black;
                "
                class="w-100 mx-0"
                variant="outlined"
                height="45"
                density="compact"
                elevation="0"
                @click="$router.push({ name: 'home' })"
              >
                Continue Shopping
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { cartStore } from "@/stores/cart";
import { mapActions, mapState } from "pinia";

export default {
  inject: ["Emitter"],
  data: () => {
    return {
      countries: ["Egypt", "Palestine", "Syria"],
      drawer: true,
    };
  },
  computed: {
    ...mapState(cartStore, ["cartItems"]),
    calcTotalPrice() {
      let total = 0;
      this.cartItems.forEach((product) => {
        total +=
          Math.ceil(
            product.price - product.price * (product.discountPercentage / 100)
          ) * product.quantity;
      });
      return total;
    },
  },
  methods: {
    ...mapActions(cartStore, [
      "getCartItems",
      "deleteItem",
      "setToLocalStorage",
    ]),
    toCheckout() {
      this.setToLocalStorage();
      this.$router.push({ name: "checkout" });
    },
  },
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = !this.drawer;
    });
    this.getCartItems();
  },
};
</script>

<style lang="scss">
.v-table__wrapper {
  overflow: hidden;
}
</style>
