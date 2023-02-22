<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme'
import { useSponsor } from '../composables/sponsor'
import UseCases from './home/UseCases.vue';

const { data } = useSponsor()
</script>

<template>
  <UseCases />
</template>
