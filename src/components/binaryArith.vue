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
                <h1 id="binary-arith-header" class="page-header"><button type="button" style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#binaryAddModal">
                    Instructions!
                </button>
                    <div class="modal fade" id="binaryAddModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>
                                    <h4 class="modal-title" id="binaryAddTitle">Binary Addition Instructions</h4>
                                </div>
                                <div class="modal-body">
                                    <h3 class="sub-header">Calculator</h3>
                                    Simply enter your two binary values and hit calculate! If you have negative binary values,
                                    it is recommended to use the binary subtraction feature as binary addition only works with
                                    positive binary numbers as of now. Please read the instructions on that page.
                                    <h3 class="sub-header">Practice Problems</h3>
                                    This feature generates two random binary values for you to add and provide the answer for.
                                    You can generate new random values with the Change Values button. You can also check your
                                    answer with the Check Answer button. If you are incorrect, the correct answer will be displayed.
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>Binary Addition</h1>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>