function increaseValue(event) {
    let quantityContainer = event.target.closest('.quantity-container');
    let valueElement = quantityContainer.querySelector('.value');
    let currentValue = parseInt(valueElement.innerText);
    valueElement.innerText = currentValue + 1;
}

function decreaseValue(event) {
    let quantityContainer = event.target.closest('.quantity-container');
    let valueElement = quantityContainer.querySelector('.value');
    let currentValue = parseInt(valueElement.innerText);
    if (currentValue > 1) {
        valueElement.innerText = currentValue - 1;
    }
}

// Assign event listeners to all increase buttons
document.querySelectorAll('.increase').forEach(button => {
    button.addEventListener('click', increaseValue);
});

// Assign event listeners to all decrease buttons
document.querySelectorAll('.decrease').forEach(button => {
    button.addEventListener('click', decreaseValue);
});


document.addEventListener('DOMContentLoaded', () => {
    // 'bin.png' görselleri için click olay dinleyicisi ekleyin
    document.querySelectorAll('.bin-img').forEach(binImage => {
        binImage.addEventListener('click', (event) => {
            // Tıklanan bin.png görselinin ait olduğu col-md-3 div'ini bul
            let colDiv = event.target.closest('.row');
            
            // Div'i DOM'dan kaldır
            if (colDiv) {
                colDiv.remove();
            }
        });
    });
});
