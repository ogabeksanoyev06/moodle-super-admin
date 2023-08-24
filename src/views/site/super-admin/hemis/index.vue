<template>
  <div class="content">
    <div class="box">
      <div class="box-body">
        <div class="grid-block-4">
          <div class="small-box item">
            <div class="inner">
              <p class="">Otm uchun biriktirilgan shaharlarni yuklash</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getOtmCity">
              <i class="fa fa-arrow-circle-right mr-10"></i>
              Yuklash
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">Otm turini yuklash</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getOtmType">
              <i class="fa fa-arrow-circle-right mr-10"></i>
              Yuklash
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">Otm shaklini yuklash</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getOtmShape">
              <i class="fa fa-arrow-circle-right mr-10"></i>
              Yuklash
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">Otm yuklab olish</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getOtm">
              <i class="fa fa-arrow-circle-right mr-10"></i>
              Yuklash
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">Otm bo'limlarni kodini yuklash</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getOtmSection">
              <i class="fa fa-arrow-circle-right mr-10"></i>
              Yuklash
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">Otm fakultetlar turlarini yuklash</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getFacultyType">
              <i class="fa fa-arrow-circle-right mr-10"></i>
              Yuklash
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">Otm fakultetni yuklash</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getOtmFaculty">
              <i class="fa fa-arrow-circle-right mr-10"></i>
              Yuklash
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">Fakultetga biriktirilgan kafedralarni yuklash</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getOtmDepartment">
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
export default {
  name: "hemis-moodle",
  components: {},
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    getOtmCity() {
      this.loading = true;
      this.$http
        .get(`otmcity/hemis/get`)
        .then((res) => {
          this.successNotification(res.succes);
        })
        .finally(() => {
          this.loading = false;
        })
        .catch(() => {
          // let errorMessage = "Ma'lumotlarni olishda xatolik yuz berdi.";
          this.loading = false;
        });
    },
    getOtmType() {
      this.loading = true;
      this.$http
        .get(`otmtype/hemis/get`)
        .then((res) => {
          this.successNotification(res.succes);
        })
        .finally(() => {
          this.loading = false;
        })
        .catch(() => {
          // let errorMessage = "Ma'lumotlarni olishda xatolik yuz berdi.";
          this.loading = false;
        });
    },
    getOtmShape() {
      this.loading = true;
      this.$http
        .get(`otmshape/hemis/get`)
        .then((res) => {
          this.successNotification(res.succes);
        })
        .finally(() => {
          this.loading = false;
        })
        .catch(() => {
          // let errorMessage = "Ma'lumotlarni olishda xatolik yuz berdi.";
          this.loading = false;
        });
    },
    getOtm() {
      this.loading = true;
      this.$http
        .get(`otm/hemis/get`)
        .then((res) => {
          this.successNotification(res.succes);
        })
        .finally(() => {
          this.loading = false;
        })
        .catch(() => {
          // let errorMessage = "Ma'lumotlarni olishda xatolik yuz berdi.";
          this.loading = false;
        });
    },
    getOtmSection() {
      this.loading = true;
      this.$http
        .get(`otmsection/hemis/get`)
        .then((res) => {
          this.successNotification(res.succes);
        })
        .finally(() => {
          this.loading = false;
        })
        .catch(() => {
          // let errorMessage = "Ma'lumotlarni olishda xatolik yuz berdi.";
          this.loading = false;
        });
    },
    getFacultyType() {
      this.loading = true;
      this.$http
        .get(`faculty_type/hemis/get`)
        .then((res) => {
          this.successNotification(res.succes);
        })
        .finally(() => {
          this.loading = false;
        })
        .catch(() => {
          // let errorMessage = "Ma'lumotlarni olishda xatolik yuz berdi.";
          this.loading = false;
        });
    },
    getOtmFaculty() {
      this.loading = true;
      this.$http
        .get(`otmfaculty/hemis/get`)
        .then((res) => {
          this.successNotification(res.succes);
        })
        .finally(() => {
          this.loading = false;
        })
        .catch(() => {
          // let errorMessage = "Ma'lumotlarni olishda xatolik yuz berdi.";
          this.loading = false;
        });
    },
    getOtmDepartment() {
      this.loading = true;
      this.$http
        .get(`otmdepartment/hemis/get`)
        .then((res) => {
          this.successNotification(res.succes);
        })
        .finally(() => {
          this.loading = false;
        })
        .catch(() => {
          // let errorMessage = "Ma'lumotlarni olishda xatolik yuz berdi.";
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
