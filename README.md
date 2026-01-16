# Chrome-Extension-Joke

it's the first time for me making a Chrome extension
it's a simple one 
a small extension with a pop-up 
which the user can make a small table (like a two-word todo-list)
entering a word and what he would like it to change to 
and the extension will search the page for it
replacing the word with the other 

# How will it work

it's so simple one

* a small object for the words 
* 1: the code will get all of the elements on the page
* 2: loop for all the elements
* 3: loop in the element to check evry word for (nodeType=3) to ensure that the word is just a word not link or tag
* 4: replace the targeted word (key) with the new one
  I made a function like this before to translate letters to numbers (GPA)
``` JavaScript 
const grades={
'A':4, 'A-':3.7, 'B+':3.3, 'B':3, 'B-':2.7, 'C+':2.3,
'C':2, 'C-':1.7, 'D+':1.3, 'D':1, 'D-':0.7, 'F':0,
}

function calcNum(grade){    
return(grades[grade]);
}

```

# important stuff

* I have no idea how to connect the two JavaScript files with API but I know that I will do it with Jason file 99%
* I want the style to be minimal and I will use Bootstrap for it
* I won't do it today because I have an exam tomorrow

# Files

* manifest.json
* popup.html
* popup.js
* content.js

# Tools 

• Html 
• Bootstrap 
• plane JavaScript 
