$(document).ready(function () {
  $.ajax({
      url: "https://s3-us-west-2.amazonaws.com/famous-hiring/famousEbayData.json",
      type: "GET",
      success: function(data) {
          $("#item-container").html("");

        var itemSource = $("#one-item-template").html();
        var itemTemplate = Handlebars.compile(itemSource);

        data.forEach(function(item) {
          var html = itemTemplate({
              name: item.label,
              image: item.imageURL,
              // price: item.sellingStatus[0].currentPrice[0],
              sellerName: item.sellerInfo[0].sellerUserName,
              sellerRating: item.sellerInfo[0].feedbackRatingStar

          });

          $("#item-container").append(html);
        });
      },
      error: function() {
        alert("Something went wrong...");
      }
  });
});



//for modal
var popup = function() {
    $("#details").removeAttr('id');
    $("#details").fadeIn("slow");
  };