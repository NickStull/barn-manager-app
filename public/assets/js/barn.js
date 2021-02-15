$(function() {
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      let newOwner = {
        firstName: $("#owner-first").val().trim(),
        lastName: $("#owner-last").val().trim()
      }
      $.ajax("/api/owners", {
        type: "POST",
        data: newOwner
      }).then(function(response){
        location.reload();
      });
    });

    $(".select-owner").on("click", function(event) {
      var id = $(this).data("id");
      window.location.assign("/owners/" + id);
    });
  
    $(".delete-owner").on("click", function(event) {
        var id = $(this).data("id");
        $.ajax("/api/owners/" + id, {
          type: "DELETE"
        }).then(function(response){
          location.reload();
        });
    });

    $(".setDate").on("click", function(event) {
      let today = new Date().toISOString().slice(0, 10);
      let id = $(this).data("id");
      let column = $(this).data("update");
      console.log(`Updating ${column} to ${today} for horse id: ${id}`);
    })

        /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    $(".owner-dropdown").on("click", function() {
      $("#myDropdown").toggleClass("show");
    });
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    };

    $(".create-horse").on("submit", function(event) {
      event.preventDefault();
      let newHorse = {
        horseName: $("#horse-name").val().trim(),
        horseAge: $("#horse-age").val().trim(),
        horseBreed: $("#horse-breed").val().trim()
        // Owner.id???
      }
      $.ajax("/api/horse" + id, {
        type: "POST",
        data: newHorse
      }).then(function(response){
        location.reload();
      });
    });
})

