<template>
    <div>
      <Datatable :header="tableHeader" :data="tableData">
        <template v-slot:name="{ row: data }">
          {{ data.name }}
        </template>
        <template v-slot:position="{ row: data }">
          {{ data.position }}
        </template>
        <template v-slot:office="{ row: data }">
          {{ data.office }}
        </template>
        <template v-slot:age="{ row: data }">
          {{ data.age }}
        </template>
        <template v-slot:startDate="{ row: data }">
          {{ data.startDate }}
        </template>
        <template v-slot:salary="{ row: data }">
          {{ data.salary }}
        </template>
      </Datatable>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tableHeader: [
          { text: 'Name', value: 'name' }
          // Define other table headers here
        ],
        tableData: [
          { name: 'John Doe', position: 'Manager', office: 'New York', age: '1', startDate: '1', salary: '1' }
          // Define other table data objects here
        ],
      };
    },
  };
  </script>
  