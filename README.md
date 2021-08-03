# **May Day Weather Report**

![Mokeup image](wireframes/mokeup-image.png)

## **Goal for this project** 

Welcome to May Day! Your one stop shop for all your weather needs. On this site, you will easily be able to access the weather
in any location in the world. Plan your day, week, or two with our very user friendly design. Trust that our weather is the most 
accurate so there is no need to look any further than right here.

---
<a></a>
## Table of contents 
* [UX](#ux)
    * [User Goals](#user-goals)
    * [User Stories](#user-stories)
    * [Site Owners Goals](#site-owners-goals)
    * [User Requirements and Expectations](#user-requirements-and-expectations)
        * [Requirements](#requirements)
        * [Expectations](#expectations)
    * [Design Choices](#design-choices)
        * [Fonts](#fonts)
        * [Icons](#icons)
        * [Colors](#colors)
        * [Structure](#structure)
* [Wireframes](#wireframes)
* [Features](#features)
    * [Existing Features](#existing-features)
    * [Features to be implemented](#features-to-be-implemented)
* [Technologies used](#technologies-used)
    * [Languages](#languages)
    * [Tools and Libraries](#tools-and-libraries)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)

<a name="ux"></a>
## **UX**
<a></a>
### **User Goals**

* A website filled with valuable content
* Website should be easy to use on desktop, tablet & mobile
* Appealing visual elements
* Accurate weather information.
* The location selection should encompass all feasible locations.
* The weather data is correct and shows the proper weather information.

[Back to Top](#table-of-contents)

<a></a>
### **User Stories**

* As a user, I was to easily input my location information to retrieve the weather data in my desired area.
* As a user, I want to be able to plan my day around the accurate results from the website.
* As a user, I want to be able to be able to access weather data using my phone's location.
* As a user, I would like to see the high temperature or low temperature.
* As a user, I want to be able to easily see the results of the weather. I do not want to have to follow multpile links to find the answer.
* As a user, I do not want to have to strain my eyes to see the weather data being displayed.
* As a user, I want a simple app that will not drain my phone of its battery.
* As a user, I want to be able to choose celsius or farenheit when reviewing the weather information.

<a></a>
### **Site owners Goals**

* As a site owner, I want to provide and UX intuitive website so simple anyone can easily access the weather data.
* As a Site Owner, I want to provide accurate weather reporting so people rely on my service over competition.
* As a Site Owner, I want to make sure the site is visuallly appealing.
* As a Site Owner, I want to give people the option to let the site access their location to give my users 
  automatic weather updates.


[Back to Top](#table-of-contents)

<a></a>
### **User Requirements and Expectations**
<a></a>
#### Requirements
* The application should allow users to operate the resources intuitively.
* The web application's resources should be easily identifiable and easy to use.
* The application must return accurate weather data.
* The web application should return accurate weather reporting of high and low temperatures.
* The web application should return accurate reporting of conditions outside i.e. clouds, rain, sun.

<a></a>
#### Expectations

* The user should know exactly what to do when first introduced to the landing page.
* The search feature should be intuitive and work correctly.
* There should be clear info about location and data. 
* The option to choose between farenheit or celsius should be functional.
* The buttons for the choices should stand out prominently and easily catch the eye.
* The description of the weather outside should be accurate.
* The minimum and maximum tempratures need to be mostly accurate give or take few degrees.


[Back to Top](#table-of-contents)

<a></a>
### **Design Choices**

<a></a>
#### Fonts
In order to find appropriate fonts for my website, I have visited [Google Fonts](https://fonts.google.com/ "Google Fonts") to explore the various options.

I choose the style Quicksand for its subtlety. This font style is clean and legible leaving the user feeling comfortable while retrieving their information. 

Since the app itself is so simple and one page, I battled with the thought of adding several different types of font in order to break up any possible monotony but in the end I choose to keep it simple with a single font.

<a></a>
#### Colors

#474242d0 Is a translucent type of grey that has such a modern and sharp appeal that i choose it to for the card which will display the weather data that is received.

#f2f2f2 Is the color of the font for all of the Headings, texts, and input on the app. I have chosen to go with darker colrs and white as they are a classic match and will not be visually straining on the eyes. 

#3a3a3a Was chosen for the searchbar. This color closely resembled the same color as the bootstrap navbar and I wanted to keep the colors congruent throughout the page. I want the user to feel positive about their experience while proving easy readablitity and I found that the Quicksand font embodied all of these aspects quite nicely.


<a></a>
#### Structure

[Back to Top](#table-of-contents)

--- 
<a></a>
## **Wireframes**

### You can find my original wireframes  with the parallax background below:

[Desktop Wireframe](wireframes/mobile-h.png)

[iPad Wireframe](wireframes/mobile-l.png)

[Mobile Wireframe](wireframes/laptop-md.png)

### Current Wireframes

[Mobile Wireframe](wireframes/Weather.png)

[Desktop Wireframe](wireframes/Weather2.png)


[Back to Top](#table-of-contents)

---

<a></a>
## **Features**
<a></a>
### **Existing Features**

#### Navigation
This app requires only a very basic navigation. Since there are no pages to navigate too there will only be two items displayed across the navbar but no actual links. 
The first thing to be displayed is the title of the weather app. 
The second thing to be displayed will be a toggle switch capable of taking the site into dark mode.

#### Hero Image

The Hero Image for this weather application is ever changing. Using a special link to unsplash, the hero image will consistently change anytime the page is refreshed. This makes having the weather data displayed on the card necessary as it impossible to see without a card.

#### How-To-Modal

The how-to-Modal button is located conveniently with the card. This is so users can easily see that there is more information in the event they are unable to figure out how to use the site on their own. When the modal button is clicked a how-to-modal body will then pop-up with directions as to how the app works. The modal will feature a close button for the user when they have finished reading the instructions.

#### Geolocation

Via the geolocation function, users will be able to grant permission to the app in order for the api to render their location. This will then automatically feed the user their personal weather data without having to manually enter their location. 

<a></a>
### **Features to be implemented**
* Forecast weather
* Interactive map for location with a link to activities that are suitable for the days weather.
* A feature that could display the city for which the weather data is being displayed.
* A feature that could change the backgroud image to match the current weather conditions i.e. rainy weather = rainy background.
* Data on the safety of road conditions. 


[Back to Top](#table-of-contents)

<a></a>
## **Technologies used**
<a></a>
### **Languages**

* [HTML](https://en.wikipedia.org/wiki/HTML)
* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

<a></a>

### **Libraries & Frameworks**

* [Font Awesome](https://fontawesome.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Google Fonts](https://fonts.google.com/)

### **Tools**
* [Git](https://git-scm.com/)
* [GitPod](https://www.gitpod.io/)
* [Balsamiq](https://balsamiq.com/wireframes/)
* [FontAwesome](https://fontawesome.com)
* [Open Cage API](https://opencagedata.com/)
* [OpenWeather API](https://openweathermap.org/api)
* [W3C HTML Validation Service](https://validator.w3.org/)
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
* [techsini](http://techsini.com/)
* [Tiny PNG](https://tinypng.com/)

[Back to Top](#table-of-contents)

<a></a>
## **Testing**
Testing can be viewed at [TESTING.md](https://github.com/susanmarie87/may-day-weather-report/TESTING.md)

* **Plan**    
Initially, the original background chosen had a type of May Day style theme behind it with tons of lightning igniting the sky. However, this picture and background theme was changed in the middle of the project. It was too harsh visually and the weather app called for something that would be slightly more impressive, which led me to find the CSS parallax background.

* **Implementation**   
. The CSS parallax background image was adapted from (https://www.sliderrevolution.com/resources/css-animated-background/) and implemented into the style.css file. 

* **Test**    
The background was tested on multiple screen sizes and devices all of which presented properly and did not return any errors. There was however an issue with visual appeal.
Due to the many colors in the background, it seemed as though all of the font colors would strain the eyes. 

* **Result**    
The visual problem was solved by removing the green trees in the background. This offset the clouds just enough so that the font did not get lost when it moved through the white backgroud. The green also impaired the font color presentation.
* **Verdict**    
The background looked much better without the green trees behind the font but was still visually appealing to the user.

* **Plan**   
The weather app needs to have a search box function where a user can input the location information and the app will return the exact data of the desired location. 

* **Implementation**    
Several methods were used in order to get this function to work properly. First, the header and input type for the search box was set in index.html. Next, the search box was styled in CSS. Finally, the JavaScript const searchbox function was added into the scripts.js file.
* **Test**    
The searchbox function returns locations. 
* **Result**    
 The search box function returned the locations but it was not giving an error alert if the spelling was incorrect or if the location was unknown. 
* **Verdict**    
While the searchbox returned the weather location information properly, it did not have an error function which is necessary in the event of grammatical errors or unknown location.
* **Plan**    
The weather app will have a feature that returns the high and low temperatures of the location. 
* **Implementation**    
This was accomplished by 
* **Test**    

* **Result**    

* **Verdict**    

[Back to Top](#table-of-contents)

### Bugs
The first bug that took years off of my life and made me doubt my entire existence, was merely a dash that should have been and equal sign. This minor error was detrimental to my time and was discovered with the help of my mentor, Sime DAehlin. 

The second bug that was discovered were simple misspelling in the const functions. The first two were missing the TEXT portion of inner.Text. The last error of the consts were 

[Back to Top](#table-of-contents)

<a></a>
## **Deployment**

This project was deployed via GitHub by executing the following steps.
After writing the code, committing and pushing it to GitHub:

1. Navigate to the repository on github and click **Settings**.
1. From there, go to the **Source section** within the Github Pages section.
1. Select **master branch** on the dropdown menu, and click save.
1. Now the website is live on **https://susanmarie87.github.io/May-Day-Weather_Report/**
1. Any time commits and pushes are sent to Github, the Github Pages site should update shortly after.

To run the project locally:

1. Click the **green Clone or Download button** on the Github Repository
1. Using the **Clone with HTTPS option**, copy the link displayed.
1. Open your IDE, and ensure the Git Terminal is open.
1. Change the working directory to the location where the cloned directory is to go.
1. Use the **"git clone" command** and paste the url copied in the second step.

[Back to Top](#table-of-contents)

<a></a>
## **Credits**

### Content - Media - Inspiration

[CSS Parallax Background Effect.](https://www.sliderrevolution.com/resources/css-animated-background/)


### Inspiration For The Project

[Tyler Potts](https://www.youtube.com/watch?v=n4dtwWgRueI)

[Jonah Lawrence](https://www.youtube.com/watch?v=WZNG8UomjSI)


### Acknowledgements
[Simen Daehlin](https://www.linkedin.com/in/simendaehlin/) for quite literally dragging me through JavaScript. 
Without his help in helping to change my mindset about my capabilities, I may have given up. 

[Code Institute](https://codeinstitute.net/) for all of their assistance, patience with me, and resources to help me along

[Back to Top](#table-of-contents)

