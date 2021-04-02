<template>
    <video 
        width="100%" 
        height="100%" 
        :controls=true 
        :autoplay="autoplay"
    >
      <source src="@/assets//our_planet.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
</template>

<script>
export default {
    name:'VideoPlayer',
    props: ['src', 'type']
}
</script>