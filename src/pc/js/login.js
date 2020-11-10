require(['jquery', 'common', 'template', 'apiMain', 'MessageBox', 'Toast'], function ($, common, template, apiMain, MessageBox, Toast) {
    /**
     *
     * @constructor
     */
    function LoginPage() {
        var args = arguments.length ? arguments.length[0] : arguments;
        this.constructor();
    };
    /**
     *
     * @returns {LoginPage}
     */
    LoginPage.prototype.constructor = function () {
        return this;
    };
    /**
     *
     * @type {LoginPage}
     */
    var login = new LoginPage();
});
