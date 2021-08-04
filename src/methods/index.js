import { reactive } from '../strview'

function use1() {
    // reactive().obj.a.b = 3;
    reactive().arr.push(1);
}

export {
    use1
}