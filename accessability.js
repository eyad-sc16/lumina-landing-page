'use strict'
class Accessability {
  static #allTextElement = [...document.querySelectorAll('a'), ...document.querySelectorAll('li'), ...document.querySelectorAll('span'), ...document.querySelectorAll('p')];
  static #body = document.body;
  #eventElement;
  constructor(eventElement) {
    this.#eventElement = eventElement
  }
  // API's methods

  reset() {
    Accessability.#body.classList = ''
    Accessability.#allTextElement.forEach(ele => {
      ele.style.fontSize = ''
      ele.style.lineHeight = ''
    })
  }

  setVoiceReading() {
    if (this.#eventElement.checked) {
      const selection = window.getSelection().toString().trim();
      const reading = new SpeechSynthesisUtterance(selection)
      window.speechSynthesis.cancel()
      window.speechSynthesis.speak(reading)
    }
  }

  switchIcons(EleClass1, EleClass2) {
    document.querySelector(`.${EleClass1}`).classList.toggle('hidden')
    document.querySelector(`.${EleClass2}`).classList.toggle('hidden')
  }

  isMatch = function (target, className) {
    if (target.dataset.feature === className)
      return true
    return false
  }

  get #getEventEleClass() {
    return this.#eventElement.className
  }

  get #checkTarget() {
    return this.#eventElement.closest(`.${this.#getEventEleClass.split(' ')[0]}`)
  }

  flixbleSetClass(className, method, targetEle = Accessability.#body) {
    if (this.#getEventEleClass !== this.#checkTarget.className) return
    targetEle.classList[method](className)
  }

  setClasses(className, targetEle = Accessability.#body) {
    if (this.#getEventEleClass !== this.#checkTarget.className) return
    targetEle.classList.toggle(className)
  }

  changeStyle(styleName, unChangedClass = null, eleCollection = Accessability.#allTextElement) {
    const mainMin = window.getComputedStyle(Accessability.#body)[styleName];
    this.#eventElement.setAttribute('min', parseFloat(mainMin));
    eleCollection.forEach(ele => {
      if (unChangedClass && (ele.classList.contains(unChangedClass) || ele.closest(`.${unChangedClass}`))) return
      ele.style[styleName] = `${this.#eventElement.value}px`
    })
  }

  classesSwitch(targetClass, ...classes) {
    if (this.#getEventEleClass !== this.#checkTarget.className) return
    classes.forEach(cla => Accessability.#body.classList.remove(cla))
    Accessability.#body.classList.add(targetClass)
  }

  iconSwitch(classToSet, targetClass, ...EleClasses) {
    if (this.#getEventEleClass !== this.#checkTarget.className) return
    EleClasses.forEach(ele => {
      document.querySelector(`.${ele}`).classList.add(classToSet)
    })
    document.querySelector(`.${targetClass}`).classList.remove(classToSet)
  }

  textBoldAssighn(eleClass, stateNum, ...assighnText) {
    const el = document.querySelector(`.${eleClass}`)
    el.textContent = ''
    if (el) {
      if (stateNum === 1) {
        el.textContent = assighnText[stateNum - 1]
      }
      if (stateNum === 2) {
        el.textContent = assighnText[stateNum - 1]
      }
      if (stateNum === 3) {
        el.textContent = assighnText[stateNum - 1]
        return
      }
    }
  }
}

const groupBtnsFunction = function () {
  // switching for multiple clsses wishes functoinality
  const switching = function (constracurObj, stateNum, ...elesArr) {
    if (stateNum === 1) {
      constracurObj.classesSwitch(elesArr[stateNum - 1], ...elesArr)
    }
    if (stateNum === 2) {
      constracurObj.classesSwitch(elesArr[stateNum - 1], ...elesArr)
    }
    if (stateNum === 3) {
      constracurObj.classesSwitch(elesArr[stateNum - 1], ...elesArr)
    }
  }

  // switchig for icons
  const switchingIcons = function (constracurObj, stateNum, ...iconsArr) {
    if (stateNum === 1) {
      constracurObj.iconSwitch('hidden', iconsArr[stateNum - 1], ...iconsArr)
    }
    if (stateNum === 2) {
      constracurObj.iconSwitch('hidden', iconsArr[stateNum - 1], ...iconsArr)
    }
    if (stateNum === 3) {
      constracurObj.iconSwitch('hidden', iconsArr[stateNum - 1], ...iconsArr)
    }
  }

  // ruler funciona to make the ruler keep tarcking the mouse while moving
  const ruler = document.querySelector('.a11y-reading-ruler')
  const moveRuler = function (e) {
    if (ruler) {
      ruler.style.top = (e.clientY - 40) + 'px';
    }
  }
  let fontNum = 0
  let textAlignNum = 0
  let boldNum = 0

  const a11yBody = document.querySelector('.a11y-body')
  if (!a11yBody) return

  a11yBody.addEventListener('click', function (e) {
    const target = e.target.closest('.a11y-feature-btn')
    if (!target) return

    const a11yObj = new Accessability(target)

    if (a11yObj.isMatch(target, 'large-cursor')) {
      a11yObj.setClasses('a11y-large-cursor')
    }

    if (a11yObj.isMatch(target, 'highlight-links')) {
      a11yObj.setClasses('a11y-highlight-links')
    }

    if (a11yObj.isMatch(target, 'bold-text')) {
      const allBoldClasses = ['a11y-bold-text', 'a11y-bold-text-extra', 'no-bold']
      const discribeBoldPhrase = ['Bold Text', 'Extra Bold Text', 'Normal']
      boldNum++
      switching(a11yObj, boldNum, ...allBoldClasses)
      a11yObj.textBoldAssighn('bold-text-span', boldNum, ...discribeBoldPhrase)
      if (boldNum === 3) {
        boldNum = 0
      }
    }

    if (a11yObj.isMatch(target, 'readable-font')) {
      const readableFontClasses = ['a11y-readable-font-roboto', 'a11y-readable-font', 'a11y-readable-font-defult']
      fontNum++
      if (fontNum === 1) {
        a11yObj.classesSwitch('a11y-readable-font', ...readableFontClasses)
      }
      if (fontNum === 2) {
        a11yObj.classesSwitch('a11y-readable-font-roboto', ...readableFontClasses)
      }
      if (fontNum === 3) {
        a11yObj.classesSwitch('a11y-readable-font-defult', ...readableFontClasses)
        fontNum = 0
      }
    }

    if (a11yObj.isMatch(target, 'stop-animation')) {
      a11yObj.setClasses('a11y-stop-animation')
    }

    if (a11yObj.isMatch(target, 'char-spacing')) {
      a11yObj.setClasses('a11y-char-spacing')
    }

    if (a11yObj.isMatch(target, 'dark-mode')) {
      a11yObj.setClasses('dark__theme')
      a11yObj.switchIcons('sun-icon', 'moon-icon')
    }

    if (a11yObj.isMatch(target, 'reading-ruler')) {
      a11yObj.setClasses('a11y-reading-ruler-active')
      if (document.body.classList.contains('a11y-reading-ruler-active')) {
        window.addEventListener('mousemove', moveRuler);
      } else {
        window.removeEventListener('mousemove', moveRuler);
      }
    }

    if (a11yObj.isMatch(target, 'text-align')) {
      const alignItemsClasses = ['a11y-text-align-center', 'a11y-text-align-right', 'a11y-text-align-end']
      const allAlignIconsClasses = [...document.querySelectorAll('.a11y-align-icon')].map(icon => icon.classList[1])
      textAlignNum++
      switching(a11yObj, textAlignNum, ...alignItemsClasses)
      switchingIcons(a11yObj, textAlignNum, ...allAlignIconsClasses)
      if (textAlignNum === 3) {
        textAlignNum = 0
      }
    }
  })

}

const rangeInputFun = function () {
  const rangeGroup = document.querySelector('.range-group')
  rangeGroup.addEventListener('input', function (e) {
    const target = e.target.closest('.a11y-range')
    const rangeGroupObj = new Accessability(target)
    if (!target) return

    if (target.classList.contains('range-font-size')) {
      rangeGroupObj.changeStyle('fontSize', 'a11y-panel')
    }

    if (target.classList.contains('range-line-hight')) {
      rangeGroupObj.changeStyle('lineHeight', 'a11y-panel')
    }
  })
}

const handlingOpiningBtn = function () {
  //btns
  const closeA11yBtn = document.querySelector('.a11y-btn-close')
  const a11yBtn = document.querySelector('.a11y-trigger-btn')
  //objs
  const a11yBtnObj = new Accessability(a11yBtn)
  const closeA11yBtnObj = new Accessability(closeA11yBtn)

  // eventHandlers
  const btnFun = function (obj) {
    obj.setClasses('is-open', a11yPanel)
  }
  const a11yPanel = document.querySelector('.a11y-panel')
  a11yBtn.addEventListener('click', function () {
    btnFun(a11yBtnObj)
  })

  closeA11yBtn.addEventListener('click', function () {
    btnFun(closeA11yBtnObj)
  })

  document.addEventListener('keydown', function (e) {
    if (a11yPanel.classList.contains('is-open') && e.key === 'Escape') {
      btnFun(closeA11yBtnObj)
    }
  })
}

const signLangugeFuncionality = function () {
  const signLangugeBtn = document.querySelector('.a11y-action-btn')
  const signLangugeOptions = document.querySelector('.sigh-languge-operations')
  const signLangugeObj = new Accessability(signLangugeBtn)

  signLangugeBtn.addEventListener('click', function () {
    if (signLangugeOptions.value === 'all')
      signLangugeObj.flixbleSetClass('a11y-sign-font', 'add')

    if (signLangugeOptions.value === 'none') {
      signLangugeObj.flixbleSetClass('a11y-sign-font', 'remove')
    }
  })
}

const voice = function () {
  const voiceBtn = document.querySelector('.a11y-checkbox');
  const voiceBtnObj = new Accessability(voiceBtn)

  document.addEventListener('mouseup', function () {
    voiceBtnObj.setVoiceReading()
  })
}

const resetFunctionlity = function () {
  const resetBtn = document.querySelector('.a11y-btn-reset')
  const resetObj = new Accessability(resetBtn)
  resetBtn.addEventListener('click', function () {
    resetObj.reset()
  })
}

groupBtnsFunction()
rangeInputFun()
handlingOpiningBtn()
signLangugeFuncionality()
voice()
resetFunctionlity()
