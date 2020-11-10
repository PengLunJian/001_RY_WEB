require(['jquery', 'common', 'template', 'MessageBox', 'Toast', 'waves', 'apiMain'], function ($, common, template, MessageBox, Toast, waves, apiMain) {
    /**
     *
     * @constructor
     */
    function HomePage() {
        var args = arguments.length ? arguments.length[0] : arguments;
        this.selector = args['navItem'] ? args['navItem'] : $('.nav-item');
        this.constructor();
    };
    /**
     *
     * @returns {HomePage}
     */
    HomePage.prototype.constructor = function () {
        this.method2();
        return this;
    };
    /**
     *
     * @returns {HomePage}
     */
    HomePage.prototype.method2 = function () {
        $('.btn-href').on('click', function () {
            const element = '#' + $(this).attr('data-target');
            if ($(element)[0]) {
                var top = $(element).offset().top;
                $('html').animate({
                    scrollTop: top
                }, 300);
            }
        });
        return this;
    };
    /**
     *
     * @type {HomePage}
     */
    var homePage = new HomePage();
});
