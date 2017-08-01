<template>
    <div>
        <h1 class="page-header" id="reference_header">Boolean Theorem Reference</h1>
        <div class="first-column">
            <h3 class='sub-header'>Operations with 0 and 1</h3>
            <p>X + 0 = X</p>
            <p>X + 1 = 1</p>
            <p>X * 1 = X</p>
            <p>X * 0 = 0</p>
            <h3 class='sub-header'>Idempotent Laws</h3>
            <p>X + X = X</p>
            <p>X · X = X </p>
            <h3 class='sub-header'>Involution Law</h3>
            <p>(X’)’ = X</p>
            <h3 class='sub-header'>Commutative Laws</h3>
            <p>X + Y = Y + X</p>
            <p>XY = YX</p>
            <h3 class='sub-header'>Associative Laws</h3>
            <p>(X + Y) + Z = X + (Y + Z) = X + Y + Z</p>
            <p>(XY)Z = X(YZ) = XYZ</p>
            <h3 class='sub-header'>Laws of Complimentarity</h3>
            <p>X + X’ = 1</p>
            <p>X · X’ = 0</p>
        </div>
        <div class="second-column">
            <h3 class='sub-header'>Distributive Laws</h3>
            <p>X(Y + Z) = XY + XZ</p>
            <p>X + YZ = (X + Y)(X + Z)</p>
            <h3 class='sub-header'>Simplification Theorems</h3>
            <p>XY + XY’ = X</p>
            <p>X + XY = X</p>
            <p>(X + Y’)Y = XY</p>
            <p>(X + Y)(X + Y’) = X</p>
            <p>X(X + Y) = X</p>
            <p>XY’ + Y = X + Y</p>
            <h3 class='sub-header'>DeMorgan's Laws</h3>
            <p>(X + Y + Z +...)’ = X’Y’Z’...</p>
            <p>(XYZ...)’ = X’ + Y’ + Z’...	</p>
            <h3 class='sub-header'>Duality</h3>
            <p>(X + Y + Z +...) = XYZ...</p>
            <p>(XYZ) = X + Y + Z +...</p>
            <h3 class='sub-header'>Theorem for Multiplying Out and Factoring</h3>
            <p>(X + Y)(X' + Z) = XZ + X'Y</p>
            <p>XY + X'Z = (X + Z)(X' + Y)</p>
            <h3 class='sub-header'>Consensus Theorem</h3>
            <p>XY + YZ + X'Z = XY + X'Z</p>
            <p>(X + Y)(Y + Z)(X' + Z) = (X + Y)(X' + Z)</p>
        </div>
    </div>
</template>

<script>
    export default {}
</script>