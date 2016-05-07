var myPhoto = ["../images/docks.jpg","../images/train.jpg","../images/2.jpg","../images/background2.jpg","../images/baldy.jpg","../images/7.jpg","../images/6.jpg","../images/ship.jpg",];

var container = document.getElementById("table_container");

var table = document.createElement("table");
document.getElementById("table_container").appendChild(table);

for(var i=0, len = myPhoto.length; i < len; ++i) {
  var row = document.createElement("tr"),
  photo = document.createElement("td"),
  img = new Image();
  img.src = myPhoto[i];
  photo.appendChild(img);
  row.appendChild(photo);
  table.appendChild(row);
}

// ****************scroll to top button*****************


$(window).scroll(function() {
   if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
       $('#return-to-top').fadeIn(200);    // Fade in the arrow
   } else {
       $('#return-to-top').fadeOut(200);   // Else fade out the arrow
   }
});

$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

