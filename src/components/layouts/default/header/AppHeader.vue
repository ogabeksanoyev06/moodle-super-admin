<template>
  <header class="header">
    <div class="logo" to="/">
      <span class="logo-lg">LMS tizimi</span>
    </div>
    <div style="flex: 1; padding: 0 15px">
      <nav class="navbar navbar-nav">
        <div class="sidebar-toggle" @click="toggleSidebar">
          <a><i class="fa fa-bars"></i></a>
        </div>
        <div class="navbar-custom-menu">
          <ul class="nav">
            <li
              class="nav-item"
              v-if="!isMobileMedium"
              @click="languageDropdown = !languageDropdown"
              v-on-click-outside:excludedClass="hideLanguageDropdown"
            >
              <a class="dropdown-toggle"> O‘zbekcha </a>
              <transition name="slide" v-if="languageDropdown">
                <ul class="dropdown-menu">
                  <li class="dropdown-menu-item"><span> O‘zbekcha </span></li>
                  <li class="dropdown-menu-item"><span> Ўзбекча </span></li>
                  <li class="dropdown-menu-item"><span> Русский </span></li>
                  <li class="dropdown-menu-item"><span> English </span></li>
                </ul>
              </transition>
            </li>
            <li class="nav-item" v-if="!isMobileSmall">
              <a><i class="fa fa-refresh"></i></a>
            </li>
            <li class="nav-item user-menu">
              <a class="dropdown-toggle">
                <img
                  src="https://hemis.tfi.uz/static/crop/3/8/120_120_90_3846030520.jpg"
                  class="user-image"
                  v-if="!isMobileMedium"
                />
                <div>
                  <span class="user-name">JASURBEK SAYFIYEV</span>
                  <span class="user-role">Super Administrator</span>
                </div>
              </a>
              <ul class="dropdown-menu" style="display: none">
                <li class="dropdown-menu-item">
                  <span>Super Administrator</span>
                </li>
                <li class="divider"></li>
                <li class="dropdown-menu-item">
                  <span>Profil</span>
                </li>
                <li class="divider"></li>
                <li class="dropdown-menu-item">
                  <span><i class="fa fa-sign-out"></i> Chiqish</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
import "./header.scss";
import i18n from "@/locals/i18n";
export default {
  name: "AppHeader",
  components: {},
  data() {
    return {
      isSadibar: false,
      languageDropdown: false,
      accountDropdown: false,
      setLang: "O‘zbekcha",
    };
  },
  methods: {
    hideLanguageDropdown() {
      this.languageDropdown = false;
    },
    hideAccountDropdown() {
      this.accountDropdown = false;
    },
    changeLanguage(lang) {
      localStorage.setItem("lang", lang);
      i18n.locale = lang;
      if (lang === "ru") {
        this.setLang = "Russian";
      } else if (lang === "en") {
        this.setLang = "English";
      } else {
        this.setLang = "O'zbek";
      }
    },
    toggleSidebar() {
      this.isSadibar = !this.isSadibar;
      if (this.isSadibar) {
        document.body.classList.add("sidebar-collapse");
      } else {
        document.body.classList.remove("sidebar-collapse");
      }
    },
    hideUserDropdown() {
      this.userDropdown = false;
    },
    hideLangDropdown() {
      this.langDropdown = false;
    },
  },
};
</script>
<style lang="scss" scoped></style>
