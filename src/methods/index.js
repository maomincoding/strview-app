import { eventListener } from 'strview';
import { executes, useItem } from './item';

const eventList = [
    ['.color-red', 'click', executes],
    ['.list>li:nth-child(2)', 'click', useItem]
]

function methods() {
    for (let index = 0; index < eventList.length; index++) {
        const element = eventList[index];
        eventListener(...element);
    }
}

export default methods