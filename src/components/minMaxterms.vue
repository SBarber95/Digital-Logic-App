<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4 col-md-3 sidebar">
                <ul class="nav nav-sidebar">
                    <li class="sub-header">Basic Truth Table Options</li>
                    <li id="display-three-var-tt"><router-link to="threeVar">3 Variables</router-link></li>
                    <li id="display-four-var-tt"><router-link to="fourVar">4 Variables</router-link></li>
                </ul>
                <ul class="nav nav-sidebar">
                    <li class="sub-header">Need to Simplify a Boolean Expression?</li>
                    <li><router-link to="/karnaughMaps/threeVar">Karnaugh Maps</router-link></li>
                </ul>
                <ul class="nav nav-sidebar">
                    <li class="sub-header">Working on a Design Problem?</li>
                    <li><a href="">7-Segment Display</a></li>
                    <li><a href="designProblems.html">Flip-Flops/Counters</a></li>
                </ul>
            </div>
            <div class="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main">
                <h1 class="page-header" id="truth_table_header">3-Variable Truth Table</h1>
                <div id="table-placeholder">
                   <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .page-header {
        font-size: 40px;
    }
</style>