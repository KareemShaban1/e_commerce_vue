<template>
  <div class="products-swiper py-14">
    <div class="title mb-5 px-5 d-flex align-center justify-space-between">
      <h2
        style="font-size: 30px; font-weight: 900"
        :class="[`text-${titleColor}`]"
      >
        {{ title }}
      </h2>
      <a href="#" class="text-black" style="font-size: 14px">Shop All</a>
    </div>
    <v-container fluid v-if="!products.length">
      <v-row>
        <v-col cols="12" class="pt-14">
          <v-row>
            <v-col cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader
                type="image,article,button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      class="pb-10 px-5"
      :navigation="{ prevIcon: '.swiper-prev', nextIcon: '..swiper-next' }"
      :autoplay="{
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }"
      :loop="true"
    >
      <swiper-slide v-for="item in products" :key="item.id">
        <v-card elevation="0" class="pb-5">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="img-parent position-relative"
              style="height: 200px; overflow: hidden"
            >
              <img
                :src="
                  shownItem[item.title] ? shownItem[item.title] : item.thumbnail
                "
                class="w-100"
                :style="`height: 200px; transition:0.5s all ease-in-out; scale:${
                  isHovering ? 1.05 : 1
                }; cursor:pointer`"
                alt=""
                v-bind="props"
              />
              <v-btn
                density="compact"
                variant="outlined"
                height="30"
                width="80"
                class="bg-white quick-view-btn"
                style="
                  text-transform: none;
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                  border-radius: 30px;
                  font-size: 12px;
                  transition: 0.2s all ease-in-out;
                  opacity: 0;
                "
                @click="openQuickView(item)"
              >
                Quick View
              </v-btn>
            </div>
          </v-hover>
          <v-card-text class="pl-0 pb-0">
            { {{ item.title }} }
            {{
              item.description.split(" ").length <= 8
                ? item.description
                : item.description.split(" ").slice(0, 8).join(" ") + " .... "
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
            <span class="text-red" style="font-weight: 900; font-size: 16px">
              ${{
                Math.ceil(
                  item.price - item.price * (item.discountPercentage / 100)
                )
              }}
            </span>
          </v-card-text>
          <v-btn-toggle v-model="shownItem[item.title]" mandatory>
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
              class="py-2 px-12"
              style="text-transform: none; border-radius: 30px"
              variant="outlined"
            >
              Choose Options
            </v-btn>
          </div>
        </v-card>
      </swiper-slide>
      <div class="swiper-prev"></div>
      <div class="swiper-next"></div>
      <div class="swiper-pagination"></div>
    </Swiper>

    <!-- <v-container fluid class="pt-9">
      <v-row>
        <v-col cols="3" v-for="item in products" :key="item.id">
          <v-card elevation="0" class="pb-5">
            <img
              :src="
                shownItem[item.title] ? shownItem[item.title] : item.thumbnail
              "
              class="w-100"
              style="height: 200px"
              alt=""
            />
            <v-card-text class="pl-0 pb-0">
              { {{ item.title }} }
              {{
                item.description.split(" ").length <= 8
                  ? item.description
                  : item.description.split(" ").slice(0, 8).join(" ") + " .... "
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
              <span class="text-red" style="font-weight: 900; font-size: 16px">
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
                density="combact"
                class="py-2 px-12"
                style="text-transform: none; border-radius: 30px"
                variant="outlined"
              >
                Choose Options
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";

export default {
  inject: ["Emitter"],
  methods: {
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  props: {
    products: {
      type: Array,
    },
    title: {
      type: String,
    },
    titleColor: {
      type: String,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    VSkeletonLoader,
  },
  data: () => {
    return {
      shownItem: {},
    };
  },
};
</script>

<style lang="scss">
.products-swiper {
  .swiper-button-next,
  .swiper-button-prev {
    height: 35px;
    width: 35px;
    border: 1px solid black;
    border-radius: 50%;
    background-color: white;
    top: 43%;
    &::after {
      font-size: 13px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(85, 85, 85);
      font-weight: 900;
    }
  }
}
.img-parent:hover {
  .quick-view-btn {
    opacity: 1 !important;
  }
}
</style>
