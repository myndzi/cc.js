=======
cc.js
=====

Simple credit card validation / type detection with no frills.

## Purpose
Validate and/or determine the type of a given credit card number.

## Reason
I couldn't find something small and simple to perform this function. I didn't want a full validation library or a jQuery plugin, just a simple code snippet.

## Usage
Include `cc.js` in browser or node. It will export a global object named `ccjs` with two methods: `validate` and `type`. Call `ccjs.validate(card number)` to check if it's valid or `ccjs.type(card number)` to determine what brand of card it is.

## Details
The function first attempts to match the supplied number against a regular expression, then performs validation with the Luhn algorithm.
The included regular expressions match Visa, MasterCard, American Express, Diners Club, Discover, and JCB

## uccjs
I also included an even more cut-down version strictly for validation use only. It exposes a global function named `uccjs` which does the same thing as `ccjs.validate`. It only shaves 300 bytes, but hey, that's almost half the size of the thing anyway.
