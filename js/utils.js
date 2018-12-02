let STYLES = {
    loading: { font: '30px PT Serif' },
    loading_author: { font: '14px PT Serif', color: '#dfdfdf' },
    loading_ready: { font: '20px PT Serif' },
    game_option: { font: '20px PT Serif', color: '#dfdfdf' },
    overhead_number_main: { font: '30px PT Serif', color: '#111111' },
    story_text: { font: '17px PT Serif', color: '#111111' },
    story_text_last: { font: '17px PT Serif', color: '#cccccc' },
    story_text_resp: { font: '17px PT Serif', color: '#111111', align:'right' },
}

let META = {
    name_int: 451208114412965,
    name_str: '451208114412965',
}

pad = function(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

arrayMin = function(array) {
    return Math.min.apply(null, array);
};
