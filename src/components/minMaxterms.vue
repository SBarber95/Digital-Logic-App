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
                    <li><router-link to="">Karnaugh Maps</router-link></li>
                </ul>
                <ul class="nav nav-sidebar">
                    <li class="sub-header">Working on a Design Problem?</li>
                    <li><a href="">7-Segment Display</a></li>
                    <li><a href="designProblems.html">Flip-Flops/Counters</a></li>
                </ul>
            </div>
            <div class="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main">
                <h1 class="page-header" id="truth_table_header"><button type="button" style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#minMaxModal">
                    Instructions!
                </button>
                    <div class="modal fade" id="minMaxModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>
                                    <h4 class="modal-title" id="minMaxTitle">Min/Maxterm Instructions</h4>
                                </div>
                                <div class="modal-body">
                                    Select the output values in the table and click "Find Min/Maxterms"
                                    to receive the minterm and maxterm expression. <br>NOTE: The min/maxterm
                                    expression you receive here is NOT simplified! If you desire a simplified expression,
                                    you can use the output here with the Karnaugh Map feature.
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>3-Variable Truth Table</h1>
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