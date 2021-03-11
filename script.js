var smallCups = document.querySelectorAll('.smallcups .cup');
var liters = document.getElementById('liters');
var percentage = document.getElementById('percentage');
var remained = document.querySelector('.remained');
smallCups.forEach((cup, idx) => {
    cup.addEventListener('click',() => highlightCups(idx))
})
function highlightCups(idx) {
    if(smallCups[idx].classList.contains('full') && !smallCups[idx+1].classList.contains('full')) {
        idx--;
        
    }
    smallCups.forEach((cup,idx2) => {
        if(idx2 <= idx) {
            cup.classList.add("full")
        }
        else{
            cup.classList.remove('full')
        }
    })
    updateBigCup()
}
function updateBigCup() {
    var fullCups = 0;
    smallCups.forEach(cup => {
        if(cup.classList.contains('full')){
            fullCups++;
        }
    })
    percentage.innerText = `${fullCups*100 /8}%`;
    liters.innerText = `${2 - fullCups/4}`
    if(fullCups === 0) {
        remained.style.visibility = 'visible';
        percentage.style.visibility = 'hidden';
        percentage.style.height = '0';
    } else if (fullCups ===8) {
        percentage.style.visibility = 'visible';
        remained.style.visibility = "hidden";
        remained.style.height = '0';
        percentage.style.height = '100%';
    }
    else {
        percentage.style.visibility = 'visible';
        remained.style.visibility ='visible';
        percentage.style.height = `${(fullCups ) *100 /8}%`
    }
    
}