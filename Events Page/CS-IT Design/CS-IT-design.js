$('input').on('change', function() {
  $('body').toggleClass('blue');
});

// Wait for the document to be ready
$(document).ready(function() {
  // Read More/Less button functionality
  var b = $("#button");
  b.text("Read More");
  b.click(function() {
    var text = b.text();
    b.text(text === "Read Less" ? "Read More" : "Read Less");
  });

  // Description wrapper and initial state
  var w = $("#wrapper");
  var l = $("#description-of-event-5");
  w.height(0);
  w.addClass('close');

  // Toggle description visibility
  b.click(function() {
    if (w.hasClass('close')) {
      w.removeClass('close');
      w.height(l.outerHeight(true));
    } else {
      w.addClass('close');
      w.height(0);
    }
  });

  // Get all radio buttons and their corresponding description elements
  const radioButtons = document.querySelectorAll('input[name="slider"]');
  const songInfoElements = document.querySelectorAll('.song-info');
  const descriptionElements = document.querySelectorAll('.description-of-event');

  // Add a change event listener to each radio button
radioButtons.forEach((radioButton, index) => {
  radioButton.addEventListener('change', () => {
    // Hide all song info elements
    songInfoElements.forEach((songInfoElement) => {
      songInfoElement.style.display = 'none';
    });

    // Show the selected song info element
    songInfoElements[index].style.display = 'block';
  });
});

  // Add a change event listener to each radio button
  radioButtons.forEach((radioButton, index) => {
    radioButton.addEventListener('change', () => {
      // Hide all description elements
      descriptionElements.forEach((descriptionElement) => {
        descriptionElement.style.display = 'none';
      });

      // Show the selected description element
      descriptionElements[index].style.display = 'block';
    });
  });
});
