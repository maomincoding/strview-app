import { reactive } from '../strview'

function executes() {
    reactive().obj.a.b = 3;
}

export {
    executes
}