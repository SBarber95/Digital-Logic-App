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
                <h1 class="page-header" id="design-header">
                    <button type="button" style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal"
                            data-target="#counterModal">Instructions!
                    </button>
                    <div class="modal fade" id="counterModal" tabindex="-1" role="dialog"
                         aria-labelledby="myModalLabel">'+
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span>&times;</span></button>
                                    <h4 class="modal-title" id="counterTitle">Binary Addition Instructions</h4>
                                </div>
                                <div class="modal-body">
                                    Fill out the table entries according to the state changes you wish to include in your counter.
                                    Click "Set Up Counter Design" and the rest of the table will fill in with the proper values.
                                    Below the table, the Karnaugh Maps associated with each
                                    input column will be populated with the table info. A
                                    simplified minterm boolean expression for the counter inputs is shown at the bottom.
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    S-R Counter Design
                </h1>
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
</style>