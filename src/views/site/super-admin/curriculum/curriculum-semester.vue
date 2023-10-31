<template>
  <div class="content">
    <div class="box">
      <div class="box-header">
        <div>
          <app-button
            theme="secondary"
            class="d-flex align-center"
            :font-size="14"
            :sides="10"
            :radius="5"
            :height="40"
            @click="$router.push({ name: 'curriculum-curriculum-edit' })"
          >
            <i class="fa fa-plus-circle mr-5"></i> Semestr yaratish
          </app-button>
        </div>
        <div>
          <base-select
            type="text"
            vid="Fakultet"
            :options-prop="faculty"
            placeholder="O'quv rejani tanlang"
            v-model="year_value"
            @itemSelected="facultyType"
          />
        </div>
        <div>
          <base-input
            type="text"
            vid="Nomi"
            placeholder="Semestr nomi va kodi bo‘yicha qidirish"
            v-model="search_value"
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
                <th>Kurs</th>
                <th>O'quv reja</th>
                <th style="color: #333">O'quv yili</th>
                <th style="color: #333">Muddat</th>
                <th style="color: #333">Tasdiq</th>
                <th style="color: #333">Faol</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in 10" :key="i">
                <td style="cursor: pointer; color: #2c6082">11</td>
                <td style="cursor: pointer; color: #2c6082">1 - semestr</td>
                <td>1 - kurs</td>
                <td>
                  Investitsion loyihalarga xizmat ko'rsatish va moliyalashtirish
                  (2020-2021)
                </td>
                <td>2020-2021</td>
                <td style="cursor: pointer; color: #2c6082">
                  12.10.2020 - 27.02.2021
                </td>
                <td>
                  <base-checkbox v-model="item.status_action" />
                </td>
                <td>
                  <base-checkbox v-model="item.status_action" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/shared-components/AppButton.vue";
import BaseSelect from "@/components/shared-components/BaseSelect.vue";
import BaseInput from "@/components/shared-components/BaseInput.vue";
import BaseCheckbox from "@/components/shared-components/BaseCheckbox.vue";
export default {
  name: "curriculum-semester",
  components: { AppButton, BaseSelect, BaseInput, BaseCheckbox },
  data() {
    return {
      showSelectYear: false,
      showSelectFaculty: false,
      year_value: "",
      faculty_value: "",
      search_value: "",
    };
  },
  methods: {
    hideSelectDropdownYear() {
      this.showSelectYear = false;
    },
    hideSelectDropdownFaculty() {
      this.showSelectFaculty = false;
    },
    curriculumYear(item) {
      this.year_value = item;
    },
    curriculumFaculty(item) {
      this.faculty_value = item;
    },
  },
};
</script>

<style lang="scss" scoped>
.box-header {
  display: grid;
  grid-template-columns: 2fr 4fr 6fr;
  gap: 15px;
}
@media (max-width: 991px) {
  .box-header {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 768px) {
  .box-header {
    grid-template-columns: 1fr;
  }
}
</style>
