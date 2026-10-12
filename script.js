// 1. Mobile menu toggle
var menuBtn = document.getElementById("menuBtn");
var menu = document.getElementById("menu");

menuBtn.onclick = function () {
  menu.classList.toggle("show");
};

// 2. Filter destination cards by category
function filterCards(type) {
  var cards = document.querySelectorAll("#destinations .card");

  for (var i = 0; i < cards.length; i++) {
    if (type === "all" || cards[i].getAttribute("data-type") === type) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}

// 3. Search destination from the hero dropdown
function searchDestination() {
  var chosen = document.getElementById("searchBox").value;
  var cards = document.querySelectorAll("#destinations .card");

  for (var i = 0; i < cards.length; i++) {
    if (chosen === "all" || cards[i].getAttribute("data-name") === chosen) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }

  document.getElementById("destinations").scrollIntoView();
}

// 4. Calculate package totals based on number of travellers
function updateTotals() {
  var travellers = Number(document.getElementById("travellers").value);

  if (travellers < 1) {
    travellers = 1;
  }

  var prices = document.querySelectorAll(".price");
  var totals = document.querySelectorAll(".totalAmount");

  for (var i = 0; i < prices.length; i++) {
    var total = Number(prices[i].innerText) * travellers;
    totals[i].innerText = total;
  }
}

updateTotals(); // show totals when page loads

// 5. Book Now button fills the form and scrolls to it
function bookNow(place) {
  document.getElementById("destination").value = place;
  document.getElementById("contact").scrollIntoView();
}

// 6. Form validation
function checkForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var valid = true;

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("success").innerText = "";

  if (name.length < 2) {
    document.getElementById("nameError").innerText = "Please enter your name.";
    valid = false;
  }

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    document.getElementById("emailError").innerText = "Please enter a valid email.";
    valid = false;
  }

  if (valid) {
    document.getElementById("success").innerText =
      "Thank you, " + name + "! We will contact you soon.";
    document.getElementById("form").reset();
  }

  return false; // stop the page from reloading
}
