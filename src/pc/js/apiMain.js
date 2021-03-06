define(['jquery'], function ($) {
    var apis = {
        root: '/CheckBill',
        login: {
            url: '/login',
            params: {
                username: '',
                password: ''
            }
        },
        getUrl: function (api) {
            return this.root + this[api].url;
        },
        getParams: function () {
            var data = '';
            var args = arguments.length ? arguments[0] : arguments;
            for (var key in args) {
                data += key + '=' + args[key] + '&';
            }
            return data.substring(0, data.length - 1);
        }
    };

    return apis;
});