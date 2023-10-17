<template>
  <div class="pagination">
    <button
      class="btn btn-prev"
      type="button"
      @click="prevPage"
      :disabled="current_page === 1"
    >
      <span>Oldingi</span>
    </button>
    <ul class="pager">
      <li
        class="number"
        v-for="page in page_count"
        :key="page"
        :class="{ active: current_page === page }"
        @click="changePage(page)"
      >
        {{ page }}
      </li>
    </ul>
    <button
      type="button"
      class="btn btn-next"
      @click="nextPage"
      :disabled="current_page === page_count"
    >
      <span>Keyingi</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "PA",
  props: {
    count: {
      type: Number,
    },
    page_count: {
      type: Number,
    },
    current_page: {
      type: Number,
      default: 1,
    },
  },
  computed: {},
  methods: {
    nextPage() {
      this.$emit("nextPage", this.current_page);
    },
    prevPage() {
      this.$emit("prevPage", this.current_page);
    },
    changePage(page) {
      if (this.current_page !== page) {
        this.$emit("changePage", page);
      }
    },
  },
};
</script>
<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: 2px 5px;
  color: #303133;
  font-size: 14px;
}
.pager {
  display: flex;

  li {
    min-width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    background-color: #f4f4f5;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 400;
    color: #414ca0 !important;
    border: 1px solid transparent;
    cursor: pointer;
    &.active {
      background: #fff !important;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      border-radius: 5px;
    }
  }
  .btn {
    font-family: "Montserrat", sans-serif;
  }
}
</style>
