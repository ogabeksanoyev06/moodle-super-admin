<template>
  <section class="content">
    <app-loading v-if="loading" />
    <div class="box" v-else>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(updateOTM)">
          <div class="box-body">
            <base-input
              type="text"
              vid="Kod"
              rules="required"
              label="Kod"
              placeholder="OTM kod"
              v-model="otmcity.kod"
              disabled
            />
            <base-input
              type="text"
              vid="Nomi"
              rules="required"
              label="Nomi º"
              placeholder="Nomi"
              v-model="otmcity.name"
            />
            <div class="grid-block-2">
              <base-input
                type="text"
                vid="Kontakt"
                v-mask="'+998#########'"
                rules="required"
                label="Kontakt"
                placeholder="Kontakt"
                v-model="otmcity.phone"
              />
              <base-input
                type="text"
                vid="STIR"
                v-mask="'############'"
                rules="required"
                label="STIR"
                placeholder="STIR"
                v-model="otmcity.stir"
              />
            </div>
            <base-input
              type="text"
              vid="Hudud"
              rules="required"
              label="Hudud"
              placeholder="Hudud"
              v-model="otmcity.area_located"
            />
            <base-input
              type="text"
              vid="Shahar"
              rules="required"
              label="Shahar º"
              placeholder="Shahar"
              v-model="otmcity.city.name"
            />
            <base-input
              type="text"
              vid="OtmTuri"
              rules="required"
              label="OTM turi"
              placeholder="OTM turi"
              v-model="otmcity.ownership.name"
            />
            <base-input
              type="text"
              vid="OtmShakli"
              rules="required"
              label="OTM shakli"
              placeholder="OTM shakli"
              v-model="otmcity.universityForm.name"
              disabled
            />
            <base-text-area
              type="text"
              vid="Email"
              rules="required"
              rows="4"
              label="Pochta manzili º"
              v-model="otmcity.address"
            />
            <base-text-area
              type="text"
              vid="Bank"
              rules="required"
              rows="7"
              label="Bank ma'lumotlari"
              v-model="otmcity.bank_info"
            />
            <base-text-area
              type="text"
              vid="Akkreditasiya"
              rules="required"
              rows="3"
              label="Akkreditasiya ma'lumotlari º"
              v-model="otmcity.akkreditasiya_info"
            />
            <div class="box-footer">
              <app-button
                theme="main"
                type="submit"
                :font-size="isMobile ? 14 : 16"
                :sides="isMobile ? 10 : 20"
                radius="5"
                height="40"
              >
                <i class="fa fa-check"></i>
                O‘zgartirish
              </app-button>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </section>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import "../../../../assets/styles/components/base-input.scss";
import AppButton from "@/components/shared-components/AppButton.vue";
import AppLoading from "@/components/shared-components/AppLoading.vue";
import BaseInput from "@/components/shared-components/BaseInput.vue";
import BaseTextArea from "@/components/shared-components/BaseTextArea.vue";

export default {
  name: "structure-university-update",
  components: {
    ValidationObserver,
    AppButton,
    AppLoading,
    BaseInput,
    BaseTextArea,
  },
  data() {
    return {
      otmcity: {},
      loading: false,
      id: null,
    };
  },
  methods: {
    async getOTM() {
      this.loading = true;
      await this.$http
        .get(`otm`)
        .then((res) => {
          if (res.status_action) {
            this.otmcity = res;
            this.id = res.id;
            this.successNotification("Ma'lumotlar muvaffaqiyatli olingan!");
          } else {
            this.errorNotification("Noto'g'ri javob ma'lumotlari.");
            this.loading = false;
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    async updateOTM() {
      await this.$http
        .patch(`otm/update/${this.id}`, {
          kod: this.otmcity.kod,
          name: this.otmcity.name,
          area_located: this.otmcity.area_located,
          phone: this.otmcity.phone,
          stir: this.otmcity.stir,
          rektor: "string",
          address: this.otmcity.address,
          bank_info: this.otmcity.bank_info,
          akkreditasiya_info: this.otmcity.akkreditasiya_info,
          city: this.otmcity.city.id,
          ownership: this.otmcity.ownership.id,
          universityForm: this.otmcity.universityForm.id,
        })
        .then((res) => {
          this.res = res;
          this.successNotification("O`zgartirildi");
        })
        .catch((error) => {
          if (error.response && error.response.data) {
            switch (true) {
              case !!error.response.data.phone:
                this.errorNotification(error.response.data.phone.message);
                break;
              case !!error.response.data.stir:
                this.errorNotification(error.response.data.stir.message);
                break;
              default:
                break;
            }
          }
        });
    },
  },
  mounted() {},
  created() {
    this.getOTM();
  },
};
</script>

<style lang="scss" scoped>
.box-body {
  padding: 20px;
}
</style>
