<template>
  <div class="content">
    <app-loading v-if="loading" />
    <div class="items" v-else>
      <div class="items-left">
        <div class="box box-default">
          <div class="box-header">
            <!-- <div class="grid-block-2">
              <base-input
                type="text"
                vid="Nomi"
                placeholder="Nom bo‘yicha qidirish"
              />
            </div> -->
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
          <Pagination
            :count="pager?.count"
            :page_count="pager?.page_count"
            :current_page="pager?.current_page"
            :next="pager?.next"
            :previous="pager?.previous"
            @changePage="handlePageChange"
            @prevPage="handlePrevPage"
            @nextPage="handleNextPage"
          />
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
import Pagination from "@/components/shared-components/Pagination.vue";

export default {
  name: "structure-department",
  components: {
    ValidationObserver,
    AppButton,
    AppLoading,
    BaseInput,
    BaseSelect,
    Pagination,
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
      pager: {
        count: null,
        page_count: null,
        current_page: 1,
      },
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
    handlePageChange(page) {
      this.pager.current_page = page;
      this.getDeparments({ number: this.pager.current_page });
    },
    handlePrevPage(page) {
      this.pager.current_page = page - 1;
      this.getDeparments({ number: this.pager.current_page });
    },
    handleNextPage(page) {
      this.pager.current_page = page + 1;
      this.getDeparments({ number: this.pager.current_page });
    },
  },
  computed: {
    ...mapGetters(["faculties", "department"]),
    ...mapState([]),
  },
  async mounted() {
    await this.getDeparments({ number: this.pager.current_page });
    this.pager = {
      count: this.department?.count,
      page_count: this.department?.page_count,
      current_page: 1,
    };
    this.getFaculty();
  },
  created() {},
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
