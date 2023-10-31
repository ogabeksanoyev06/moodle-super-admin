<template>
  <label class="checkbox_block">
    <input
      type="checkbox"
      :checked="isChecked"
      @change="updateInput"
      class="checkbox_block-input"
    />
    <span class="slider">
      <span class="slider-action"></span>
    </span>
  </label>
</template>

<script>
export default {
  model: {
    prop: "modelValue",
    event: "change",
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
    },
    trueValue: {
      type: Boolean,
      default: true,
    },
    falseValue: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isChecked() {
      return this.modelValue === this.trueValue;
    },
  },
  methods: {
    updateInput(event) {
      this.$emit(
        "change",
        event.target.checked ? this.trueValue : this.falseValue
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.checkbox_block {
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 31px;
  height: 15px;
}

.checkbox_block-input {
  display: none;
}

.slider {
  display: inline-flex;
  position: relative;
  align-items: center;
  cursor: pointer;
  width: 31px;
  height: 15px;
  background-color: #dcdfe6;
  box-shadow: 0px 1px 1px 0px #dcdfe6 inset;
  border-radius: 100px;
  transition: background-color 0.4s ease;
}
.slider-action {
  position: absolute;
  left: 1px;
  width: 13px;
  height: 13px;
  border-radius: 100%;
  background-color: #fff;
  box-shadow: 0px 1px 1px 0px rgba(231, 235, 245, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
}

.checkbox_block-input:checked + .slider {
  background-color: #008bf8;
  box-shadow: 0px 1px 1px 0px rgba(0, 106, 189, 1) inset;
}

.checkbox_block-input:checked + .slider .slider-action {
  left: calc(100% - 14px);
  box-shadow: 0px 1px 1px 0px rgba(0, 106, 189, 1);
}
</style>
