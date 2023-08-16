<template>
    <section class="bg-neutral-700">
        <div class="ai_image">
            <div class="container">
                <Box_Image :images="imageUrls" />
            </div>
        </div>
        <h1></h1>

        <div class="container mx-auto py-10">
            <div class="grid grid-cols-3 gap-4">
                <div class="...">
                    <div class="h-full w-full rounded-lg overflow-hidden">
                        <YouTubeVideo class="h-full w-full" videoId="yKDbHcLXcao" />
                    </div>
                </div>
                <div class="col-span-2">
                    <div class="rounded-lg overflow-hidden">
                        <img src="../../assets/images/banner1.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="banner-top">
            <img src="../../assets/images/banner-top.png" alt="">
        </div>

        <div class="py-10 text-white">
            Go to events:
            <input type="text" v-model="eventID" class="text-black">
            <button @click="showEvent" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Let's go</button>
        </div>
        
    </section>
</template>

<script setup>
import YouTubeVideo from '../../components/video_list.vue'

definePageMeta({
    middleware: "auth",
})

</script>

<script>

export default {
    data() {
        return {
            eventID: '1'
        }
    },
    methods: {
        showEvent() {
            this.$router.push(`/events/${this.eventID}`)
        }
    }
}
</script>

<style lang="scss" scoped></style>