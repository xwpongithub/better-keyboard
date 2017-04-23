import './assets/styl/index';

import {genRandomID, parseDom, requestAnimationFrame, style, hasTouch} from '../utils';

const clickEvt = 'click';
const slideUpAnimation = 'slide-up';
const inputEvt = hasTouch ? 'touchend' : clickEvt;

export default class JKeyboard {
  constructor(options = {}) {
    let id = 'keyboard_' + genRandomID(8);
    this.props = options;
    this.props.id = id;
    this.props.result = options.defaultResult ? options.defaultResult.split('') : [];
    this.wrapperSelector = this.props.containEl ? this.props.containEl : 'body';
    let renderParams = {};
    renderParams.id = id;
    renderParams.key = options.key || '';
    renderParams.showClose = options.showClose ? 'hide' : '';
    this.render(renderParams);
    this.bindEvents();
  }
  static generateKeyboardPanel(params) {
        let template = `<div class="keyboard num" id="${params.id}" key="${params.key}">
                       <div class="abs-mt symbol bt border-box">
                         <div class="arrow-box abs-rm ${params.showClose}">
                           <div class="arrow-box-text">完成</div>
                         </div>
                       </div>
                       <ul class="pct100">
                         <li>
                           <div data-key="1">1</div>
                           <div data-key="2" class="br bl">2</div>
                           <div data-key="3">3</div>
                         </li>
                         <li>
                           <div data-key="4">4</div>
                           <div data-key="5" class="br bl">5</div>
                           <div data-key="6">6</div>
                         </li>
                         <li>
                           <div data-key="7">7</div>
                           <div data-key="8" class="br bl">8</div>
                           <div data-key="9">9</div>
                         </li>
                         <li>
                           <div class="bg-gray">
                             <span class="v-h">n</span>
                           </div>
                           <div data-key="0" class="br bl">0</div>
                           <div data-key="del" class="del bg-gray">
                             <span class="abs-mm"></span>
                             <span class="v-h">n</span>
                           </div>
                         </li>
                       </ul>
                     </div>`;
        return parseDom(template);
    }
  render(params) {
    let wrapperEl = document.querySelector(this.wrapperSelector);
    let keyboardEl = JKeyboard.generateKeyboardPanel(params);
    wrapperEl.appendChild(keyboardEl);
  }
  bindEvents() {
      this.keyboard = document.querySelector('#' + this.props.id);
      let closeBox = this.keyboard.querySelector('.arrow-box');
      this.onClose = (e) => this.closeHandler(e);
      closeBox.removeEventListener(clickEvt, this.onClose, false);
      closeBox.addEventListener(clickEvt, this.onClose, false);
      this.onCloseComplete = (e) => this.closeCompleteHandler(e);
      this.onInput = (e) => this.inputHandler(e);
      this.keyboard.addEventListener(inputEvt, this.onInput, false);
  }
  show() {
    document.documentElement.classList.add('scroll-fixed');
    this.keyboard.style.display = 'block';
    /* eslint-disable no-unused-vars */
    let block = this.keyboard.offsetHeight;
    requestAnimationFrame(() => {
      this.keyboard.classList.add(slideUpAnimation);
    });
  }
  close() {
    this.keyboard.classList.remove(slideUpAnimation);
  }
  closeHandler() {
    this.close();
    this.props.onClose && this.props.onClose();
  }
  closeCompleteHandler() {
    this.keyboard.removeEventListener(style.transitionEnd, this.onCloseComplete, false);
    document.documentElement.classList.add('scroll-fixed');
    this.keyboard.style.display = 'none';
  }
  inputHandler(e) {
    let target = e.target;
    let inputKey = target.dataset.key;
    if (inputKey && inputKey !== '') {
      target.classList.add('active');
      window.setTimeout(() => {
        target.classList.remove('active');
      }, 160);
    }
  }
}
