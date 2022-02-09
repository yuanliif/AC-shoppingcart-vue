<template>
  <div class="part" v-show="step === 3">
    <h2 class="form-title">付款資訊</h2>
    <div class="form-container payment-method">
      <div class="row">
        <div class="form-row col-12">
          <label for="">持卡人姓名</label
          ><input type="text" placeholder="John Doe" v-model="user.cardName" />
        </div>
      </div>
      <div class="row">
        <div class="form-row col-12">
          <label for="">卡號</label
          ><input
            type="text"
            placeholder="1111 2222 3333 4444"
            v-model="user.cardNum"
          />
        </div>
      </div>
      <div class="row gx-4">
        <div class="form-row col">
          <label for="">有效期限</label
          ><input type="text" placeholder="MM/YY" v-model="user.validity" />
        </div>

        <div class="form-row col">
          <label for="">CVC / CCV</label
          ><input type="text" placeholder="123" v-model="user.cvc" />
        </div>
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
