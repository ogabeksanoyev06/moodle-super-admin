<template>
  <div class="content">
    <app-loading v-if="loading" />
    <div class="box" v-else>
      <div class="box-header">
        <div class="items-grid">
          <div class="items-grid-left">
            <AppButton
              theme="secondary"
              class="d-flex align-center"
              :font-size="14"
              :sides="10"
              :radius="5"
              :height="40"
            >
              <i class="fa fa-plus-circle mr-5"></i>
              <span>Talaba yaratish</span>
            </AppButton>
          </div>
          <div class="items-grid-right">
            <base-input
              type="text"
              placeholder="F.I.O / Talaba raqami / Passport bo'yicha qidirish"
              :hideDetails="true"
            />
          </div>
        </div>
      </div>
      <div class="box body">
        <div class="table-block">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th class="color-blue-2 cursor-pointer">Familiya º</th>
                <th>Pasport raqami</th>
                <th class="color-blue-2 cursor-pointer">
                  O‘qishga kirgan yili
                </th>
                <th>Ta’lim turi</th>
                <th>To‘lov shakli</th>
                <th class="color-blue-2 cursor-pointer">O‘zgartirilgan</th>
                <th class="color-blue-2 cursor-pointer">Yaratilgan</th>
                <th>Meta</th>
                <th>Fanlar</th>
                <th>Parol</th>
                <th>Profil</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in students" :key="i">
                <td>{{ i + 1 }}</td>
                <td><i class="sign fa fa-check text-success"></i></td>
                <td>
                  {{
                    item.second_name +
                    " " +
                    item.first_name +
                    " " +
                    item.third_name
                  }}
                  <p class="text-muted">{{ item.student_id_number }}</p>
                </td>
                <td>
                  {{ item.passport_pin }}
                  <p class="text-muted">{{ item.passport_number }}</p>
                </td>
                <td>
                  {{ item.educationYear.code }}
                  <p class="text-muted">{{ item.studentStatus.name }}</p>
                </td>
                <td>
                  {{ item.educationType.name }}
                  <p class="text-muted">{{ item.educationForm.name }}</p>
                </td>
                <td>
                  {{ item.paymentForm.name }}
                  <p class="text-muted"></p>
                </td>
                <td>26.10.2023 13:41:27</td>
                <td>26.10.2023 13:41:27</td>
                <td>
                  <i class="cursor-pointer color-blue-2 fa fa-id-card"></i>
                </td>
                <td>
                  <i class="cursor-pointer color-blue-2 fa fa-book"></i>
                </td>
                <td>
                  <i class="cursor-pointer color-blue-2 fa fa-key"></i>
                </td>
                <td><base-checkbox /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="box-footer">
        <Pagination
          :count="count"
          :page_count="page_count"
          :current_page="current_page"
          @changePage="handlePageChange"
          @prevPage="handlePrevPage"
          @nextPage="handleNextPage"
        />
      </div>
    </div>
  </div>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";
import BaseInput from "@/components/shared-components/BaseInput.vue";
import Pagination from "@/components/shared-components/Pagination.vue";
import BaseCheckbox from "@/components/shared-components/BaseCheckbox.vue";
import AppLoading from "@/components/shared-components/AppLoading.vue";
export default {
  name: "AppStudent",
  components: { AppButton, BaseInput, Pagination, BaseCheckbox, AppLoading },
  data() {
    return {
      loading: false,
      students: {},
      count: null,
      page_count: null,
      current_page: 1,
    };
  },
  methods: {
    handlePageChange(page) {
      this.current_page = page;
      this.studentsGetAll();
    },
    handlePrevPage(page) {
      this.current_page = page - 1;
      this.studentsGetAll();
    },
    handleNextPage(page) {
      this.current_page = page + 1;
      this.studentsGetAll();
    },
    studentsGetAll() {
      this.loading = true;
      this.$http
        .get(`students/get/all?page_number=${this.current_page}&limit=50`)
        .then((res) => {
          this.students = res.results;
          this.page_count = res.page_count;
          this.count = res.count;
        })
        .catch((err) => {
          this.errorNotification(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.studentsGetAll();
  },
};
</script>
<style scoped lang="scss">
.items-grid {
  display: grid;
  grid-template-columns: 4fr 8fr;
  gap: 20px;
}
@media (max-width: 768px) {
  .items-grid {
    grid-template-columns: 1fr;
  }
}
</style>
