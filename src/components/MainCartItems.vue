<template>
  <ul class="cart-list">
    <li class="item" v-for="product in products" :key="product.id">
      <img :src="product.image" alt="" class="item-avatar" />
      <div class="item-content">
        <div class="item-wrapper">
          <p>{{ product.name }}</p>
          <div class="button-wrapper">
            <button class="plus" @click.prevent.stop="addItem(product)">
              +
            </button>
            <p class="num">{{ product.quantity }}</p>
            <button class="minus" @click.prevent.stop="minusItem(product)">
              -
            </button>
          </div>
        </div>
        <span>${{ product.price }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    initialProducts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    fetchData() {
      this.products = this.initialProducts;
    },
    addItem(product) {
      product.quantity++;
      this.totalAmount();
    },
    minusItem(product) {
      if (!product.quantity) return;
      product.quantity--;
      this.totalAmount();
    },
    totalAmount() {
      this.$emit("total", this.products);
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
