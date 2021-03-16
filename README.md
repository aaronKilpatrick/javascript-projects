# javascript-projects

As someone who has always had a fascination with coding, studied Bach. of Computer Science and have always had something to do with Web Development, I have only really decided to dive head first into. My current job see's me working with Wordpress to build and manage an E-Commerce site. I noticed that I was Googling for help with Javascript far too often and that I needed to cement the knowledge to be more efficient.

I recently read an article discussing the benefits of the *100 Javascript Projects in 100 Days* challenge. The article mentioned various reasons why developers should partake in this challenge. All of them seemed obvious and yet I never thought to start such an endeavour before.

I decided then and there that before I moved onto learning a framework I would tackle this task and become a better Javascript Developer. This repository is my log of this endeavour of taken my Javascript to the next level.

**A note on these projects:**
Most projects come with the HTML and CSS already written which allows me to focus on the goal of Javascript retention and recall.
Projects I **make from scratch** will have a **S-** before the project title
Projects I create by following a **tutorial** will be marked with a **T-** before the project title

## Project 001 - Rock Paper Scissors

**Javascript Used:**
* Dom Manipulation
* Event Listeners
* Control Structures
* Arrays

This was a very simple project that does not look nice at all and it functions to the barest amount and yet I found this project a little cumbersome. I know how simple it is and yet I kept making small errors. It didn't take to me too long, but definitely longer than it should of, but I am glad I made so many little errors. It means I won't make them in the future.

## Project 002 - Change Color Background

**Javascript Used:**
* Arrays
* DOM Manipulation
* Event Listeners

This was far simpler than the first. 6 lines of code and I was done in about 10 minutes. I am getting better at event listeners and Query Selecting.

## Project 003 - Hex Color Background Changer

**Javascript User:**
* Arrays
* Control Structures
* DOM Manipulation
* Event Listeners

I tackled this project on the back of Project 002. It was fairly simple again. Didn't take longer than 10 minutes. I had an idea to push each hexadecimal number onto an array and then spread the array but over complicating the problem. I simply just concatenated each number onto a string as the loop iterated.

## Project 004 - Pass the Message

**Javascript Used:**
* Control Structures
* DOM Manipulation
* Event Listeners
* IIFE

I'm certainly getting in to the eventListener/DOM Manipulation groove. Writing them is becoming very easy, if not second nature. I haven't had to do much DOM Manipulation other than changing text or colours but I know the theory and the syntax so I hope when I get to some more advanced DOM Manipulation I will be ready.

## Project 005 - Random Quotes
**Javascript Used:**
* Arrays
* DOM Manipulation
* Event Listeners
* IIFE
* Objects

More or less stuff I have done in the previous projects but with objects being included. No more than 10 minutes to complete.

## Project 006 - Counter
**Javascript Used:**
* Array.forEach
* Control Structures
* DOM Manipulation
* Event Listeners

This was again a very simple project. Around 10 minutes. I had to look up the syntax for forEach loops as they differ from PHP and other for loops I have used.

## **S-** Project 007 - Live Clock (added background changer as well)
**Javascript Used:**
* Arrays
* Control Structures
* Date()
* DOM Manipulation
* Objects
* Timing Events

I created the whole project from scratch. I started with just the clock functionality I had to look up the *padStart()* method. Then I
moved on to the background changer. I had to look up the *.remove()* method but it
went smoothly. Lastly I added the photographer of the image to the bottom right
of the screen. I am very happy with this project, even though it is simple.

## Project 008 - Background Image Slider
**Javascript Used:**
* Arrays
* Control Structures
* DOM Manipulation
* Event Listeners
* IIFE
* Template Literals

This project was fairly simple. I looked up *template literals* as I was sure there was another way to include a snippet in between a string without concatenation.
My first thought was to loop and push the images into the array but for 5 images I thought to keep it simple.
I am not sure if there is a way to directly pull file names directly from local storage other than JSON with AJAX but I will definitely look into it.

## Project 009 - testimonials Slider
**Javascript Used:**
* Arrays
* Control Structures
* Constructor Function
* DOM Manipulation
* Event Listeners
* IIFE
* Objects
* Template Literals

This one took a little longer than I would of liked. *Constructor Functions* were included in the task. It has been a while since I used them properly (at university in Java) and I had to refresh my memory on how to use them. I believe I can say I am now confident using *constructor functions* and can see how they are used in real projects.
I was going to use *getElementById()* as I know that it is faster than *querySelector()* but I read an informative [article](https://gomakethings.com/javascript-selector-performance/#:~:text=getElementById()%20can%20run%20about,A%20millisecond.) by gomakethings that *querySelector()* is slower but it certainly isn't slow, and for flexibility and consistency it's a great option.

## Project 010 - Item Filter
**Javascript Used:**
* Arrays
* Control Structures
* Datasets
* DOM Manipulation
* Event Listeners
* IIFE
* Slice()

I was pretty happy with this one. I did some reading on variable scope and I now think I understand scope and why you use IIFEs to not contaminate the global scope.
I went with a *slice()* coupled with a *for loop* to match the datasets and input for the search bar. I was pretty happy with my approach. I saw that the project solution was to use *includes* with a *foreach loop* which is a more simplistic approach but I think they take about the same time to code. Maybe a little quicker performance wise not having to slice every dataset at every iteration, but for such a small project it is fine. More than one way to skin a cat.

## Project 011 - Modal 
**Javascript Used:**
* Arrays
* Control Structures
* DOM Manipulation
* Event Listeners
* IIFE (Counter)
* Template Literals

This project was pretty stock standard. I completed it within ten minutes but I just wasn't happy using a global variable as a counter. So I came back the next day after doing a little research and adjusted the counter to be a Self Invoked Function Expression so I can not muddle the global scope.

## Project 012 - Mobile Menu 
**Javascript Used:**
* Control Structures
* DOM Manipulation
* Event Listeners
* IIFE (Counter)

Just a quick mobile menu to get me on the way. This did not take very along at all. I have created a couple handfuls of mobile menus, but usually with JQuery so it was nice to try it out with Vanilla Javascript.

## **S-** Project 013 - Calculator 
**Javascript Used:**
* Control Structures
* Destructuring Assignment
* DOM Manipulation
* Event Delegation
* Event Listeners
* Math Object
* Objects
* Switch Statements
* Template Literals

This project I more or less copied step by step off [Freshman Tech](https://freshman.tech/calculator/). I used this project to practice my *CSS Grid* knowledge as well. I am glad I did though. Even though this isn't my own work, I picked up a lot of new things along the way. Like how *objects* are used in the real world, *destructuring assignments*, and *event delegation* which I know I will use in future projects.

## Project 014 - BMI Calculator 
**Javascript Used:**
* Control Structures
* DOM Manipulation
* Event Listeners
* isNan()
* Math Object
* String()

This was a very easy project. Event listeners are becoming second nature to me. With this project my focus was making sure data types were used correctly, converting them when necessary. I also made sure to handle errors using return statements at the start of my function.

## **S-** Project 015 - Weight Converter 
**Javascript Used:**
* Control Structures
* DOM Manipulation
* Event Listeners
* isNan()
* Math Object
* String()

Just a quick KG to LB converter. I did the whole project myself because it was just too simple. Nothing really new learnt, just solidifying my basic javascript knowledge. 

## **S-** Project 016 - Background Colour Switcher
**Javascript Used:**
* Control Structures
* DOM Manipulation
* Event Delegation
* Event Listeners

Really happy with this project. Even though it was super simpler I really was able to think outside the simple practices I have been taught. When I first started these 100 projects, I would of created a *forEach* loop for all the buttons to add *switch* or *if* statements to them. 
Instead I wrapped the buttons in a *div* and used *Event Delegation*. I figured out each button would use the exact same *DOM* call but with a different button so I just made a function to handle that one line of code. Simple and readable.

## Project 017 - Desktop Calculator 
**Javascript Used:**
* Control Structures
* Destructuring Assignment
* DOM Manipulation
* Event Delegation
* Event Listeners
* Objects
* Switch Statements

This took some time. Even though I just did the previous calculator project, I was over complicating some of the functions. I cut it back and it actually turned out very similar with the previous project. Next time I might wait a few days before I tackle a project of a similar nature so I can really stress test myself.
*Excuse the inline styling, it is a project template*

## Project 018 - Digital Clock
**Javascript Used:**
* Date Object (toLocalString())
* DOM Manipulation
* Set Interval

Easy enough. Took 5 minutes. Last time I made a clock I used individual variables for each unit of the clock. I thought that there must be a better way. Documentation pointed me to the right direction for using *toLocalString()*.

## Project 019 - Word Length Tool
**Javascript Used:**
* DOM Manipulation
* Event Listener
* Template Literals

Very easy project. Not too much to say about it. I am thinking of doing this project again but putting my regex to the test and count how many characters minus spaces there are.

## Project 020 - Sentence Length No Spaces
**Javascript Used:**
* DOM Manipulation
* Event Listener
* Regular Expressions
* Template Literals

I tackled this with *Regular Expressions* I mentioned in the previous projects notes. I wanted to add another layer to the previous project as it was far too simple. I completed an online *Regex* course online [Regexone](https://regexone.com/) and I wanted to start incorporating them in my projects since I am more comfortable with them now.

## **T-**Project 021 - Studio Ghibli Api
**Javascript Used:**
* DOM Manipulation
* Fetch (API)
* Template Literals

I followed Tania Rascia's [tutorial](https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/) about how to connect to an API. She used XMLHttpRequest but I decided to follow along but use *Fetch* as it is far easier and as I am led to believe, the new standard.

## Project 022 - Random Joke Api Project
**Javascript Used:**
* DOM Manipulation
* Event Listeners
* Fetch (API)

A very simple project. This did not take me long at all. I did have to look up the *Fetch()* procedure again but I think I have it down now.

## Project 023 - Random User Api 
**Javascript Used:**
* Callbacks
* Destructuring
* DOM Manipulation
* Event Listeners
* Fetch (API)

This is my first real attempt at using *callbacks* for *asynchronous* operations. It took a little time to get my head around it but I think I get the general premise.

## Project 024 - MDN stopwatch exercise
**Javascript Used:**
* DOM Manipulation
* Event Listeners
* Intervals
* Math Object
* Template Literals

I came across *setInterval* and *setTimeout* when I created a clock for project 008. I am going through MDNs Asynchronous tutorials to help me with a future project I have planned.
