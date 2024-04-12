<template>
  <div>
    <DataTable
      v-if="rates"
      :value="rates"
      contextMenu
      class="rates-table"
      :tableStyle="{ width: '100%' }"
    >
      <Column class="rates-table__column" field="country" header="Country" />
      <Column
        class="rates-table__column"
        field="transMess"
        header="Transactional Message"
      >
        <template #body="{ data }"> {{ data.transactoinalRate }} € </template>
      </Column>
      <Column
        class="rates-table__column"
        field="promoMess"
        header="Promotional Message"
      >
        <template #body="{ data }">
          {{ data.transactoinalRate }} €
        </template></Column
      >
      <Column
        class="rates-table__column"
        field="convSession"
        header="Conversational Session"
      >
        <template #body="{ data }">
          {{ data.convSessionRate }} €
        </template></Column
      >
      <Column
        class="rates-table__column"
        field="mmf"
        header="Minimum Monthly Fee"
      >
        <template #body="{ data }"> {{ data.mmf }} € </template></Column
      >
    </DataTable>
  </div>
</template>

<script setup lang="ts">
let rates = ref<Array<object>>([]);
await $fetch(`https://dashboard.smsbat.com/api/rate/default`, {
  onResponse({ response }) {
    rates.value = response._data;
  },
});
</script>

<style lang="scss">
.rates-table {
  width: 100%;
  & .p-datatable-thead {
    margin-bottom: 10px;
  }
  &__column {
    text-align: left;
  }
  & .p-datatable-tbody {
    padding-top: 10px;
  }
}
</style>
