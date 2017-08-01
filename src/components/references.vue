<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4 col-md-3 sidebar">
                <ul class="nav nav-sidebar">
                    <li class="sub-header">Reference List</li>
                    <li id="display-theorems"><router-link to="boolean-theorems">Boolean Theorems</router-link></li>
                    <li id="display-gate-ref"><a href="#">Logic Gates & Truth Tables</a></li>
                    <li id="display-arith-rules"><a href="#">Binary Arithmetic Rules</a></li>
                    <li id="display-conversion-rules"><a href="#">Conversion Rules</a></li>
                </ul>
                <ul class="nav nav-sidebar">
                    <li class="sub-header">Great External Resources</li>
                    <li><a href="http://www.allaboutcircuits.com/">All About Circuits</a></li>
                </ul>
            </div>
            <div class="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>