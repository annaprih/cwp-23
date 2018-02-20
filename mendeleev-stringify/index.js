/**
 * Created by annae on 16.02.2018.
 */
const mendeleev = require('mendeleev_23');

module.exports = (element)=>{
    let info = mendeleev(element);
    return `${info.number} ${info.name}/${info.weight}`;
};