var prefix = /^[^\s\t]+:$/;

// Parse `text` and returb object of types inside
module.exports = function (text) {
    var result = { };
    var lines  = text.split('\n');
    var type   = 'main';

    var line;
    for ( var i = 0; i < lines.length; i++ ) {
        line = lines[i];
        if ( prefix.test(line) ) {
            type = line.slice(0, -1);
        } else {
            if ( typeof(result[type]) == 'undefined' ) {
                result[type] = [];
            }
            if ( type != 'main' && line.slice(0, 2) == '  ' ) {
                line = line.slice(2);
            }
            result[type].push(line);
        }
    }

    for ( type in result ) {
        result[type] = result[type].join('\n');
    }

    return result;
};
