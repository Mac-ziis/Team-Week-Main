import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Plant from './js/seed-catalog.js';

// UI logic for seed-catalog

document.addEventListener("DOMContentLoaded", function () {
  
  function calculateTax(cost) {
    const taxRate = 0.18;
    return cost * taxRate;
  }

  function updateCost() {
    const selectedTypes = Array.from(document.querySelectorAll('input[name="plant-type"]:checked'));
    let totalCost = 0;

    selectedTypes.forEach(typeInput => {
      const type = typeInput.value;
      const quantityInput = document.querySelector(`input[name="quantity-${type}"]`);
      const quantity = parseFloat(quantityInput.value);

      if (quantity > 0) {
        const plant = new Plant(type, quantity);
        totalCost += plant.calculateCost();
      }
    });

    const costDisplay = document.getElementById('total-cost');
    costDisplay.textContent = "Total Cost: $" + totalCost.toFixed(2);

    return totalCost;
  }

  function updateReceipt(totalCost) {
    const totalCostDisplay = document.getElementById('total-cost');
    const taxAmountDisplay = document.getElementById('tax-amount');
    const totalWithTaxDisplay = document.getElementById('total-with-tax');

    const tax = calculateTax(totalCost);
    const totalWithTax = totalCost + tax;

    totalCostDisplay.innerHTML = `Total Cost: $${totalCost.toFixed(2)}`;
    taxAmountDisplay.innerHTML = `Tax: $${tax.toFixed(2)}`;
    totalWithTaxDisplay.innerHTML = `Total with Tax: $${totalWithTax.toFixed(2)}`;
  }

  function showReceipt() {
    const receipt = document.getElementById('receipt');
    receipt.classList.remove('hidden');
  }

  const placeOrderButton = document.getElementById('place-order-btn');
  placeOrderButton.addEventListener('click', () => {
    const totalCost = updateCost();
    updateReceipt(totalCost);
    showReceipt();
  });
});


