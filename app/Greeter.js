// Greeeter.js
// var config = require('./config.json')
// module.exports = function () {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText
//     return greet
// }
import React, { Component } from 'react'
import config from './config.json'
import styles from './Greeter.css'
class Greeeter extends Component {
    render() {
        return <div className={styles.root}>{config.greetText} 32423</div>
    }
}
export default Greeeter