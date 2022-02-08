<template>
  <div class="part" v-show="step===3">
    <h2 class="form-title">付款資訊</h2>
    <div class="form-container payment-method">
      <div class="row">
        <div class="form-row col-12">
          <label for="">持卡人姓名</label
          ><input type="text" placeholder="John Doe" />
        </div>
      </div>
      <div class="row">
        <div class="form-row col-12">
          <label for="">卡號</label
          ><input type="text" placeholder="1111 2222 3333 4444" />
        </div>
      </div>
      <div class="row gx-4">
        <div class="form-row col">
          <label for="">有效期限</label
          ><input type="text" placeholder="MM/YY" />
        </div>

        <div class="form-row col">
          <label for="">CVC / CCV</label
          ><input type="text" placeholder="123" />
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
  },
};
</script>