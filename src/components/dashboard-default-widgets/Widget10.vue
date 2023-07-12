<template>
  <div class="card card-flush" :class="className">
    <!--begin::Header-->
    <div class="card-header pt-7">
      <!--begin::Title-->
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold text-gray-800">Orders Versus Shipment Activity</span>

      </h3>
      <!--end::Title-->

      <!--begin::Toolbar-->
      
      <ul class="pagination pagination-circle">
  <li class="page-item previous disabled"><a href="#" class="page-link"><i class="previous"></i></a></li>
  <li class="page-item "><a href="#" class="page-link">1</a></li>
  <li class="page-item next"><a href="#"  class="page-link"><i class="next"></i></a></li>
</ul>
      <!--end::Toolbar-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-6" style="max-height: 650px; overflow: auto;">
      <!--begin::Table container-->
      <div class="table-responsive" >
        <!--begin::Table-->
        <table class="table table-row-dashed align-middle gs-0 gy-3 my-0">
          <!--begin::Table head-->
          <thead>
            <tr class="fs-7 fw-bold text-gray-400 border-bottom-0">
              <th class="p-0 pb-3 min-w-175px text-start">ACCOUNT</th>
              <th class="p-0 pb-3 min-w-100px text-end">ORDER LINES</th>
              <th class="p-0 pb-3 min-w-100px text-end">XCARRIER</th>
              <th class="p-0 pb-3 min-w-175px text-end pe-12">AGE (days)</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(row, i) in table" :key="i">
              <tr>
                <td>
                  <div class="d-flex align-items-center">

                    <div class="d-flex justify-content-start flex-column">
                      <a
                        href="#"
                        class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                        >{{ row.title }}</a
                      >
                    </div>
                  </div>
                </td>

                <td class="text-end pe-0">
                  <span class="text-gray-600 fw-bold fs-6"
                    >{{ row.price }}</span
                  >
                </td>
                

                <td class="text-end pe-0">
                  <span class="text-gray-600 fw-bold fs-6"
                    >{{ row.carrier }}</span
                  >
                </td>

                <td class="text-end pe-12">
                  <span
                    :class="`badge py-3 px-4 fs-7 badge-light-${row.status.state}`"
                    >{{ row.status.label }}</span
                  >
                </td>

              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
      </div>
      <!--end::Table-->
    </div>
    <!--end: Card Body-->
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "default-dashboard-widget-10",
  components: {},
  props: {
    className: { type: String, required: false },
  },
  setup() {
    const table = [
      {
        img: getAssetPath("media/stock/600x600/img-49.jpg"),
        title: "ALT4184",
        price: "32,400",
        carrier: "32,400",
        icon: true,
        chartColor: "success",
        status: {
          label: "9",
          state: "danger",
        },
      },
      {
        img: getAssetPath("media/stock/600x600/img-40.jpg"),
        title: "ALT4184",
        price: "256,910",
        carrier: "32,400",
        icon: false,
        chartColor: "danger",
        status: {
          label: "8",
          state: "danger",
        },
      },
      {
        img: getAssetPath("media/stock/600x600/img-39.jpg"),
        title: "ALT4184",
        price: "8,220",
        carrier: "32,400",
        icon: true,
        chartColor: "success",
        status: {
          label: "7",
          state: "warning",
        },
      },
      {
        img: getAssetPath("media/stock/600x600/img-47.jpg"),
        title: "ALT4184",
        price: "74,000",
        carrier: "32,400",
        icon: true,
        chartColor: "success",
        status: {
          label: "6",
          state: "warning",
        },
      },
      {
        img: getAssetPath("media/stock/600x600/img-48.jpg"),
        title: "ALT4184",
        price: "183,300",
        carrier: "32,400",
        icon: false,
        chartColor: "danger",
        status: {
          label: "5",
          state: "s",
        },
      },
      {
        img: getAssetPath("media/stock/600x600/img-48.jpg"),
        title: "ALT4184",
        price: "183,300",
        carrier: "32,400",
        icon: false,
        chartColor: "danger",
        status: {
          label: "5",
          state: "s",
        },
        
      },
      {
        img: getAssetPath("media/stock/600x600/img-48.jpg"),
        title: "ALT4184",
        price: "183,300",
        carrier: "32,400",
        icon: false,
        chartColor: "danger",
        status: {
          label: "5",
          state: "s",
        },
        
      },
      {
        img: getAssetPath("media/stock/600x600/img-48.jpg"),
        title: "ALT4184",
        price: "183,300",
        carrier: "32,400",
        icon: false,
        chartColor: "danger",
        status: {
          label: "5",
          state: "s",
        },
        
      },
      
      {
        img: getAssetPath("media/stock/600x600/img-48.jpg"),
        title: "ALT4184",
        price: "183,300",
        carrier: "32,400",
        icon: false,
        chartColor: "danger",
        status: {
          label: "5",
          state: "s",
        },
        
      },
      
      {
        img: getAssetPath("media/stock/600x600/img-48.jpg"),
        title: "ALT4184",
        price: "183,300",
        carrier: "32,400",
        icon: false,
        chartColor: "danger",
        status: {
          label: "5",
          state: "s",
        },
        
      },
      
      {
        img: getAssetPath("media/stock/600x600/img-48.jpg"),
        title: "ALT4184",
        price: "183,300",
        carrier: "32,400",
        icon: false,
        chartColor: "danger",
        status: {
          label: "5",
          state: "s",
        },
        
      },
      
      {
        img: getAssetPath("media/stock/600x600/img-48.jpg"),
        title: "ALT4184",
        price: "183,300",
        carrier: "32,400",
        icon: false,
        chartColor: "danger",
        status: {
          label: "5",
          state: "s",
        },
        
      },
      
      {
        img: getAssetPath("media/stock/600x600/img-48.jpg"),
        title: "ALT4184",
        price: "183,300",
        carrier: "32,400",
        icon: false,
        chartColor: "danger",
        status: {
          label: "5",
          state: "s",
        },
        
      },
      
      {
        img: getAssetPath("media/stock/600x600/img-48.jpg"),
        title: "ALT4184",
        price: "183,300",
        carrier: "32,400",
        icon: false,
        chartColor: "danger",
        status: {
          label: "5",
          state: "s",
        },
        
      },
    ];

    return {
      table,
      getAssetPath,
    };
  },
});
</script>
