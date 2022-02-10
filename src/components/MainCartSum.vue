<template>
  <div class="footer">
    <div class="deliver-fee">
      <span>運費</span>
      <span>{{
        user.deliveryFee === 0 ? "免費" : `$${user.deliveryFee}`
      }}</span>
    </div>
    <div class="summary">
      <span>小計</span>
      <span>${{ total }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    products: {
      type: Array,
    },
  },
  data() {
    return {
      totleCost: 0,
    };
  },
  computed: {
    total() {
      let productCost = 0;
      this.products.forEach((product) => {
        let productTotle = 0;
        productCost += product.quantity * product.price;
        productTotle += productCost;
        this.totleCost = productTotle + this.user["deliveryFee"];
      });
      return this.totleCost;
    },
  },
};
</script>
