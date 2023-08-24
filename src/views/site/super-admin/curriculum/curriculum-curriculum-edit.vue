<template>
  <div class="content">
    <div class="box pa-10">
      <div class="box-body">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit()"></form>
        </ValidationObserver>
      </div>
      <div class="box-footer"></div>
    </div>
  </div>
</template>
<script>
import { ValidationObserver } from "vee-validate";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "curriculum-edit",
  components: { ValidationObserver },
  data() {
    return {
      curriculum: {
        name: "",
        faculty: "",
        specialty: "",
        kvalifikatsiya: "",
        education_year: "",
        education_period: "",
        education_form: "",
        marking_system: "",
        semester_count: "",
        ecurriculum_autumn_start_date: "",
        curriculum_spring_start_date: "",
      },
      showSelect: false,
    };
  },
  methods: {
    ...mapActions(["getFaculty"]),

    hideSelectDropdown() {
      this.showSelect = false;
    },
    facultyId(item) {
      this.curriculum.faculty = item.name;
    },
  },
  computed: {
    ...mapGetters(["faculty"]),
  },
  mounted() {
    this.getFaculty();
  },
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  border-radius: 3px;
  background-color: #fff !important;
  border-top: 3px solid #40d88a;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.form-label::after {
  content: "*";
  margin-left: 3px;
  font-weight: 4 00;
  font-family: auto;
  color: tomato;
}
</style>
