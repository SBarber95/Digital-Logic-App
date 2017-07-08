<template>
  <div id="app">
    <!-- Fixed navbar -->
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <img class="icon-bar" src="images/Logo.svg">
          <a class="navbar-brand">Sovereign Logic</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a href="../index.html">Home</a></li>
            <li class="active"><a href="views/binaryArithmetic.html">Binary Arithmetic</a></li>
            <li><a href="views/conversions.html">Conversions</a></li>
            <li><a href="views/truthTables.html">Min/Maxterms</a></li>
            <li><a href="views/karnaughMaps.html">Karnaugh Maps</a></li>
            <li><a href="views/designProblems.html">Design Problems</a></li>
            <li><a href="views/circuitDesign.html">Circuit Design</a></li>
            <li><a href="views/references.html">References</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
