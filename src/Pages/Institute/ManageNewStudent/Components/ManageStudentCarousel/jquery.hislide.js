import jQuery from "jquery";
(function($) {
    var slide = function(ele,options) {
        var $ele = $(ele);
        var setting = {
            speed: 300,
            interval: 5000,
            
        };
        $.extend(true, setting, options);
        let istWidth, secWidth, thirdWidth, fourthWidth, fifthWidth,istHeight, secHeight, thirdHeight, fourthHeight, fifthHeight;
        var states;
            if (window.screen.width < 1070) {
            istWidth = 120; secWidth = 160; thirdWidth = 214; fourthWidth = 160; fifthWidth = 120; istHeight = 280; secHeight = 328; thirdHeight = 418; fourthHeight = 328; fifthHeight = 280;
            
            states = [
                { $zIndex: 2, width: secWidth, height: secHeight, top: 35, left: 0, $opacity: 0.7 },
                { $zIndex: 3, width: thirdWidth, height: thirdHeight, top: 0, left: 140, $opacity: 1 },
                { $zIndex: 2, width: fourthWidth, height: fourthHeight, top: 35, left: 345, $opacity: 0.7 },
            ];
        } else {
            istWidth = 220; secWidth = 260; thirdWidth = 314; fourthWidth = 260; fifthWidth = 220; istHeight = 390; secHeight = 438; thirdHeight = 518; fourthHeight = 438; fifthHeight = 390;
            
            states = [
                // { $zIndex: 1, width: 190, height: 418, top: 35, left: 110, $opacity: 0.7 },
                // { $zIndex: 2, width: 230, height: 418, top: 35, left: 110, $opacity: 0.7 },
                // { $zIndex: 3, width: 284, height: 488, top: 0, left: 263, $opacity: 1 },
                // { $zIndex: 2, width: 230, height: 418, top: 35, left: 470, $opacity: 0.7 },
                // { $zIndex: 1, width: 190, height: 418, top: 35, left: 470, $opacity: 0.7 },
    
                { $zIndex: 1, width: istWidth, height: istHeight, top: 59, left: 0, $opacity: 0.4 },
                { $zIndex: 2, width: secWidth, height: secHeight, top: 35, left: 110, $opacity: 0.7 },
                { $zIndex: 3, width: thirdWidth, height: thirdHeight, top: 0, left: 263, $opacity: 1 },
                { $zIndex: 2, width: fourthWidth, height: fourthHeight, top: 35, left: 470, $opacity: 0.7 },
                { $zIndex: 1, width: fifthWidth, height: fifthHeight, top: 59, left: 620, $opacity: 0.4 },
            ];
        }


        var $lis = $ele.find('li');
        var timer = null;

        // 事件
        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states?.push(states?.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

        function move() {
            $lis.each(function(index, element) {
                var state = states?.[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

        function next() {
            states?.unshift(states?.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }
})(jQuery);
