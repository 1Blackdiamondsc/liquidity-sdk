!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("lqd-wallet-client",[],t):"object"==typeof exports?exports["lqd-wallet-client"]=t():e["lqd-wallet-client"]=t()}(global,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.DEBIT=0]="DEBIT",e[e.CREDIT=1]="CREDIT",e[e.FULFILLMENT=2]="FULFILLMENT",e[e.FINALIZATION=3]="FINALIZATION",e[e.FREEZING=4]="FREEZING",e[e.SENDER_CANCELLATION=5]="SENDER_CANCELLATION",e[e.RECIPIENT_CANCELLATION=6]="RECIPIENT_CANCELLATION"}(t.TransferAggregateType||(t.TransferAggregateType={}))}])});