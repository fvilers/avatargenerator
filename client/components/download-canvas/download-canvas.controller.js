"use strict";

function downloadCanvasController ($window, $timeout) {
  const ctrl = this;
  const canvas = $window.document.getElementById(ctrl.canvas);

  ctrl.download = download;
  ctrl.$onInit = initialize;

  function download () {
    if (ctrl.isEdge) {
      return;
    }
    
    const url = canvas.toDataURL("image/png");
    const a = $window.document.createElement("a");

    $window.document.body.appendChild(a);
    a.style.cssText = "display: none";
    a.href = url;
    a.download = `${ctrl.initials}.png`;
    a.click();

    $timeout(() => {
      $window.URL.revokeObjectURL(url);
      $window.document.body.removeChild(a);
    }, 500);
  }

  function initialize () {
    const isIE = /*@cc_on!@*/false || !!document.documentMode;

    ctrl.isEdge = !isIE && !!window.StyleMedia;
  }
}

module.exports = [
  "$window",
  "$timeout",
  downloadCanvasController
];
