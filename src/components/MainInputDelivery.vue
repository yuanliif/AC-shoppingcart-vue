<template>
  <div class="part" v-show="step === 2">
    <h3 class="form-title">運送方式</h3>
    <div class="form-container delivery-method">
      <div class="form-row">
        <input
          type="radio"
          name="delivery"
          id="free-delivery"
          :value="0"
          v-model="user.deliveryFee"
        />
        <label class="wrapper" for="free-delivery">
          <div class="wrapper-item">
            <p>標準運送</p>
            <span>免費</span>
          </div>
          <span>約3~7個工作天</span>
        </label>
      </div>
      <div class="form-row">
        <input
          type="radio"
          name="delivery"
          id="paid-delivery"
          :value="500"
          v-model="user.deliveryFee"
        />
        <label class="wrapper" for="paid-delivery">
          <div class="wrapper-item">
            <p>DHL 貨運</p>
            <span>$500</span>
          </div>
          <span>48小時內送達</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      required: true,
    },
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
};
</script>
