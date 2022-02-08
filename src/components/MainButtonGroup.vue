<template>
  <div class="step-btn-group">
    <button class="forward" v-if="step >= 2" @click="previousStep">
      <div></div>
      <p>上一步</p>
    </button>
    <button class="next" v-if="step <= 2" @click="nextStep">
      <p>下一步</p>
      <img src="./../assets/images/arrow_right@2x.png" alt="" />
    </button>
    <button class="next" v-if="step === 3">
      <p>提交訂單</p>
    </button>
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
  methods: {
    nextStep() {
      this.$emit("next-step", this.step);
    },
    previousStep() {
      this.$emit("previous-step", this.step);
    },
  },
};
</script>
