//在线用户
$(function () {
    //选项卡切换
    $(".rh_title>li").click(function () {
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        var index = $(this).index();
        var $li = $(".rh_cont>li").eq(index);
        $li.siblings().removeClass("show");
        $li.addClass("show");
    });
    //总充值
    $(".recharge").click(function () {
        $(".mask").fadeToggle(200);
        $(".rechargeList").show(200);
        // $(".commMask").remove();
        $(".commMask").addClass("commMask1");
    });
    $(".close").click(function () {
        $(".mask").fadeOut(200);
        $(".rechargeList").hide(200);
        $(".maskPages").hide(200);
        $(".commMask").removeClass("commMask1");
    });

    //总赠分
    $(".give").click(function () {
        $(".mask").fadeToggle(200);
        $(".giveList").show(200);
        $(".maskPages").show(200);;
        $(".commMask").addClass("commMask1");
    });
    $(".close").click(function () {
        $(".mask").fadeOut(200);
        $(".giveList").hide(200);
        $(".maskPages").hide(200);
        $(".commMask").removeClass("commMask1");
    });

    //总兑换
    $(".exchange").click(function () {
        $(".mask").fadeToggle(200);
        $(".exchangeList").show(200);
        $(".maskPages").show(200);;
        $(".commMask").addClass("commMask1");
    });
    $(".close").click(function () {
        $(".mask").fadeOut(200);
        $(".exchangeList").hide(200);
        $(".maskPages").hide(200);
        $(".commMask").removeClass("commMask1");
    });
});