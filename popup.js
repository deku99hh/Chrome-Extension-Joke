let list = [
    {
        word:'Google',
        replace:'Googoo'
    },
    {
        word:'Microsoft',
        replace:'Microslop'
    },
    {
        word:'Facebook',
        replace:'Meta-Slop'
    },
];


if (localStorage.getItem('list')) {
    list = JSON.parse(localStorage.getItem('list'));
} else {
    localStorage.setItem('list', JSON.stringify(list));
}

let ContentjsList = {};



function destroyAndBuild(){ 
    let pageHTML = '';
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        
        pageHTML += `
            <div class="d-block mt-3">
                <p class="d-inline">replacing <span class="text-primary">${element.word}</span> with <span class="text-primary">${element.replace}</span></p> <button class="${i} deletebtn btn btn-danger" id="deletebtn">delet</button>
            </div>
        `;
    }
        
    document.querySelector(".theList").innerHTML = pageHTML;
    updateContentjsList()
    chrome.storage.local.set({ "myDictionary": ContentjsList }, function() {
        console.log("ميتين العبط");
    });
    sendDictionaryToPage();

    document.querySelectorAll('.deletebtn').forEach((btn)=>{
        btn.addEventListener('click',()=>{
            delet(btn.classList[0]);
        })
    })
    
}

document.getElementById('updateTheList').addEventListener('click',()=>{
    updateTheList();
})
function updateTheList(){
    let newWord = document.getElementById('word').value;
    let newReplace = document.getElementById('replace').value;

    if (!(newWord == '' || newReplace == '')) {
        document.getElementById('word').value = '';
        document.getElementById('replace').value = '';
    
        let newObj = {
            word: newWord,
            replace: newReplace
        }
    
        list.push(newObj);
        destroyAndBuild();

    }

}



function delet(index){
    list.splice(index,1);
    destroyAndBuild();
}

function updateContentjsList(){
    ContentjsList = {}
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        let newkey = element.word ;
        let value = element.replace ;

        ContentjsList[newkey] = value;

    }

    // console.log(ContentjsList);
}

destroyAndBuild();




let dictionary = updateContentjsList(); 


function sendDictionaryToPage() {
    updateContentjsList(); 
    
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs[0] && tabs[0].id) {
            chrome.tabs.sendMessage(tabs[0].id, {
                type: "UPDATE_DICTIONARY",
                data: ContentjsList 
            }, (response) => {
                if (chrome.runtime.lastError) {
                    
                }
            });
        }
    });
}

