<template>
    <!--begin::Row-->
    <div class="row g-5 g-xl-10 mb-5 mb-xl-10">
      <!--begin::Col-->
      <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
        <Widget1
          className="h-md-50 mb-5 mb-xl-10"
          description="Active Projects"
          bgColor="#F1416C"
          :bgImage="getAssetPath('media/patterns/vector-1.png')"
        />
  
        <Widget2
          className="h-md-50 mb-5 mb-xl-10"
          :icon="false"
          stats="357"
          description="Professionals"
          labelColor="dark"
          textColor="gray-300"
        />
      </div>
      <!--end::Col-->
  
      <!--begin::Col-->
      <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
        <Widget3 className="h-md-50 mb-5 mb-xl-10" :chartSize="70" />
  
        <Widget4 className="h-lg-50" />
      </div>
      <!--end::Col-->
  
      <!--begin::Col-->
      <div class="col-xxl-6">
        <Widget5 className="h-md-100" />
      </div>
      <!--end::Col-->
  
      <!--begin::Col-->
      <div class="col-xl-8">
        <Card1 className="h-md-100" />
      </div>
      <!--end::Col-->
    </div>
  
        <!--end::Row-->
  
  
      
    <!--begin::Row-->
    <div class="row g-5 g-xl-10 mb-5 mb-xl-10">
      <!--begin::Col-->
      <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
        <Card1 className="h-md-100" />
      </div>
      <!--end::Col-->
      
    </div>
    <!--end::Row-->
  
  </template>
  
  <script lang="ts">
  import { getAssetPath } from "@/core/helpers/assets";
  import { defineComponent } from "vue";
  import Card1 from "@/components/cards/Card.vue";
  import Widget1 from "@/components/dashboard-default-widgets/Widget1.vue";
  import Widget2 from "@/components/dashboard-default-widgets/Widget2.vue";
  import Widget3 from "@/components/dashboard-default-widgets/Widget3.vue";
  import Widget4 from "@/components/dashboard-default-widgets/Widget4.vue";
  import Widget5 from "@/components/dashboard-default-widgets/Widget5.vue";
  import Widget6 from "@/components/dashboard-default-widgets/Widget6.vue";
  import Widget7 from "@/components/dashboard-default-widgets/Widget7.vue";
  import Widget8 from "@/components/dashboard-default-widgets/Widget8.vue";
  import Widget9 from "@/components/dashboard-default-widgets/Widget9.vue";
  import Widget10 from "@/components/dashboard-default-widgets/Widget10.vue";
  import Chart1 from "@/components/widgets/charts/Widget1.vue";
  import Chart2 from "@/components/widgets/charts/Widget2.vue";
  import Chart3 from "@/components/widgets/charts/Widget3.vue";
  import Chart4 from "@/components/widgets/charts/Widget4.vue";
  import Chart5 from "@/components/widgets/charts/Widget5.vue";
  import Chart6 from "@/components/widgets/charts/Widget6.vue";
  import Chart7 from "@/components/widgets/charts/Widget7.vue";
  import Chart8 from "@/components/widgets/charts/Widget8.vue";
  
  import Stat1 from "@/components/widgets/mixed/Widget8.vue";
  
  
  export default defineComponent({
    name: "main-dashboard",
    components: {
      Card1,
      Widget1,
      Widget2,
      Widget3,
      Widget4,
      Widget5,
      Widget6,
      Widget7,
      Widget8,
      Widget9,
      Widget10,
      Chart1,
      Chart2,
      Chart3,
      Chart4,
      Chart5,
      Chart6,
      Chart7,
      Chart8,
      Stat1,
  
    },
    setup() {
      return {
        getAssetPath,
      };
    },
  });
  </script>
  