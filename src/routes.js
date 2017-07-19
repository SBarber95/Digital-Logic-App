/**
 * Created by savannah on 7/9/17.
 */
import Home from './components/home.vue'
import BinaryArith from './components/binaryArith.vue'
import BinaryArithAdd from './components/subComponents/binaryArithAdd.vue'
import BinaryArithSub from './components/subComponents/binaryArithSubtract.vue'
import BinaryArithMult from './components/subComponents/binaryArithMult.vue'
import Conversions from './components/conversions.vue'
import ConversionsFromDec from './components/subComponents/conversionsFromDec.vue'
import ConversionsFromBin from './components/subComponents/conversionsFromBin.vue'
import ConversionsFromOctal from './components/subComponents/conversionsFromOctal.vue'
import ConversionsFromHex from './components/subComponents/conversionsFromHex.vue'

export const routes = [
    {path: '', component: Home},
    {path: '/binaryArithmetic/', component: BinaryArith,
        children: [
            {path: 'addition', component: BinaryArithAdd},
            {path: 'subtraction', component: BinaryArithSub},
            {path: 'multiplication', component: BinaryArithMult}
        ]},
    {path: '/conversions/', component: Conversions,
        children: [
            {path: 'fromDecimal', component: ConversionsFromDec},
            {path: 'fromBinary', component: ConversionsFromBin},
            {path: 'fromOctal', component: ConversionsFromOctal},
            {path: 'fromHex', component: ConversionsFromHex}
        ]},
    {path: '*', component: Home}
]