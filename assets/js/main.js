const $fb_page = $('#fb-page');

$(window).resize(function () {
    const $main = $('#main');
    const $header = $('#header');
    const $footer = $('#footer');
    const height = $(window).outerHeight() - $header.outerHeight() - $footer.outerHeight();

    $main.css('margin-top', $header.height() + 'px');
    $main.height(Math.max($main.height(), height));

    if (!$fb_page)
        return;

    const $fb_container = $fb_page.parent();

    const width = Math.floor($fb_container.width());
    const fb_height = Math.floor(height);

    $fb_page.attr('src', 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVolhardingDuizel&tabs=timeline&width=' + width + '&height=' + fb_height + '&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId')
    $fb_page.attr('width', width);
    $fb_page.attr('height', fb_height);
}).trigger('resize');

window.scrollTo = function (x, y) {
    $fb_page[0].scrollTo(x, y);
}

$(document).ready(function () {
    const timeout = 100;
    let timers = {};
    $('.dropdown, .dropend').hover(function () {
        let toggle = $(this).find("> .dropdown-toggle")[0];
        clearTimeout(timers[toggle]);

        timers[toggle] = setTimeout(() => {
            new bootstrap.Dropdown(toggle).show();
            toggle.blur();
        }, timeout);
    }, function () {
        let toggle = $(this).find("> .dropdown-toggle")[0];
        clearTimeout(timers[toggle]);

        timers[toggle] = setTimeout(() => {
            new bootstrap.Dropdown(toggle).hide();
        }, timeout);
    });
});