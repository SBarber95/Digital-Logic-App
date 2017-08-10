<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4 col-md-3 sidebar">
                <ul class="nav nav-sidebar">
                    <li class="sub-header">Binary Arithmetic Options</li>
                    <li id="binary_addition"><router-link to="addition">Binary Addition</router-link></li>
                    <li id="binary_subtraction"><router-link to="subtraction">Binary Subtraction</router-link></li>
                    <li id="binary_multiplication"><router-link to="multiplication">Binary Multiplication</router-link></li>
                    <li id="binary_division" data-toggle="tooltip" data-placement="right" title="Coming Soon!"><a href="#">Binary Division</a></li>
                </ul>
            </div>
            <div class="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main">
                <h1 id="binary-arith-header" class="page-header"></h1>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .page-header {
        font-size: 40px;
    }
</style>