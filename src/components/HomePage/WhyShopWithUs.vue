<template>
  <div class="shop-with-us py-14">
    <div class="title mb-5">
      <h2 class="text-center">Why Shop <span>With Us ?</span></h2>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="3" class="px-1">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent">
              <img src="@/assets/images/free-shipping.png" alt="" />
            </div>
            <v-card-title
              style="white-space: pre-wrap; line-height: 1.2; font-weight: 700"
            >
              Free Shipping On First Order
            </v-card-title>
            <v-card-text class="pb-0" style="font-size: 15px"
              >Lorem ipsum dolor sit amet consectetur
            </v-card-text>
            <a href="#" style="color: white; font-weight: 700; font-size: 14px"
              >Learn More</a
            >
          </v-card>
        </v-col>
        <v-col cols="3" class="px-1">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent">
              <img src="@/assets/images/weekly-flash-sales.png" alt="" />
            </div>
            <v-card-title
              style="white-space: pre-wrap; line-height: 1.2; font-weight: 700"
            >
              Weakly Flash Sales
            </v-card-title>
            <v-card-text class="pb-0" style="font-size: 15px"
              >Lorem ipsum dolor sit amet consectetur
            </v-card-text>
            <a href="#" style="color: white; font-weight: 700; font-size: 14px"
              >Learn More</a
            >
          </v-card>
        </v-col>
        <v-col cols="3" class="px-1">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent">
              <img src="@/assets/images/discount.png" alt="" />
            </div>
            <v-card-title
              style="white-space: pre-wrap; line-height: 1.2; font-weight: 700"
            >
              Annual Payment Discount
            </v-card-title>
            <v-card-text class="pb-0" style="font-size: 15px"
              >Lorem ipsum dolor sit amet consectetur
            </v-card-text>
            <a href="#" style="color: white; font-weight: 700; font-size: 14px"
              >Learn More</a
            >
          </v-card>
        </v-col>
        <v-col cols="3" class="px-1">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent">
              <img src="@/assets/images/cash-back.png" alt="" />
            </div>
            <v-card-title
              style="white-space: pre-wrap; line-height: 1.2; font-weight: 700"
            >
              Cah Back Reward Program
            </v-card-title>
            <v-card-text class="pb-0" style="font-size: 15px"
              >Lorem ipsum dolor sit amet consectetur
            </v-card-text>
            <a href="#" style="color: white; font-weight: 700; font-size: 14px"
              >Learn More</a
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.shop-with-us {
  background-image: url(../../assets/images/why-shop-with-us-banner.webp);
  background-repeat: repeat-x;
  background-size: cover;
  h2 {
    color: white;
    font-size: 30px;
    font-weight: 900;
    span {
      color: rgb(45, 251, 223);
    }
  }
}
</style>
