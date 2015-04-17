// D E F I N E   T H E   F U N C T I O N

// выпадающее меню верхнее
function DropMenuPad () {

    $(".drop_menu").each(function(){  //drop_menu помечает кликабельный элемент и в сабменю тоже

        var DropBlk = $(this).siblings(".drop_blk");// drop_blk помечает сам открывающийся список
        var MenuParent = $(this).parent();
        var MenuParentParent = $(this).parent().parent();
      
        
        $(this).off("click").on("click",function(){

            if( DropBlk.is('.active')){
                
                DropBlk.removeClass('active');
                MenuParent.removeClass('active1');
                MenuParentParent.removeClass('active2');
                setTimeout(function() {
                    DropBlk.removeClass('active1');
                }, 600);

             } else {
                
                if( DropBlk.is('.subnav_list')){ 
                    
                    if( $(".subnav_list").is('.active')){ 
                    } else {
                        DropBlk.addClass('active');
                        MenuParent.addClass('active1');
                        MenuParentParent.addClass('active2');
                    }    
                        
                } else {
                    
                    MenuParent.addClass('active1');
                    DropBlk.addClass('active1');
                    setTimeout(function() {
                        DropBlk.addClass('active');
                    }, 800);
                }    
             }
        });

        // при клике на пункт сабменю - все закрываем
        $('.subnav_it').on("click",function(){
              
            DropBlk.removeClass('active');
            DropBlk.removeClass('active1');
            MenuParent.removeClass('active1');
            MenuParentParent.removeClass('active2');
            console.log("click-subnav_it");
           

        });
         
       
    });

}

// выпадающее меню - очистка обработчиков кликов

function DropMenuPadClean () {
    $(".drop_menu").each(function(){
        $(this).unbind('click');
        $('.subnav_it').unbind('click');
    });

    
}


//выпадающее  меню поезда на телефоне
function DropMenuTrain () {

    $("#down_button").on("click",function(){

        var DropButton = $(this);
        var DropList = $(this).siblings(".left_options");
        var Menu = $(this).parent().parent();

        if(DropList.is('.active')){
            DropList.removeClass('active');
            Menu.removeClass('active');
            //DropList.slideUp();
        } else {
            DropList.addClass('active');
            Menu.addClass('active');
            //DropList.slideDown();


            $(".shop_left_menu").on("click",function(){

                if($(this).is('.active')){
                    //$(this).removeClass('active');

                } else {
                    $(".shop_left_menu").removeClass('active');
                    $(this).addClass('active');
                    var Title = $(this).html();
                    $('.in-menu_blk').find('span').html(Title);
                    
                    Menu.removeClass('active');
                    DropList.removeClass('active');
                }
            });
        }

    });

}

//выпадающее  меню в футтере
function DropMenuFoot () {

    $("#foot_menu_button").on("click",function(){

        var DropButton = $(this);
        var DropList = $(this).siblings(".foot_menu_list");
        var MenuLine = $(this).parent();

        if(DropList.is('.active')){
            DropList.removeClass('active');
            MenuLine.removeClass('active');
           
        } else {
            DropList.addClass('active');
            MenuLine.addClass('active');
           
            $(".foot_menu_list > a").on("click",function(){
                DropList.removeClass('active');
                MenuLine.removeClass('active');
            });
        }

    });

}









// простой селект

function SelectSimple () {

    $('.select').find('a').each(function(){

        $(this).click(function(){

            var dropBlock = $(this).parent().find('ul');/* Заносим выпадающий список в переменную */

            var CartSlct = $('#cart_form').find('.select_input').find('.slct1');/*карт дроб меню*/
            var CartDropBlock = $('#cart_form').find('.select_input').find('.drop_inp');/*карт дроб блок*/

            /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
            if( dropBlock.is(':hidden') ) {

                if( CartDropBlock.is(':hidden') ) {/* проверяем закрыт ли карт дроб блок*/
                } else {
                CartDropBlock.slideUp();
                CartSlct.removeClass('active');    
                }


                dropBlock.slideDown();
                $(this).addClass('active');/* Выделяем ссылку открывающую select */

                /* Работаем с событием клика по элементам выпадающего списка */
               // $('.drop').find('li').click(function(){
                dropBlock.find('li').click(function(){

                    var selectResult = $(this).html();/* Заносим в переменную HTML код элемента списка по которому кликнули */
                    $(this).parent().parent().find('input').val(selectResult); /* Находим наш скрытый инпут и передаем в него значение из переменной selectResult */
                    $(this).parent().parent().find('a').removeClass('active').html(selectResult);/* Передаем значение переменной sectResult в ссылку которая открывает наш выпадающий список и удаляем активность */
                    dropBlock.slideUp();/* Скрываем выпадающий блок */
                });
            /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
            } else {
                $(this).removeClass('active');
                dropBlock.slideUp();
            }
            /* Предотвращаем обычное поведение ссылки при клике */
            return false;
        });

    });

}

// инпут - селект

function SelectAndInput () {

    $('.select_input').find('.slct1').each(function(){

        $(this).click(function(){

            var Slct = $(this);
            var Input = $(this).parent().find('input');    
            var dropBlock = $(this).parent().find('ul');/* Заносим выпадающий список в переменную */

            var CarrencyDrop = $('#currency_form').find('.select').find('.drop');
            var CarrencySlct = $('#currency_form').find('.select').find('.slct');

            /* Делаем проверку: Если выпадающий блок скрыт*/
            if( dropBlock.is(':hidden') ) {

                if( CarrencyDrop.is(':hidden') ) {  /* закрываем карренси меню если открыто*/
                 } else {   
                 CarrencyDrop.slideUp();
                 CarrencySlct.removeClass('active');   
                }

                dropBlock.slideDown(); /*  делаем  видимым выпад блок*/
                
                Slct.addClass('active');/* Выделяем ссылку открывающую select */

                /* Работаем с событием клика по элементам выпадающего списка */
               // $('.drop').find('li').click(function(){
                dropBlock.find('li').click(function(){

                    var selectResult = $(this).html();/* Заносим в переменную HTML код элемента списка по которому кликнули */
                    Input.val(selectResult); /* передаем в инпут значение из переменной selectResult */
                    Slct.removeClass('active');/* удаляем активность */
                    dropBlock.slideUp();/* Скрываем выпадающий блок */
                    
                });
            /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
            } else {
                Slct.removeClass('active');
                dropBlock.slideUp();
            }
            /* Предотвращаем обычное поведение ссылки при клике */
            return false;
        });


    });

}

//расширение строки поиска
function SerchExpand () {

    $('#search_form').find('.search').click(function(){

        var Search = $(this);
        var Tools = $(this).parent().parent();
        var SubmitSearch = $(this).parent().find('.submit_search');

        if($('#search_inp').val() == ''){
        //if($('#search_inp').keyup()){ 
            if(Tools.is('.active')){
                Tools.removeClass('active');
            } else {
                Tools.addClass('active');
            }

        } else {
            
           
            Tools.addClass('active1');
            Tools.removeClass('active');
        }    
           // $('#search_inp').unbind('keyup');
    });
}




//Function to the css rule
// width_monitor  - специальный блок у которого разные свойства выставлены для разных вьюпортов

function CheckSizeStart(){
    
    if ($(".width_monitor").css("float") == "left" ){
        console.log("FlagPad = 1");
        DropMenuPad();
         FlagPad = 1;// флаг вьюпорта Pad (до 768) 1-обозначает Pad, 0-  вьюпорт DecTop)

    } else {
        console.log("FlagPad = 0");
        DropMenuPadClean();
        FlagPad = 0; 
     }
//проверка телефона
     if ($(".phone_monitor").css("float") == "left" ){
        console.log("FlagPhone = 1");
        //DropMenuPad();
         FlagPhone = 1;// флаг вьюпорта Pad (до 768) 1-обозначает Pad, 0-  вьюпорт DecTop)

    } else {
        console.log("FlagPhone = 0");
        //DropMenuPadClean();
        FlagPhone = 0; 
     }

}

function CheckSize(){

    if ($(".width_monitor").css("float") == "left" ){
        
        if (FlagPad == 1 ){
            } else {
               console.log("переехали на pad FlagPad = 1 "); 
               DropMenuPad();
               FlagPad = 1;
             }

    } else {
 
        if (FlagPad == 0 ){
            } else {
               console.log("переехали на DecTop FlagPad = 0 "); 
               DropMenuPadClean();
               FlagPad = 0;
             }

     }

}

function CheckSizePhone(){

    if ($(".phone_monitor").css("float") == "left" ){
        
        if (FlagPhone == 1 ){
            } else {
               console.log("переехали на Phone FlagPhone = 1 "); 
               window.location.reload ();
               FlagPhone = 1;
             }

    } else {
 
        if (FlagPhone == 0 ){
            } else {
               console.log("переехали на Dec или pad FlagPhone = 0 "); 
               window.location.reload ();
               FlagPhone = 0;
             }

     }





}






// C A L L   T H E   F U N C T I O N


$(document).ready(function () {







    SerchExpand ();
    SelectSimple();
    SelectAndInput();
    var FlagPad = 3;// флаг вьюпорта Pad (до 768) 1-обозначает Pad, 0-  вьюпорт DecTop
    var FlagPhone = 3;//Телефон 1 - остальное 0
    CheckSizeStart();
    
    $(window).resize(function(){
      console.log('Размеры окна браузера изменены.');
      CheckSize();
      CheckSizePhone();
    });
    

    $(window).on('resizestart', function () {
        console.log('resize started!');
        $('.nav_list').addClass('none');
        $('.subnav_list').addClass('none');
    });
    $(window).on('resizestop', 300, function () {
        console.log('resize resizestop!');

        setTimeout(function() {
            $('.nav_list').removeClass('none');
        }, 600);
        setTimeout(function() {
            $('.subnav_list').removeClass('none');
        }, 600);

    });

    $('#ca-container').contentcarousel({
        // speed for the sliding animation
        sliderSpeed     : 700,
        // easing for the sliding animation
        sliderEasing    : 'easeOutExpo',
        // speed for the item animation (open / close)
        itemSpeed       : 700,
        // easing for the item animation (open / close)
        itemEasing      : 'easeOutExpo',
        // number of items to scroll at a time
        scroll          : 1 
    });

    DropMenuTrain();
    DropMenuFoot ();


});






