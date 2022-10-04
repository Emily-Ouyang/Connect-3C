<template>
    <NavbarFront></NavbarFront>
    <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view/>
    </div>
</template>

<script>
    import emitter from '@/methods/emitter';
    import NavbarFront from '@/components/NavbarFront.vue';
    import ToastMessages from '@/components/ToastMessages.vue';

    export default {
      components: {
        NavbarFront,
        ToastMessages
      },

      provide() {
        return {
          emitter
        }
      },

      created() {
      }
    };
</script>