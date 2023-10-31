<template>
  <div class="content">
    <app-loading v-if="loading" />
    <div class="items-grid">
      <div class="items-grid-left">
        <div class="box">
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
                      <base-checkbox v-model="item.status" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="items-grid-right">
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
import BaseCheckbox from "@/components/shared-components/BaseCheckbox.vue";

export default {
  name: "structure-faculty",
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
      showSelect: false,
      checkbox: true,
      loading: false,
      facultyTypeId: "",
      facultyId: "",
      getFacultyId: null,
      facultyTypeUpdate: {
        name: "",
        kod: "",
        type: "",
      },
      dropdownVisible: false,
      count: null,
    };
  },
  methods: {
    ...mapActions(["getFaculty", "getFacultyType"]),

    facultyGetId(id) {
      this.loading = true;
      this.$http
        .get(`faculty/get/${id}`)
        .then((res) => {
          this.getFacultyId = res;
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
        .patch(`faculty/update/${this.facultyId}`)
        .then((res) => {
          if (res) {
            this.successNotification(res.xabar);
            this.facultyTypeUpdate.type = "";
            this.facultyTypeUpdate.name = "";
            this.facultyTypeUpdate.kod = "";
            this.facultyId = "";
            this.getFaculty();
          } else {
            this.errorNotification("error");
          }
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
  },
  computed: {
    ...mapGetters(["faculties", "faculty_type"]),
    ...mapState([]),
  },
  mounted() {},
  watch: {
    count() {
      this.getFaculty(this.count);
    },
  },
  async created() {
    await this.getFaculty();
    this.count = this.faculties.count;
  },
};
</script>

<style lang="scss" scoped>
.items-grid {
  display: grid;
  grid-template-columns: 8fr 4fr;
  gap: 20px;
}
@media (max-width: 991px) {
  .items-grid {
    grid-template-columns: 1fr;
  }
}
</style>
