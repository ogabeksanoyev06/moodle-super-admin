import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/site/home/index.vue"),
      },
      // structure
      {
        path: "structure/university",
        name: "structure-university",
        component: () =>
          import(
            "../views/site/super-admin/structure/structure-university.vue"
          ),
      },
      {
        path: "structure/update",
        name: "structure-university-update",
        component: () =>
          import(
            "../views/site/super-admin/structure/structure-university-update.vue"
          ),
      },
      {
        path: "structure/faculty",
        name: "structure-faculty",
        component: () =>
          import("../views/site/super-admin/structure/structure-faculty.vue"),
      },
      {
        path: "structure/department",
        name: "structure-department",
        component: () =>
          import(
            "../views/site/super-admin/structure/structure-department.vue"
          ),
      },
      // curriculum
      {
        path: "curriculum/education-year",
        name: "curriculum-education-year",
        component: () =>
          import(
            "../views/site/super-admin/curriculum/curriculum-education-year.vue"
          ),
      },
      {
        path: "curriculum/curriculum",
        name: "curriculum-curriculum",
        component: () =>
          import(
            "../views/site/super-admin/curriculum/curriculum-curriculum.vue"
          ),
      },
      {
        path: "curriculum/curriculum-list",
        name: "curriculum-curriculum-list",
        component: () =>
          import(
            "../views/site/super-admin/curriculum/curriculum-curriculum-list.vue"
          ),
      },
      {
        path: "curriculum/semester",
        name: "curriculum-semester",
        component: () =>
          import(
            "../views/site/super-admin/curriculum/curriculum-semester.vue"
          ),
      },
      {
        path: "curriculum/curriculum-block",
        name: "curriculum-curriculum-block",
        component: () =>
          import(
            "../views/site/super-admin/curriculum/curriculum-curriculum-block.vue"
          ),
      },
      {
        path: "curriculum/student-register",
        name: "curriculum-student-register",
        component: () =>
          import(
            "../views/site/super-admin/curriculum/curriculum-student-register.vue"
          ),
      },
      {
        path: "curriculum/schedule-info",
        name: "curriculum-schedule-info",
        component: () =>
          import(
            "../views/site/super-admin/curriculum/curriculum-schedule-info.vue"
          ),
      },
      {
        path: "curriculum/schedule-info-view",
        name: "curriculum-schedule-info-view",
        component: () =>
          import(
            "../views/site/super-admin/curriculum/curriculum-schedule-info-view.vue"
          ),
      },
      {
        path: "curriculum/exam-schedule-info",
        name: "curriculum-exam-schedule-info",
        component: () =>
          import(
            "../views/site/super-admin/curriculum/curriculum-exam-schedule-info.vue"
          ),
      },
      {
        path: "curriculum/exam-schedule-info-view",
        name: "curriculum-exam-schedule-info-view",
        component: () =>
          import(
            "../views/site/super-admin/curriculum/curriculum-exam-schedule-info-view.vue"
          ),
      },
      {
        path: "curriculum/marking-system",
        name: "curriculum-marking-system",
        component: () =>
          import(
            "../views/site/super-admin/curriculum/curriculum-marking-system.vue"
          ),
      },
      {
        path: "curriculum/grade-type",
        name: "curriculum-grade-type",
        component: () =>
          import(
            "../views/site/super-admin/curriculum/curriculum-grade-type.vue"
          ),
      },
      {
        path: "curriculum/rating-grade",
        name: "curriculum-rating-grade",
        component: () =>
          import(
            "../views/site/super-admin/curriculum/curriculum-rating-grade.vue"
          ),
      },
      {
        path: "curriculum/lesson-pair",
        name: "curriculum-lesson-pair",
        component: () =>
          import(
            "../views/site/super-admin/curriculum/curriculum-lesson-pair.vue"
          ),
      },
      {
        path: "curriculum/lesson-pair",
        name: "curriculum-lesson-pair",
        component: () =>
          import(
            "../views/site/super-admin/curriculum/curriculum-lesson-pair.vue"
          ),
      },
      {
        path: "curriculum/curriculum-edit",
        name: "curriculum-curriculum-edit",
        component: () =>
          import(
            "../views/site/super-admin/curriculum/curriculum-curriculum-edit.vue"
          ),
      },
      // students
      {
        path: "student/student",
        name: "student-student",
        component: () =>
          import("../views//site/super-admin/students/student.vue"),
      },
      {
        path: "student/student-contingent",
        name: "student-student-contingent",
        component: () =>
          import("../views//site/super-admin/students/student-contingent.vue"),
      },
      // hemis-struktura
      {
        path: "hemis-baza",
        name: "hemis-baza",
        component: () => import("../views/site/super-admin/hemis/index.vue"),
      },
      {
        path: "curriculum-hemis",
        name: "curriculum-hemis",
        component: () =>
          import("../views/site/super-admin/hemis/curriculum-hemis.vue"),
      },
      {
        path: "student-hemis",
        name: "student-hemis",
        component: () =>
          import("../views/site/super-admin/hemis/student-hemis.vue"),
      },
      // dashboadr
      {
        path: "dashboard/profile",
        name: "dashboard-profile",
        component: () => import("../views/cabinet/profile.vue"),
      },
      //

      {
        path: "/test",
        name: "test",
        component: () => import("../views/site/super-admin/tests/index"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
