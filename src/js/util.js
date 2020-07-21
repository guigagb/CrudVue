import { DateTime } from "luxon";

export function onlyNumber(e) {
  let key = Number(e.key);
  if (isNaN(key) || e.key === null || e.key === " ") {
    return "";
  } else {
    return e.key;
  }
}

export const MESES = [
  { text: "Janeiro", value: 1 },
  { text: "Fevereiro", value: 2 },
  { text: "Março", value: 3 },
  { text: "Abril", value: 4 },
  { text: "Maio", value: 5 },
  { text: "Junho", value: 6 },
  { text: "Julho", value: 7 },
  { text: "Agosto", value: 8 },
  { text: "Setembro", value: 9 },
  { text: "Outubro", value: 10 },
  { text: "Novembro", value: 11 },
  { text: "Dezembro", value: 12 }
];

export const MES = getMesAtual();

export const ANO = getAnoAtual();

export function getMesAtual() {
  return getMes(new Date());
}

export function getMes(date) {
  return date.getMonth() + 1;
}

export function getAnoAtual() {
  return getAno(new Date());
}

export function getAno(date) {
  return date.getFullYear();
}

export function tabToEnter(element) {
  let el = document.querySelector(element);

  var focusable = [
    ...el.querySelectorAll(
      "input:not([disabled]):not([readonly])," +
        "select:not([disabled]):not([readonly])," +
        "button:not([disabled]):not([readonly]):not(.q-icon):not([z-index='-1'])," +
        "textarea:not([disabled]):not([readonly])"
    )
  ];

  for (let i in focusable) {
    focusable[i].addEventListener("keydown", function(e) {
      var next;
      if (e.keyCode === 13) {
        next = focusable[focusable.indexOf(this) + 1];
        if (next) {
          if (next.tagName == "BUTTON" || next.tagName == "SELECT")
            next.focus();
          else next.select();
        }
        e.preventDefault();
        return false;
      }
    });
  }
}

export function dataBrasil(data) {
  let separador;
  if (data != null && data != "") {
    if (data.trim() === "") {
      return false;
    }
    if (data.search("-") > 0) {
      separador = "-";
    }
    if (data.search("/") > 0) {
      separador = "/";
    }
    if (data.search(".") > 0) {
      separador = ".";
    }

    //2014/12/01
    let rt = data.split(separador);
    let dt = rt[2] + "/" + rt[1] + "/" + rt[0];
    return dt;
  } else {
    return "";
  }
}

export function show(arg) {
  let argDefault = {
    msg: "",
    title: "Mensagem do Sistema",
    theme: "xModal-bublue",
    onClose: false
  };

  if (typeof arg == "string") argDefault.msg = arg;

  arg = Object.assign(argDefault, arg);

  let id = "pnMsg" + Math.floor(Math.random() * 9999);
  let body = document.querySelector("body");
  let div = document.createElement("div");
  div.setAttribute("id", id);
  div.innerHTML = `<div style="text-align: center; font-weight: bold;">${arg.msg}</div>`;

  body.append(div);

  let modal = new xModal.create({
    el: "#" + id,
    theme: arg.theme,
    title: arg.title,
    width: 600,
    height: 190,
    onClose: function() {
      arg.onClose && arg.onClose();
      modal.destroy();
      document.querySelector("#" + id).innerHTML = "";
    },
    onOpen: function() {
      modal.btnFocus("OK");
    },
    buttons: {
      OK: {
        html: "OK",
        click: () => {
          modal.close();
        }
      }
    }
  });

  modal.open();
}

export function aguarde(Argument) {
  var argDefalt = {
    title: "Mensagem do Sistema",
    msg: "Aguarde processando . . .",
    close: {}
  };

  var arg = Object.assign(argDefalt, Argument);
  var modalAguarde;
  var pnAguarde;

  if (typeof Argument === "string") {
    if (Argument.toUpperCase() === "CLOSE") {
      modalAguarde.close();
      return false;
    }

    arg.msg = Argument;
  }

  pnAguarde = document.createElement("div");
  pnAguarde.setAttribute("id", "pnAguarde");
  pnAguarde.style.textAlign = "center";

  let divMensagem = document.createElement("div");
  divMensagem.style.textAlign = "center";
  divMensagem.style.fontWeight = "bold";
  divMensagem.innerHTML = arg.msg;

  let iconLoad = document.createElement("i");
  iconLoad.classList = "fa fa-spinner fa-pulse fa-3x fa-fw";
  iconLoad.style.fontSize = "15px";

  pnAguarde.appendChild(divMensagem);
  pnAguarde.appendChild(iconLoad);

  document.body.appendChild(pnAguarde);

  modalAguarde = new xModal.create({
    el: "#pnAguarde",
    width: 400,
    height: 130,
    title: arg.title,
    closeBtn: false,
    onClose: () => {
      modalAguarde.destroy();
      pnAguarde.parentNode.removeChild(pnAguarde);
      if (arg.close.length !== undefined) arg.close();
    }
  });

  modalAguarde.open();
}

export function confirma(Argument) {
  let arg = {};

  if (typeof Argument === "string") arg.msg = Argument;
  else arg = Argument;

  if (!arg.title) arg.title = "Mensagem do Sistema";

  var id = "pnCon" + Math.floor(Math.random() * 9999);

  let divMain = document.createElement("div");
  divMain.setAttribute("id", id);

  let divContent = document.createElement("div");
  divContent.style.textAlign = "center";
  divContent.style.marginLeft = "20px";
  divContent.innerHTML = '<div class="grow-1">' + arg.msg + "</div>";
  divContent.classList.add("flex-center");

  let icon = document.createElement("i");

  if (arg.icon) {
    switch (arg.icon) {
      case "1":
        icon.classList = "grow-0 fa fa-check-circle";
        icon.style.css = "position: relative; font-size: 70px; color: #01ad17";
        break;
      case "2":
        icon.classList = "grow-0 fa fa-times-circle";
        icon.style.css = "position: relative; font-size: 70px; color: #ad0101";
        break;
      case "3":
        icon.classList = "grow-0 fa fa-exclamation-circle";
        icon.style.css = "position: relative; font-size: 70px; color: #007daf";
        break;
      case "4":
        icon.classList = "grow-0 fa fa-exclamation-circle";
        icon.style.css = "position: relative; font-size: 70px; color: #ad0101";
        break;
    }
  } else {
    icon.classList = "fa fa-info-circle grow-0";
    icon.style.cssText = "position: relative; font-size: 70px; color: #0a4a6d";
    icon.style.width = "60px;";
  }

  if (arg.img) {
    icon = document.createElement("img");
    icon.setAttribute("src", arg.img);
  }

  divContent.prepend(icon);
  divMain.appendChild(divContent);
  document.body.appendChild(divMain);

  return new Promise((res, rej) => {
    let modalConfirma = new xModal.create({
      el: "#" + id,
      width: 600,
      height: 190,
      theme: "xModal-bublue",
      title: arg.title,
      onOpen: function() {},
      onClose: function() {
        if (arg.close) arg.close();
        //console.log(result);
        rej();
        modalConfirma.destroy();
      },
      buttons: {
        Cancelar: {
          html: "Cancelar",
          class: "btnModal",
          click: function() {
            arg.cancel && arg.cancel();
            modalConfirma.close();
          }
        },
        OK: {
          html: "Ok",
          class: "btnModal",
          click: function() {
            arg.call && arg.call();
            res();
            modalConfirma.close();
          }
        }
      }
    });

    modalConfirma.open();
    setTimeout(() => {
      modalConfirma.btnFocus("OK");
    }, 100);
  });
}

export function getDiffTwoJSON(newObj, oldObj) {
  let diff = { old: {}, new: {} };

  for (let i in newObj) {
    if (newObj[i] != oldObj[i]) {
      diff.new[i] = newObj[i];
      diff.old[i] = oldObj[i];
    }
  }

  return diff;
}

export function formatToLog(oldObj, newObj) {
  let log = "";

  for (let i in oldObj) {
    log += i + ": " + oldObj[i] + "->" + newObj[i] + " , ";
  }

  return log.substring(0, log.length - 2);
}

export function formatarValorBr(vlr, qtdDecimais = 2) {
  return Number(vlr)
    .toFixed(qtdDecimais)
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+,)/g, "$1.");
}

export function hideKeyboard(element) {
  element.setAttribute("readonly", "readonly"); // Force keyboard to hide on input field.
  //element.setAttribute("disabled", "true"); // Force keyboard to hide on textarea field.
  setTimeout(function() {
    //element.blur(); //actually close the keyboard
    // Remove readonly attribute after keyboard is hidden.
    element.removeAttribute("readonly");
    //element.removeAttribute("disabled");
  }, 100);
}

export function somenteNumero(e) {
  var tecla = window.event ? event.keyCode : e.which;
  let isNumber = false;
  if (tecla > 47 && tecla < 58) isNumber = true;
  else {
    if (tecla == 8 || tecla == 0) isNumber = true;
    else isNumber = false;
  }

  if (!isNumber) event.preventDefault();
}

export function stopExecution(e) {
  if (e.preventDefault) e.preventDefault();
  if (e.stopPropagation) e.stopPropagation();
  return false;
}

export function getDataHora() {
  return DateTime.local();
}
// window.show = show;
// window.aguarde = aguarde;
// window.confirma = confirma;
