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


if (chrome.storage.local.getItem('list')) {
    list = JSON.parse(chrome.storage.local.getItem('list'));
}else{
    chrome.storage.local.setItem('list', JSON.stringify(list));
}

let ContentjsList = {};



function destroyAndBuild(){ 
    let pageHTML = '';
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        
        pageHTML += `
            <div class="d-block">
                <p class="d-inline">replacing <span>${element.word}</span> with <span>${element.replace}</span></p> <button class="${i} deletebtn" id="deletebtn">delet</button>
            </div>
        `;
    }
        
    document.querySelector(".theList").innerHTML = pageHTML;
    updateContentjsList()
    chrome.storage.local.setItem('list', JSON.stringify(list));

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
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        
        chrome.tabs.sendMessage(tabs[0].id, {
            type: "UPDATE_DICTIONARY",
            data: dictionary
        });
        
    });
}
sendDictionaryToPage();