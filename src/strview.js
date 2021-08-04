
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
    document.querySelector(v.el).insertAdjacentHTML("beforeEnd", render());
}

// event listeners
function eventListener(el, event, cb) {
    document.querySelector(el).addEventListener(event, cb);
}

// Change state
function useState() {
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


function deepProxy(obj, cb) {

    if (typeof obj === "object") {

        for (let key in obj) {
            if (typeof obj[key] === "object") {
                obj[key] = deepProxy(obj[key], cb);
            }
        }

    }

    return new Proxy(obj, {
        set: (target, key, value, receiver) => {

            if (typeof value === "object") {
                value = deepProxy(value, cb);
            }

            let cbType = target[key] == undefined ? "create" : "modify";

            //排除数组修改length回调
            if (!(Array.isArray(target) && key === "length")) {
                cb(cbType, { target, key, value });
            }
            return Reflect.set(target, key, value, receiver);

        },
        deleteProperty(target, key) {
            cb("delete", { target, key });
            return Reflect.deleteProperty(target, key);
        }

    });

}

// update the view
function setTemplate() {
    const oNode = document.querySelector(_el);
    const nNode = toHtml(render(_sourceTemplate, 1));
    compile(oNode, 'o');
    compile(nNode, 'n');
    console.log(_data)
    if (_oHtml.length === _nHtml.length) {
        for (let index = 0; index < _oHtml.length; index++) {
            const element = _oHtml[index];
            element.textContent !== _nHtml[index].textContent && (element.textContent = _nHtml[index].textContent);
        }
    }
}

// Judge text node
function isTextNode(node) {
    return node.nodeType === 3;
}

// Compile DOM
function compile(node, type) {
    if (type === 'o') {
        let ochildNodes = node.childNodes;
        Array.from(ochildNodes).forEach((item) => {
            if (item.childNodes && item.childNodes.length) {
                compile(item, 'o');
            } else if (isTextNode(item) && item.textContent.trim().length !== 0) {
                _oHtml.push(item);
            }
        })
    } else if (type === 'n') {
        let nchildNodes = node.childNodes;
        Array.from(nchildNodes).forEach(item => {
            if (item.childNodes && item.childNodes.length) {
                compile(item, 'n');
            } else if (isTextNode(item) && item.textContent.trim().length !== 0) {
                _nHtml.push(item);
            }
        })
    }
}

// String to DOM
function toHtml(domStr) {
    const parser = new DOMParser();
    return parser.parseFromString(domStr, "text/html");
}

// type detection
function getType(v) {
    return Object.prototype.toString.call(v).match(/\[object (.+?)\]/)[1].toLowerCase();
}

// template engine
function render(template, type) {
    const reg = /\{(.+?)\}/;;
    if (type === 1) {
        if (reg.test(template)) {
            const key = reg.exec(template)[1];
            console.log(key)
            if (_data.hasOwnProperty(key)) {
                template = template.replace(reg, _data[key]);
            } else {

                const str = `_data.${key}`;
                template = template.replace(reg, eval(str));
            }
            return render(template, 1);
        }
        return template;
    } else {
        if (reg.test(_template)) {
            const key = reg.exec(_template)[1];
            if (_data.hasOwnProperty(key)) {
                _template = _template.replace(reg, _data[key]);
            } else {
                const str = `_data.${key}`;
                _template = _template.replace(reg, eval(str));
            }
            return render(_template);
        }
        return _template;
    }

}

// export
export {
    createView,
    eventListener,
    useState,
    setTemplate,
    isTextNode,
    compile,
    toHtml,
    render,
    _data,
    deepProxy
}
