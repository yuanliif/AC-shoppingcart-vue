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
            <MainInputAddress :step="step" :initial-user="user" />
            <MainInputDelivery :step="step" :initial-user="user" />
            <MainInputPayment :step="step" :initial-user="user" />
          </div>
        </form>
        <!-- button -->
        <MainButtonGroup
          :step="step"
          :user="user"
          :total="total"
          @next-step="nextStep"
          @previous-step="previousStep"
        />
      </div>
      <div class="right-container d-flex flex-column col-5">
        <h4 class="fw-bold">購物籃</h4>
        <!-- items -->
        <MainCartItems :initial-products="products" @total="totalCart" />
        <!-- sum -->
        <MainCartSum
          :user="user"
          :products="products"
          @total-cost="totalCost"
        />
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
      quantity: 1,
      image: "../assets/images/ripped-jeans@2x.png",
    },
    {
      id: 2,
      name: "刷色直筒牛仔褲",
      price: 1999,
      quantity: 1,
      image: "../assets/images/staight-jeans@2x.png",
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
      total: 0,
      user: {
        gender: "",
        name: "",
        tel: "",
        email: "",
        city: "",
        address: "",
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
    totalAmount(payload) {
      console.log(payload);
    },
    totalCart(payload) {
      this.products = payload;
    },
    totalCost(price) {
      this.total = price;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
form {
  width: 100%;
  height: 100%;
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
