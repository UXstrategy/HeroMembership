/**
 * @version : 1.2
 * @date : 2021.06.17
 * @description : �ㅼ�利앷텒 留덉씠�곗씠�� 紐⑤컮�� UI/UX
 */
var KW_MOBILE = (function (kw, $) {
    kw.init = function () {
        // Global
        kw.global.init();

        // Layout
        kw.layout.init();

        // GUI Components
        kw.guiEvent.init();

        // about Forms
        kw.formEvent.init();
    }

    /**
     * Global
     */
    kw.global = {
        init: function () {
            // Element�ㅼ쓽 Active state瑜� �묐룞�섍쾶 ��
            // document.addEventListener('touchstart', function() {}, true);

            // IOS �ъ슜�� �뺣�諛⑹�
            // document.addEventListener('gesturestart', function(e) { e.preventDefault(); });

            kw.global.calendar.init();
        }
    }

    kw.global.calendar = {
        init: function () {
            var date = new Date();
            this.currentMonth = date.getMonth();
            this.currentDate = date.getDate();
            this.currentYear = date.getFullYear();

            this._setMonthCal();
            this._setDayCal();
        },
        _setMonthCal: function() {
            // $('.custom-input.calendar.month').datepicker({
            //     language: 'ko',
            //     autoClose: true,
            //     navTitles: {
            //         days: 'yyyy<span>��</span> MM ',
            //         months: 'yyyy<span>��</span>',
            //         years: 'yyyy1 - yyyy2'
            //     },
            //     view: 'months',
            //     minView: 'months',
            //     dateFormat: 'yyyy.mm',
            //     minDate: new Date(this.currentYear, this.currentMonth-60, this.currentDate),
            //     maxDate: new Date(this.currentYear, this.currentMonth-12, this.currentDate),
            //     prevHtml: '<svg><path d="M 17,9 l -7,7 l 7,7"></path></svg>',
            //     nextHtml: '<svg><path d="M 14,9 l 7,7 l -7,7"></path></svg>',
            //     onShow: function(param) {
            //         $('body').css('overflow','hidden');
            //         var isDim = $('#datepickers-container > .dimmed').length;
            //         if(isDim == 0) param.$datepicker.after('<div class="dimmed"></div>');
            //         kw.guiEvent.bodyFixed.fixed();
            //     },
            //     onHide: function() {
            //         $('body').css('overflow','');
            //         $('#datepickers-container > .dimmed').remove();
            //         kw.guiEvent.bodyFixed.scroll();
            //     },
            //     onSelect: function(fd, date, param) {
            //         $(param.el).change();
            //     }
            // });
        },
        _setDayCal: function() {
            // $('.custom-input.calendar.day').datepicker({
            //     language: 'ko',
            //     autoClose: true,
            //     navTitles: {
            //         days: 'yyyy<span>��</span>&nbsp;MM ',
            //         months: 'yyyy<span>��</span>',
            //         years: 'yyyy1 - yyyy2'
            //     },
            //     view: 'days',
            //     minView: 'days',
            //     dateFormat: 'yyyy.mm.dd',
            //     // minDate: new Date(this.currentYear, this.currentMonth, this.currentDate),
            //     maxDate: new Date(this.currentYear, this.currentMonth, this.currentDate),
            //     prevHtml: '<svg><path d="M 17,9 l -7,7 l 7,7"></path></svg>',
            //     nextHtml: '<svg><path d="M 14,9 l 7,7 l -7,7"></path></svg>',
            //     showOtherMonths: false,
            //     selectOtherMonths: false,
            //     onRenderCell: function(date, cellType) {
            //         if (cellType == 'day') {
            //             var day = date.getDay(),
            //             isSun = [0].indexOf(day) != -1,
            //             isSat = [6].indexOf(day) != -1;
    
            //             if(isSun == true) return { classes: 'fc-red' }
            //             if(isSat == true) return { classes: 'fc-blue' }
            //         }
            //     },
            //     onShow: function(param) {
            //         $('body').css('overflow','hidden');
            //         var isDim = $('#datepickers-container .dimmed').length;
            //         if(isDim <= 0) param.$datepicker.after('<div class="dimmed"></div>');
            //     },
            //     onHide: function() {
            //         $('body').css('overflow','');
            //         $('.datepickers-container > .dimmed').remove();
            //     },
            //     onSelect: function(fd, date, param) {
            //         $(param.el).change();
            //     }
            // });
        },
    }

    /**
     * Layout
     */ 
    kw.layout = {
        init: function () {
            // 紐⑤뱢諛뺤뒪 + 諛곕꼫 議곗젅
            $('.module-box').each(function() {
                if ($(this).css('display') == 'none') {
                    $(this).next('.simpleBanner').hide();
                }
            });
        }
    }

    /**
     * GUI Components
     */
    kw.guiEvent = {
        init: function () {
            //kw.guiEvent.buttons.init();
            kw.guiEvent.tabs.init();
            kw.guiEvent.accordion.init();
            kw.guiEvent.toolTip.init();
            // kw.guiEvent.notiBox.init();
            kw.guiEvent.popup.init();
            kw.guiEvent.swiper.init();
            kw.guiEvent.detailBox.init();
            kw.guiEvent.mainLoader.init();
        }
    }

    kw.guiEvent.buttons = {
        init: function() {

        }
    }

    kw.guiEvent.tabs = {
        init: function () {
            // �� 珥덇린��
            this._setDefaultTab();
            // �� 踰꾪듉 �대┃
            this._setTabClick();
        },
        _setDefaultTab() {
            $('.tab-head').each(function () {
                var setDefault = $(this).find('.tab-btn.is-selected');

                if (!setDefault.length) {
                    setDefault = $(this).find('.tab-btn')
                        .first()
                        .addClass('is-selected');
                }

                $('#' + setDefault.attr('aria-controls')).addClass('is-selected');
            });
        },
        _setTabClick() {
            $('.tab-btn').off('click').on('click', function () {
                $(this).addClass('is-selected')
                    .siblings()
                    .removeClass('is-selected');

                $('#' + $(this).attr('aria-controls'))
                    .addClass('is-selected')
                    .siblings('.tab-panel')
                    .removeClass('is-selected');

            });

        }
    }

    kw.guiEvent.accordion = {
        init: function (target) {
            if(target) this.$accordion = $(target+' .accordion');
            else this.$accordion = $('.accordion');
            // �꾩퐫�붿뼵 珥덇린��
            this._setDefaultAccordion();
            // �꾩퐫�붿뼵 �대┃
            this._setButtonClick();
        },
        _setDefaultAccordion: function() {
            this.$accordion.each(function() {
                var $foldBody = $(this).find('.fold-body');
                $(this).hasClass('is-open') ? $foldBody.slideToggle(200) : $foldBody.hide();
            });
        },
        _setButtonClick: function() {
            this.$accordion.each(function() {
                var _this = $(this);
                var $btnFold = _this.find('.btn-fold');
                var $foldBody = _this.find('.fold-body');

                $btnFold.off('click').on('click', function() {
                    if (_this.hasClass('disabled')) return false;
                    _this.toggleClass('is-open');
                    $foldBody.stop().slideToggle(200);

                    if (_this.parent().hasClass('type-close')) siblingsClose();
                });

                function siblingsClose() {
                    _this.siblings()
                    .find('.fold-body')
                    .slideUp(200, function() {
                        _this.siblings().removeClass('is-open');
                    });
                    return false;
                }
            });
        }
    }

    kw.guiEvent.toolTip = {
        init: function() {
            this._bindEvent();
        },
        _bindEvent: function() {
            var _this = this;
            $('.tooltip').off('click').on('click', function() {              
                var checkSwiper = $(this).closest('.swiper-container');  
                var dataTooltipBox = $('[data-tooltip-box = ' + dataTooltip + ']');                
                var dataTooltip = (dataTooltip != undefined) ? dataTooltipBox : checkSwiper.next('.tooltip-box');
                var target = checkSwiper.length > 0 ? dataTooltip : $(this).next('.tooltip-box');
                
                target.addClass('is-open').after('<div class="dimmed"></div>');
                kw.guiEvent.bodyFixed.fixed();
            });

            $('.tooltip-close').off('click').on('click', function() {
                $('.tooltip-box').removeClass('is-open');
                $('.tooltip-box + .dimmed').remove();
                kw.guiEvent.bodyFixed.scroll();
            });
        }
    }

    kw.guiEvent.notiBox = {
        init: function() {
            this._hideBox();
        },
        _hideBox: function() {
            $('.noti-box-close').off('click').on('click', function() {
                var notiBox = $(this).closest('.noti-box');

                notiBox.addClass('hide');
                notiBox.one('webkitTransitionEnd oTransitionEnd transitionend',
                    function() {
                        $(this).slideUp();
                    }
                );
            });
        }
    }

    kw.guiEvent.popup = {
        init: function() {
            this.body = $('body');
            // this.$dimmed = $('.dimmed');
            this._bindEvent();
        },
        _bindEvent: function() {
            var _this = this;

            //�앹뾽 �リ린 踰꾪듉
            $('.modal-close, .bottomsheet > .dimmed').off('click').on('click', function() {
                var targetId = $(this).closest('article').attr('id');
                if (targetId) _this.closePop('#' + targetId);
            });
        },
        openPop: function(el, url, callback) {
            var target = $(el);
            if (el === undefined || target.length === 0) return;

            // if (target.hasClass('popup-full')) {
            //     target.show();
            // } else if (target.hasClass('bottomsheet')) {
            //     target.show();
            // } else {
            //     target.fadeIn(200);
            // }
            if (url) {
                target.load(url, callback);
            }
            target.addClass('is-open');	
            kw.guiEvent.bodyFixed.fixed();
        },
        closePop: function(el) {
            if (el !== undefined) $(el).removeClass('is-open');
            kw.guiEvent.bodyFixed.scroll();
        }
    }

    kw.guiEvent.swiper = {
        init: function () {
            // Swiper 珥덇린��
            this.setDefaultSwiper();
            // this.runSwiper();
        },
        setDefaultSwiper: function() {
            $('.custom-swiper').each(function() {
                var boxShadow = $(this).find('.swiper-slide > .box-shadow');
                boxShadow.height(boxShadow.height());
            });

            // var _this = this;
            // var setTarget = $('.custom-swiper');

            // setTarget.each(function(idx) {
            //     var swiperNum = 'swiper' + idx;
            //     $(this).addClass(swiperNum);

            //     var autoplayCheck = $(this).hasClass('autoplay');
            //     _this.runSwiper('.' + swiperNum, autoplayCheck);
            // });
        },
        runSwiper: function(slide_target, autoplayFlag, space=10) {
            var mySwiper = new Swiper(slide_target, {
                spaceBetween: space,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: true
                },
                pagination: {
                    el: slide_target + ' .swiper-pagination'
                },
                observer: true,
                observeParents: true
            });
            
            try{
                if(!autoplayFlag) mySwiper.autoplay.stop();
            }catch(e){console.log(e);}
        }
    }
    
    kw.guiEvent.detailBox = {
        init: function() {
            this._bindEvent();
        },
        _bindEvent: function() {            
            var _this = this;
            var setTarget = $('.detail-collapse');

            setTarget.each(function() {
                var listNum = $(this).find('.data-list').length;
                var collapseBtn = $(this).siblings().find('a');

                (listNum <= 2) ? collapseBtn.hide() : $(this).height(60);

                collapseBtn.off('click').on('click', _this.toggleBtn);
            });
        },
        toggleBtn: function() {
            var target = $(this).parent().siblings('.detail-collapse');
            var curHeight = parseInt(target.height());
            var autoHeight = target.css('height', 'auto').height();

            if(curHeight !== 60) {
                target.animate({height: 60}, 'fast', 'linear');
                $(this).toggleClass('down').text('�곸꽭蹂닿린');
            } else {
                target.height(curHeight).animate({height: autoHeight}, 'fast', 'linear');
                $(this).toggleClass('down').text('�リ린');
            }
        }
    }

    kw.guiEvent.collapseBox = function(el) {
        if (el == undefined) return;

        var target = $(event.target);

        if (target.hasClass('down')) target.text('�� 蹂닿린');
        else target.text('�リ린');

        $(el).slideToggle();
        target.toggleClass('down');
    }

    kw.guiEvent.toastBox = function(el) {
        if (el == undefined) return;

        var target = $(el);

        target.fadeIn(300, function() {
            setTimeout(function() {
                target.fadeOut(300);
            }, 700);
        });
    }

    // IOS ���� Background scroll 諛⑹�
    kw.guiEvent.bodyFixed = {
        scroll: function() {   
            $('body').removeClass('fixed').css({top: 0});
            $(window).scrollTop(this.ypos);
        },
        fixed: function() {
            this.ypos = $(document).scrollTop();
            $('body').addClass('fixed').css({top: -1 * this.ypos});
        }
    }

    // Mainpage header loader
    kw.guiEvent.mainLoader = {
        init: function() {
            this.mainReloadBtn = $('.main-reload');
        },
        _floatLoader: function() {
            var floatHtml = `<div class="float-loading">Loading</div>`;
            var floatBtn = $('.float-loading');

            if(!floatBtn.length) $('.page-wrapper').append(floatHtml);            

            $(window).scroll(function() {
                var scrollTop = $(this).scrollTop();
                var floatBtn = $('.float-loading');

                if (scrollTop > 100) floatBtn.css({'top': '24px', 'opacity': 1});
                else floatBtn.css({'top': '-50px', 'opacity': 0});
            });

            this._loaderCounter();
        },
        _loaderCounter: function() {
            this.mainReloadBtn.find('span').show();

            $({val: 0}).animate({val: 99}, {
                duration: 10000,
                easing: 'linear',
                step: function() {
                    var num = Math.floor(this.val);
                    $('.main-reload i').text(num);
                },
                complete: function() {
                    var num = Math.floor(this.val);
                    $('.main-reload i').text(num);
                }
            });
        },
        start: function() {
            this.mainReloadBtn.addClass('start');
            this._floatLoader();
        },
        stop: function() {
            this.mainReloadBtn.removeClass('start');
            $('.float-loading').remove();
        }
    }

    /**
     * Form
     */
    kw.formEvent = {
        init: function () {
            kw.formEvent.inputClear.init();
            kw.formEvent.chkScrollBottom.init();
        }
    }

    kw.formEvent.inputClear = {
        init: function() {
            this._setKeyUp();
            this._setClearButton();
        },
        _setKeyUp: function() {
            var target = $('.custom-input.clear');
            var setClearBtn = `<button type="button">珥덇린��</button>`;
            target.wrap('<div class="clear-wrap"/>').after(setClearBtn);

            target.on('focus blur keyup', function() {
                var btnClear = $(this).next('button');
                $(this).val().length ? btnClear.show() : btnClear.hide();
            })
        },
        _setClearButton: function() {
            $('.clear-wrap > button').off('click').on('click', function() {
                $(this).hide().prev('input').val('');
            });
        }
    }

    kw.formEvent.chkScrollBottom = {
        init: function() {
            this.checkScroll();
        },
        checkScroll: function() {
            var targetScroll = $('.module-wrapper');
            var chkDisabledBtn = $('.chk-disabled');

            if(!chkDisabledBtn.length) return false;

            chkDisabledBtn.prop('disabled', true);

            targetScroll.scroll(function() {
                if(targetScroll.scrollTop() + targetScroll.height() > targetScroll[0].scrollHeight - 100) {
                    chkDisabledBtn.prop('disabled', false);
                }
            });
        }
    }

    /**
     * Highcharts
     */
    kw.highcharts = {
        general: {
            credits: {enabled: false},
            title: {text: null},
            subtitle: {},
            tooltip: {enabled: false},
            legend: {
                enabled: false,
                symbolWidth: 10,
                symbolHeight: 10,
                itemMarginBottom: 5,
                itemStyle: {'color': '#333333', 'font-size': 11}
            },
            exporting: {enabled: false},
            chart: {backgroundColor: null},
            plotOptions: {
                bar: {
                    borderColor: null,
                    states: {
                        hover: {enabled: false},
                        inactive: false
                    },
                },
                column: {
                    borderColor: null,
                    states: {
                        hover: {enabled: false},
                        inactive: false
                    },
                },
                series: {
                    events: {
                        legendItemClick: function(){
                            return false;
                        }
                    }
                }
            },
            lang: {
                thousandsSep: ','
            }
        },
        themes: {
            blue: {
                colors: ['#b9e6ec', '#8fd0d9', '#6dc2cd', '#3fabcb', '#3d94c0', '#3474ac', '#2a5599', '#1f3686', '#131c57', '#0c1138']
            },
            red: {
                colors: ['#fee0d2', '#ffc5aa', '#ff9b7a', '#fb6a4a', '#ef3a2d', '#cb181d', '#a50f15', '#67000c', '#500009', '#390007']
            }
        },
        types: {
            donut: {
                chart: {
                    type: 'pie',
                    margin: [0, 0, 0, 0]
                },
                plotOptions: {
                    pie: {
                        borderWidth: 0.5,
                        dataLabels: { enabled: false },
                        innerSize: '50%',
                        showInLegend: true,
                        states: {
                            hover: false
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    enabled: true,
                    align: 'right',
                    verticalAlign: 'middle',
                    itemMarginBottom: 5
                }
            },
            pie: {
                chart: {
                    type: 'pie',
                    margin: [0, 0, 0, 0]
                },
                plotOptions: {
                    pie: {
                        borderWidth: 0,
                        dataLabels: { enabled: false },
                        showInLegend: false,
                        states: {
                            hover: {enabled:false},

                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    enabled: true,
                    align: 'right',
                    verticalAlign: 'middle',
                    itemMarginBottom: 5
                }
            },
            column: {
                chart: {
                    type: 'column',
                    spacingTop: 20
                },
                plotOptions: {
                    column: {
                        groupPadding: 0.2,
                        grouping: false,
                        borderWidth: 0,
                        borderRadius: 0,
                        // borderRadiusTopLeft: 5,
                        // borderRadiusTopRight: 5,
                        pointWidth: 40,
                        dataLabels: {
                            enabled: true ,
                            verticalAlign: 'top',
                            color: '#3c3e90',
                            y: -22,
                            style: {
                                fontSize: '12px',
                                textOutline: 0
                            },
                            crop: false,//crop,overflow max媛믪씠 而щ읆怨� 寃뱀튂�� �꾩긽 諛⑹�
                            overflow: 'none'
                        },
                    }
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        style: {
                            fontSize: '12px'
                        }
                    },
                    lineWidth: 1
                },
                yAxis: {
                    allowDecimals: false,
                    gridLineWidth: 0,
                    gridLineColor: '#f5f5f5',
                    enable: false,
                    visible: false,
                    title: { text: null },
                    labels: {
                        visible: false,
                        enable: false,
                        style: { fontSize: 0, color: '#bbb' },
                        align: 'left',
                        x: 0,
                        y: -5
                    }
                }
            },
            stackedColumn: {
                chart: {
                    type: 'column',
                    spacingTop: 20
                },
                plotOptions: {
                    column: {
                        groupPadding: 0.2,
                        grouping: false,
                        borderWidth: 0,
                        pointWidth: 40
                    }
                },
                yAxis: {
                    allowDecimals: false,
                    gridLineWidth: 0,
                    gridLineColor: '#f5f5f5',
                    enable: false,
                    visible: false,
                    min: 0,
                    max: 100,
                    tickInterval: 20,
                    title: { text: '' },
                    labels: {
                        visible: false,
                        enable: false,
                        style: { fontSize: 0, color: '#bbb' },
                        align: 'left',
                        x: 0,
                        y: -5
                    }
                },
                series: {
                    stacking: 'percent',
                    states:{
                        hover: {enabled: false},
                        inactive: false
                    }
                }
            },
            bar: {
                chart: { type: 'bar' },
                xAxis: {},
                yAxis: {},
                plotOptions: {}
            },
            stackedBar: {
                chart: { type: 'bar' },
                yAxis: {
                    min: 0,
                    max: 100,
                    tickInterval: 20,
                    title: { text: '' }
                },
                plotOptions: {
                    series: {
                        stacking: 'percent',
                        states:{
                            hover: {enabled: false},
                            inactive: false
                        }
                    }
                }
            },
            halfgauge: {
                chart: { type: 'solidgauge' },
                pane: {
                    center: ['50%', '100%'],
                    size: '170%',
                    startAngle: -90,
                    endAngle: 90,
                    background: {
                        backgroundColor: '#f5f5f5',
                        innerRadius: '100%',
                        outerRadius: '75%',
                        shape: 'arc',
                        borderWidth: '0'
                    }

                },
                plotOptions: {
                    solidgauge: {
                        borderWidth: '0',
                        innerRadius: '75%',
                        radius: 100,
                        rounded: false
                    }
                },
                yAxis: {
                    min: 0,
                    max: 100,
                    lineWidth: 0,
                    tickWidth: 0,
                    minorTickInterval: null,
                    tickAmount: 2,
                    title: null,
                    labels: { enabled: false },
                    stops: [
                        [0.5, {
                            linearGradient: {
                                x1: 0,
                                x2: 0,
                                y1: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#fe74a2'],
                                [1, '#fe74a2']
                            ]
                        }],
                        [0.9, {
                            linearGradient: {
                                x1: 0,
                                x2: 1,
                                y1: 0,
                                y2: 0
                            },
                            stops: [
                                [0, '#fe74a2'],
                                [0.4, '#6673d6'],
                                [1, '#66c7fd']
                            ]
                        }]
                    ],
                }
            },
            solidgauge: {
                chart: {
                    type: 'solidgauge',
                    margin: [0, 0, 0, 0]
                },
                pane: {
                    center: ['50%', '50%'],
                    size: '100%',
                    startAngle: 0,
                    endAngle: 360,
                    background: {
                        borderColor: '#EEE',
                        borderWidth: '15',
                        innerRadius: '85%',
                        outerRadius: '85%',
                        shape: 'arc'
                    }
                },
                yAxis: {
                    min: 0,
                    max: 100,
                    lineWidth: 0,
                    tickWidth: 0,
                    minorTickInterval: null,
                    tickAmount: 2,
                    title: null,
                    labels: { enabled: false }
                },
                plotOptions: {
                    solidgauge: {
                        borderColor: '#009CE8',
                        borderWidth: '15',
                        radius: 85,
                        innerRadius: '85%',
                        outerRadius: '85%',
                        rounded: true,
                        dataLabels: {
                            y: -20,
                            borderWidth: 0,
                            useHTML: true
                        }
                    }
                }
            },
            line: {
                chart: { type: 'line' },                
                plotOptions: {
                    column: { borderRadius: 4 },
                    series: {
                        label: { enabled : false },
                        states: {
                            hover: {enabled: false},
                            inactive: false
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        style: {
                            fontSize: '10px'
                        }
                    }
                }
            },   
            spline: {
                chart: {
                    type: 'spline',
                    scrollablePlotArea: {
                        minwidth: 600,
                        scrollPositionX: 1
                    }
                },
                spline: {
                    animation: { enabled: false }
                },                    
                xAxis: {
                    title: {
                        enabled: false,
                    },
                    labels: {
                        enabled: false
                    },
                    tickWidth: 0
                },
                yAxis: {
                    title: {
                        enabled: false,
                    },
                    labels: {
                        enabled: false
                    }
                }

            },         
            area: {
                chart: { type: 'area' },
                legend: { enabled: false },
                plotOptions: {
                    column: { borderRadius: 4 },
                    series: {
                        label: { enabled : false },
                        states: {
                            hover: {enabled: false},
                            inactive: false
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        style: {
                            fontSize: '10px'
                        }
                    }
                },
                yAxis: {
                    allowDecimals: false,
                    title: { text: null },
                    labels: { visible: false },
                    gridLineWidth: 0,
                    enable:false,
                    visible: false
                }
            }
        }
    }

    /**
     * 媛쒕퀎�⑥닔
     */
    kw.domEvent = {
        init: function () {

        }

    }

    kw.init();
    return kw;
}(window.KW_MOBILE || {}, jQuery));