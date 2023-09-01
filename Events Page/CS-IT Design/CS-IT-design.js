$(document).ready(function() {
  var b = $("#button");
  b.text("Read More");
  b.click(function() {
    var text = b.text();
    b.text(text === "Read Less" ? "Read More" : "Read Less");
  });

  var w = $("#wrapper");
  var l = $("#description-of-event");
  
  w.height(0);
  w.addClass('close');

  b.click(function() {
  
    if(w.hasClass('close')) {
      w.removeClass('close');
      w.height(l.outerHeight(true));
    } else {
      w.addClass('close');
      w.height(0);
    }
  
  });

});