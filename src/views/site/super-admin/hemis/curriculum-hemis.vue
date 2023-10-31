<template>
  <div class="content">
    <app-loading v-if="loading" />
    <div class="box">
      <div class="box-body">
        <div class="grid-block-4">
          <div class="small-box item">
            <div class="inner">
              <p class="">
                Otm uchun yuklangan Yonalishlarni yuklab olish Bakalavr
              </p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getBspeciality">
              <span>
                <i class="fa fa-arrow-circle-right mr-10"></i> Yuklash
              </span>
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">
                Otm uchun yuklangan Yonalishlarni yuklab olish Magistratur
              </p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getMspeciality">
              <span>
                <i class="fa fa-arrow-circle-right mr-10"></i> Yuklash
              </span>
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">
                Otm uchun yuklangan Yonalishlarni yuklab olish Ordenatura
              </p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getOspeciality">
              <span>
                <i class="fa fa-arrow-circle-right mr-10"></i> Yuklash
              </span>
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">Otm uchun yuklangan Oquv yillar to`plami yuklash</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getEducationYear">
              <i class="fa fa-arrow-circle-right mr-10"></i>
              Yuklash
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">
                Otm uchun yuklangan Oquv yil turlari to`plami yuklash
              </p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getEducationType">
              <i class="fa fa-arrow-circle-right mr-10"></i>
              Yuklash
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">
                Otm uchun yuklangan Oquv yil format turlari to`plami yuklash
              </p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getEducationForm">
              <i class="fa fa-arrow-circle-right mr-10"></i>
              Yuklash
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">Otm uchun yuklangan O'quv rejani yuklash</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getCurriculum">
              <i class="fa fa-arrow-circle-right mr-10"></i>
              Yuklash
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">
                Otm uchun yuklangan Oquv reja fakultet va yonalishlarni
                birlashtrish
              </p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getConnectSpeciality">
              <i class="fa fa-arrow-circle-right mr-10"></i>
              Yuklash
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">Otm uchun yuklangan Semestr kursini turlari</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getHcourse">
              <i class="fa fa-arrow-circle-right mr-10"></i>
              Yuklash
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">Otm uchun yuklangan Semestr turlari yuklash</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getHsemester">
              <i class="fa fa-arrow-circle-right mr-10"></i>
              Yuklash
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">
                Otm uchun yuklangan Semestrga birktrilgan haftalar harkatini
                yuklavolish
              </p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getHsemesterAction">
              <i class="fa fa-arrow-circle-right mr-10"></i>
              Yuklash
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">Otm uchun yuklangan Oquv tili</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getEducationLang">
              <i class="fa fa-arrow-circle-right mr-10"></i>
              Yuklash
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">Otm uchun yuklangan guruhlarni qoshish</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getGroup">
              <i class="fa fa-arrow-circle-right mr-10"></i>
              Yuklash
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
  name: "curriculum-hemis",
  components: { AppLoading },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    getBspeciality() {
      this.loading = true;
      this.$http
        .get(`bspeciality/hemis/get`)
        .then((res) => {
          if (res) {
            this.successNotification(res.succes);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    getMspeciality() {
      this.loading = true;
      this.$http
        .get(`mspeciality/hemis/get/`)
        .then((res) => {
          if (res) {
            this.successNotification(res.succes);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    getOspeciality() {
      this.loading = true;
      this.$http
        .get(`ospeciality/hemis/get/`)
        .then((res) => {
          if (res) {
            this.successNotification(res.succes);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    getEducationYear() {
      this.loading = true;
      this.$http
        .get(`educationyear/hemis/get`)
        .then((res) => {
          if (res) {
            this.successNotification(res.succes);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    getEducationType() {
      this.loading = true;
      this.$http
        .get(`educationtype/hemis/get`)
        .then((res) => {
          if (res) {
            this.successNotification(res.succes);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    getEducationForm() {
      this.loading = true;
      this.$http
        .get(`educationform/hemis/get`)
        .then((res) => {
          if (res) {
            this.successNotification(res.succes);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    getCurriculum() {
      this.loading = true;
      this.$http
        .get(`curriculum/hemis/get`)
        .then((res) => {
          if (res) {
            this.successNotification(res.succes);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    getConnectSpeciality() {
      this.loading = true;
      this.$http
        .get(`connectspeciality/hemis/get`)
        .then((res) => {
          if (res) {
            this.successNotification(res.succes);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    getHcourse() {
      this.loading = true;
      this.$http
        .get(`hcourse/hemis/get/`)
        .then((res) => {
          if (res) {
            this.successNotification(res.succes);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    getHsemester() {
      this.loading = true;
      this.$http
        .get(`hsemester/hemis/get/`)
        .then((res) => {
          if (res) {
            this.successNotification(res.succes);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    getHsemesterAction() {
      this.loading = true;
      this.$http
        .get(`hsemesteraction/hemis/get/`)
        .then((res) => {
          if (res) {
            this.successNotification(res.succes);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    getGroup() {
      this.loading = true;
      this.$http
        .get(`group/hemis/get/`)
        .then((res) => {
          if (res) {
            this.successNotification(res.succes);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    getEducationLang() {
      this.loading = true;
      this.$http
        .get(`educationlang/hemis/get/`)
        .then((res) => {
          if (res) {
            this.successNotification(res.succes);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
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
  background: rgba(242, 243, 248, 1);
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
    background-color: #008bf8;
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
