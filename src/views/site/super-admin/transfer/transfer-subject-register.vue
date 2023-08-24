<template>
  <div class="content">
    <div class="items">
      <div class="items-left">
        <div class="box">
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
                    <th>#</th>
                    <th>Talaba</th>
                    <th>Guruh</th>
                    <th>Fanlar</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in 100" :key="i">
                    <td>
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
                    </td>
                    <td>{{ i + 1 }}</td>
                    <td>
                      ABDUSALOMOV MUXAMMADRIZO SOIBJON O‘G‘LI
                      <span class="text-muted">
                        336201100689 / Bakalavr / Kunduzgi
                      </span>
                    </td>
                    <td>
                      ММТ-80i
                      <span class="text-muted">6-semestr</span>
                    </td>
                    <td>
                      BANK ISHI
                      <span class="text-muted"> 27.02.2023 16:12:59 </span>
                    </td>
                    <td>
                      <span
                        style="
                          width: 30px;
                          display: inline-block;
                          text-align: center;
                        "
                      >
                        <i class="fa fa-question" style="font-size: 12px"> </i>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="items-right">
        <div class="box pa-10">
          <div class="box-body">
            <base-select
              type="text"
              vid="Fakultet"
              placeholder="2022-2023"
              :disabled="true"
            />
            <base-select
              type="text"
              vid="Fakultet"
              placeholder="Fakultetni tanlang"
            />
            <base-select
              type="text"
              vid="Fakultet"
              placeholder="Ta'lim turini tanlang"
            />
            <base-select
              type="text"
              vid="Fakultet"
              placeholder="Ta'lim shaklini tanlang"
            />
            <base-select
              type="text"
              vid="Fakultet"
              placeholder="O'quv rejani tanlang"
            />
            <base-select
              type="text"
              vid="Fakultet"
              placeholder="Semestrni tanlang"
            />
            <base-select
              type="text"
              vid="Fakultet"
              placeholder="Guruhni tanlang"
            />
            <base-select
              type="text"
              vid="Fakultet"
              placeholder="Fanlarni tanlang"
            />
            <base-input
              type="text"
              vid="Nomi"
              placeholder="F.I.O / Talaba raqami / Passport bo'yicha qidirish"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSelect from "@/components/shared-components/BaseSelect.vue";
import BaseInput from "@/components/shared-components/BaseInput.vue";
export default {
  components: { BaseSelect, BaseInput },
  name: "transfer-subject-register",
  data() {
    return {
      isChecked: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.items {
  display: flex;
  gap: 20px;
  &-left {
    flex: 9;
  }
  &-right {
    flex: 3;
  }
}
.box {
  position: relative;
  border-radius: 3px;
  background-color: #fff !important;
  border-top: 3px solid #d2d6de;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>
