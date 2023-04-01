$(document).ready(function () {

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            let hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $("#contact-form").on("submit", function (e) {
        e.preventDefault();

        const formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            message: $("#message").val(),
        };

        $.ajax({
            url: "https://your-backend-api.com/send-email",
            type: "POST",
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function (response) {
                $("#form-message").html(
                    "<p class='text-green-500'>Your message has been sent successfully!</p>"
                );
                $("#contact-form")[0].reset();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#form-message").html(
                    "<p class='text-red-500'>An error occurred. Please try again later.</p>"
                );
                z
            },
        });
    });

    $("#hamburger").on("click", function () {
        $("#mobileMenu").toggleClass("hidden");
    });

    $
});



