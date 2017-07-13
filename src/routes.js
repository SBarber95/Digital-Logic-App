/**
 * Created by savannah on 7/9/17.
 */
import Home from './components/home.vue'
import BinaryArith from './components/binaryArith.vue'
import BinaryAuthAdd from './components/subComponents/binaryArithAdd.vue'
import BinaryAuthSub from './components/subComponents/binaryArithSubtract.vue'

export const routes = [
    {path: '', component: Home},
    {path: '/binaryArithmetic/', component: BinaryArith,
        children: [
            {path: 'addition', component: BinaryAuthAdd},
            {path: 'subtraction', component: BinaryAuthSub}
            ]},
    {path: '*', component: Home}
]