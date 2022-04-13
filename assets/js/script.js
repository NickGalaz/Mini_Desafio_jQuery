$(document).ready(function () {
    $("#btn").on("click", function () {
        $("#caja").css("background-color", "red", "margin", "50px", "padding", "50px")
        $("#caja").css("padding", "50px")
    });


    $("#clickme").on('click', function () {
        $('ul').toggle(1000);

    });


});




// $(document).ready(function () {


//     let text = $('#texto');
//     text.click(function () {
//         document.write('click sobre el texto');
//     });

//     $(function () {
//         $("#clickme").hide(function () {
//             $("#btn").animate({ left: 100 }, 'fast');
//         });
//     })

//     $(function () {
//         $("#clickme").show(function () {
//             $("#btn").animate({ left: 100 }, 'fast');
//         });
//     })

// });


// $(document).ready(function () {
//     $('ul.todos'>'li:first').css('color', 'red')
//     $('ul.todos'>'li:last').css('color', 'red')
// });