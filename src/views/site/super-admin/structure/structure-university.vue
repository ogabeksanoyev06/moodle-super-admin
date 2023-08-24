<template>
  <section class="content">
    <app-loading v-if="loading" />
    <div class="box box-default" v-else>
      <div class="box-header">
        <AppButton
          theme="secondary"
          @click="$router.push({ name: 'structure-university-update' })"
          :font-size="isMobile ? 14 : 16"
          :sides="isMobile ? 10 : 20"
          radius="5"
          height="40"
        >
          <i class="fa fa-edit mr-5"> </i>
          O‘zgartirish
        </AppButton>
      </div>
      <div class="box-body">
        <div class="table-block">
          <table class="">
            <tbody>
              <tr>
                <th>Kod</th>
                <td>{{ res?.kod }}</td>
              </tr>
              <tr>
                <th>Nomi º</th>
                <td>{{ res?.name }}</td>
              </tr>
              <tr>
                <th>Hudud</th>
                <td>{{ res?.city?.name }}</td>
              </tr>
              <tr>
                <th>Shahar º</th>
                <td>{{ res?.area_located }}</td>
              </tr>
              <tr>
                <th>STIR</th>
                <td>{{ res?.stir }}</td>
              </tr>
              <tr>
                <th>Kontakt</th>
                <td>{{ res?.phone }}</td>
              </tr>
              <tr>
                <th>Rektor</th>
                <td>{{ res?.rektor }}</td>
              </tr>
              <tr>
                <th>OTM turi</th>
                <td>{{ res?.ownership?.name }}</td>
              </tr>
              <tr>
                <th>OTM shakli</th>
                <td>{{ res?.universityForm?.name }}</td>
              </tr>
              <tr>
                <th>Pochta manzili º</th>
                <td>
                  {{ res?.address }}
                </td>
              </tr>
              <tr>
                <th>Bank ma'lumotlari</th>
                <td>
                  {{ res?.bank_info }}
                </td>
              </tr>
              <tr>
                <th>Akkreditasiya ma'lumotlari º</th>
                <td>
                  {{ res?.akkreditasiya_info }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppButton from "@/components/shared-components/AppButton.vue";
import AppLoading from "@/components/shared-components/AppLoading.vue";
export default {
  name: "structure-university",
  components: { AppButton, AppLoading },
  data() {
    return {
      res: {},
      loading: false,
    };
  },
  methods: {
    getOTM() {
      this.loading = true;
      this.$http
        .get(`otm`)
        .then((res) => {
          if (res.status_action) {
            this.res = res;
            this.successNotification("Ma'lumotlar muvaffaqiyatli olingan!");
          } else {
            this.errorNotification("Noto'g'ri javob ma'lumotlari.");
          }
        })
        .finally(() => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getOTM();
  },
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  border-radius: 5px;
  background-color: #fff;
  border-top: 3px solid #40d88a;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.box-header {
  padding: 20px 10px;
}
.box-body {
  padding: 10px;
}
</style>
