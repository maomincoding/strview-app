import { reactive, ref } from 'strview'

function executes() {
    reactive().obj.a.b = 3;
    ref().name = 'Strview.js';
}
function useItem() {
    ref().b = 100;
}

export {
    executes,
    useItem
}