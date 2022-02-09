<template>
  <ul class="cart-list">
    <li class="item" v-for="product in products" :key="product.id">
      <img :src="product.image" alt="" class="item-avatar" />
      <div class="item-content">
        <div class="item-wrapper">
          <p>{{ product.name }}</p>
          <div class="button-wrapper">
            <button class="plus">+</button>
            <p class="num">{{ product.quantity }}</p>
            <button class="minus">-</button>
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
      products: this.initialProducts,
    };
  },
};
</script>
