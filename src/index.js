import JKeyboard from './jkeyboard/jkeyboard';

/* eslint-disable no-undef */
JKeyboard.version = __VERSION__;

let keyboard = new JKeyboard();

setTimeout(() => {
    keyboard.show();
}, 5000);

module.exports = JKeyboard;