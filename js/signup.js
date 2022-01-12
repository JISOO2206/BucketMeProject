
$(function() {
    $(".list-area").on("click", function() {
        if(!$(".list-area:eq(" + $(this).index() + ")").data("checked")) {
            $(".list-area:eq(" + $(this).index() + ")").css({background: "azure", color: "rgb(26, 29, 41)"});
            $(".list-area:eq(" + $(this).index() + ")").data("checked", true);
        }
        else if($(".list-area:eq(" + $(this).index() + ")").data("checked")) {
            $(".list-area:eq(" + $(this).index() + ")").css({background: "rgb(26, 29, 41)", color: "azure"});
            $(".list-area:eq(" + $(this).index() + ")").data("checked", false);
        }
    });

    $(".list-area").on("mouseover", function() {
        $(".list-area:eq(" + $(this).index() + ")").css({background: "azure", color: "rgb(26, 29, 41)"});
    });

    $(".list-area").on("mouseout", function() {
        if(!$(".list-area:eq(" + $(this).index() + ")").data("checked")) {
            $(".list-area:eq(" + $(this).index() + ")").css({background: "rgb(26, 29, 41)", color: "azure"});
        }
    });
});


















