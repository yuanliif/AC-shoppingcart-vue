<template>
  <div class="part" v-show="step === 1">
    <h3 class="form-title">寄送地址</h3>
    <div class="form-container address-method">
      <div class="row">
        <div class="col-4">
          <div class="form-row">
            <label for="">稱謂</label>
            <div class="select-wrapper">
              <select
                name="gender-type"
                id="gender-type"
                required
                v-model="user.gender"
              >
                <option>先生</option>
                <option>小姐</option>
                <option>不拘</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="form-row">
            <label for="">姓名</label
            ><input type="text" placeholder="請輸入姓名" v-model="user.name" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-row">
            <label for="">電話</label
            ><input
              type="tel"
              placeholder="請輸入行動電話"
              v-model="user.tel"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-row">
            <label for="">Email</label
            ><input
              type="email"
              placeholder="請輸入電子郵件"
              v-model="user.email"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="form-row">
            <label for="">縣市</label>
            <div class="select-wrapper">
              <select
                name="county-type"
                id="county-type"
                required
                v-model="user.city"
              >
                <option value="" disabled selected>請選擇縣市</option>
                <option>北台灣</option>
                <option>中台灣</option>
                <option>南臺灣</option>
                <option>東臺灣</option>
                <option>外島</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="form-row">
            <label for="">地址</label
            ><input
              type="text"
              placeholder="請輸入地址"
              v-model="user.address"
            />
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
