<template>
  <div class="content">
    <app-loading v-if="loading" />
    <div class="items" v-else>
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
                    <th>Kod</th>
                    <th>Nomi º</th>
                    <th>Fakultet</th>
                    <th>Faol</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in department" :key="i">
                    <td
                      @click="departmentGetId(item.id)"
                      style="cursor: pointer"
                    >
                      {{ item.kod }}
                    </td>
                    <td
                      @click="departmentGetId(item.id)"
                      style="cursor: pointer"
                    >
                      {{ item.name }}
                    </td>
                    <td>{{ item.status }}</td>
                    <td>
                      <label class="switch">
                        <input
                          type="checkbox"
                          @click="toggleCheckbox(i)"
                          v-model="item.status"
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
        <div class="box-footer">
          <span class="summary">
            1 - {{ department.length }} / jami {{ department.length }} ta
          </span>
        </div>
      </div>
      <div class="items-right">
        <div class="box">
          <div class="box-body pa-10">
            <ValidationObserver v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit(departmentSave)">
                <base-select
                  type="text"
                  label="Fakultet"
                  vid="Fakultet"
                  rules="required"
                  placeholder="Fakultetni tanlang"
                  :options-prop="faculty"
                  v-model="department_type_update.faculty"
                  @itemSelected="facultyType"
                />
                <base-input
                  type="text"
                  vid="Nomi"
                  rules="required"
                  label="Nomi º"
                  placeholder="Nomi"
                  v-model="department_type_update.name"
                />
                <base-input
                  type="text"
                  vid="Kod"
                  rules="required|min:10"
                  label="Kod"
                  placeholder="Kod"
                  v-mask="'336-101-##'"
                  v-model="department_type_update.kod"
                />

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
                    @click="clear"
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
                    @click="departmentDelete(department_id)"
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
        <div class="box">
          <div class="box-body">
            <div class="table-block">
              <table class="table">
                <tbody>
                  <tr>
                    <td>Ma'lumot sarlavhasi</td>
                    <td>Moliya fakulteti</td>
                  </tr>
                  <tr>
                    <td>Sinxronizatsiya statusi</td>
                    <td>Aktual</td>
                  </tr>
                  <tr>
                    <td>Sinxronlash sanasi</td>
                    <td>15.08.2023 09:00:06</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="box-footer mla">
              <app-button
                theme="transparent"
                :font-size="isMobile ? 14 : 16"
                :sides="isMobile ? 10 : 20"
                radius="5"
                height="40"
              >
                Ma'lumotlarni tekshirish
              </app-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import AppButton from "@/components/shared-components/AppButton.vue";
import { mapActions, mapGetters } from "vuex";
import AppLoading from "@/components/shared-components/AppLoading.vue";
import BaseInput from "@/components/shared-components/BaseInput.vue";
import BaseSelect from "@/components/shared-components/BaseSelect.vue";

export default {
  name: "structure-department",
  components: {
    ValidationObserver,
    AppButton,
    AppLoading,
    BaseInput,
    BaseSelect,
  },
  data() {
    return {
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },

        {
          value: "Option5",
          label: "Option5",
        },
      ],
      loading: true,
      showSelect: false,
      filterSelect: false,
      filterValue: "",
      checkbox: true,
      department_id: "",
      department: [],
      department_type_update: {
        faculty: "",
        name: "",
        kod: "",
      },
    };
  },
  methods: {
    ...mapActions(["getFaculty"]),
    facultyId(item) {
      this.showSelect = false;
      this.department_type_update.faculty = item.name;
    },
    filterFaculty(item) {
      this.filterSelect = false;
      this.filterValue = item.value;
    },
    hideSelectDropdown() {
      this.showSelect = false;
      this.filterSelect = false;
    },
    toggleCheckbox() {
      this.checkbox = !this.checkbox;
      this.$emit("setCheckboxVal", this.checkbox);
    },
    toggleFilterSelect() {
      this.filterSelect = !this.filterSelect;
    },
    getDepartment() {
      this.loading = true;
      this.$http
        .get(`department`)
        .then((res) => {
          this.department = res;
          this.successNotification("Ma'lumotlar muvaffaqiyatli olingan!");
        })
        .finally(() => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    departmentGetId(id) {
      this.loading = true;
      this.$http
        .get(`department/get/${id}`)
        .then((res) => {
          this.department_type_update.faculty = res.faculty;
          this.department_type_update.name = res.name;
          this.department_type_update.kod = res.kod;
          this.department_id = res.id;
        })
        .catch(() => {
          this.loading = false;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    departmentDelete(id) {
      this.$http
        .post(`department/delete/`, {
          id: id,
        })
        .then((res) => {
          this.successNotification(res.xabar);
          this.department_type_update.faculty = "";
          this.department_type_update.name = "";
          this.department_type_update.kod = "";
          this.department_id = "";
          this.getDepartment();
        })
        .finally(() => {})
        .catch((error) => {
          this.errorNotification(error.response.data.id);
        });
    },
    departmentSave() {
      console.log("aaa");
    },
    clear() {
      this.department_type_update.faculty = "";
      this.department_type_update.name = "";
      this.department_type_update.kod = "";
      this.department_id = "";
    },
  },
  computed: {
    ...mapGetters(["faculty"]),
  },
  mounted() {
    this.getDepartment();
    this.getFaculty();
  },
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  border-radius: 3px;
  background: #ffffff;
  border-top: 3px solid #40d88a;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.box-footer {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-top: 1px solid #f4f4f4;
  padding: 10px;
  background-color: #fff;
  width: fit-content;
}
.box-header {
  background-color: #f3f3f3 !important;
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
