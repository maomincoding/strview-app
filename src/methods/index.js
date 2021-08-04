import { useState, _data } from '../strview'

function use1() {
    // useState().a = 1;
    // useState().b = 9;
    useState().obj.a.b = 3;
}

export {
    use1
}