<template>
  <div class="content">
    <app-loading v-if="loading" />
    <div v-if="loading" class="progress-bar-wrapper">
      <div class="progress-bar" :style="'width:' + downloadProgress + '%'">
        {{ downloadProgress + "%" }}
      </div>
    </div>
    <div v-if="loading">Yuklanmoqda: {{ downloadProgress }}%</div>
    <div class="box">
      <div class="box-body">
        <div class="grid-block-4">
          <div class="small-box item">
            <div class="inner">
              <p class="">Jinsni yuklash</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getGender">
              <span>
                <i class="fa fa-arrow-circle-right mr-10"></i> Yuklash
              </span>
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">Talaba holati</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getStudentStatus">
              <span>
                <i class="fa fa-arrow-circle-right mr-10"></i> Yuklash
              </span>
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">to'lov shakli</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getPaymentForm">
              <span>
                <i class="fa fa-arrow-circle-right mr-10"></i> Yuklash
              </span>
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">Hudud</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getState">
              <span>
                <i class="fa fa-arrow-circle-right mr-10"></i> Yuklash
              </span>
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">Fuqaroligi</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getCitizenship">
              <span>
                <i class="fa fa-arrow-circle-right mr-10"></i> Yuklash
              </span>
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">Ijtimoiy kategoriya</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getSocialCategory">
              <span>
                <i class="fa fa-arrow-circle-right mr-10"></i> Yuklash
              </span>
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">turar joy</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getAccommodation">
              <span>
                <i class="fa fa-arrow-circle-right mr-10"></i> Yuklash
              </span>
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">Talabalar</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getStudents">
              <span>
                <i class="fa fa-arrow-circle-right mr-10"></i> Yuklash
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLoading from "@/components/shared-components/AppLoading.vue";
export default {
  name: "student-hemis",
  components: { AppLoading },
  data() {
    return {
      loading: false,
      downloadProgress: 0,
    };
  },
  methods: {
    getGender() {
      this.loading = true;
      this.$http
        .get(`state/hemis/get/`)
        .then((res) => {
          if (res.status === 200) {
            this.successNotification(res.message);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    getStudentStatus() {
      this.loading = true;
      this.$http
        .get(`student-status/hemis/get/`)
        .then((res) => {
          if (res.status === 200) {
            this.successNotification(res.message);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    getPaymentForm() {
      this.loading = true;
      this.$http
        .get(`payment-form/hemis/get/`)
        .then((res) => {
          if (res.status === 200) {
            this.successNotification(res.message);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    getState() {
      this.loading = true;
      this.$http
        .get(`state/hemis/get/`)
        .then((res) => {
          if (res.status === 200) {
            this.successNotification(res.message);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    getCitizenship() {
      this.loading = true;
      this.$http
        .get(`citizenship/hemis/get/`)
        .then((res) => {
          if (res.status === 200) {
            this.successNotification(res.message);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    getSocialCategory() {
      this.loading = true;
      this.$http
        .get(`social-category/hemis/get/`)
        .then((res) => {
          if (res.status === 200) {
            this.successNotification(res.message);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    getAccommodation() {
      this.loading = true;
      this.$http
        .get(`accommodation/hemis/get/`)
        .then((res) => {
          if (res.status === 200) {
            this.successNotification(res.message);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    getStudents() {
      this.loading = true;
      this.$http
        .get(`students/get/hemis`, {
          onDownloadProgress: (progressEvent) => {
            if (progressEvent.lengthComputable) {
              this.downloadProgress = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
            }
          },
        })
        .then((res) => {
          if (res.status === 200) {
            this.successNotification(res.message);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
  },
  watch: {
    progress() {
      console.log(this.progress);
    },
  },
};
</script>

<style lang="scss" scoped>
.small-box {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  min-height: 150px;
  max-width: 400px;
  width: 100%;
  cursor: pointer;
  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  margin: 0 auto;
  &:hover {
    background-color: #00598f;
    color: #fff;
    box-shadow: rgba(0, 89, 143, 0.2) 0px 7px 29px 0px;
    .icon {
      font-size: 20px;
      color: #fff;
      &-footer {
        color: #fff;
      }
    }
    .inner {
      color: #fff !important;
    }
  }
  .icon {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.15);
  }
  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 20px;
    p {
      font-size: 14px;
      line-height: 22px;
      font-weight: 500;
    }
  }
  &-footer {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 10px;

    i {
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    &:hover {
      .fa {
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
