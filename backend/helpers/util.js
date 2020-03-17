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
    ('00' + date.getUTCHours()).slice(-2) + ':' + 
    ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
    ('00' + date.getUTCSeconds()).slice(-2);
}

util.mysqlNow = () => {
    return util.jsDateToDatetime(new Date(Date.now()))
}


module.exports = util;