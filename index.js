$("select")
    .change(function () {
        var str = "";
        $("select option:selected").each(function () {
            str += $(this).text() + " is the current chosen option.";
        });
        $("div").text(str);
    })
    .change();

$('textarea').keypress(function (a) {
    //'keyCode' is the right code.
    var keycode = (a.keyCode ? a.keyCode : a.which); //'which' tells us whay key is the current entered key.
    alert(keycode);
});