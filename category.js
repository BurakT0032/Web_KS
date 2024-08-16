
const minPriceSlider = document.getElementById('min-price');
const maxPriceSlider = document.getElementById('max-price');
const minPriceValue = document.getElementById('min-price-value');
const maxPriceValue = document.getElementById('max-price-value');
const sliderTrack = document.querySelector('.slider-track');

function updatePriceValues() {
    const minPrice = parseInt(minPriceSlider.value);
    const maxPrice = parseInt(maxPriceSlider.value);

    // Değerlerin minimum ve maksimum olduğunu kontrol edelim
    if (minPrice > maxPrice) {
        minPriceSlider.value = maxPrice;
        maxPriceSlider.value = minPrice;
    }

    // Değerleri güncelle
    minPriceValue.textContent = `$${minPrice}`;
    maxPriceValue.textContent = `$${maxPrice}`;

    // Çubuk aralığını güncelle
    const minPercent = (minPrice / 250) * 100;
    const maxPercent = (maxPrice / 250) * 100;

    sliderTrack.style.left = `${minPercent}%`;
    sliderTrack.style.right = `${100 - maxPercent}%`;
}

minPriceSlider.addEventListener('input', updatePriceValues);
maxPriceSlider.addEventListener('input', updatePriceValues);

// Başlangıçta slider aralığını güncelle
updatePriceValues();

document.querySelector('.apply-button').addEventListener('click', function() {
    this.innerHTML = 'Applying...';
    setTimeout(() => {
        this.innerHTML = 'Apply Filter';
    }, 2000);  // Simulate filter application delay
});




