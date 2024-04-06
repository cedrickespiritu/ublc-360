$(document).ready(function() {
    $('#toggle').click(function() {
      $('.sidebar').toggleClass('sidebar-hidden');
    });

    $('#getStartedBtn').click(function() {
      window.location.href = "first-survey.html";
    });
    $('.ub-small-logo').css('cursor', 'pointer').click(function() {
      window.location.href = "index.html";
    });
    $('.sidebar-items').click(function() {
      window.location.href = "index.html";
    });

    // first-survey functions
    $(document).ready(function() {
      $('#toggle').click(function() {
      $('.sidebar').toggleClass('sidebar-hidden');
    });
      $('head').append('<style>.selected { background: #862633 !important; color: white !important; }</style>');
  
      $('.survey-options li').click(function() {
        $('.survey-options li').removeClass('selected');
        $(this).addClass('selected');
      });
    });
  });
  // third survey function
  $(document).ready(function() {
    $('#goToFacilityCarousel').click(function() {
      window.location.href = "../UB360-Website/facility-tour/facility-carousel.html";
    });
  });

  