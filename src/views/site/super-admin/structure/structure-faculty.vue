<template>
  <div class="content">
    <app-loading v-if="loading" />
    <div class="items" v-else>
      <div class="items-left">
        <div class="box box-default">
          <div class="box-body">
            <div class="table-block">
              <table class="table">
                <thead>
                  <tr>
                    <th>Kod</th>
                    <th>Nomi º</th>
                    <th>Turi</th>
                    <th>Faol</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in faculties.results" :key="i">
                    <td @click="facultyGetId(item.id)" style="cursor: pointer">
                      {{ item.kod }}
                    </td>
                    <td @click="facultyGetId(item.id)" style="cursor: pointer">
                      {{ item.name }}
                    </td>
                    <td>{{ item.faculty_type.name }}</td>
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
          <div class="box-footer">
            <Pagination
              :count="pager?.count"
              :page_count="pager?.page_count"
              :current_page="pager?.current_page"
              @changePage="handlePageChange"
              @prevPage="handlePrevPage"
              @nextPage="handleNextPage"
            />
          </div>
        </div>
      </div>
      <div class="items-right">
        <div class="box">
          <div class="box-body pa-10">
            <ValidationObserver v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit(facultyUpdate)">
                <base-input
                  type="text"
                  vid="Nomi"
                  rules="required"
                  label="Nomi º"
                  placeholder="Nomi"
                  v-model="facultyTypeUpdate.name"
                />
                <base-input
                  type="text"
                  vid="Kod"
                  rules="required|min:7"
                  label="Kod"
                  placeholder="Kod"
                  v-mask="'336-1##'"
                  v-model="facultyTypeUpdate.kod"
                />
                <base-select
                  type="text"
                  label="Turi"
                  vid="Turini tanlang"
                  rules="required"
                  placeholder="Turini tanlang"
                  :options-prop="faculty_type"
                  v-model="facultyTypeUpdate.type"
                  @itemSelected="facultyType"
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
                    @click="facultyDelete(faculty_id)"
                    disabled
                  >
                    O'chirish
                  </app-button>
                  <app-button
                    type="submit"
                    theme="main"
                    :font-size="isMobile ? 14 : 16"
                    :sides="isMobile ? 10 : 20"
                    radius="5"
                    height="40"
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
import AppLoading from "@/components/shared-components/AppLoading.vue";
import { mapActions, mapGetters, mapState } from "vuex";
import BaseInput from "@/components/shared-components/BaseInput.vue";
import BaseSelect from "@/components/shared-components/BaseSelect.vue";
import Pagination from "@/components/shared-components/Pagination.vue";

export default {
  name: "structure-faculty",
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
      showSelect: false,
      checkbox: true,
      loading: false,
      facultyTypeId: "",
      facultyId: "",
      facultyTypeUpdate: {
        name: "",
        kod: "",
        type: "",
      },
      dropdownVisible: false,
      pager: {
        count: null,
        page_count: null,
        current_page: 1,
      },
    };
  },
  methods: {
    ...mapActions(["getFaculty", "getFacultyType"]),
    facultyGetId(id) {
      this.loading = true;
      this.$http
        .get(`faculty/get/${id}`)
        .then((res) => {
          console.log(res);
          this.facultyTypeUpdate.type = res.faculty_type.name;
          this.facultyTypeUpdate.name = res.name;
          this.facultyTypeUpdate.kod = res.kod;
          this.facultyId = res.id;
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    facultyDelete(id) {
      this.$http
        .post(`faculty/delete/`, {
          id: id,
        })
        .then((res) => {
          this.successNotification(res.xabar);
          this.facultyTypeUpdate.type = "";
          this.facultyTypeUpdate.name = "";
          this.facultyTypeUpdate.kod = "";
          this.facultyId = "";
          this.getFaculty();
        })
        .catch((error) => {
          this.errorNotification(error);
        })
        .finally(() => {});
    },
    facultyUpdate() {
      this.$http
        .post(`faculty/delete/${this.facultyId}`, {
          name: this.facultyTypeUpdate.name,
          faculty_type: this.facultyTypeUpdate.type,
        })
        .then((res) => {
          this.successNotification(res.xabar);
          this.facultyTypeUpdate.type = "";
          this.facultyTypeUpdate.name = "";
          this.facultyTypeUpdate.kod = "";
          this.facultyId = "";
          this.getFaculty();
        })
        .catch((error) => {
          this.errorNotification(error);
        })
        .finally(() => {});
    },
    facultyType(item) {
      this.dropdownVisible = false;
      this.facultyTypeUpdate.type = item.name;
      this.facultyTypeId = item.id;
    },
    hideSelectDropdown() {
      this.showSelect = false;
    },
    toggleCheckbox() {
      this.checkbox = !this.checkbox;
      this.$emit("setCheckboxVal", this.checkbox);
    },
    clear() {
      this.facultyTypeUpdate.type = "";
      this.facultyTypeUpdate.name = "";
      this.facultyTypeUpdate.kod = "";
      this.facultyId = "";
    },
    handlePageChange(page) {
      this.pager.current_page = page;
      this.getFaculty({ number: this.pager.current_page });
    },
    handlePrevPage(page) {
      this.pager.current_page = page - 1;
      this.getFaculty({ number: this.pager.current_page });
    },
    handleNextPage(page) {
      this.pager.current_page = page + 1;
      this.getFaculty({ number: this.pager.current_page });
    },
  },
  computed: {
    ...mapGetters(["faculties", "faculty_type"]),
    ...mapState([]),
  },
  async mounted() {
    await this.getFaculty({ number: this.pager.current_page });
    this.pager = {
      count: this.faculties?.count,
      page_count: this.faculties?.page_count,
      current_page: 1,
    };
    this.getFacultyType();
  },
};
</script>

<style lang="scss" scoped>
.box-body {
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
