<template>
  <div>
    <pre-loading v-if="loading" />
    <div class="page__wrap-header" :class="isSadibar ? '' : 'active'">
      <AppHeader />
    </div>
    <div
      class="page__wrap"
      style="overflow: hidden"
      :style="isDesktopSmall ? 'margin-top: 60px' : 'margin-top: 80px'"
    >
      <aside class="main-sidebar" :class="isSadibar ? '' : 'active'">
        <section class="sidebar">
          <div
            class="sidebar-humburger"
            @click="toggleButton"
            :class="isSadibar ? '' : 'active'"
          >
            <img src="/icons/angle-left-humburger.svg" alt="" />
          </div>
          <div class="sidebar-header" :class="isSadibar ? '' : 'active'">
            <span>Moodle OTM</span>
          </div>
          <ul class="sidebar-menu tree">
            <li
              class="treeview"
              v-for="(menu, i) in studentMenu"
              :key="i"
              :class="{
                accordion__menu_active: visible && openedId == menu.id,
              }"
            >
              <div @click="open(menu.id)">
                <div class="d-flex align-center">
                  <span class="menu-icon" v-html="menu.icon"></span>
                  <span class="menu-title">{{ menu.title }}</span>
                </div>
                <span class="pull-right-container">
                  <svg
                    width="9"
                    height="15"
                    viewBox="0 0 9 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.27956 7.50073L8.43561 12.6567L6.96248 14.1298L0.333313 7.50073L6.96248 0.871582L8.43561 2.34472L3.27956 7.50073Z"
                      fill="#919CAA"
                    />
                  </svg>
                </span>
              </div>
              <transition
                name="accordion"
                @enter="start"
                @after-enter="end"
                @before-leave="start"
                @after-leave="end"
              >
                <ul
                  class="treeview-menu"
                  v-show="visible && openedId == menu.id"
                >
                  <li
                    v-for="(item, i) in menu.children"
                    :key="i"
                    :class="contentId == item.link ? 'active' : ''"
                  >
                    <router-link :to="{ name: item.link }">
                      <span>{{ item.title }}</span>
                    </router-link>
                  </li>
                </ul>
              </transition>
            </li>
          </ul>
        </section>
      </aside>
      <div class="page__wrap-content" :class="isSadibar ? '' : 'active'">
        <div class="container" style="padding-bottom: 20px; padding-top: 20px">
          <router-view />
        </div>
      </div>
    </div>
    <notifications group="admin" position="top right" :width="350" />
  </div>
</template>

<script>
import TokenService from "../service/TokenService";
import { mapGetters, mapMutations } from "vuex";
import AppHeader from "@/components/layouts/default/header/AppHeader.vue";
import "./MainLayout.scss";
import PreLoading from "@/components/shared-components/PreLoading.vue";

export default {
  name: "MainLayout",
  components: { AppHeader, PreLoading },
  data() {
    return {
      loading: true,
      isSadibar: true,
      visible: false,
      openedId: null,
      index: null,
      contentId: null,
      openedLink: "",
      studentMenu: [
        {
          title: "OTM strukturasi",
          icon: `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9324 13.6587C16.4383 13.6587 13.6588 16.4381 13.6588 19.9322C13.6588 23.4263 16.4383 26.2057 19.9324 26.2057C23.3471 26.2057 26.2059 23.4263 26.2059 19.9322C26.1265 16.4381 23.3471 13.6587 19.9324 13.6587ZM22.7912 18.8205L19.6147 21.9969C19.4559 22.1558 19.2177 22.2352 19.0588 22.2352C18.9 22.2352 18.6618 22.1558 18.503 21.9969L16.9147 20.4087C16.5971 20.091 16.5971 19.6146 16.9147 19.2969C17.2324 18.9793 17.7088 18.9793 18.0265 19.2969L19.0588 20.3293L21.6794 17.7087C21.9971 17.391 22.4735 17.391 22.7912 17.7087C23.1088 18.0263 23.1088 18.5028 22.7912 18.8205Z" fill="#919CAA"/>
<path d="M16.7559 0.793945H3.25589C1.90589 0.793945 0.873535 1.90571 0.873535 3.1763V22.2351C0.873535 23.5851 1.90589 24.6175 3.25589 24.6175H13.5794C12.6265 23.3469 11.9912 21.6792 11.9912 19.9322C11.9912 19.6145 11.9912 19.3763 12.0706 19.0587H4.84412C4.36765 19.0587 4.05001 18.741 4.05001 18.2645C4.05001 17.8675 4.36765 17.4704 4.84412 17.4704H12.4677C12.6265 16.9145 12.8647 16.3587 13.1824 15.8822H4.84412C4.36765 15.8822 4.05001 15.5645 4.05001 15.0881C4.05001 14.691 4.36765 14.2939 4.84412 14.2939H14.4529C15.7235 13.1028 17.3118 12.3087 19.1382 12.0704V3.1763C19.1382 1.90571 18.0265 0.793945 16.7559 0.793945ZM4.84412 4.76453H11.1971C11.5941 4.76453 11.9912 5.16159 11.9912 5.55865C11.9912 6.03512 11.5941 6.35277 11.1971 6.35277H4.84412C4.36765 6.35277 4.05001 6.03512 4.05001 5.55865C4.05001 5.16159 4.36765 4.76453 4.84412 4.76453ZM15.1677 12.7057H4.84412C4.36765 12.7057 4.05001 12.3881 4.05001 11.9116C4.05001 11.5145 4.36765 11.1175 4.84412 11.1175H15.1677C15.5647 11.1175 15.9618 11.5145 15.9618 11.9116C15.9618 12.3881 15.5647 12.7057 15.1677 12.7057ZM15.1677 9.52924H4.84412C4.36765 9.52924 4.05001 9.21159 4.05001 8.73512C4.05001 8.33806 4.36765 7.941 4.84412 7.941H15.1677C15.5647 7.941 15.9618 8.33806 15.9618 8.73512C15.9618 9.21159 15.5647 9.52924 15.1677 9.52924Z" fill="#919CAA"/>
</svg>
`,
          id: 0,
          children: [
            {
              title: "OTM haqida",
              id: 9,
              link: "structure-university",
            },
            {
              title: "Fakultet",
              id: 10,
              link: "structure-faculty",
            },
            {
              title: "Kafedra",
              id: 11,
              link: "structure-department",
            },
            // {
            //   title: "Bo'lim",
            //   id: 12,
            //   link: "structure-section",
            // },
          ],
        },
        {
          title: "O'quv jarayoni",
          icon: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.8203 9.25013C22.3644 9.18391 21.9294 9.0157 21.5475 8.75804C21.1657 8.50037 20.8469 8.15988 20.6148 7.76192C20.3828 7.36396 20.2436 6.91879 20.2075 6.45955C20.1713 6.00031 20.2393 5.53884 20.4062 5.1095C20.5124 4.82882 20.528 4.52196 20.4509 4.23195C20.3739 3.94193 20.208 3.6833 19.9765 3.49232C18.9547 2.63424 17.7916 1.96016 16.5391 1.50013C16.2538 1.39418 15.9425 1.38094 15.6493 1.4623C15.3561 1.54366 15.0961 1.71547 14.9062 1.95325C14.6205 2.31861 14.2554 2.6141 13.8384 2.81732C13.4215 3.02055 12.9638 3.12617 12.5 3.12617C12.0362 3.12617 11.5785 3.02055 11.1615 2.81732C10.7446 2.6141 10.3795 2.31861 10.0937 1.95325C9.90391 1.71547 9.64388 1.54366 9.3507 1.4623C9.05752 1.38094 8.74614 1.39418 8.46092 1.50013C7.30441 1.92485 6.2231 2.53144 5.2578 3.297C5.01447 3.48963 4.83921 3.7551 4.75767 4.05454C4.67614 4.35398 4.69261 4.67166 4.80467 4.96107C4.98495 5.40176 5.05944 5.87857 5.02215 6.35325C4.98487 6.82793 4.83686 7.28727 4.58999 7.69441C4.34312 8.10156 4.00426 8.44518 3.60061 8.69771C3.19695 8.95024 2.73972 9.10466 2.26561 9.14857C1.95781 9.18148 1.6687 9.31235 1.44085 9.5219C1.21301 9.73146 1.05847 10.0086 0.999986 10.3126C0.854516 11.0327 0.781236 11.7655 0.781236 12.5001C0.780167 13.1151 0.829815 13.7292 0.929674 14.3361C0.979373 14.6498 1.13104 14.9384 1.36122 15.1573C1.5914 15.3762 1.88728 15.5131 2.20311 15.547C2.68764 15.5925 3.15422 15.7533 3.56382 16.0161C3.97341 16.279 4.3141 16.636 4.55735 17.0575C4.80061 17.479 4.93937 17.9527 4.96201 18.4388C4.98465 18.9249 4.89052 19.4094 4.68749 19.8517C4.55462 20.1394 4.52166 20.4632 4.59385 20.7718C4.66603 21.0803 4.83922 21.3559 5.08592 21.5548C6.10164 22.3973 7.25356 23.0605 8.49217 23.5158C8.65057 23.5706 8.81675 23.5996 8.98436 23.6017C9.21418 23.6012 9.44053 23.5456 9.64443 23.4396C9.84833 23.3335 10.0238 23.1802 10.1562 22.9923C10.4347 22.5866 10.8079 22.255 11.2436 22.0263C11.6793 21.7976 12.1642 21.6786 12.6562 21.6798C13.133 21.6804 13.603 21.7923 14.0289 22.0066C14.4548 22.2209 14.8248 22.5317 15.1094 22.9142C15.2987 23.1687 15.5668 23.3534 15.872 23.4396C16.1773 23.5258 16.5024 23.5086 16.7969 23.3908C17.9294 22.9349 18.9838 22.3049 19.9219 21.5236C20.1575 21.3287 20.3253 21.0642 20.4011 20.768C20.4769 20.4718 20.4568 20.1592 20.3437 19.8751C20.16 19.4401 20.0799 18.9683 20.1097 18.497C20.1395 18.0258 20.2785 17.5679 20.5157 17.1595C20.7528 16.7511 21.0816 16.4035 21.4762 16.144C21.8707 15.8845 22.3202 15.7202 22.7891 15.6642C23.0931 15.6221 23.3759 15.4844 23.5964 15.2709C23.8169 15.0574 23.9638 14.7792 24.0156 14.4767C24.1411 13.8251 24.2091 13.1637 24.2187 12.5001C24.2189 11.8002 24.1535 11.1019 24.0234 10.4142C23.9707 10.1183 23.826 9.84662 23.6101 9.63765C23.3941 9.42868 23.1177 9.29309 22.8203 9.25013ZM16.4062 12.5001C16.4062 13.2727 16.1771 14.0279 15.7479 14.6703C15.3187 15.3127 14.7086 15.8134 13.9948 16.109C13.2811 16.4047 12.4957 16.482 11.7379 16.3313C10.9802 16.1806 10.2842 15.8086 9.73785 15.2623C9.19155 14.716 8.81952 14.0199 8.66879 13.2622C8.51807 12.5045 8.59543 11.719 8.89108 11.0053C9.18674 10.2915 9.68741 9.68142 10.3298 9.2522C10.9722 8.82298 11.7274 8.59388 12.5 8.59388C13.536 8.59388 14.5296 9.00543 15.2621 9.73799C15.9947 10.4706 16.4062 11.4641 16.4062 12.5001Z" fill="#919CAA"/>
</svg>`,
          id: 1,
          children: [
            {
              title: "O'quv yili",
              id: 23,
              link: "curriculum-education-year",
            },
            {
              title: "O'quv reja",
              id: 24,
              link: "curriculum-curriculum",
            },
            {
              title: "O'quv rejalar ro'yxati",
              id: 25,
              link: "curriculum-curriculum-list",
            },
            {
              title: "Semestrlar",
              id: 25,
              link: "curriculum-semester",
            },
            {
              title: "Fanlar bloklari",
              id: 25,
              link: "curriculum-curriculum-block",
            },
            {
              title: "Fanga biriktirish",
              id: 25,
              link: "curriculum-student-register",
            },
            {
              title: "Fanga birlashtirish",
              id: 25,
              link: "curriculum-subject-register",
            },
            {
              title: "Dars jadvali",
              id: 25,
              link: "curriculum-schedule-info",
            },
            {
              title: "Dars jadvalini ko'rish",
              id: 25,
              link: "curriculum-schedule-info-view",
            },
            {
              title: "Nazorat jadvali",
              id: 25,
              link: "curriculum-exam-schedule-info",
            },
            {
              title: "Nazorat jadvalini ko'rish",
              id: 25,
              link: "curriculum-exam-schedule-info-view",
            },
            {
              title: "Baholash tizimi",
              id: 25,
              link: "curriculum-marking-system",
            },
            {
              title: "Baho turlari",
              id: 25,
              link: "curriculum-grade-type",
            },
            {
              title: "Qaydnoma turi",
              id: 25,
              link: "curriculum-rating-grade",
            },
            {
              title: "Juftliklar",
              id: 25,
              link: "curriculum-lesson-pair",
            },
            {
              title: "Imtihonlar ro'yxati",
              id: 25,
              link: "curriculum",
            },
          ],
        },
        {
          title: "Hemis struktura",
          icon: `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9324 13.6587C16.4383 13.6587 13.6588 16.4381 13.6588 19.9322C13.6588 23.4263 16.4383 26.2057 19.9324 26.2057C23.3471 26.2057 26.2059 23.4263 26.2059 19.9322C26.1265 16.4381 23.3471 13.6587 19.9324 13.6587ZM22.7912 18.8205L19.6147 21.9969C19.4559 22.1558 19.2177 22.2352 19.0588 22.2352C18.9 22.2352 18.6618 22.1558 18.503 21.9969L16.9147 20.4087C16.5971 20.091 16.5971 19.6146 16.9147 19.2969C17.2324 18.9793 17.7088 18.9793 18.0265 19.2969L19.0588 20.3293L21.6794 17.7087C21.9971 17.391 22.4735 17.391 22.7912 17.7087C23.1088 18.0263 23.1088 18.5028 22.7912 18.8205Z" fill="#919CAA"/>
<path d="M16.7559 0.793945H3.25589C1.90589 0.793945 0.873535 1.90571 0.873535 3.1763V22.2351C0.873535 23.5851 1.90589 24.6175 3.25589 24.6175H13.5794C12.6265 23.3469 11.9912 21.6792 11.9912 19.9322C11.9912 19.6145 11.9912 19.3763 12.0706 19.0587H4.84412C4.36765 19.0587 4.05001 18.741 4.05001 18.2645C4.05001 17.8675 4.36765 17.4704 4.84412 17.4704H12.4677C12.6265 16.9145 12.8647 16.3587 13.1824 15.8822H4.84412C4.36765 15.8822 4.05001 15.5645 4.05001 15.0881C4.05001 14.691 4.36765 14.2939 4.84412 14.2939H14.4529C15.7235 13.1028 17.3118 12.3087 19.1382 12.0704V3.1763C19.1382 1.90571 18.0265 0.793945 16.7559 0.793945ZM4.84412 4.76453H11.1971C11.5941 4.76453 11.9912 5.16159 11.9912 5.55865C11.9912 6.03512 11.5941 6.35277 11.1971 6.35277H4.84412C4.36765 6.35277 4.05001 6.03512 4.05001 5.55865C4.05001 5.16159 4.36765 4.76453 4.84412 4.76453ZM15.1677 12.7057H4.84412C4.36765 12.7057 4.05001 12.3881 4.05001 11.9116C4.05001 11.5145 4.36765 11.1175 4.84412 11.1175H15.1677C15.5647 11.1175 15.9618 11.5145 15.9618 11.9116C15.9618 12.3881 15.5647 12.7057 15.1677 12.7057ZM15.1677 9.52924H4.84412C4.36765 9.52924 4.05001 9.21159 4.05001 8.73512C4.05001 8.33806 4.36765 7.941 4.84412 7.941H15.1677C15.5647 7.941 15.9618 8.33806 15.9618 8.73512C15.9618 9.21159 15.5647 9.52924 15.1677 9.52924Z" fill="#919CAA"/>
</svg>
`,
          id: 2,
          children: [
            {
              title: "OTM yuklash",
              id: 9,
              link: "hemis-baza",
            },
            {
              title: "O'quv reja yuklash",
              id: 9,
              link: "curriculum-hemis",
            },
          ],
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["setWindowWidth"]),
    setWidth() {
      this.setWindowWidth(document.documentElement.clientWidth);
    },
    setToken() {
      let accessToken = TokenService.getToken();
      if (accessToken !== null) {
        this.setAccessToken(accessToken);
        this.setIsLoggedOn(true);
      } else {
        this.setAccessToken(null);
        this.setIsLoggedOn(false);
      }
    },
    toggleButton() {
      this.isSadibar = !this.isSadibar;
    },
    open(id) {
      this.visible = this.visible && this.openedId === id ? false : true;
      this.openedId = id;
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    },
  },
  computed: {
    ...mapGetters(["windowWidth"]),
  },
  watch: {
    windowWidth() {},
    $route() {
      this.contentId = this.$route.name;
      this.studentMenu.forEach((el) => {
        el.children.forEach((i) => {
          if (i.link === this.$route.name) {
            this.contentId = i.link;
            this.openedId = el.id;
            this.visible = false;
            this.visible =
              this.visible && this.openedId === el.id ? false : true;
          } else {
            if ("home" === this.$route.name) {
              this.visible = false;
            }
          }
        });
      });
    },
    activeProp() {
      this.Accordion.active = this.activeProp;
    },
  },

  mounted() {
    // this.setToken();
    this.setWidth();
    window.addEventListener("resize", this.setWidth);
    this.contentId = this.$route.name;
    this.studentMenu.forEach((el) => {
      el.children.forEach((i) => {
        if (i.link === this.$route.name) {
          this.contentId = i.link;
          this.openedId = el.id;
          this.visible = false;
          this.visible = this.visible && this.openedId === el.id ? false : true;
        } else {
          if ("home" === this.$route.name) {
            this.visible = false;
          }
        }
      });
    });
    setTimeout(() => {
      this.$nextTick(() => {
        this.loading = false;
      });
    });
  },
  created() {},
  beforeDestroy() {
    window.removeEventListener("resize", this.setWidth);
  },
};
</script>
<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  will-change: height;
  transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
}
</style>
