# **May day Weather Report**

![Mokeup image](wireframes/mokeup-image.png)

## **Goal for this project** 

Welcome to May Day! 

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
* Personal info about property & owners
* Website with creative call-to-actions
* Offer social proof like testimonials & guest reviews
* Contact details should be easy to find
* Form to contact owners directly from site

[Back to Top](#table-of-contents)

<a></a>
### **User Stories**
.

<a></a>
### **Site owners Goals**

[Back to Top](#table-of-contents)

<a></a>
### **User Requirements and Expectations**
<a></a>
#### Requirements
* Easy to navigate by using the navigation menu
* Relevant content about the property
* Appealing visual elements
* Easy way to contact property
* Clear information about prices and policies

<a></a>
#### Expectations
* When clicking on links (like social media), I expect the page to open in a seperate browser
* I expect feedback when submitting the contact form that the form has been submitted correctly
* I expect that the navigation links work properly so that is takes me wherever I want to go
* Clear info about location 
* Website is in line with the customer's journey

[Back to Top](#table-of-contents)

<a></a>
### **Design Choices**

<a></a>
#### Fonts
In order to find appropriate fonts for my website, I have visited [Google Fonts](https://fonts.google.com/ "Google Fonts") to explore the various options.

<a></a>
#### Icons

<a></a>
#### Colors

![Color Scheme](wireframes/color-scheme.png)

<a></a>
#### Structure

[Back to Top](#table-of-contents)

--- 
<a></a>
## **Wireframes**

You can find my wireframes below:

[Back to Top](#table-of-contents)

---

<a></a>
## **Features**
<a></a>
### **Existing Features**

#### Navigation

#### Hero Image

#### Welcome Section

#### Tree Houses Section

#### Gallery


#### Testimonials

Under the testimonials I have added the links to social media using icons which opens in a separate tab in the browers. 
This to make the website more user friendly.

#### Contact 
At the contact section I have provided contact and location details on the left. 
On the right I implemented a form which they can fill in if they would like to get in contact with the owners. 
Below the form there is a submit button which also triggers a modal to open up which gives feedback to the user that the form has been successfully submitted.

<a></a>
### **Features to be implemented**

* Interactive map for location with a link to google maps
* Direct booking module to increase direct bookings
* Whenever the form is submitted correctly, the information should be send to the email account of the property.
* Chat bot that links with the whatsapp of the property
* Links to external partners / companies like restaurants, activities in the neighbourhood, hike trails etc.
* Include information on how their data will be used (GDPR-Law)

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
* [Balsamic](https://balsamiq.com/wireframes/)
* [W3C HTML Validation Service](https://validator.w3.org/)
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
* [techsini](http://techsini.com/)
* [Tiny PNG](https://tinypng.com/)

[Back to Top](#table-of-contents)

<a></a>
## **Testing**

### Navigation bar

* **Plan**    
I want to include a navigation bar which will be fixed on top. 
While scrolling down the page, I want to give the user a clear view on where they are located on the site by using the scrollspy.
Whenever clicked on one of the navigation links, it should take you where you want to go.
To be more attractive and easy to use on mobile, I want the navigation bar to convert to a hamburger sign with a dropdown menu.

* **Implementation**   
I implemented the navigation bar using Bootstrap. This helps to give an overall structure and lay out to the navbar. 
I have used CSS to overwrite the default settings and making the navbar in line with the overall webite. 
In the body element I implemented the scrollspy and gave it an offset so whenever you click on one of the links, it shows the title with some spacing around. 
I have also used Bootstrap to implement the hamburger sign for mobile devices. 

* **Test**    
To test the navigation bar, I have click all the links to make sure it works properly. 
I have also opened the website in various browers (safari, google chrome, mozilla firefox) to make sure it works on all browsers and devices.
I also double checked the scrollspy on the various browsers and devices. 
On mobile the navigation transformed into the hamburger sign with a dropdown menu.

* **Result**    
The navigation bar shows nicely like expected on all browsers and devices. 
It did notice that the contact link was too close to the right side of the screen which I solved by increasing the margin. 
All the links work properly and the scrollspy gives a clear view on where you are located on the page. 

* **Verdict**    
The test has passed all the criteria and works like planned.


* **Implementation**    

* **Test**    

* **Result**    

* **Verdict**    

### Contact Form 
* **Plan**    


* **Implementation**    

* **Test**    

* **Result**    

* **Verdict**    

[Back to Top](#table-of-contents)

### Bugs

#### Form validation

* **Bug**    

* **Fix**        

* **Verdict**    

#### Hero Image

* **Bug**    

* **Fix**    


* **Bug**    

* **Fix**    

* **Verdict**    

#### Navigation menu on smaller screensizes 

* **Bug**    

* **Fix**        

* **Verdict**    

[Back to Top](#table-of-contents)

<a></a>
## **Deployment**

This project was deployed via GitHub by executing the following steps.
After writing the code, committing and pushing it to GitHub:

1. Navigate to the repository on github and click **Settings**.
1. From there, go to the **Source section** within the Github Pages section.
1. Select **master branch** on the dropdown menu, and click save.
1. Now the website is live on **https://anouksmet.github.io/Naturazy/**
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


### Acknowledgements


[Back to Top](#table-of-contents)

