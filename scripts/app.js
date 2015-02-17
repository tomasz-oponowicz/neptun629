(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var addClass, entry, link, removeClass, _i, _j, _len, _len1, _ref, _ref1;

removeClass = function(node, clazz) {
  return node.className = node.className.replace(clazz, '');
};

addClass = function(node, clazz) {
  return node.className += ' ' + clazz;
};

_ref = document.querySelectorAll('.more');
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
  link = _ref[_i];
  link.onclick = function() {
    var entries, entry, index, _j, _len1;
    entries = this.previousSibling.querySelectorAll('.hidden');
    for (index = _j = 0, _len1 = entries.length; _j < _len1; index = ++_j) {
      entry = entries[index];
      if (index < 3) {
        removeClass(entry, 'hidden');
      }
    }
    if (entries.length <= 3) {
      return addClass(this, 'hidden');
    }
  };
}

_ref1 = document.querySelectorAll('ul.references > li');
for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
  entry = _ref1[_j];
  entry.onclick = function() {
    return document.location = this.dataset.href;
  };
}


},{}]},{},[1])