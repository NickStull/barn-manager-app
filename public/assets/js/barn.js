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
    //   $(".devour").on("click", function(event) {
    //     $.ajax("/api/owners/" + this.id, {
    //       type: "PUT"
    //     }).then(function(response){
    //       location.reload();
    //     })
    //   })

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

    $(".vaccinate").on("click", function(event) {
      let today = new Date().toISOString().slice(0, 10)
      console.log(today)
    })
})