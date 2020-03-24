const util = {};

util.isObjectEmpty = (obj) => {
    return Object.keys(obj).length == 0;
}

util.toTitleCase = (str) => {
    if (typeof str != 'undefined') {
        return str.replace(/\w\S*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    } else {
        return str;
    }

}

/**
 * Convert a JS Date to a Mysql DATETIME formated string
 */
util.jsDateToDatetime = (date) => {
    return date.getUTCFullYear() + '-' +
    ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
    ('00' + date.getUTCDate()).slice(-2) + ' ' + 
    ('00' + date.getHours()).slice(-2) + ':' + 
    ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
    ('00' + date.getUTCSeconds()).slice(-2);
}

util.mysqlNow = () => {
    return util.jsDateToDatetime(new Date(Date.now()))
}


util.VBColorToHEX = (i) => {
    var r = (i & 0xFF).toString(16);
    var g = ((i >> 8) & 0xFF).toString(16);
    var b = ((i >> 16) & 0xFF).toString(16);
 
    r = ('0' + r).slice(-2);
    g = ('0' + g).slice(-2);
    b = ('0' + b).slice(-2);
 
    return ("#" + r + g + b).toUpperCase();
}

util.HEXToVBColor = (rrggbb) =>  {
    var bbggrr = rrggbb.substr(4, 2) + rrggbb.substr(2, 2) + rrggbb.substr(0, 2);
    return parseInt(bbggrr, 16);
}

module.exports = util;