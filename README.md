## Word Replacer 
My first Chrome extension
A simple tool that lets you change any word, like changing "Microsoft" to "Microslop".

## Project Idea
The extension uses a simple and organized pop-up user interface, allowing users to build their own "dictionary" (a word and its alternative). The extension performs a full page scan and instantly replaces these words without corrupting website links or HTML code.

# Tools

• Html
• Bootstrap
• plane JavaScript
* Chrome Storage API (غشيته)


# Files

* manifest.json
* popup.html
* popup.js
* content.js
* Bootstrap files


# How it works

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




