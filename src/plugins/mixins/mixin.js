import Vue from "vue";
import { mapGetters } from "vuex";
import { baseURL } from "../../service/apiService";

Vue.mixin({
  data() {
    return {
      baseURL,
    };
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    successNotification(message) {
      this.$toast.success(message, {
        closeOnClick: true,
        duration: 1000,
        dangerouslyUseHTMLString: true,
      });
    },
    errorNotification(message) {
      this.$toast.error(message, {
        closeOnClick: true,
        duration: 1000,
        HTMLElement: true,
      });
    },
  },
});
