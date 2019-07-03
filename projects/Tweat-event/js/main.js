let sweetListEl = $('.sweet-list'),
    // howManyEl = $('.how-many'),
    lolliesListEl = $('.lollies-list'),
    musicFestivalEl = $('.music-festival'),
    categoryListEl = $('.category-list'),
    filterTweatsEl = $('#filter-tweats'),
    screenLinks = $('.screen-link'),
    screens = $('.screen'),
    avEventDropdown = $('#avEventDropdown'),
    submitBtn = $('#submitBtn'),
    eventListEl = $('.event-list'),
    noOfAttendeesInput = $('#no-of-attendees'),
    numberOfPeople = $('#number-of-people'),
    firstName = $('#first-name'),
    lastName = $('#last-name'),
    emailAddress = $('#email-address'),
    // personNameEl = $('#person-first-el'),
    // personLastEl = $('#person-last-el'),
    // personEmailEl = $("#person-email-el"),
    // personPhoneNumberEl = $("#person-phone-number-el"),
    phoneNumber = $('#phone-number'),
    quoteButton = $('.quote-button'),
    displayCostEl = $('.display-cost');


let treatData,
    lollyData,
    eventData,
    chosenTreat,
    screenId = '0';

let event = {
    name: '',
    noOfAttendees: 0
};
let users = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
};



function init() {
    $.getJSON('json/treats.json', function (treats) {
        treatData = treats;
        displayTreats(treatData.treats);

    });
    $.getJSON('/json/categories.json', function (categories) {
        categoryData = categories;
        displayCategories(categoryData.categories);

    });
    firstName.on('change', function () {
        users.firstName = $(this).val()
        console.log(firstName.val())
    });
    lastName.on('change', function () {
        users.lastName = $(this).val()
        console.log(lastName.val())
    });
    emailAddress.on('change', function () {
        users.email = $(this).val()
        console.log(emailAddress.val())
    });
    phoneNumber.on('change', function () {
        users.phoneNumber = $(this).val()
        console.log(phoneNumber.val())
    });
    numberOfPeople.on('change', function () {
        event.noOfAttendees = $(this).val()
    });
    avEventDropdown.on('change', function () {
        event.name = $(this).val()
    });
    submitBtn.on('click', function () {
        changeScreen(2)
        displayUsersetails();
        displayFinalPrice()

    });



};

function displayUsersetails() {
    let eventNameEl = $('#event-name-el');
    eventNameEl.html(event.name);
    let howManyEl = $('.how-many');
    howManyEl.html(event.noOfAttendees);
    let personNameEl = $('#person-first-el');
    personNameEl.html(users.firstName);
    let personLastEl = $('#person-last-el');
    personLastEl.html(users.lastName);
    let personEmailEl = $("#person-email-el");
    personEmailEl.html(users.email);
    let personPhoneNumberEl = $("#person-phone-number-el");
    personPhoneNumberEl.html(users.phoneNumber);
    displayFinalPrice()

}
function displayFinalPrice() {
    let adminCost = 1;
    let finalQuote = adminCost + (chosenTreat.price * event.noOfAttendees);
    let displayCostEl = $('#display-cost');

    displayCostEl.html(finalQuote);


}

function getTreatsItemHTML(treat) {

    return `<li data-id="${treat.id}" class="treatItem">
        <a href="#" style="background-image: url(${treat.imageUrl});"></a>
        <div class="details">
          <h3>${treat.title}</h3>
          <p class="image-author">$ ${treat.price}0</p>
        </div>
      </li>`;

}
function displayTreats(treats) {
    let htmlString = '';
    $.each(treats, function (i, treat) {
        htmlString = htmlString + getTreatsItemHTML(treat)
    });
    sweetListEl.html(htmlString);
    let treatItemEls = $('.treatItem')
    treatItemEls.on('click', function () {
        let treatId = $(this).data('id');
        chosenTreat = treatData.treats[treatId]
        // change screen
        changeScreen(1)
    });
};

// data 2

function lolly() {
    $.getJSON('json/lollies.json', function (lollies) {
        lollyData = lollies;
        displayLolly(lollyData.lollies);
    });
};

// Categories for the change of button

function getCategoryItemHTML(category) {
    return `<li data-categoryid="${category.id}" class= "category-item">
   <button>${category.title}</button>
    </li>`;
};


function displayCategories(categories) {
    let htmlString = '';
    $.each(categories, function (i, category) {
        htmlString = htmlString + getCategoryItemHTML(category)
    });
    categoryListEl.html(htmlString);
    let categoryItems = $('.category-item');
    categoryItems.on('click', function () {
        let categoryId = $(this).data('categoryid');
        let filteredTreats = filterByCategory(treatData.treats, categoryId);
        displayTreats(filteredTreats);
    });

};

function filterByCategory(treats, categoryId) {
    return treats.filter(function (treat) {
        return treat.categoryId == categoryId;

    });
};

// changeScreen

function changeScreen(index) {

    screenLinks.removeClass('active');

    screenLinks.eq(index).addClass('active');

    screens.removeClass('active');
    $('#' + index).addClass('active');

};

// todo Events page


$.getJSON('/json/events.json', function (events) {
    eventData = events;
    displayEvents(eventData.events);

});




function displayEvents(events) {
    htmlString = '';
    $.each(events, function (i, event) {
        htmlString = htmlString + `<option value="${event.title}">${event.title}</option>`
    });
    avEventDropdown.html(htmlString);
};

// Output

function displayFinalCost() {
    let displayCostNameEL = $('#displayCost');
    $.getJSON('/json/finalCost.json', function (finalCost) {
        finalCostData = finalCost;
        let = costing = finalCostData.finalCost[0];
        displayCostNameEL.html(costing.displayCost);
    });
};
displayFinalCost();

function getEventItemHTML(event) {
    return `<li data-categoryid="${event.id}" class= "event-item">
   <span>${event.title}</span>
    </li>`;
};

init();


