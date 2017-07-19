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
                <h1 id="km_header" class="page-header"><button type="button" style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#KMModal">
                    Instructions!
                </button>
                    <div class="modal fade" id="KMModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>
                                    <h4 class="modal-title" id="KMTitle">Karnaugh Map Instructions</h4>
                                </div>
                                <div class="modal-body">
                                    Fill in your desired values in the drop-down boxes. Once you fill in your values,
                                    click "Simplify Minterms" or "Simplify Maxterms". Keep in mind that minterms group
                                    1s and maxterms group 0s. The output box will show its generated simplified expression
                                    and a list of the groupings by cell number.
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>3-Variable Karnaugh Map</h1>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>