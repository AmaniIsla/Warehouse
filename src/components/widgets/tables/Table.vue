<template>
  <!--begin::Tables Widget 3-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Open Pick Tickets
        </span>

      </h3>
      <div class="card-toolbar">
        <!--begin::Menu-->
        
      <ul class="pagination pagination-circle">
        <li class="page-item previous disabled"><a href="#" class="page-link"><i class="previous"></i></a></li>
        <li class="page-item "><a href="#" class="page-link">1</a></li>
        <li class="page-item next"><a href="#"  class="page-link"><i class="next"></i></a></li>
      </ul>
        <Dropdown3></Dropdown3>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3" style="max-height: 650px; overflow: auto;">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table class="table align-middle gs-0 gy-3">
          <!--begin::Table head-->
          <thead>
            <tr class="fs-7 fw-bold text-gray-400 border-bottom-0">
              <th class="p-0 pb-3 min-w-100px text-start">ACCOUNT</th>
              <th class="p-0 pb-3 min-w-100px text-end">COMPANY</th>
              <th class="p-0 pb-3 min-w-100px text-end">OpenPicks</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->

          <tbody>

            <template v-for="(item, index) in items" :key="index">
              <tr>
                <td>
                  <a
                    href="#"
                    class="text-dark fw-bold mb-1 fs-6"
                  >
                    {{ item.title }}
                  </a>
                </td>
                <td class="text-end text-muted fw-semobold">
                  {{ item.company }}
                </td>
                <td class="text-end text-dark fw-bold fs-6 pe-0">
                  {{ item.picks }}
                </td>
              </tr>
            </template>

          </tbody>


          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    <!--begin::Body-->
  </div>
  <!--end::Tables Widget 3-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "kt-widget-3",
  components: {
    Dropdown3,
  },
  props: {
    widgetClasses: String,
  },
  setup() {
    const items = [
      {
        title: "ALT4184",
        description: "Best Customers",
        company: "HAR",
        picks: "2831",
      },
      {
        title: "ALT4184",
        description: "Best Customers",
        company: "HAR",
        picks: "2831",
      },
      {
        title: "ALT4184",
        description: "Communication/Group.svg",
        company: "HAR",
        picks: "2831",
      },
      {
        title: "ALT4184",
        description: "Best Customers",
        company: "HAR",
        picks: "2831",
      },
      {
        title: "ALT4184",
        description: "Best Customers",
        company: "HAR",
        picks: "2831",
      },
      
      {
        title: "ALT4184",
        description: "Best Customers",
        company: "HAR",
        picks: "2831",
      },
      
      {
        title: "ALT4184",
        description: "Best Customers",
        company: "HAR",
        picks: "2831",
      },
      
      {
        title: "ALT4184",
        description: "Best Customers",
        company: "HAR",
        picks: "2831",
      },
      
      {
        title: "ALT4184",
        description: "Best Customers",
        company: "HAR",
        picks: "2831",
      },
      
      {
        title: "ALT4184",
        description: "Best Customers",
        company: "HAR",
        picks: "2831",
      },
      
      {
        title: "ALT4184",
        description: "Best Customers",
        company: "HAR",
        picks: "2831",
      },
      
      {
        title: "ALT4184",
        description: "Best Customers",
        company: "HAR",
        picks: "2831",
      },
      
      {
        title: "ALT4184",
        description: "Best Customers",
        company: "HAR",
        picks: "2831",
      },
      
      {
        title: "ALT4184",
        description: "Best Customers",
        company: "HAR",
        picks: "2831",
      },
      
      {
        title: "ALT4184",
        description: "Best Customers",
        company: "HAR",
        picks: "2831",
      },
      
      {
        title: "ALT4184",
        description: "Best Customers",
        company: "HAR",
        picks: "2831",
      },
      
      {
        title: "ALT4184",
        description: "Best Customers",
        company: "HAR",
        picks: "2831",
      },
      
      {
        title: "ALT4184",
        description: "Best Customers",
        company: "HAR",
        picks: "2831",
      },
      
      {
        title: "ALT4184",
        description: "Best Customers",
        company: "HAR",
        picks: "2831",
      },
      
      {
        title: "ALT4184",
        description: "Best Customers",
        company: "HAR",
        picks: "2831",
      },
      
      {
        title: "ALT4184",
        description: "Best Customers",
        company: "HAR",
        picks: "2831",
      },
    ];

    return {
      items,
      getAssetPath,
    };
  },
});
</script>
