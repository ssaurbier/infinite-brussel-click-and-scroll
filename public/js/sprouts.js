// initial challenge

var page = 2;

// $(function() {
//
//   $(".more-sprouts").on("click", function() {
//     event.preventDefault();
//
//   var request = $.ajax({
//                 type: 'get',
//                 // dataType: 'json',
//                 // data: comes from URL? already exists... but how am i querying it?
//                 url: '/tweets.json?page=' + page,
//                 success: function(tweets) {
//                   page++;
//
//       tweets.forEach(function(tweets) {
//         $('.tweets').append('<li class="tweet"><div class="body">'
//         + tweets.text + '</div><div class="user">' + tweets.username
//         + '</div></li>');
//
//       });
//     }
//   });
// });
// });

//############################################################
// Infinite scroll

$(window).scroll(function() {
   if($(window).scrollTop() + (window).innerHeight == $(document).height()) {
     $.get("/tweets.json?page=" + page, function(tweets) {
       if ( tweets.length > 0 ){
         page++;
       }
       tweets.forEach(function(tweets) {
         $('.tweets').append('<li class="tweet"><div class="body">'
         + tweets.text + '</div><div class="user">' + tweets.username
         + '</div></li>');
       });
     });
   };
 });




// var link = $('.more-sprouts');
// var ul = $('.tweets');
// var nextPage = 2;
// $(window).scroll(function() {
//    if($(window).scrollTop() + window.innerHeight == $(document).height()) {
//      $.get("/tweets.json?page=" + nextPage, function(tweets) {
//        if ( tweets.length > 0 ){
//          nextPage ++;
//        }
//        for (var i = 0; i < tweets.length; i++){
//          $('ul.tweets').append( "<li class='tweet'><div class='body'>" + tweets[i]["text"] + "</div><div class='user'>" + tweets[i]["username"] + "</div></li>" );
//        }
//      });
//    }
// });
