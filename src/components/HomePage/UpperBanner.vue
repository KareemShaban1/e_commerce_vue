<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="cont">
              <h3><span>Huge Saving</span> on UHD Televisions</h3>
              <p class="hint">Save up to 70% off selected items</p>
              <v-btn
                class="py-2 px-10"
                variant="outlined"
                Density="compact"
                style="border-radius: 30px; text-transform: none"
                >Shop Now</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  .parent {
    height: 390px;
    background-image: url(../../assets/images/banner-bg.jpg);
    background-size: cover;
    background-position: left top;
    .cont {
      color: white;
      padding: 40px 0px 0px 100px;
      h3 {
        font-size: 45px;
        font-weight: 900;
        span {
          color: greenyellow;
        }
      }
      .hint {
        margin: 20px 0px 40px;
      }
    }
  }
}
</style>
