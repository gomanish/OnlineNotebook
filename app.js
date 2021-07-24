// check box id -----  feature-flag
// textarea id-------  textarea

let textarea = document.getElementById('textarea');
let checkBox = document.getElementById('feature-flag');
let btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
    textarea.value = "";
});
function mySaveFunction(){
    // if check box is checked then save the data
    // if data is in local storage then show it in textarea
    if(localStorage.getItem('autosave-data')){
        textarea.value = localStorage.getItem('autosave-data');
    }
    updateDate();    
}

function updateDate(){
    // check every second if checkbox is checked then save it otherwise leve it
    setInterval(()=>{
        if(checkBox.checked){
            let data = textarea.value;
            localStorage.setItem('autosave-data',data);
        }
    },1000);
}
mySaveFunction();