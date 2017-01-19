/*FULL PAGE JS*/
$(function () {
    $('#fullpage').fullpage({
        anchors: ['home', 'museum', 'application' ,'contact']
    });

/*CAROUSEL*/
    $('.carousel').slick({
        infinite: true,
        variableWidth: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        draggable: false,
        arrows: false
    });
/*MODAL WINDOW*/
    // Get the modal
    var modal = document.getElementById('myModal');

// Get the button that opens the modal
    var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});