<template>
  <div class="container p-5">
    <div class="row gx-5">
      <h2 class="my-5">結帳</h2>
      <div class="left-container col-7">
        <!-- stepper -->
        <MainStepper />
        <form class="form">
          <!-- input group -->
          <div class="input-group">
            <MainInputAddress />
            <MainInputDelivery />
            <MainInputPayment />
          </div>
        </form>
        <!-- button -->
        <MainButtonGroup />
      </div>
      <div class="right-container col-5">
        <h4>購物籃</h4>
        <!-- items -->
        <MainCartItems />
        <!-- sum -->
        <MainCartSum />
      </div>
    </div>
  </div>
</template>

<script>
import MainStepper from "./../componenets/MainStepper.vue";
import MainInputAddress from "./../componenets/MainInputAddress.vue";
import MainInputDelivery from "./../componenets/MainInputDelivery.vue";
import MainInputPayment from "./../componenets/MainInputPayment.vue";
import MainButtonGroup from "./../componenets/MainButtonGroup.vue";
import MainCartItems from "./../componenets/MainCartItems.vue";
import MainCartSum from "./../componenets/MainCartSum.vue";
export default {
  name: "app",
  components: {
    MainStepper,
    MainButtonGroup,
    MainCartItems,
    MainCartSum,
    MainInputAddress,
    MainInputDelivery,
    MainInputPayment,
  },
  data() {
    return {
      currentPage: ""
    }
  }
};
</script>
