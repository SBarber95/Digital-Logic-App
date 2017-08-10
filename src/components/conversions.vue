<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4 col-md-3 sidebar">
                <ul class="nav nav-sidebar">
                    <li class="sub-header">Select Base to Convert From</li>
                    <li id="binary_conversions"><router-link to="fromBinary">Binary (Base 2)</router-link></li>
                    <li id="octal_conversions"><router-link to="fromOctal">Octal (Base 8)</router-link></li>
                    <li id="decimal_conversions"><router-link to="fromDecimal">Decimal (Base 10)</router-link></li>
                    <li id="hex_conversions"><router-link to="fromHex">Hexadecimal (Base 16)</router-link></li>
                </ul>
                <ul class="nav nav-sidebar">
                    <li class="sub-header">Special Conversions</li>
                    <li id="ieee_conversions"><router-link to="ieee-conversions">IEEE Floating Point</router-link></li>
                </ul>
            </div>
            <div class="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main">
                <h1 id="conversions-header" class="page-header">Conversions from Decimal (Base 10)</h1>
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