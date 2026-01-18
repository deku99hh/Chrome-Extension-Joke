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
let ContentjsList = {};



function destroyAndBuild(){ 
    let pageHTML = '';
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        
        pageHTML += `
            <div class="d-block">
                <p class="d-inline">replacing <span>${element.word}</span> with <span>${element.replace}</span></p> <button onclick="delet(${i})">delet</button>
            </div>
        `;
    }
        
    document.querySelector(".theList").innerHTML = pageHTML;
    updateContentjsList()
}


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