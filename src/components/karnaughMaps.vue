<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4 col-md-3 sidebar">
                <ul class="nav nav-sidebar">
                    <li class="sub-header">Karnaugh Map Options</li>
                    <li id="display_three_var_km"><router-link to="threeVar">3-Variable</router-link></li>
                    <li id="display_four_var_km"><router-link to="fourVar">4-Variable</router-link></li>
                    <li data-toggle="tooltip" data-placement="right" title="Coming Soon!"><a href="#">5-Variable</a></li>
                </ul>
                <ul class="nav nav-sidebar">
                    <li class="sub-header">Working on a Design Problem?</li>
                    <li><a href="">7-Segment Display</a></li>
                    <li><a href="designProblems.html">Flip-Flops/Counters</a></li>
                </ul>
            </div>
            <div class="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main">
                <h1 id="km_header" class="page-header">3-Variable Karnaugh Map</h1>
                <router-view></router-view>
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