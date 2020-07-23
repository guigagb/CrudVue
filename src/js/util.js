import { DateTime } from 'luxon'

export function onlyNumber(e) {
  let key = Number(e.key)
  if (isNaN(key) || e.key === null || e.key === ' ') {
    return ''
  } else {
    return e.key
  }
}

export const MESES = [
  { text: 'Janeiro', value: 1 },
  { text: 'Fevereiro', value: 2 },
  { text: 'Março', value: 3 },
  { text: 'Abril', value: 4 },
  { text: 'Maio', value: 5 },
  { text: 'Junho', value: 6 },
  { text: 'Julho', value: 7 },
  { text: 'Agosto', value: 8 },
  { text: 'Setembro', value: 9 },
  { text: 'Outubro', value: 10 },
  { text: 'Novembro', value: 11 },
  { text: 'Dezembro', value: 12 },
]

export const MES = getMesAtual()

export const ANO = getAnoAtual()

export function getMesAtual() {
  return getMes(new Date())
}

export function getMes(date) {
  return date.getMonth() + 1
}

export function getAnoAtual() {
  return getAno(new Date())
}

export function getAno(date) {
  return date.getFullYear()
}

export function tabToEnter(element) {
  let el = document.querySelector(element)

  var focusable = [
    ...el.querySelectorAll(
      'input:not([disabled]):not([readonly]),' +
      'select:not([disabled]):not([readonly]),' +
      "button:not([disabled]):not([readonly]):not(.q-icon):not([z-index='-1'])," +
      'textarea:not([disabled]):not([readonly])'
    ),
  ]

  for (let i in focusable) {
    focusable[i].addEventListener('keydown', function (e) {
      var next
      if (e.keyCode === 13) {
        next = focusable[focusable.indexOf(this) + 1]
        if (next) {
          if (next.tagName == 'BUTTON' || next.tagName == 'SELECT') next.focus()
          else {
            next.select()
          }
        }
        return false
      }
    })
  }
}

export function dataBrasil(data) {
  let separador
  if (data != null && data != '') {
    if (data.trim() === '') {
      return false
    }
    if (data.search('-') > 0) {
      separador = '-'
    }
    if (data.search('/') > 0) {
      separador = '/'
    }
    if (data.search('.') > 0) {
      separador = '.'
    }

    //2014/12/01
    let rt = data.split(separador)
    let dt = rt[2] + '/' + rt[1] + '/' + rt[0]
    return dt
  } else {
    return ''
  }
}

export function getDiffTwoJSON(newObj, oldObj) {
  let diff = { old: {}, new: {} }

  for (let i in newObj) {
    if (newObj[i] != oldObj[i]) {
      diff.new[i] = newObj[i]
      diff.old[i] = oldObj[i]
    }
  }

  return diff
}

export function formatToLog(oldObj, newObj) {
  let log = ''

  for (let i in oldObj) {
    log += i + ': ' + oldObj[i] + '->' + newObj[i] + ' , '
  }

  return log.substring(0, log.length - 2)
}

export function formatarValorBr(vlr, qtdDecimais = 2) {
  return Number(vlr)
    .toFixed(qtdDecimais)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+,)/g, '$1.')
}

export function hideKeyboard(element) {
  element.setAttribute('readonly', 'readonly') // Force keyboard to hide on input field.
  //element.setAttribute("disabled", "true"); // Force keyboard to hide on textarea field.
  setTimeout(function () {
    //element.blur(); //actually close the keyboard
    // Remove readonly attribute after keyboard is hidden.
    element.removeAttribute('readonly')
    //element.removeAttribute("disabled");
  }, 100)
}

export function somenteNumero(e) {
  var tecla = window.event ? event.keyCode : e.which
  let isNumber = false
  if (tecla > 47 && tecla < 58) isNumber = true
  else {
    if (tecla == 8 || tecla == 0) isNumber = true
    else isNumber = false
  }

  if (!isNumber) event.preventDefault()
}

export function stopExecution(e) {
  if (e.preventDefault) e.preventDefault()
  if (e.stopPropagation) e.stopPropagation()
  return false
}

export function getDataHora() {
  return DateTime.local()
}
// window.show = show;
// window.aguarde = aguarde;
// window.confirma = confirma;
