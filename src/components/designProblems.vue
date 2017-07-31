<template>

</template>

<script>
    export default {}
</script>

<style scoped>
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