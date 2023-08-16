<template>
    <iframe :src="videoSrc" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
</template>
  
<script>
export default {
    props: {
        videoId: {
            type: String,
            required: true,
        },
    },
    computed: {
        videoSrc() {
            return `https://www.youtube.com/embed/${this.videoId}?vq=hd720`;
        },
    },
};
</script>
  