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
                  <tr v-for="(item, i) in faculty" :key="i">
                    <td @click="facultyGetId(item.id)" style="cursor: pointer">
                      {{ item.kod }}
                    </td>
                    <td @click="facultyGetId(item.id)" style="cursor: pointer">
                      {{ item.name }}
                    </td>
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
          <div class="box-footer">
            <span class="summary">1-12 / jami 12 ta</span>
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
                  v-model="faculty_type_update.name"
                />
                <base-input
                  type="text"
                  vid="Kod"
                  rules="required|min:7"
                  label="Kod"
                  placeholder="Kod"
                  v-mask="'336-1##'"
                  v-model="faculty_type_update.kod"
                />
                <base-select
                  type="text"
                  label="Turi"
                  vid="Turini tanlang"
                  rules="required"
                  placeholder="Turini tanlang"
                  :options-prop="faculty_type"
                  v-model="faculty_type_update.type"
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
import AppLoading from "@/components/shared-components/AppLoading.vue";
import { mapActions, mapGetters } from "vuex";
import BaseInput from "@/components/shared-components/BaseInput.vue";
import BaseSelect from "@/components/shared-components/BaseSelect.vue";

export default {
  name: "structure-faculty",
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
      showSelect: false,
      checkbox: true,
      faculty: [],
      loading: true,
      faculty_type_id: "",
      faculty_id: "",
      faculty_type_update: {
        name: "",
        kod: "",
        type: "",
      },
      dropdownVisible: false,
    };
  },
  methods: {
    ...mapActions(["getFacultyType"]),
    facultyTypew(id) {
      console.log(id);
    },
    facultyType(item) {
      this.dropdownVisible = false;
      this.faculty_type_update.type = item.name;
      this.faculty_type_id = item.id;
    },
    hideSelectDropdown() {
      this.showSelect = false;
    },

    toggleCheckbox() {
      this.checkbox = !this.checkbox;
      this.$emit("setCheckboxVal", this.checkbox);
    },
    getFaculty() {
      this.loading = true;
      this.$http
        .get(`faculty`)
        .then((res) => {
          this.faculty = res;
          this.successNotification("Ma'lumotlar muvaffaqiyatli olingan!");
        })
        .finally(() => {
          this.loading = false;
        })
        .catch(() => {
          // let errorMessage = "Ma'lumotlarni olishda xatolik yuz berdi.";
          this.loading = false;
        });
    },
    facultyGetId(id) {
      console.log(id);
      this.loading = true;
      this.$http
        .get(`faculty/get/${id}`)
        .then((res) => {
          this.faculty_type_update.type = res.faculty_type.name;
          this.faculty_type_update.name = res.name;
          this.faculty_type_update.kod = res.kod;
          this.faculty_id = res.id;
        })
        .catch(() => {
          this.loading = false;
        })
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
          this.faculty_type_update.type = "";
          this.faculty_type_update.name = "";
          this.faculty_type_update.kod = "";
          this.faculty_id = "";
          this.getFaculty();
        })
        .finally(() => {})
        .catch((error) => {
          this.errorNotification(error.response.data.id);
        });
    },
    clear() {
      this.faculty_type_update.type = "";
      this.faculty_type_update.name = "";
      this.faculty_type_update.kod = "";
      this.faculty_id = "";
    },
    facultyUpdate() {
      console.log("aa");
    },
  },
  computed: {
    ...mapGetters(["faculty_type"]),
  },
  mounted() {
    this.getFaculty();
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
