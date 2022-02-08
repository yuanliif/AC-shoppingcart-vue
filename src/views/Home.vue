<template>
  <div class="container p-5">
    <div class="row gx-5">
      <h2 class="my-5 fw-bold">結帳</h2>
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
      <div class="right-container d-flex flex-column col-5">
        <h4 class="fw-bold">購物籃</h4>
        <!-- items -->
        <MainCartItems />
        <!-- sum -->
        <MainCartSum />
      </div>
    </div>
  </div>
</template>

<script>
import MainStepper from "../components/MainStepper.vue";
import MainInputAddress from "../components/MainInputAddress.vue";
import MainInputDelivery from "../components/MainInputDelivery.vue";
import MainInputPayment from "../components/MainInputPayment.vue";
import MainButtonGroup from "../components/MainButtonGroup.vue";
import MainCartItems from "../components/MainCartItems.vue";
import MainCartSum from "../components/MainCartSum.vue";
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
      currentPage: "",
    };
  },
};
</script>

<style scoped>
form {
  width: 100%;
  height: 85%;
  display: flex;
}
.right-container {
  border: var(--light-gray) 1px solid;
  border-radius: 8px;
  padding: 32px 24px 0;
  color: var(--main-font);
  background-color: var(--lower-content);
}
</style>
