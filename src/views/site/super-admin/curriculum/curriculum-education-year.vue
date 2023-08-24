<template>
  <div class="content">
    <app-loading v-if="!loading" />
    <div class="items">
      <div class="items-left">
        <div class="box box-default">
          <div class="box-header">
            <div class="grid-block-2">
              <base-input
                type="text"
                vid="Nomi"
                placeholder="Nom bo‘yicha qidirish"
              />
            </div>
          </div>
          <div class="box-body">
            <div class="table-block">
              <table class="table">
                <thead>
                  <tr>
                    <th>Nomi º</th>
                    <th>Kod</th>
                    <th>Joriy holat</th>
                    <th>O'zgartirilgan</th>
                    <th>Faol</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in 10" :key="i">
                    <td style="cursor: pointer">sasasa</td>
                    <td style="cursor: pointer">fgbgfhfhfghgh</td>
                    <td>nbnbnbnbnb</td>
                    <td>,kkiolilgf</td>

                    <td>
                      <label class="switch">
                        <input type="checkbox" v-model="item.status" />
                        <div class="slider round"></div>
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="box-footer">
          <span class="summary"> 1 - {{ 10 }} / jami {{ 10 }} ta </span>
        </div>
      </div>
      <div class="items-right">
        <div class="box">
          <div class="box-body">
            <ValidationObserver v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit()">
                <base-select
                  type="text"
                  label="O'quv yili"
                  vid="O'quv yili"
                  rules="required"
                  :options-prop="faculty"
                  placeholder="O'quv yilini tanlang"
                  v-model="education_year_value"
                  @itemSelected="facultyType"
                />
                <base-select
                  type="text"
                  label="Semestr turi"
                  vid="Semestr turi"
                  rules="required"
                  :options-prop="faculty"
                  placeholder="Semestr turi tanlang"
                  v-model="educationyear_semestr_value"
                  @itemSelected="facultyType"
                />
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
                <div
                  class="box-footer d-flex mla"
                  :class="isMobile ? 'flex-wrap' : ''"
                >
                  <app-button
                    theme="transparent"
                    :font-size="isMobile ? 14 : 16"
                    :sides="isMobile ? 10 : 20"
                    class="mr-5"
                    radius="5"
                    height="40"
                  >
                    Bekor
                  </app-button>
                  <app-button
                    theme="delete"
                    :font-size="isMobile ? 14 : 16"
                    :sides="isMobile ? 10 : 20"
                    class="mr-5"
                    radius="5"
                    height="40"
                  >
                    O'chirish
                  </app-button>
                  <app-button
                    theme="main"
                    :font-size="isMobile ? 14 : 16"
                    :sides="isMobile ? 10 : 20"
                    radius="5"
                    height="40"
                    type="submit"
                  >
                    <i class="fa fa-check"></i>
                    Saqlash
                  </app-button>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLoading from "@/components/shared-components/AppLoading.vue";
import { ValidationObserver } from "vee-validate";
import AppButton from "@/components/shared-components/AppButton.vue";
import BaseInput from "@/components/shared-components/BaseInput.vue";
import BaseSelect from "@/components/shared-components/BaseSelect.vue";

export default {
  components: {
    AppLoading,
    ValidationObserver,
    AppButton,
    BaseInput,
    BaseSelect,
  },
  name: "curriculum-education-year",
  data() {
    return {
      loading: true,
      showSelectYear: false,
      showSelectSemestr: false,
      education_year_value: "",
      educationyear_semestr_value: "",
      isChecked: false,
    };
  },
  methods: {
    toggleCheckbox() {
      this.isChecked = !this.isChecked;
    },
    hideSelectDropdownYear() {
      this.showSelectYear = false;
    },
    hideSelectDropdownSemestr() {
      this.showSelectSemestr = false;
    },
    curriculumYear(item) {
      this.education_year_value = item;
    },
    curriculumYearSemestr(item) {
      this.educationyear_semestr_value = item;
    },
  
  },
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  border-radius: 3px;
  background-color: #f3f3f3 !important;
  border-top: 3px solid #40d88a;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  padding: 10px;
}
.box-footer {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-top: 1px solid #f4f4f4;
  padding: 10px;
  width: fit-content;
}
.box-header {
  padding: 10px 0;
}
.items {
  display: flex;
  width: 100%;
  &-left {
    max-width: 65%;
    width: 100%;
    padding-right: 40px;
  }
  &-right {
    max-width: 35%;
    width: 100%;
  }
}

@media (max-width: 991px) {
  .items {
    flex-direction: column;
    &-left {
      max-width: 100%;
      width: 100%;
      padding-right: 0px;
    }

    &-right {
      max-width: 100%;
      width: 100%;
    }
  }
}
</style>
