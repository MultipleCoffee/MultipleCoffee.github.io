$(document).ready(function () {
    var lookupUrl = 'https://dictionary.cambridge.org/search/english/?q=';

    $('body').dblclick(function (e) {
        var selectedText = getSelectedText();
        if (selectedText) {
            window.location.href = lookupUrl + encodeURIComponent(selectedText);
        }
    });
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

