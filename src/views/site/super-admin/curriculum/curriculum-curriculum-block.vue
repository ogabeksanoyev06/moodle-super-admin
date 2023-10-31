<template>
  <div class="content">
    <div class="items">
      <div class="items-left">
        <div class="box">
          <div class="box-header">
            <base-select
              type="text"
              vid="Fakultet"
              :options-prop="faculty"
              placeholder="O'quv rejani tanlang"
              v-model="year_value"
              @itemSelected="facultyType"
            />
          </div>
          <div class="box-body">
            <div class="table-block">
              <table class="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Kod</th>
                    <th>Fan bloki</th>
                    <th>O'quv reja</th>
                    <th>Faol</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in 30" :key="i">
                    <td class="text-center"><i class="fa fa-bars"></i></td>
                    <td style="cursor: pointer">
                      {{ item }}
                    </td>
                    <td>ddsdsds</td>
                    <td>Mahalliy</td>
                    <td>
                      <label class="switch">
                        <input
                          type="checkbox"
                          v-model="item.status"
                          @click="toggleCheckbox(i)"
                        />
                        <div class="slider round"></div>
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="items-right">
        <div class="box">
          <div class="box-body pa-10">
            <ValidationObserver v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit(facultyUpdate)">
                <base-select
                  type="text"
                  label="O'quv reja"
                  vid="O'quv reja"
                  rules="required"
                  :options-prop="faculty"
                  placeholder="O'quv reja tanlang"
                  v-model="education_year_value"
                  @itemSelected="facultyType"
                />
                <base-select
                  type="text"
                  label="Fanlar bloki"
                  vid="Fanlar bloki"
                  rules="required"
                  :options-prop="faculty"
                  placeholder="Fanlar blokini tanlang"
                  v-model="education_year_value"
                  @itemSelected="facultyType"
                />
                <base-input
                  type="text"
                  vid="Kod"
                  rules="required"
                  label="Kod"
                  placeholder="Kod"
                />

                <div class="box-footer d-flex">
                  <app-button
                    type="submit"
                    theme="main"
                    :font-size="isMobile ? 14 : 16"
                    :sides="isMobile ? 10 : 20"
                    radius="5"
                    height="40"
                    class="mla"
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
import { ValidationObserver } from "vee-validate";
import AppButton from "@/components/shared-components/AppButton.vue";
import BaseSelect from "@/components/shared-components/BaseSelect.vue";
import BaseInput from "@/components/shared-components/BaseInput.vue";

export default {
  name: "curriculum-curriculum-block",
  components: { ValidationObserver, AppButton, BaseSelect, BaseInput },
  data() {
    return {
      showSelect: false,
      showSelect2: false,
    };
  },
  methods: {
    hideSelectDropdown() {
      this.showSelect = false;
    },
    hideSelectDropdown2() {
      this.showSelect2 = false;
    },
  },
};
</script>

<style lang="scss" scoped>
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
