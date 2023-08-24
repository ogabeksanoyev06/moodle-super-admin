<template>
  <div class="content">
    <div class="box">
      <div class="box-body">
        <div class="grid-block-4">
          <div class="small-box item">
            <div class="inner">
              <p class="">OTMdagi talabalar yo'nalishlari bakalavr</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getBspeciality">
              <span v-if="!loading">
                <i class="fa fa-arrow-circle-right mr-10"></i> Yuklash
              </span>
              <span v-else>Yuklanmoqda...</span>
            </div>
          </div>
          <div class="small-box item">
            <div class="inner">
              <p class="">Otm o'quv yili uchun yillar to'plami</p>
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
              <p class="">Otm o'quv yili turi</p>
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
              <p class="">Otm o'quv yili formasi</p>
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
              <p class="">Otm o'quv reja</p>
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="small-box-footer" @click="getCurriculum">
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
  name: "curriculum-hemis",
  components: {},
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
          this.successNotification(res.succes);
          this.loading = false;
        })
        .finally(() => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    getEducationYear() {
      this.loading = true;
      this.$http
        .get(`educationyear/hemis/get`)
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
    getEducationType() {
      this.loading = true;
      this.$http
        .get(`educationtype/hemis/get`)
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
    getEducationForm() {
      this.loading = true;
      this.$http
        .get(`educationform/hemis/get`)
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
    getCurriculum() {
      this.loading = true;
      this.$http
        .get(`curriculum/hemis/get`)
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
