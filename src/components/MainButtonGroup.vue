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
    <button
      class="next"
      data-bs-toggle="modal"
      data-bs-target="#submitModal"
      v-if="step === 3"
      @click="submitOrder"
    >
      <p>提交訂單</p>
    </button>
    <!-- Modal -->
    <div
      class="modal fade"
      id="submitModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ userInfo.name }}
              {{ userInfo.gender === "不拘" ? "" : userInfo.gender }} 您好
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <span>以下是您所填寫的個人資料: </span>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">姓名: {{ userInfo.name }}</li>
              <li class="list-group-item">聯絡電話: {{ userInfo.tel }}</li>
              <li class="list-group-item">電子郵件: {{ userInfo.email }}</li>
              <li class="list-group-item">居住城市: {{ userInfo.city }}</li>
              <li class="list-group-item">地址: {{ userInfo.address }}</li>
              <li class="list-group-item">持卡人: {{ userInfo.cardName }}</li>
              <li class="list-group-item">卡片號碼: {{ userInfo.cardNum }}</li>
              <li class="list-group-item">卡片效期: {{ userInfo.validity }}</li>
              <li class="list-group-item">CVC: {{ userInfo.cvc }}</li>
            </ul>
          </div>
          <div class="modal-footer">
            <strong>總金額: {{ totalCost }}</strong>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
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
    user: {
      type: Object,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      userInfo: this.user,
      totalCost: this.total,
    };
  },
  methods: {
    nextStep() {
      this.$emit("next-step", this.step);
    },
    previousStep() {
      this.$emit("previous-step", this.step);
    },
    submitOrder() {
      let modalContent = { ...this.user };
      modalContent["total"] = this.total;
      console.log(modalContent);
    },
  },
};
</script>
