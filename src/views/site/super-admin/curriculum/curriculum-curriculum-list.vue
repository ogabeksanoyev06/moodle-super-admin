<template>
  <div class="content">
    <div class="box">
      <div class="box-header">
        <div>
          <base-select
            type="text"
            vid="Fakultet"
            :options-prop="faculty"
            placeholder="Fakultetni tanlang"
            v-model="faculty_value"
            @itemSelected="facultyType"
          />
        </div>
        <div>
          <base-select
            type="text"
            vid="Fakultet"
            :options-prop="faculty"
            placeholder="Ta'lim turini tanlang"
            v-model="year_value"
            @itemSelected="facultyType"
          />
        </div>
        <div>
          <base-select
            type="text"
            vid="Fakultet"
            :options-prop="faculty"
            placeholder="Ta'lim shaklini tanlang"
            v-model="year_value"
            @itemSelected="facultyType"
          />
        </div>
        <div>
          <base-input
            type="text"
            vid="Nomi"
            placeholder="O'quv reja Nomi bo'yicha qidirish"
            v-model="search_value"
          />
        </div>
      </div>
      <div class="box-body">
        <div class="table-block">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Nomi º</th>
                <th>Fakultet</th>
                <th></th>
                <th>Tasdiq</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in 10" :key="i">
                <td class="text-muted">{{ i + 1 }}</td>
                <td style="cursor: pointer; color: #2c6082">
                  Investitsion loyihalarga xizmat ko'rsatish va moliyalashtirish
                  (2020-2021)
                  <p class="text-muted">Bank ishi va auditi</p>
                </td>
                <td>
                  Budjet hisobi va g'aznachilik fakulteti
                  <p class="text-muted">Bakalavr / Kredit baholash tizimi</p>
                </td>
                <td class="">
                  <a class="label label-success">
                    <i class="fa fa-calendar"></i>
                    Semestr
                  </a>
                  <a class="label label-success">
                    <i class="fa fa-hourglass"></i> Xafta
                  </a>

                  <a class="label label-success">
                    <i class="fa fa-tag"></i> Fanlar bloki
                  </a>

                  <a class="label label-success">
                    <i class="fa fa-book"></i> Fanlar
                  </a>

                  <a class="label label-success">
                    <i class="fa fa-tags"></i> Guruh
                  </a>
                </td>
                <td>
                  <label class="switch">
                    <input type="checkbox" v-model="item.status" />
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
</template>

<script>
import BaseSelect from "@/components/shared-components/BaseSelect.vue";
import BaseInput from "@/components/shared-components/BaseInput.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "curriculum-curriculum-list",
  components: { BaseSelect, BaseInput },
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
    ...mapActions(["getFaculty"]),
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
  computed: {
    ...mapGetters(["faculty"]),
  },
  mounted() {
    this.getFaculty();
  },
};
</script>

<style lang="scss" scoped>
.label-success {
  display: inline-flex;
  align-items: center;
  padding: 0.5em 0.6em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  vertical-align: baseline;
  border-radius: 0.25em;
  background-color: #3c8dbc !important;
  margin-right: 5px;
  margin-bottom: 5px;

  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }
  .fa {
    margin-right: 3px;
  }
}
.box {
  position: relative;
  border-radius: 3px;
  background-color: #fff !important;
  border-top: 3px solid #40d88a;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.box-header {
  background-color: #f3f3f3 !important;
  padding: 20px 10px;
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 4fr;
  gap: 15px;
}
@media (max-width: 1024px) {
  .box-header {
    padding: 20px 0px;
    grid-template-columns: 1fr;
  }
}
</style>
