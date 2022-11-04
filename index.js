let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

let increment = () => {
 count += 1
 countEl.textContent = count;
}

let save = () => {
 let savedCount = " " + count + " - "
 saveEl.textContent += savedCount
 count = 0;
 countEl.textContent = count;
}


