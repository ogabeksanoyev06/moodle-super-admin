<template>
  <div class="content">
    <app-loading v-if="loading" />
    <div class="items" v-else>
      <div class="items-left">
        <div class="box box-default">
          <div class="box-header greyBg">
            <div class="grid-block-2">
              <base-input
                type="text"
                placeholder="Nom bo‘yicha qidirish"
                :hideDetails="true"
              />
              <base-select
                type="text"
                placeholder="Fakultetni tanlang"
                :options-prop="faculties.results"
                v-model="departmentTypeUpdate.faculty"
                :hideDetails="true"
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
                  <tr v-for="(item, i) in department.results" :key="i">
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
                      <base-checkbox v-model="item.status" />
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
              <form @submit.prevent="handleSubmit(departmentSave)">
                <base-select
                  type="text"
                  label="Fakultet"
                  vid="Fakultet"
                  rules="required"
                  placeholder="Fakultetni tanlang"
                  :options-prop="faculties.results"
                  v-model="departmentTypeUpdate.faculty"
                />
                <base-input
                  type="text"
                  vid="Nomi"
                  rules="required"
                  label="Nomi º"
                  placeholder="Nomi"
                  v-model="departmentTypeUpdate.name"
                />
                <base-input
                  type="text"
                  vid="Kod"
                  rules="required|min:10"
                  label="Kod"
                  placeholder="Kod"
                  v-mask="'336-101-##'"
                  v-model="departmentTypeUpdate.kod"
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
                    disabled
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
import { ValidationObserver } from "vee-validate";
import AppButton from "@/components/shared-components/AppButton.vue";
import { mapActions, mapGetters, mapState } from "vuex";
import AppLoading from "@/components/shared-components/AppLoading.vue";
import BaseInput from "@/components/shared-components/BaseInput.vue";
import BaseSelect from "@/components/shared-components/BaseSelect.vue";
import BaseCheckbox from "@/components/shared-components/BaseCheckbox.vue";

export default {
  name: "structure-department",
  components: {
    ValidationObserver,
    AppButton,
    AppLoading,
    BaseInput,
    BaseSelect,
    BaseCheckbox,
  },
  data() {
    return {
      loading: false,
      showSelect: false,
      filterSelect: false,
      filterValue: "",
      checkbox: true,
      department_id: "",
      departmentTypeUpdate: {
        faculty: "",
        name: "",
        kod: "",
      },
      count: null,
    };
  },
  methods: {
    ...mapActions(["getFaculty", "getDeparments"]),
    facultyId(item) {
      this.showSelect = false;
      this.departmentTypeUpdate.faculty = item.name;
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

    departmentGetId(id) {
      this.loading = true;
      this.$http
        .get(`department/get/${id}`)
        .then((res) => {
          console.log(res);
          this.departmentTypeUpdate.faculty = res.faculty.name;
          this.departmentTypeUpdate.name = res.name;
          this.departmentTypeUpdate.kod = res.kod;
          this.department_id = res.id;
        })
        .catch(() => {})
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
          this.departmentTypeUpdate.faculty = "";
          this.departmentTypeUpdate.name = "";
          this.departmentTypeUpdate.kod = "";
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
      this.departmentTypeUpdate.faculty = "";
      this.departmentTypeUpdate.name = "";
      this.departmentTypeUpdate.kod = "";
      this.department_id = "";
    },
  },
  computed: {
    ...mapGetters(["faculties", "department"]),
    ...mapState([]),
  },
  mounted() {
    this.getFaculty();
  },
  async created() {
    await this.getDeparments();
    this.count = this.department.count;
  },
  watch: {
    count() {
      this.getDeparments(this.count);
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
