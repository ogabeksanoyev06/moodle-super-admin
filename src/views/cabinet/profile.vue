<template>
  <div class="profile">
    <div class="box box__info">
      <div class="box__header">
        <h3 class="title">Mening profilim</h3>
      </div>
      <div class="box__body">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(changeUser)">
            <div class="box__inner">
              <div class="box__inner-left">
                <base-input
                  type="text"
                  vid="Login"
                  rules="required"
                  label="Login"
                  placeholder="Login"
                  v-model="profile.login"
                  disabled
                />
                <base-input
                  type="text"
                  vid="To‘liq ismi º"
                  rules="required"
                  label="To‘liq ismi º"
                  placeholder="To‘liq ismi º"
                  v-model="profile.fullName"
                  disabled
                />
                <base-input
                  type="text"
                  vid="ID raqami"
                  rules="required"
                  label="ID raqami"
                  placeholder="ID raqami"
                  v-model="profile.ID"
                  disabled
                />
                <base-input
                  type="text"
                  vid="Email"
                  rules="required|email"
                  label="Email"
                  placeholder="Email"
                  v-model="profile.email"
                />
                <br />
                <div class="checkbo checkbo-ready">
                  <div class="form-group">
                    <input type="checkbox" id="checkbox" v-model="isChecked" />
                    <label for="checkbox" class="checkbox-label">
                      <span
                        class="checkbox-custom"
                        :class="{ checked: isChecked }"
                      >
                        <i v-if="isChecked" class="fa fa-check"></i>
                      </span>
                      Joriy holat
                    </label>
                  </div>
                  <ValidationObserver>
                    <base-input
                      type="text"
                      vid="Parol"
                      rules="required"
                      label="Yangi parol"
                      placeholder="Yangi parol"
                      v-model="profile.password"
                      :disabled="!isChecked"
                    />
                    <base-input
                      type="text"
                      vid="Parol tasdig‘i"
                      :rules="isChecked ? 'required|confirmed:Parol' : ''"
                      label="Parol tasdig‘i"
                      placeholder="Parol tasdig‘i"
                      v-model="confirmPassword"
                      :disabled="!isChecked"
                    />
                  </ValidationObserver>
                </div>
              </div>
              <div class="box__inner-right">
                <div class="account__photo">
                  <img src="/images/account.png" alt="" />
                </div>
                <!-- <div class="m_photo">
                  <i class="fa fa-camera"></i>
                </div> -->
              </div>
            </div>
            <div class="box__footer">
              <app-button
                theme="main"
                type="submit"
                :height="40"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                :sides="10"
              >
                O‘zgartirish
              </app-button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>
<script>
import { ValidationObserver } from "vee-validate";
import AppButton from "@/components/shared-components/AppButton.vue";
import BaseInput from "@/components/shared-components/BaseInput.vue";

export default {
  name: "StudentProfile",
  components: { ValidationObserver, AppButton, BaseInput },
  data() {
    return {
      profile: {
        fullName: "Og'abek Sanoyev",
        login: "23567897653989",
        ID: "123456789",
        email: "ogabeksanoyev06@gmail.com",
        telefon: "+998 88 890-88-15",
        password: "",
      },
      confirmPassword: "",
      isChecked: false,
    };
  },
  methods: {
    changeUser() {
      console.log("tayyyoooooooorrrrr");
    },
    toggleCheckbox() {
      this.isChecked = !this.isChecked;
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  max-width: 700px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 24px;
  padding: 36px;
  &__inner {
    display: flex;
    &-left {
      flex: 1;
      padding-right: 30px;
    }
    &-right {
      max-width: 120px;
      max-height: 120px;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 50%;
      .account__photo {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  &__header {
    position: relative;
    margin-bottom: 15px;
    .title {
      display: inline-block;
      font-size: 20px;
      font-weight: 600;
      color: #031b3c;
      line-height: 1;
    }
  }
  &__footer {
    width: 100%;
    text-align: end;
    margin-top: 15px;
  }
}

@media (max-width: 576px) {
  .box {
    max-width: 700px;
    width: 100%;
    background-color: #ffffff;
    border-radius: 24px;
    padding: 36px;
    &__inner {
      flex-direction: column;
      &-left {
        order: 2;
        padding-right: 0;
      }
      &-right {
        order: 1;
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    &__header {
      margin-bottom: 20px;
      text-align: center;
    }
  }
}
</style>
