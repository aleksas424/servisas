<template>
  <div class="services-page">
    <AppHeader />
    <ElectricCarServices />
    <HybridServices />
    <BatteryRepair />
    <AppFooter />
  </div>
</template>

<script>
import ElectricCarServices from '../components/services/ElectricCarServices.vue';
import HybridServices from '../components/services/HybridServices.vue';
import BatteryRepair from '../components/services/BatteryRepair.vue';
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
  components: {
    ElectricCarServices,
    HybridServices,
    BatteryRepair,
    AppHeader,
    AppFooter
  }
};
</script>

<style scoped>
.services-page {
  padding: 2rem;
}
</style>
