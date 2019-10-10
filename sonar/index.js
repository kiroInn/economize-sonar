const request = require('request');

function query(config = {}) {
    const HEADER = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
    };
    const { priceStart = 0, priceEnd = 9999, keyword = 'iphone' } = config;
    request({
        url: `https://s.2.taobao.com/list/?q=madness&page=2&search_type=item&_input_charset=utf8`,
        header: HEADER,
        encoding: null,
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            console.log(body);
        } else {
            console.log('error')
        }
    });
}