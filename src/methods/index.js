import { reactive } from '../strview'

function useFun() {
    reactive().obj.a.b = 3;
}

export {
    useFun
}