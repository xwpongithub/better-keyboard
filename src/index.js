import JKeyboard from './jkeyboard/jkeyboard';

/* eslint-disable no-undef */
JKeyboard.version = __VERSION__;

// /* eslint-disable no-new */
let keyboard = new JKeyboard({
    onClose: () => {
        console.log('close!');
    }
});
keyboard.show();

module.exports = JKeyboard;