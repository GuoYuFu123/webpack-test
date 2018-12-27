// Greeeter.js
// var config = require('./config.json')
// module.exports = function () {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText
//     return greet
// }
import React, { Component } from 'react'
import config from './config.json'
class Greeeter extends Component {
    render() {
        return <div>{config.greetText}</div>
    }
}
export default Greeeter