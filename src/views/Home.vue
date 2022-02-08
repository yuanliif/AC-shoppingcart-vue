<template>
  <div class="container p-5">
    <div class="row gx-5">
      <h2 class="my-5 fw-bold">結帳</h2>
      <div class="left-container col-7">
        <!-- stepper -->
        <MainStepper :step="step" />
        <form class="form" @submit.prevent>
          <!-- input group -->
          <div class="input-group">
            <MainInputAddress :step="step" />
            <MainInputDelivery :step="step" />
            <MainInputPayment :step="step" />
          </div>
        </form>
        <!-- button -->
        <MainButtonGroup
          :step="step"
          @next-step="nextStep"
          @previous-step="previousStep"
        />
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

const dummyData = {
  products: [
    {
      id: 1,
      name: "破壞補丁修身牛仔褲",
      price: 3999,
      quantity: 50,
      image: "./../assets/images/ripped-jeans@2x.png",
    },
    {
      id: 2,
      name: "刷色直筒牛仔褲",
      price: 1999,
      quantity: 50,
      image: "./../assets/images/staight-jeans@2x.png",
    },
  ],
};

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
      step: 1,
      products: [],
      totalAmount: 0,
      info: {
        gender: "",
        name: "",
        tel: "",
        email: "",
        city: "",
        address: "",
        method: "",
        deliveryFee: 0,
        cardName: "",
        cardNum: "",
        validity: "",
        cvc: "",
      },
    };
  },
  methods: {
    fetchData() {
      this.products = dummyData.products;
    },
    nextStep() {
      return this.step++;
    },
    previousStep() {
      return this.step--;
    },
  },
  mounted() {
    this.fetchData();
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
