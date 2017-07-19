<template>
    <div>
        <div class="km-container-4var" id="km_placeholder">
            <form id="four_var_KM" name="four_var_KM">
                <div class="info-cell"><img src="../../images/4VarKMLogo.png"></div>
                <div class="info-cell"><p class="info-top" style="left: 33%">00</p></div>
                <div class="info-cell"><p class="info-top" style="left: 33%">01</p></div>
                <div class="info-cell"><p class="info-top" style="left: 33%">11</p></div>
                <div class="info-cell"><p class="info-top" style="left: 33%">10</p></div>
                <div class="info-cell"><p class="info-side">00</p></div>
                <div class="cell"><select name="cell0">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell4">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell12">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell8">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="info-cell"><p class="info-side">01</p></div>
                <div class="cell"><select name="cell1">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell5">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell13">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell9">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="info-cell"><p class="info-side">11</p></div>
                <div class="cell"><select name="cell3">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell7">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell15">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell11">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="info-cell"><p class="info-side">10</p></div>
                <div class="cell"><select name="cell2">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell6">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell14">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell10">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <input type="submit" v-on:click="simplifyMinterms4Var" class="btn btn-primary first-input-4-var"
                       name="submit" value="Simplify (Minterms)">
                <input type="submit" v-on:click="simplifyMaxterms4Var" class="btn btn-primary second-input-4-var"
                       name="submit" value="Simplify (Maxterms)">
                </form>
        </div>
        <div class="panel panel-primary" style="float: right; display: inline-block; width: 52%;">
            <div class="panel-heading">
                <h3 class="panel-title">Simplified Boolean Expression</h3>
            </div>
            <div class="panel-body" id="KM_Output">
            </div>
        </div>
    </div>
</template>

<script>
    class KarnaughMapCell4Var {
        constructor(cellNum, cellValue, isGrouped) {
            this.cellNum = cellNum;
            this.cellValue = cellValue;
            this.isGrouped = isGrouped;
        }
    }
    export default {}
</script>

<style scoped>
    .km-container-4var {
        width: 550px;
        height: 500px;
        display: inline-block;
        margin-right: 20px;
    }
    .cell {
        width: 95px;
        height: 95px;
        border: 3px solid #43494c;
        display: inline-flex;
    }
    .info-cell {
        width: 95px;
        height: 50px;
        display: inline-flex;
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
    select {
        display: inline;
        position: relative;
        height: 40%;
        font-size: 24px;
        color: #D38D5F;
        top: 30%;
        left: 28%;
    }
    input {
        margin-top: 8px;
        position: relative;
        left: 33.2vw;
        top: -62.5vh;
    }
    .first-input-4-var {
        margin-top: 8px;
        position: relative;
    }
    .second-input-4-var {
        margin-top: 8px;
        position: relative;
    }
    .btn-primary {
        font-size: 18px;
    }
</style>