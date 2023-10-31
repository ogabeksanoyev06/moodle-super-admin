<template>
  <section class="content">
    <app-loading v-if="loading" />
    <div class="box" v-else>
      <div class="box-header greyBg">
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
          <table>
            <tbody>
              <tr>
                <th>Kod</th>
                <td>{{ otm.kod }}</td>
              </tr>
              <tr>
                <th>Nomi º</th>
                <td>{{ otm.name }}</td>
              </tr>
              <tr>
                <th>Hudud</th>
                <td>{{ otm.city?.name }}</td>
              </tr>
              <tr>
                <th>Shahar º</th>
                <td>{{ otm.area_located }}</td>
              </tr>
              <tr>
                <th>STIR</th>
                <td>{{ otm.stir }}</td>
              </tr>
              <tr>
                <th>Kontakt</th>
                <td>{{ otm.phone }}</td>
              </tr>
              <tr>
                <th>Rektor</th>
                <td>{{ otm.rektor }}</td>
              </tr>
              <tr>
                <th>OTM turi</th>
                <td>{{ otm.ownership?.name }}</td>
              </tr>
              <tr>
                <th>OTM shakli</th>
                <td>{{ otm.universityForm?.name }}</td>
              </tr>
              <tr>
                <th>Pochta manzili º</th>
                <td>
                  {{ otm.address }}
                </td>
              </tr>
              <tr>
                <th>Bank ma'lumotlari</th>
                <td>
                  {{ otm.bank_info }}
                </td>
              </tr>
              <tr>
                <th>Akkreditasiya ma'lumotlari º</th>
                <td>
                  {{ otm.akkreditasiya_info }}
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
      otm: {
        id: null,
        city: null,
        ownership: null,
        universityForm: null,
        kod: null,
        name: "",
        area_located: "",
        phone: "",
        stir: "",
        rektor: null,
        address: "",
        bank_info: "",
        akkreditasiya_info: null,
        status_action: true,
      },
      loading: false,
    };
  },
  methods: {
    getOTM() {
      this.loading = true;
      this.$http
        .get(`otm`)
        .then((res) => {
          this.otm = {};
          if (res.status_action) {
            this.otm = res;
            this.successNotification("Ma'lumotlar muvaffaqiyatli olingan!");
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getOTM();
  },
};
</script>

<style lang="scss" scoped></style>
