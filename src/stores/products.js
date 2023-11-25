import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    mobilePhones: [],
    fragrances: [],
    groceries: [],
    categoryProducts: [],
    singleProduct: "",
    categories: [
      { title: "Smart Phones", route: "smartphones" },
      { title: "Laptops", route: "laptops" },
      { title: "Furniture", route: "furniture" },
      { title: "Men's Shoes", route: "mens-shoes" },
      { title: "Men's Watches", route: "mens-watches" },
      { title: "Women's Bags", route: "womens-bags" },
      { title: "Women's Jewellery", route: "Womens-jewellery" },
      { title: "MotorCycles", route: "motorcycles" },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.newProducts = res.data.products.filter(
            (el) => el.category === "laptops"
          );
          this.mobilePhones = res.data.products.filter(
            (el) => el.category === "smartphones"
          );
          this.fragrances = res.data.products.filter(
            (el) => el.category === "fragrances"
          );
          this.groceries = res.data.products.filter(
            (el) => el.category === "groceries"
          );

          this.flashDeals = res.data.products.slice(0, 8);
        })
        .catch((err) => console.log(err));
    },
    async getProductByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => {
          console.log((this.categoryProducts = res.data));
        })
        .catch();
    },
    async getSingleProduct(productId) {
      await axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) => {
          console.log((this.singleProduct = res.data));
        })
        .catch();
    },
  },
});
