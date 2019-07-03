let accommodationListEl = $('.accommodation-list'),
    submitBtn = $('#submitBtn'),
    cityTown = $('#city-town'),
    screenLinks = $(".screen-link"),
    screens = $(".screen"),
    categoryListEl = $('.category-list'),
    backBtn = $('#back-btn');



let accommodateData,
    chosenAccommodation;

function init() {
    $.getJSON('json/accommodations.json', function (accommodations) {
        accommodateData = accommodations;
        displayAccommodations(accommodateData.accommodations);
        submitBtn.on('click', function () {

            let title = cityTown.val();
            let filteredAccommodations = filterByTitle(accommodateData.accommodations, title);
            displayAccommodations(filteredAccommodations);
        });

        $.getJSON('/json/categories.json', function (categories) {
            let categoryData = categories;
            displayCategories(categoryData.categories);

        });


    });
    backBtn.on('click', function () {
        screens.removeClass('active');
        screens.eq(0).addClass('active');
    });

}

function getAccommodationsItemHTML(accommodate) {

    return `<div data-id="${accommodate.id}" class="team-class-1">
    <img class="stay" src="${accommodate.image}" width="100%">
    <h2>${accommodate.title}</h2>
    <h3>${accommodate.type}</h3>
    <h4>${accommodate.price}</h4> 
    <h4>${accommodate.howMany}</h4>
    <h4>${accommodate.meals}</h4>
    <h4>${accommodate.starRate}</h4>
    <button>View Deal</button>
</div>`
}

$(function () {
    var availableTags = [
        "Dunedin",
        "Christchurch",
        "Queenstown",
        "Auckland",
        "Rotorua"
    ];
    $("#city-town").autocomplete({
        source: availableTags
    });
});

function displayAccommodations(accommodations) {
    let htmlString = '';
    $.each(accommodations, function (i, accommodate) {
        htmlString = htmlString + getAccommodationsItemHTML(accommodate)
    });
    accommodationListEl.html(htmlString);
    let accommodationItems = $('.team-class-1');
    accommodationItems.on('click', function () {
        let accommodationId = $(this).data('id');
        chosenAccommodation = accommodateData.accommodations[accommodationId];

        changeScreen(1);

        let accommodationLargeImageEl = $('#accommodation-imageLargeUrl');
        accommodationLargeImageEl.attr('src', chosenAccommodation.imageLarge);
        let speciaLinkEl = $('#accommodation-imageUrl');
        speciaLinkEl.attr('href', chosenAccommodation.imageUrl);

        let regionEl1 = $('#accommodation-region-1');
        regionEl1.html(chosenAccommodation.region1);
        let regionEl = $('#accommodation-region');
        regionEl.html(chosenAccommodation.region);
        let title2El = $('#accommodation-title-2');
        title2El.html(chosenAccommodation.title2);
        let information1El = $('#accommodation-information-1');
        information1El.html(chosenAccommodation.information1);
        let informationEl = $('#accommodation-information');
        informationEl.html(chosenAccommodation.information);
        let streetNameEl = $('#accommodation-streetName');
        streetNameEl.html(chosenAccommodation.streetName);
        let descriptionEl = $('#accommodation-description');
        descriptionEl.html(chosenAccommodation.description);
        let addressEl = $('#accommodation-address');
        addressEl.html(chosenAccommodation.address);
        let accommodationEl = $('#accommodation-title');
        accommodationEl.html(chosenAccommodation.title);
        let accommodationTypeEl = $('#accommodation-type');
        accommodationTypeEl.html(chosenAccommodation.type);
        let accommodationPriceEl = $('#accommodation-price');
        accommodationPriceEl.html(chosenAccommodation.price);
        let accommodationHowManyEl = $('#accommodation-howMany');
        accommodationHowManyEl.html(chosenAccommodation.howMany);
        let accommodationMealsEl = $('#accommodation-meals');
        accommodationMealsEl.html(chosenAccommodation.meals);
        let accommodationStarRateEl = $('#accommodation-starRate');
        accommodationStarRateEl.html(chosenAccommodation.starRate);
    });
}


function filterByTitle(accommodate, location) {
    let filteredItems = accommodate.filter(function (accommodate) {
        return accommodate.location.toLowerCase().includes(location.toLowerCase());
    });
    return filteredItems;
}



function getCategoryItemHTML(category) {
    return `<li data-categoryid="${category.id}" class= "category-item">
   <a>${category.title}</a>
    </li>`;
}

function displayCategories(categories) {
    let htmlString = '';
    $.each(categories, function (i, category) {
        htmlString = htmlString + getCategoryItemHTML(category)
    });
    categoryListEl.html(htmlString);
    let categoryItems = $('.category-item');
    categoryItems.on('click', function () {
        let categoryId = $(this).data('categoryid');
        let filteredAccommodations = filterByCategory(accommodateData.accommodations, categoryId);
        displayAccommodations(filteredAccommodations);
    });

}



function filterByCategory(accommodations, categoryId) {
    return accommodations.filter(function (accommodate) {
        return accommodate.categoryId == categoryId;

    });
}


function changeScreen(index) {

    screenLinks.removeClass('active');

    screenLinks.eq(index).addClass('active');

    screens.removeClass('active');
    $('#' + index).addClass('active');

}




let options = {};
let calendars = bulmaCalendar.attach('[type="date"]', options);
let startDateCal = calendars[0];
let endDateCal = calendars[1];


let daysBtn = $('.days-btn');

daysBtn.on('click', function () {
    let startTime = new Date(startDateCal.value()).getTime();
    let endTime = new Date(endDateCal.value()).getTime();
    if (!startTime && !endTime) {

        alert('Please input both start and end times.')
    } else {
        let numberOfDays = getNoOfDays(startTime, endTime);

        //TODO filter the number of maxed days for each accommodation
    }

});

function getNoOfDays(startTime, endTime) {
    var difference = endTime - startTime;
    return Math.floor(difference / 1000 / 60 / 60 / 24);
}

init();







