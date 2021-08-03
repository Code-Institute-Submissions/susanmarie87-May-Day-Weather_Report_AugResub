# Testing

---

## Table of Contents:

- [Code Validation](#code-validation)
  - [W3C HTML Validator](#w3c-html-validator)
  - [W3C CSS Jigsaw Validator](#w3c-css-jigsaw-validator)
  - [JSHint](#jshint)
- [Performance](#performance)
  - [PageSpeed Insights](#pagespeed-insights)
  - [Google Lighthouse](https://github.com/kenwilde1/crate-o-wine/blob/main/TESTING.md#google-lighthouse)
- [User Testing](#user-testing)
  - [Browser Compatibility](#browser-compatibility)
  - [Responsiveness Testing](#responsiveness-testing)
  - [User Stories Testing](#user-stories-testing)
  - [User Inputs Testing](#user-inputs)
- [Bugs](#bugs)

## Code Validation

### W3C HTML Validator

All html written for the site was checked using the HTML Validator on [W3C](https://validator.w3.org/).

* **HTML Result:**


![HTML Test Results](wireframes/HTML-Test.png)

### W3C CSS Jigsaw Validator

The CSS was checked and upon the first passm two minor errors were returned. One error was from unnecessary code. Another error in the text-shadow values which was removed as the text-shadow did not add much to the site itself.

![CSS Errors](wireframes/CSS-ERROR.png)

The CSS was then ran through again and passed all tests. 
![CSS Pass](wireframes/CSS-Test-Pass.png)


### JSHint


[Back to top](#table-of-contents)

---

## Performance

### PageSpeed Insights


### Google Lighthouse


[Back to top](#table-of-contents)

---

## User Testing

### Browser Compatibility

**Note**: Responsiveness covers Desktop, Mobile and Tablet.

[Back to top](#table-of-contents)

### Responsiveness Testing

The following breakpoints were tested using Chrome Dev Tools:

- **Desktop** - 1920px x 1080px
- **Tablet** - 768px x 1024px
- **Mobile** - 360px x 640px

| 

### User Stories Testing

*** User Stories Testing ***

This section will go through each User Story created and see if the objective has succeeded.

* As a user, I was to easily input my location information to retrieve the weather d
data in my desired area.

- User can enter custom location into search-box.
- Input is responsive on all devices

* As a user, I want to be able to plan my day around the accurate results from the website.

- The api weather data is consistently accurate.
 
* As a user, I want to be able to be able to access weather data using my phone's location.

- The geolocation function has been added using an [OpenCage API](https://opencage.com)
  further testing is needed to check the accuracy of the geolocation.

* As a user, I would like to see the high temperature or low temperature.

- The [OpenWeather Api](https://openweather.com) works accurately to displaythe high 
  and low temperature of the day.

- The high low temperature is responsive on all devices.

- The high low temperature is accurate.

* As a user, I want to be able to easily see the results of the weather. I do not want to have to follow multpile links to find the answer.

 - The weather data is displayed nicely on the screen.

 - The weather data is respnonsive on all screen sizes.

* As a user, I do not want to have to strain my eyes to see the weather data being displayed.

 - The background is visually appealing now but no longer straining since the parallax background was removed.

* As a user, I want a simple app that will not drain my phone of its battery.
  
  - 

* As a user, I want to be able to choose celsius or farenheit when reviewing the weather information.
 
 - The app has two buttons that give the option to choose which metric you want to receive weather in. 

[Back to top](#table-of-contents)

### User Inputs


[Back to top](#table-of-contents)

### Bugs


Click here to go back to [README](https://github.com/susanmarie87/may-day-weather-report/README.md)


