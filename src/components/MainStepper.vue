<template>
  <ul
    class="stepper-container d-flex justify-content-between align-items-center mb-4"
  >
    <li class="step active" :class="{ done: step > 1 }">
      <div class="circle-container"></div>
      <p>寄送地址</p>
    </li>
    <span class="connect-line"></span>
    <li class="step" :class="[{ active: step > 1 }, { done: step > 2 }]">
      <div class="circle-container"></div>
      <p>運送方式</p>
    </li>
    <div class="connect-line"></div>
    <li class="step" :class="{ active: step === 3 }">
      <div class="circle-container"></div>
      <p>付款資訊</p>
    </li>
  </ul>
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
