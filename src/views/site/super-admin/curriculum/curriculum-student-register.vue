<template>
  <div class="content">
    <div class="grid-block-2">
      <div class="box">
        <div class="box-header pa-10">
          <h3 class="box-title">Guruhdagi talabalar</h3>
          <div class="grid-block-2">
            <base-select
              type="text"
              vid="Fakultet"
              placeholder="O'quv rejani tanlang"
            />
            <base-select
              type="text"
              vid="Fakultet"
              placeholder="Semestrni tanlang"
              :disabled="true"
            />
            <base-select
              type="text"
              vid="Fakultet"
              placeholder="O‘quv yilini tanlang"
            />
            <base-select
              type="text"
              vid="Fakultet"
              placeholder="Guruhni tanlang"
              :disabled="true"
            />
          </div>
        </div>
        <div class="box-body">
          <div class="table-block">
            <table class="table">
              <thead>
                <tr>
                  <th>
                    <div class="form-group">
                      <input
                        type="checkbox"
                        id="checkbox"
                        v-model="isChecked"
                      />
                      <label for="checkbox" class="checkbox-label">
                        <span
                          class="checkbox-custom"
                          :class="{ checked: isChecked }"
                        >
                          <i v-if="isChecked" class="fa fa-check"></i>
                        </span>
                      </label>
                    </div>
                  </th>
                  <th>Talaba</th>
                  <th>Mutaxasislik</th>
                </tr>
              </thead>
              <tbody>
                <!-- <tr v-for="(item, i) in 10" :key="i">
                  <td>a</td>
                  <td>Budjet hisobi va g'aznachilik fakulteti</td>
                  <td>Budjet hisobi va g'aznachilik fakulteti</td>
                </tr> -->
                <tr>
                  <td colspan="3">
                    <div class="empty">Xech narsa topilmadi</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="box-header pa-10">
          <h3 class="box-title">O'quv rejadagi fanlar</h3>
        </div>
        <div class="box-body">
          <div class="table-block">
            <table class="table">
              <thead>
                <tr>
                  <th>
                    <div class="form-group">
                      <input
                        type="checkbox"
                        id="checkbox"
                        v-model="isChecked"
                      />
                      <label for="checkbox" class="checkbox-label">
                        <span
                          class="checkbox-custom"
                          :class="{ checked: isChecked }"
                        >
                          <i v-if="isChecked" class="fa fa-check"></i>
                        </span>
                      </label>
                    </div>
                  </th>
                  <th>Fanlar</th>
                  <th>Fanlar turi</th>
                  <th>Tanlov fan</th>
                </tr>
              </thead>
              <tbody>
                <!-- <tr v-for="(item, i) in 10" :key="i">
                  <td>a</td>
                  <td>Budjet hisobi va g'aznachilik fakulteti</td>
                  <td>Budjet hisobi va g'aznachilik fakulteti</td>
                </tr> -->
                <tr>
                  <td colspan="4">
                    <div class="empty">Xech narsa topilmadi</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="box-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSelect from "@/components/shared-components/BaseSelect.vue";
export default {
  components: { BaseSelect },
  name: "curriculum-student-register",
  data() {
    return {
      isChecked: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  border-radius: 3px;
  background-color: #fff !important;
  border-top: 3px solid #3c8dbc;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>
