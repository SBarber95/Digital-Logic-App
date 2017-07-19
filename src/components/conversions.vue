<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4 col-md-3 sidebar">
                <ul class="nav nav-sidebar">
                    <li class="sub-header">Select Base to Convert From</li>
                    <li id="binary_conversions"><a href="#">Binary (Base 2)</a></li>
                    <li id="octal_conversions"><a href="#">Octal (Base 8)</a></li>
                    <li id="decimal_conversions"><a href="#">Decimal (Base 10)</a></li>
                    <li id="hex_conversions"><a href="#">Hexadecimal (Base 16)</a></li>
                </ul>
                <ul class="nav nav-sidebar">
                    <li class="sub-header">Special Conversions</li>
                    <li id="ieee_conversions"><a href="#">IEEE Floating Point</a></li>
                </ul>
            </div>
            <div class="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main">
                <h1 id="conversions-header" class="page-header"><button type="button" style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#conversionModal">
                    Instructions!
                </button>
                    <div class="modal fade" id="conversionModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>
                                    <h4 class="modal-title" id="conversionTitle">Conversion Instructions</h4>
                                </div>
                                <div class="modal-body">
                                    <h3 class="sub-header">Calculator</h3>
                                    Simply enter your decimal value and hit convert! Select the desired base
                                    you wish to convert to in the drop-down box.
                                    <h3 class="sub-header">Practice Problems</h3>
                                    This feature generates a random decimal value for you to convert.
                                    Generate new random values with the Change Values button. Check your
                                    answer with the Check Answer button. If you are incorrect, the correct answer will show.
                                    Make sure you select which base you converted to in the drop-down box as you put in your answer.
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>Conversions from Decimal (Base 10)</h1>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>