<template>
  <div class="top_categories">
    <div class="cyber-banner">
      <img src="@/assets/images/cyber-banner.webp" class="w-100" alt="" />
    </div>
    <div class="categories pt-12">
      <div class="title mb-5 px-5 d-flex align-center justify-center">
        <h2
          class="text-center flex-grow-1"
          style="font-weight: 900; font-size: 20px"
        >
          Top Categories
        </h2>
        <a href="#" class="text-black" style="font-size: 14px">Shop All</a>
      </div>
      <v-container fluid>
        <v-row>
          <v-col cols="2" v-for="cat in categories" :key="cat.title">
            <v-card class="text-center py-3 px-2" elevation="0">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  class="img-parent"
                  style="
                    width: 90%;
                    height: 170px;
                    overflow: hidden;
                    border-radius: 50%;
                  "
                >
                  <img
                    :src="cat.image"
                    alt=""
                    v-bind="props"
                    :style="`transition:0.4s all ease-in-out; scale:${
                      isHovering ? 1.05 : 1
                    }; cursor: pointer; height:100%; width:100%`"
                  />
                </div>
              </v-hover>
              <v-card-text>
                {{ cat.title }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      categories: [
        {
          title: "Mobile Phones",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
        },
        {
          title: "Laptops",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
        },
        {
          title: "PC",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
        },
        {
          title: "Audio & Video",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
        },
        {
          title: "Gaming",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
        },
        {
          title: "Home Appliances",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
        },
        {
          title: "Kitchen",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
        },
        {
          title: "Cameras",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
        },
        {
          title: "Consume",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
        },
        {
          title: "Smart",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
        },
        {
          title: "Accessories",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367 -->",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
<!-- laptop category: https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209
tv category: https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137
pc category: https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840
audio & videon category: https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791
gaming category: https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635
home appliances category: https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882
kitchen category: https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410
cameras category: https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515
consume cat: https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964
smart cat: https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828
accessories cat: https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367 -->
