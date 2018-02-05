'use strict';


class Icebreaker{
  question(){
    Question.Find()
  }
}

module.exports = Icebreaker;

var Questions = require("/.Question.js")
