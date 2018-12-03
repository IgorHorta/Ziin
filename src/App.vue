<template>
  <div id="app">
    <div id="map">
      <GmapMap id="gmap"
        :center="{lat:-21.2476504, lng:-45.0053562}"
        :zoom="15"
        map-type-id="hybrid"
        style="height: 100vh"
      >
      </GmapMap>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
  mounted() {}
}

</script>

<style>

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#map {
  height: 100%;
}

#gmap {
  height: 100%;
}


</style>
