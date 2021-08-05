
'use strict';

const _nHtml = [];
const _oHtml = [];
let _el = null;
let _data = null;
let _template = null;
let _sourceTemplate = null;

// initialization
function createView(v) {
    _data = v.data;
    _template = v.template;
    _sourceTemplate = v.template;
    _el = v.el;
    document.querySelector(v.el).insertAdjacentHTML("beforeEnd", render(_template));
}

// event listeners
function eventListener(el, event, cb) {
    document.querySelector(el).addEventListener(event, cb);
}

// change state
function ref() {
    return new Proxy(_data, {
        get: (target, key) => {
            return target[key]
        },
        set: (target, key, newValue) => {
            target[key] = newValue;
            setTemplate();
            return true;
        }
    })
}

// once
const onceSetTemplate = once(setTemplate);

// reactiveHandlers
const reactiveHandlers = {
    get: (target, key) => {
        if (typeof target[key] === 'object' && target[key] !== null) {
            return new Proxy(target[key], reactiveHandlers);
        }
        return Reflect.get(target, key);
    },
    set: (target, key, value) => {
        Reflect.set(target, key, value);
        onceSetTemplate();
        return true
    }
}

// change states
function reactive() {
    return new Proxy(_data, reactiveHandlers)
}

// update the view
function setTemplate() {
    const oNode = document.querySelector(_el);
    const nNode = toHtml(render(_sourceTemplate, true));
    compile(oNode, 'o');
    compile(nNode, 'n');
    if (_oHtml.length === _nHtml.length) {
        for (let index = 0; index < _oHtml.length; index++) {
            const element = _oHtml[index];
            element.textContent !== _nHtml[index].textContent && (element.textContent = _nHtml[index].textContent);
        }
    }
}

// judge text node
function isTextNode(node) {
    return node.nodeType === 3;
}

// compile DOM
function compile(node, type) {
    if (type === 'o') {
        const ochildNodes = node.childNodes;
        for (let index = 0; index < Array.from(ochildNodes).length; index++) {
            const item = Array.from(ochildNodes)[index];
            if (item.childNodes && item.childNodes.length) {
                compile(item, 'o');
            } else if (isTextNode(item) && item.textContent.trim().length !== 0) {
                _oHtml.push(item);
            }
        }
    } else if (type === 'n') {
        const nchildNodes = node.childNodes;
        for (let index = 0; index < Array.from(nchildNodes).length; index++) {
            const item = Array.from(nchildNodes)[index];
            if (item.childNodes && item.childNodes.length) {
                compile(item, 'n');
            } else if (isTextNode(item) && item.textContent.trim().length !== 0) {
                _nHtml.push(item);
            }
        }
    }
}

// string to DOM
function toHtml(domStr) {
    const parser = new DOMParser();
    return parser.parseFromString(domStr, "text/html");
}

// type detection
function getType(v) {
    return Object.prototype.toString.call(v).match(/\[object (.+?)\]/)[1].toLowerCase();
}

// The function executes once
function once(fn) {
    let called = false;
    return function () {
        if (!called) {
            called = true
            fn.apply(this, arguments)
        }
    }
}

// template engine
function render(tem, type) {
    const reg = /\{(.+?)\}/;;
    if (reg.test(tem)) {
        const key = reg.exec(tem)[1];
        _data.hasOwnProperty(key) ? tem = tem.replace(reg, _data[key]) : (tem = tem.replace(reg, eval(`_data.${key}`)));
        if (type) {
            return (render(tem, true))
        } else {
            return (render(tem))
        }
    }
    return tem
}

// export
export {
    createView,
    eventListener,
    ref,
    reactive
}
