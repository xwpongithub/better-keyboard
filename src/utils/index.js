let elementStyle = document.createElement('div').style;

let vendor = (() => {
    let transformNames = {
        webkit: 'webkitTransform',
        Moz: 'MozTransform',
        O: 'OTransform',
        ms: 'msTransform',
        standard: 'transform'
    };
    for (let key in transformNames) {
        if (elementStyle[transformNames[key]] !== undefined) {
            return key;
        }
    }
    return false;
})();

function prefixStyle(style) {
    if (vendor === false) {
        return false;
    }

    if (vendor === 'standard') {
        return style;
    }

    return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}

let transform = prefixStyle('transform');

export const hasPerspective = prefixStyle('perspective') in elementStyle;
export const hasTouch = 'ontouchstart' in window;
export const hasTransform = transform !== false;
export const hasTransition = prefixStyle('transition') in elementStyle;

export const style = {
    transform,
    transitionTimingFunction: prefixStyle('transitionTimingFunction'),
    transitionDuration: prefixStyle('transitionDuration'),
    transitionDelay: prefixStyle('transitionDelay'),
    transformOrigin: prefixStyle('transformOrigin'),
    transitionEnd: prefixStyle('transitionEnd')
};

export function genRandomID(len) {
    let idArr = [];
    for (let i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789-_', a = 0; len > a; a++) {
        let e = Math.floor(Math.random() * i.length);
        idArr.push(i[e]);
    }
    return idArr.join('');
}

/**
 * 根据字符串生成DOM元素，只能有一个根元素
 */
export function parseDom(arg) {
    let objE = document.createElement('div');
    objE.innerHTML = arg;
    return objE.childNodes[0];
}

export function extend(target, source) {
    for (var key in source) {
        target[key] = source[key];
    }
}

const DEFAULT_INTERVAL = 100 / 60;

export const requestAnimationFrame = (() => {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        // if all else fails, use setTimeout
        function (callback) {
            return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2); // make interval as precise as possible.
        };
})();

export const cancelAnimationFrame = (() => {
    return window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.oCancelAnimationFrame ||
        function (id) {
            window.clearTimeout(id);
        };
})();
