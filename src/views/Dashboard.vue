<template>
    <!--begin::Row-->
    <div class="row g-5 g-xl-10 mb-5 mb-xl-10">
  
      <!--begin::Col-->
      <div class="col-xl-3">
        <Table />
      </div>
      <!--end::Col-->
      
      <!--begin::Col-->
      <div class="col-xl-5">
        <Widget10 />
      </div>
      <!--end::Col-->
  
      <!--begin::Col-->
      <div class="col-xl-4">
        <Widget1
          className="h-md-25 mb-5 mb-xl-10"
          description="Active Projects"
          bgColor="#F6821F"
          :bgImage="getAssetPath('media/patterns/vector-1.png')"
        />
  
        <Chart3/>
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
  
  
  import Table from "@/components/widgets/tables/Table.vue";
  
  import Bar from "@/components/widgets/charts/Bar.vue";
  
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
      Bar ,
      Table,
  
    },
    setup() {
      return {
        getAssetPath,
      };
    },
  });
  </script>
  