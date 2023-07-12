<template>
    <!--begin::Charts Widget 1-->
    <div class="card" :class="widgetClasses">
      <!--begin::Header-->
      <div class="card-header border-0 pt-5">
        <!--begin::Title-->
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label fw-bold fs-3 mb-1">Open Tickets</span>
  
        </h3>
        <!--end::Title-->
  
        <!--begin::Toolbar-->
        <div class="card-toolbar">
          <!--begin::Menu-->
          <ul class="pagination pagination-circle">
            <li class="page-item previous disabled"><a href="#" class="page-link"><i class="previous"></i></a></li>
            <li class="page-item "><a href="#" class="page-link">1</a></li>
            <li class="page-item next"><a href="#"  class="page-link"><i class="next"></i></a></li>
          </ul>

          <!--end::Menu-->
        </div>
        <!--end::Toolbar-->
      </div>
      <!--end::Header-->
  
      <!--begin::Body-->
      <div class="card-body">
        <!--begin::Chart-->
        <apexchart
          ref="chartRef"
          type="bar"
          :options="chart"
          :series="series"
          :height="height"
        ></apexchart>
        <!--end::Chart-->
      </div>
      <!--end::Body-->
    </div>
    <!--end::Charts Widget 1-->
  </template>
  
  <script lang="ts">
  import { getAssetPath } from "@/core/helpers/assets";
  import { computed, defineComponent, onBeforeMount, ref, watch } from "vue";
  import { useThemeStore } from "@/stores/theme";
  import type { ApexOptions } from "apexcharts";
  import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
  import { getCSSVariableValue } from "@/assets/ts/_utils";
  import type VueApexCharts from "vue3-apexcharts";
  
  

  export default defineComponent({
    name: "widget-1",
    props: {
      widgetClasses: String,
      height: Number,
    },
    components: {
      Dropdown1,
    },
    setup() {
      const chartRef = ref<typeof VueApexCharts | null>(null);
      let chart: ApexOptions = {};
      const store = useThemeStore();
  
      const series = [
        {
          name: "Open Picks",
          data: [44, 55, 57, 56, 61, 58],
        },
      ];
  
      const themeMode = computed(() => {
        return store.mode;
      });
  
      onBeforeMount(() => {
        Object.assign(chart, chartOptions());
      });
  
      const refreshChart = () => {
        if (!chartRef.value) {
          return;
        }
  
        Object.assign(chart, chartOptions());
  
        chartRef.value.refresh();
      };
  
      watch(themeMode, () => {
        refreshChart();
      });
  
      return {
        chart,
        series,
        chartRef,
        getAssetPath,
      };
    },
  });
  
  const chartOptions = (): ApexOptions => {
    const labelColor = getCSSVariableValue("--bs-gray-500");
    const borderColor = getCSSVariableValue("--bs-gray-200");
    const baseColor = getCSSVariableValue("--bs-primary");
    const secondaryColor = getCSSVariableValue("--bs-gray-300");
  
    return {
      chart: {
        fontFamily: "inherit",
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "30%",
          borderRadius: 5,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["ALT4184", "ALT4184", "ALT4184", "ALT4184", "ALT4184", "ALT4184","ALT4184","ALT4184","ALT4184","ALT4184"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
      },
      fill: {
        opacity: 1,
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
        },
        y: {
          formatter: function (val) {
            return "$" + val + " thousands";
          },
        },
      },
      colors: [baseColor, secondaryColor],
      grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
    };
  };
  </script>
