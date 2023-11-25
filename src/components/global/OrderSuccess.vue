<template>
  <div class="order-success">
    <v-dialog v-model="dialog" width="50%" persistent>
      <v-card class="text-center py-7">
        <div class="text-center">
          <v-icon
            size="75"
            style="
              background: white;
              color: green;
              width: 100px;
              height: 100px;
              font-size: 75px;
              border-radius: 50%;
              border: 1px solid green;
            "
            >mdi-check</v-icon
          >
        </div>
        <v-card-title style="font-size: 30px; font-weight: bold">
          Ordered Placed Successfully !!
        </v-card-title>
        <v-card-text
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ullam
          quod doloribus ad dolore similique, ipsam harum nisi molestias, quo,
          nobis ea? Est, voluptates? Inventore voluptatibus aliquid similique
          optio veritatis!</v-card-text
        >
        <v-card-actions class="mt-5 justify-center">
          <v-btn variant="elevated" color="blue" @click="resetData"
            >Got It</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { cartStore } from "@/stores/cart";
import { mapActions } from "pinia";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    popup: {
      type: Boolean,
    },
  },
  methods: {
    ...mapActions(cartStore, ["resetItems"]),
    resetData() {
      this.resetItems();
      this.dialog = false;
      this.$router.push({ name: "home" });
    },
  },
  watch: {
    dialog(newVal) {
      if (!newVal) {
        setTimeout(() => {
          this.$emit("close_popup");
        }, 200);
      }
    },
  },
  mounted() {
    this.dialog = this.popup;
  },
};
</script>
