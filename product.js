const deleteBtn =  document.getElementById("deleteBtn");
const addBtn = document.getElementById("addBtn")
const quantityText =document.getElementById("quantityText");
let count = 1;

addBtn.onclick = function(){
    count++;
    quantityText.textContent = count;
}

deleteBtn.onclick = function(){
    if (count>1){
    count--;
    quantityText.textContent = count;
}   else
quantityText.textContent = count;
}



document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
    this.classList.add('animate');
    setTimeout(() => {
        this.classList.remove('animate');
    }, 300); // animation duration
});


