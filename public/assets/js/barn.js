$(document).ready(function() {
    $(".add-owner").on("submit", function(event) {
      event.preventDefault();
      let newOwner = {
        firstName: $("#ownerFirst").val().trim(),
        lastName: $("#ownerLast").val().trim(),
        email: $("#ownerEmail").val().trim(),
        password: $("#ownerPass").val().trim()
      };
      console.log("-----------------------in the create.form ------------------------");
      console.log(newOwner);
      if (!newOwner.email || !newOwner.password) {
        return;
      }
      addOwner(newOwner);
      $("#ownerEmail").val("");
      $("#ownerPass").val("");
      // $.ajax("/api/owners", {
      //   type: "POST",
      //   data: newOwner
      // }).then(function(response){
      //   location.reload();
      // });
    });

    function addOwner(owner) {
      console.log("------------------ADD OWNER-----------------");
      // $.post("/api/owners", {
      //   type: "POST",
      //   data: owner
      // }).then(function(data) {
      //   window.location.assign("/owners/" + id);
      // })
    }

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

      $.ajax("/api/horses/" + id, {
        type: "PUT",
        data: {column, today}
      }).then(function(response){
        location.reload();
      })
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

    $(".add-horse").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      
      let newHorse = {
        horseName: $("#horse-name").val().trim(),
        horseAge: $("#horse-age").val().trim(),
        horseBreed: $("#horse-breed").val().trim(),
        horseNotes: $("#horse-notes").val().trim(),
      }
      $.ajax("/api/owners/" + id, {
        type: "POST",
        data: newHorse
      }).then(function(response){
        location.reload();
      });
    });

    $(".new-owner-but").click(function() {
      console.log("clicked add")
      $("html").addClass("is-clipped");
      $("#new-owner-modal").addClass("is-active");
   });

    $("#new-horse-but").click(function() {
       $("html").addClass("is-clipped");
       $("#new-horse-modal").addClass("is-active");
    });

    $(".edit-horse-but").click(function() {
      let id = $(this).data("id");
      $("html").addClass("is-clipped");
      $("#edit-horse-" + id).addClass("is-active");
   });

    $(".edit-note-but").click(function(){
      let id = $(this).data("id");
      $("html").addClass("is-clipped");
      $("#edit-note-" + id).addClass("is-active");
    })
    
    $(".close-modal").click(function() {
       $("html").removeClass("is-clipped");
       $("#new-horse-modal").removeClass("is-active");
       $(".edit-horse-modal").removeClass("is-active");
       $("#new-owner-modal").removeClass("is-active");
       $(".edit-note-modal").removeClass("is-active");
    });

    $(".edit-horse").click(function(){
      let id = $(this).data("id");
      console.log(id);
      let editHorse = {
        horseName: $(`#edit-name-${id}`).val().trim(),
        horseAge: $(`#edit-age-${id}`).val().trim(),
        horseBreed: $(`#edit-breed-${id}`).val().trim(),
        flakesAM: $(`#edit-flakes-am-${id}`).val().trim(),
        flakesPM: $(`#edit-flakes-pm-${id}`).val().trim(),
        grainServing: $(`#edit-grain-serving-${id}`).val().trim(),
        lastDewormed: $(`#edit-dewormed-${id}`).val().trim(),
        lastVaccinated: $(`#edit-vaccination-${id}`).val().trim(),
        lastCoggins: $(`#edit-coggins-${id}`).val().trim(),
        lastFarrier: $(`#edit-farrier-${id}`).val().trim(),
        editNotes: $(`#edit-notes-${id}`).val().trim()
      }
      $.ajax("/api/edit-horses/" + id, {
        type: "PUT",
        data: editHorse
      }).then(function(response){
        location.reload();
      })
    })

    $(".edit-horse-note").click(function(){
      let id = $(this).data("id");
      let note = $(`#edit-notes-solo-${id}`).val();
      $.ajax("/api/edit-horse-note/" + id,{
        type: "PUT",
        data: {note}
      }).then(function(response){
        location.reload();
      })
    })
})