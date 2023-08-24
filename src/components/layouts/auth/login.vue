<template>
  <kinesis-container>
    <div class="auth">
      <div class="auth__content">
        <div class="auth__wrap">
          <router-link to="/">
            <div class="auth__logo">
              <img src="/svg/smallLogo.svg" alt="" class="mb-5" />
            </div>
          </router-link>
          <AppText weight="600" size="14" class="color-text-grey mb-20">
            Toshkent Moliya Instituti
          </AppText>
          <AppText weight="600" size="12" class="color-text-grey mb-20">
            Moodle OTM axborot tizimi
          </AppText>
          <el-form :model="request" :rules="rules" ref="request" class="w-100">
            <el-form-item prop="login">
              <el-input placeholder="Login  / Xodim ID" v-model="request.login">
                <template slot="append">
                  <img src="/icons/account.svg" alt="" />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="login">
              <el-input
                placeholder="Parol"
                v-model="request.password"
                id="password"
                type="password"
              >
                <template slot="append">
                  <img
                    src="/icons/eye.svg"
                    alt=""
                    @click="confirmationSee"
                    v-if="passwordConfirmationField"
                  />
                  <img
                    src="/icons/close-eye.svg"
                    alt="close"
                    @click="confirmationSee"
                    v-if="!passwordConfirmationField"
                  />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <AppButton
                theme="main"
                :font-size="12"
                :sides="30"
                height="40"
                class="w-100"
                @click="loginToSystem('request')"
              >
                Tizimga kirish
              </AppButton>
            </el-form-item>
          </el-form>
        </div>
      </div>

      <div class="auth__photo" v-if="!isDesktopSmall">
        <kinesis-element class="layer" :strength="15">
          <img src="/svg/largeLogo.svg" alt="" />
          <div class="blur"></div>
        </kinesis-element>
      </div>
    </div>
  </kinesis-container>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import { mapMutations } from "vuex";
import TokenService from "@/service/TokenService";
export default {
  name: "AppLogin",
  components: {
    "kinesis-container": KinesisContainer,
    "kinesis-element": KinesisElement,
    AppButton,
  },
  data() {
    return {
      request: {
        login: "",
        password: "",
      },
      passwordConfirmationField: true,
      rules: {
        login: [
          {
            required: true,
            message: "Maydon bo'sh bo'lmasligi kerak",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
      },
      authError: "",
      errorStatus: false,
    };
  },
  methods: {
    ...mapMutations(["setWindowWidth"]),
    setWidth() {
      this.setWindowWidth(document.documentElement.clientWidth);
    },
    confirmationSee() {
      this.passwordConfirmationField = !this.passwordConfirmationField;
      document.getElementById("password").type = this.passwordConfirmationField
        ? "password"
        : "text";
    },
    loginToSystem(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$api
            .post("", this.request)
            .then((data) => {
              if (data.error) {
                this.authError = data.error;
              } else {
                TokenService.saveToken(data.result.access_token);
                TokenService.saveRefreshToken(data.result.refresh_token);
                TokenService.saveExpireTime(data.result.expires_in);
                this.request.password = "";
              }
            })
            .catch((error) => {
              this.errorMes = error.response.data.error.message;
              setTimeout(() => {
                this.errorMes = "";
              }, 4000);
              this.errorStatus = true;
              this.request.login = "";
              this.request.password = "";
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  mounted() {
    this.setWidth();
    window.addEventListener("resize", this.setWidth);
  },
};
</script>
<style lang="scss" scoped>
.auth {
  display: flex;
  align-items: center;
  min-height: 100vh;
  &__content {
    max-width: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    min-height: 100vh;
  }
  &__wrap {
    max-width: 440px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 6px 6px 15px 0px rgba(188, 188, 188, 0.25);
    padding: 12px 40px;
  }
  &__photo {
    max-width: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    .layer {
      position: relative;
    }
    .blur {
      position: absolute;
      bottom: 0%;
      left: 0;
      width: 100%;
      height: 40%;
      background: rgba(255, 255, 255, 0.2);
      filter: blur(2px);
      backdrop-filter: blur(10.5px);
    }
  }
}
@media (max-width: 1040px) {
  .auth__content {
    max-width: 100%;
    width: 100%;
    padding: 0 15px;
  }

  .auth__photo {
    max-width: 100%;
    width: 100%;
  }
}
</style>
