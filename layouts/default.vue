<template>
    <div>
        <HeaderCommon />
        <div>
            <slot />
        </div>
        <FooterCommon />
    </div>
</template>

<script setup>
import HeaderCommon from '@/components/layouts/HeaderCommon.vue';
import FooterCommon from '@/components/layouts/FooterCommon.vue';

</script>

<style lang="scss" scoped></style>