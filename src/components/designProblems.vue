<template>
    <div class="container-fluid" id="placeholder">
        <div class="row">
            <div class="col-sm-4 col-md-3 sidebar">
                <ul class="nav nav-sidebar">
                    <li class="sub-header">Counter Design</li>
                    <li id="select_SR_counter"><router-link to="SR-Counter">S-R Counter</router-link></li>
                    <li id="select_JK_counter"><router-link to="JK-Counter">J-K Counter</router-link></li>
                    <li id="select_D_counter"><router-link to="D-Counter">D Counter</router-link></li>
                    <li id="select_T_counter"><router-link to="T-Counter">T Counter</router-link></li>
                    <li class="sub-header">Other Design Problems</li>
                    <li id="select_7S_Display"><a href="#">7-Segment Display</a></li>
                </ul>
            </div>
            <div class="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main">
                <h1 class="page-header" id="design-header">S-R Counter Design</h1>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
    .km-container {
        width: 300px;
        height: 500px;
        display: inline-block;
        margin-right: 20px;
        margin-top: 20px;
    }

    .cell {
        width: 95px;
        height: 95px;
        border: 3px solid #43494c;
        display: inline-flex;
        font-size: 28px;
    }

    .cell > p {
        position: relative;
        left: 42%;
        top: 28%;
    }

    .info-cell {
        width: 95px;
        height: 50px;
        display: inline-flex;
    }

    .km-label {
        font-size: 24px;
        position: relative;
        top: 10%;
        left: 60%;
        text-decoration: underline;
    }

    img {
        height: 70px;
    }

    .info-top {
        display: inline;
        position: relative;
        font-size: 30px;
        top: 25%;
        left: 45%;
        color: #D38D5F;
    }

    .info-side {
        display: inline;
        position: relative;
        font-size: 30px;
        top: 60%;
        left: 50%;
        color: #D38D5F;
    }

    .btn-primary {
        font-size: 18px;
    }
    .page-header {
        font-size: 40px;
    }
</style>