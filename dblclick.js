$(document).ready(function () {
    var lookupUrl = 'https://dictionary.cambridge.org/search/english/?q=';

    var longpressDelay = 100;
    var pressTimer;
    var isLongPress = false;

    $('body').on('mousedown touchstart', function (e) {
        isLongPress = false;
        pressTimer = setTimeout(function () {
            isLongPress = true;
            redirectToDictionary();
        }, longpressDelay);
    }).on('mouseup touchend', function (e) {
        clearTimeout(pressTimer);
        if (!isLongPress) {
            $('body').off('dblclick').dblclick(function (e) {
                redirectToDictionary();
            });
        }
    });

    function redirectToDictionary() {
        var selectedText = getSelectedText();
        if (selectedText) {
            window.location.href = lookupUrl + encodeURIComponent(selectedText);
        }
    }
});

function getSelectedText() {
    if (window.getSelection) {
        return window.getSelection().toString();
    } else if (document.getSelection) {
        return document.getSelection();
    } else if (document.selection) {
        return document.selection.createRange().text;
    }
    return '';
}
