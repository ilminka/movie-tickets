function Ticket(title, age, time, price) {
  this.title = title;
  this.age = age;
  this.time = time;
  this.price = price;
}

Ticket.prototype.movieTicket = function() {
  //return this.title + " " + this.age + " " + this.time + " " + this.price;
  if (this.age > 18) {
    price = 12;
  } else if (this.age < 18) {
    price = 8
  }
  return price;
}




$(document).ready(function() {
  $("form#movie-times").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var age = parseInt($("input#new-age").val());
    var time = $("#time").val();
    var price = 0;

    var myTicket = new Ticket (title, age, time, price);
      $(".first-title").append(myTicket.title);
      $(".first-age").append(myTicket.age);
      $(".first-time").append(myTicket.time);
      $(".first-price").append(myTicket.movieTicket(price));
      console.log(myTicket.age);
      $(".show-results").show();
  });
});
