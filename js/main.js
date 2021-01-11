$(document).ready(function(){
    var count = 0;
    var imageArray = ["./img/slide1.png", "./img/slide2.png", "./img/slide3.png"];
    $(".menu-bar").css("background-image", "url(" + imageArray[0] + ")");
    changeCircle(count);
    console.log(typeof imageArray[1]);

    function changeSlide(item){
        console.log("class: ", item.attr('class'))
        if (item.attr('class') === "arrow-left") {
            count -=1;  
            if (count < 0 || count == imageArray.length) {
                count = imageArray.length-1;          
            } 
            console.log("count: ", count);             
        } else if (item.attr('class') === "arrow-right"){
            count +=1;
            if (count < 0 || count == imageArray.length) {
                count = 0;          
            }
        }
        $(".menu-bar").css("background-image", "url(" + imageArray[count] + ")");
        console.log(count);
        changeCircle(count);       
}

    $(".arrow-left").click(function(){
        changeSlide($(this));
    })
    $(".arrow-right").click(function(){
        changeSlide($(this));
    })


    function changeCircle (count) {
        if (count == 0) {
            $('#i1').css("color", "rgb(97, 97, 97)");
            $('#i2').css("color", "white");
            $('#i3').css("color", "white");
        } else if (count == 1){
            $('#i2').css("color", "rgb(97, 97, 97)");
            $('#i1').css("color", "white");
            $('#i3').css("color", "white");
        } else{
            $('#i3').css("color", "rgb(97, 97, 97)");
            $('#i2').css("color", "white");
            $('#i1').css("color", "white");           
        }
    }

    $('#i1').click(function(){
            $(".menu-bar").css("background-image", "url(" + imageArray[0] + ")");
            $('#i1').css("color", "rgb(97, 97, 97)");
            $('#i2').css("color", "white");
            $('#i3').css("color", "white");
        })
    $('#i2').click(function(){
            $(".menu-bar").css("background-image", "url(" + imageArray[1] + ")");
            $('#i2').css("color", "rgb(97, 97, 97)");
            $('#i1').css("color", "white");
            $('#i3').css("color", "white");
        })
    $('#i3').click(function(){
            $(".menu-bar").css("background-image", "url(" + imageArray[2] + ")");
            $('#i3').css("color", "rgb(97, 97, 97)");
            $('#i2').css("color", "white");
            $('#i1').css("color", "white");
        })

        $('#search').click(function(){
            $('#nav').css("display", "none");
            $(".searchbox").css("display", "inline-block");
            $(".input").toggleClass("active-width");
        })
        $(".searchbtn").click(function(){
            $('#nav').css("display", "");
            $(".searchbox").css("display", "none");
            $(".input").removeClass("active-width");
            $(".input").val("");
            
        })
        $(".input").blur(function(){
            $('#nav').css("display", "");
            $(".searchbox").css("display", "none");
            $(".input").removeClass("active-width");
            $(".input").val("");
        });

/////////modal//////////

        $('#login').click(function(){
            let modal = $('#id01').attr('class')
            if (modal === "modal") {
                $('#id01').css("display", "block");                                
            }
        })
        
        $(window).click(function(e) {
            if (e.target.className === "modal") {
                $('#id01').css("display", "none");                                
            }
        });
        $(window).click(function(e) {
            if (e.target.className === "modal") {
                $('#id02').css("display", "none");                                
            }
        });
        
        ////////////Cahnge modal/////////////        
        
        $('#toregister').click(function(){
                $('#id01').css("display", "none");                                
                $('#id02').css("display", "block");                                
        })
        $('#tologin').click(function(){
                $('#id01').css("display", "block");                                
                $('#id02').css("display", "none");                                
        })

});