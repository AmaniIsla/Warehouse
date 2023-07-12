<template>
  <div
  class="card card-flush bgi-no-repeat bgi-size-cover bgi-position-center"
  :class="className"
    :style="{ backgroundColor: bgColor, backgroundImage: `url('${bgImage}')` }"
  >
    <!--begin::Header-->
    <div class="card-header pt-5">
      <!--begin::Title-->
      <div class="card-title d-flex flex-column">
        <!--begin::Amount-->
        <span class="fs-6hx fw-bold text-white me-2 lh-1 ls-n2">3776</span>
        <!--end::Amount-->

      </div>
      <!--end::Title-->
    </div>
    <!--end::Header-->

    <!--begin::Card body-->
    <div class="card-body d-flex align-items-end pt-0">
      <!--begin::Progress-->
      <div class="d-flex align-items-center flex-column mt-5 w-100">
        <div
          class="d-flex justify-content-between fw-bold fs-1 text-white opacity-85 w-100 mt-auto mb-2"
        >
          <span>Pending Shipments</span>
        </div>

      </div>
      <!--end::Progress-->
    </div>
    <!--end::Card body-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "default-dashboard-widget-1",
  components: {},
  props: {
    className: { type: String, required: false },
    bgColor: { type: String, required: false, default: "#F6821F" },
    bgImage: { type: String, required: false },
    description: { type: String, required: true },
  },
});
</script>

