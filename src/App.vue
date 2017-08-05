<template>
  <div id="app">
    <!-- Fixed navbar -->
    <nav class="navbar navbar-inverse navbar-toggleable-md navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand">Sovereign Logic</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/binaryArithmetic/addition">Binary Arithmetic</router-link></li>
            <li><router-link to="/conversions/fromDecimal">Conversions</router-link></li>
            <li><router-link to="/minMaxterms/threeVar">Min/Maxterms</router-link></li>
            <li><router-link to="/karnaughMaps/threeVar">Karnaugh Maps</router-link></li>
            <li><router-link to="/designProblems/SR-Counter">Design Problems</router-link></li>
            <li><router-link to="/circuitDesign">Circuit Design</router-link></li>
            <li><router-link to="/references/boolean-theorems">References</router-link></li>
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
  .context-menu {
    display: none;
    position: absolute;
    z-index: 10;
    padding: 12px 0;
    width: 240px;
    background-color: #fff;
    border: solid 1px #dfdfdf;
    box-shadow: 1px 1px 2px #cfcfcf;
  }

  .context-menu--active {
    display: block;
  }

  .context-menu__items {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .context-menu__item {
    display: block;
    margin-bottom: 4px;
  }

  .context-menu__item:last-child {
    margin-bottom: 0;
  }

  .context-menu__link {
    display: block;
    padding: 4px 12px;
    color: #626d71;
    text-decoration: none;
  }

  .context-menu__link:hover {
    color: #fff;
    background-color: #b38867;
  }

  #canvas {
    position: absolute;
    height: 550px;
    width: 91%;
    padding: 0 0 0 0;
    border: 3px solid #626d71;
  }

  .component-img {
    float: right;
    height: 50px;
  }

  .list-group-item:hover {
    background-color: #deb684;
  }

  .gate-input, .gate-output, .wire {
    stroke-linecap:butt;
    stroke-linejoin:miter;
    stroke-opacity:1;
    stroke-width:1.79;
    stroke:#000;
    z-index: -3;
  }

  .wire-component {
    position: relative;
    display: inline;
    z-index: -2;
  }

  .gate-output:hover {
    stroke: #2088f5;
  }

  .gate-input:hover {
    stroke: #cd5f00;
  }

  .gate-inverter {
    display:inline;
    overflow:visible;
    visibility:visible;
    fill:none;
    fill-opacity:1;
    stroke:#000000;
    stroke-width:3.89350438;
    stroke-linejoin:miter;
    stroke-opacity:1;
    marker:none;
    enable-background:accumulate
  }

  .two-AND {
    visibility:visible;
    fill:#000000;
    fill-opacity:1;
    marker:none
  }

  .two-NAND {
    display:inline;
    overflow:visible;
    visibility:visible;
    fill:#000000;
    fill-opacity:1;
    stroke:none;
    stroke-width:3;
    marker:none;
    enable-background:accumulate
  }

  .two-NOR {
    fill:#000000;
    fill-opacity:1;
    fill-rule:evenodd;
    stroke:none;
    stroke-width:3;
    stroke-linecap:butt;
    stroke-linejoin:miter;
    stroke-opacity:1
  }

  .two-OR {
    fill:#000000;
    fill-opacity:1;
    fill-rule:evenodd;
    stroke:none;
    stroke-width:3;
    stroke-linecap:butt;
    stroke-linejoin:miter;
    stroke-opacity:1
  }

  .two-XNOR, .two-XOR {
    fill:#000000;
    fill-opacity:1;
    fill-rule:evenodd;
    stroke:none;
    stroke-width:3;
    stroke-linecap:butt;
    stroke-linejoin:miter;
    stroke-opacity:1
  }

  .inverter-component {
    display:inline;
    overflow:visible;
    visibility:visible;
    fill:#000000;
    fill-opacity:1;
    stroke:none;
    stroke-width:3;
    stroke-linejoin:miter;
    stroke-opacity:1;
    marker:none;
    enable-background:accumulate
  }

  .inverter-input, .inverter-output {
    fill:none;
    stroke:#000000;
    stroke-linecap:butt;
    stroke-linejoin:miter;
    stroke-opacity:1
  }

  .three-AND {
    visibility:visible;
    fill:#000000;
    fill-opacity:1;
    marker:none
  }

  .three-NAND {
    display:inline;
    overflow:visible;
    visibility:visible;
    fill:#000000;
    fill-opacity:1;
    stroke:none;
    stroke-width:3;
    marker:none;
    enable-background:accumulate
  }

  .three-NOR {
    fill:#000000;
    fill-opacity:1;
    fill-rule:evenodd;
    stroke:none;
    stroke-width:3;
    stroke-linecap:butt;
    stroke-linejoin:miter;
    stroke-opacity:1
  }

  .three-OR {
    fill:#000000;
    fill-opacity:1;
    fill-rule:evenodd;
    stroke:none;
    stroke-width:3;
    stroke-linecap:butt;
    stroke-linejoin:miter;
    stroke-opacity:1
  }

  .insertion-point {
    width: 0;
    height: 0;
  }

  .component {
    display: inline;
    position: relative;
  }
</style>
