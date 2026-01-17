let dicshunary = {
    "Microsoft": "Microslop",
    "Google": "Googoo",
    "Facebook": "Meta-Slop"
}
function getTheReplace(text){    
    return(dicshunary[text]);
}


let thePage = document.getElementsByTagName('*');

for (const element of thePage) {
        // console.log(element);
    for (const node of element.childNodes) {
        if (node.nodeType === 3) {
            // console.log(node.nodeValue);
            const arrayOfTheWords = node.nodeValue.split(" ");

            for (let i = 0; i < arrayOfTheWords.length; i++) {
                const word = arrayOfTheWords[i];
                
                for (const key in dicshunary) {
                    if (word == key) {
                        arrayOfTheWords[i] = getTheReplace(key);
                        
                    }
                    
                }
                node.nodeValue = arrayOfTheWords.join(" ");
            }


        }
        
    }
    
}