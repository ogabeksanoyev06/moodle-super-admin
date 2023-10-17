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
                    <th>Nomi º</th>
                    <th>Kod</th>
                    <th>Joriy holat</th>
                    <th>O'zgartirilgan</th>
                    <th>Faol</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in educationYear.results" :key="i">
                    <td
                      style="cursor: pointer"
                      @click="educationYearGetId(item.id)"
                    >
                      {{ item.name }}
                    </td>
                    <td
                      style="cursor: pointer"
                      @click="educationYearGetId(item.id)"
                    >
                      {{ item.code }}
                    </td>
                    <td>{{ item.current ? "Ha" : "Yo`q" }}</td>
                    <td>
                      {{
                        $moment(item.updated_at).format("YYYY-MM-DD h:mm:ss")
                      }}
                    </td>
                    <td>
                      <label class="switch">
                        <input
                          type="checkbox"
                          v-model="item.status_action"
                          @change="changeStatus(item.id, item)"
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
            @changePage="handlePageChange"
            @prevPage="handlePrevPage"
            @nextPage="handleNextPage"
          />
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
                  placeholder="O'quv yilini tanlang"
                  v-model="educationYearValue"
                  :optionsProp="educationYear.results"
                />
                <base-select
                  type="text"
                  label="Semestr turi"
                  vid="Semestr turi"
                  rules="required"
                  placeholder="Semestr turi tanlang"
                  v-model="educationyearSemestrValue"
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
import AppLoading from "@/components/shared-components/AppLoading.vue";
import { ValidationObserver } from "vee-validate";
import AppButton from "@/components/shared-components/AppButton.vue";
import BaseSelect from "@/components/shared-components/BaseSelect.vue";
import { mapActions, mapGetters } from "vuex";
import Pagination from "@/components/shared-components/Pagination.vue";

export default {
  components: {
    AppLoading,
    ValidationObserver,
    AppButton,
    BaseSelect,
    Pagination,
  },
  name: "curriculum-education-year",
  data() {
    return {
      loading: false,
      showSelectYear: false,
      showSelectSemestr: false,
      educationYearValue: "",
      educationyearSemestrValue: "",
      isChecked: false,
      pager: {
        count: null,
        page_count: null,
        current_page: 1,
      },
    };
  },
  methods: {
    ...mapActions(["getEducationYear"]),

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
    educationYearGetId(id) {
      this.loading = true;
      this.$http
        .get(`educationyear/get/${id}`)
        .then((res) => {
          if (res.name) {
            this.educationYearValue = res.name;
            this.educationyearSemestrValue = res.id;
          } else {
            this.errorNotification(res.error);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    changeStatus(id, item) {
      this.$http
        .patch(`educationyear/update/${id}`, {
          status_action: item.status_action,
          code: item.code,
          name: item.name,
          current: item.current,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          this.errorNotification(error.response.data.code[0]);
        });
    },
    educationYearUpdate(id) {
      this.loading = true;
      this.$http
        .get(`educationyear/update/${id}`, {
          status_action: true,
          code: "string",
          name: "string",
          current: true,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    clear() {
      (this.educationYearValue = ""), (this.educationyearSemestrValue = "");
    },
    handlePageChange(page) {
      this.pager.current_page = page;
      this.getEducationYear({ number: this.pager.current_page });
    },
    handlePrevPage(page) {
      this.pager.current_page = page - 1;
      this.getEducationYear({ number: this.pager.current_page });
    },
    handleNextPage(page) {
      this.pager.current_page = page + 1;
      this.getEducationYear({ number: this.pager.current_page });
    },
  },
  computed: {
    ...mapGetters(["educationYear"]),
  },
  async mounted() {
    await this.getEducationYear({ number: this.pager.current_page });
    this.pager = {
      count: this.educationYear?.count,
      page_count: this.educationYear?.page_count,
      current_page: 1,
    };
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
