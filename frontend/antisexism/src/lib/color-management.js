
/**
 * Return a lighter or darker color
 * @param string col    the hex color
 * @param number amt    the amount to modify (positive = lighter, negative : darker) 0 <= amt <=255
 */
export function lightenDarkenColor(col,amt) {
    var usePound = false;

    if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    [r, g, b] = [r,g,b].map(color => color <= 15 ? `0${color.toString(16)}` : color.toString(16));


    return (usePound?"#":"") + r + b + g;
}

/**
 * Return the right contrasted color font for the color in parameter
 * ex : if the color is #000, then the font must be white, hence the function will return #FFF
 * @param string hexcolor  the color 
 */
export function getContrastYIQ(hexcolor){
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? '#000' : '#FFF';
}
