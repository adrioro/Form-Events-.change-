$("select")
    .change(function () {
        var str = "";
        $("select option:selected").each(function () {
            str += $(this).text() + " is the current chosen option.";
        });
        $("div").text(str);
    })
    .change();