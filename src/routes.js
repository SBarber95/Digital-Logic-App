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
import MinMaxterms from './components/minMaxterms.vue'
import ThreeVarTT from './components/subComponents/threeVarTT.vue'
import FourVarTT from './components/subComponents/fourVarTT.vue'
import KarnaughMaps from './components/karnaughMaps.vue'
import ThreeVarKM from './components/subComponents/threeVarKM.vue'
import FourVarKM from './components/subComponents/fourVarKM.vue'
import DesignProblems from './components/designProblems.vue'
import SRCounter from './components/subComponents/SRCounter.vue'
import JKCounter from './components/subComponents/JKCounter.vue'
import DCounter from './components/subComponents/DCounter.vue'
import TCounter from './components/subComponents/TCounter.vue'
import CircuitDesign from './components/circuitDesign.vue'

export const routes = [
    {path: '', component: Home},
    {path: '/binaryArithmetic/', component: BinaryArith,
        children: [
            {path: 'addition', component: BinaryArithAdd},
            {path: 'subtraction', component: BinaryArithSub},
            {path: 'multiplication', component: BinaryArithMult}
        ]
    },
    {path: '/conversions/', component: Conversions,
        children: [
            {path: 'fromDecimal', component: ConversionsFromDec},
            {path: 'fromBinary', component: ConversionsFromBin},
            {path: 'fromOctal', component: ConversionsFromOctal},
            {path: 'fromHex', component: ConversionsFromHex}
        ]
    },
    {path: '/minMaxterms/', component: MinMaxterms,
        children: [
            {path: 'threeVar', component: ThreeVarTT},
            {path: 'fourVar', component: FourVarTT}
        ]
    },
    {path: '/karnaughMaps/', component: KarnaughMaps,
        children: [
            {path: 'threeVar', component: ThreeVarKM},
            {path: 'fourVar', component: FourVarKM}
        ]
    },
    {path: '/designProblems/', component: DesignProblems,
        children: [
            {path: 'SR-Counter', component: SRCounter},
            {path: 'JK-Counter', component: JKCounter},
            {path: 'D-Counter', component: DCounter},
            {path: 'T-Counter', component: TCounter}
        ]
    },
    {path: '/circuitDesign', component: CircuitDesign},
    {path: '*', component: Home}
]