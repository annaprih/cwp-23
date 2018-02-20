/**
 * Created by annae on 16.02.2018.
 */
const mendeleev = require('mendeleev').PeriodicTable;

function mendeleevFunc(element){
    let elem = mendeleev.getElement(element);
    return {
        name: elem.name,
        number: elem.number,
        weight: elem.mass
    }
}

module.exports = mendeleevFunc;