$(document).ready(function() {
    $('.email-protect').each(function() {
        var $el = $(this);
        var address = atob($el.data('e'));
        var label = $el.data('show-address') ? address : $el.text();
        $el.replaceWith($('<a>').attr('href', 'mailto:' + address).text(label));
    });
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
});
