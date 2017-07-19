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
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/binaryArithmetic/addition">Binary Arithmetic</router-link></li>
            <li><router-link to="/conversions/fromDecimal">Conversions</router-link></li>
            <li><a href="views/truthTables.html">Min/Maxterms</a></li>
            <li><a href="views/karnaughMaps.html">Karnaugh Maps</a></li>
            <li><a href="views/designProblems.html">Design Problems</a></li>
            <li><a href="views/circuitDesign.html">Circuit Design</a></li>
            <li><a href="views/references.html">References</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  .container-fluid {
    padding: 0;
  }
</style>
