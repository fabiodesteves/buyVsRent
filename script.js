document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded');
  
  // Tab functionality
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');
      console.log('Tab clicked:', tabId);

      // Remove active class from all tabs and contents
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // Add active class to clicked tab and corresponding content
      tab.classList.add('active');
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });

  // Load saved values from localStorage
  loadSavedValues();

  // Calculate button functionality
  const calculateBtn = document.getElementById('calculateBtn');
  if (!calculateBtn) {
    console.error('Calculate button not found');
  } else {
    console.log('Calculate button found, adding event listener');
    calculateBtn.addEventListener('click', function(event) {
      console.log('Calculate button clicked');
      // Validate all inputs before proceeding
      if (validateInputs()) {
        console.log('Inputs validated successfully');
        // Save values to localStorage before calculating
        saveInputValues();
        
        try {
          // Perform calculations
          calculateComparison();
          console.log('Calculation completed');
          
          // Switch to results tab
          console.log('Switching to results tab');
          tabs[1].click();
        } catch (error) {
          console.error('Error during calculation:', error);
          alert('An error occurred during calculation. Please check the console for details.');
        }
      } else {
        console.log('Input validation failed');
      }
    });
  }

  // Function to validate all inputs
  function validateInputs() {
    console.log('Validating inputs');
    const inputFields = document.querySelectorAll('input[type="number"]');
    let isValid = true;
    let firstInvalidField = null;
    
    // Reset all input styles
    inputFields.forEach(input => {
      input.style.borderColor = '';
    });
    
    // Check each input field
    inputFields.forEach(input => {
      // Check if empty or less than 0
      if (input.value === '' || parseFloat(input.value) < 0) {
        input.style.borderColor = '#ea4335'; // Google red for error
        isValid = false;
        
        // Store the first invalid field for focus
        if (!firstInvalidField) {
          firstInvalidField = input;
        }
      }
    });
    
    // If validation failed, focus on the first invalid field
    if (!isValid && firstInvalidField) {
      firstInvalidField.focus();
      
      // Show alert with error message
      alert('Please ensure all fields are filled with values greater than or equal to 0.');
    }
    
    return isValid;
  }

  // Back button functionality
  const backToInputsBtn = document.getElementById('backToInputsBtn');
  if (backToInputsBtn) {
    backToInputsBtn.addEventListener('click', () => {
      tabs[0].click();
    });
  } else {
    console.error('Back to inputs button not found');
  }

  // Function to save input values to localStorage
  function saveInputValues() {
    console.log('Saving input values to localStorage');
    const inputFields = document.querySelectorAll('input[type="number"]');
    const savedValues = {};

    inputFields.forEach(input => {
      savedValues[input.id] = input.value;
    });

    localStorage.setItem('buyVsRentCalculator', JSON.stringify(savedValues));
  }

  // Function to load saved values from localStorage
  function loadSavedValues() {
    console.log('Loading saved values from localStorage');
    const savedData = localStorage.getItem('buyVsRentCalculator');

    if (savedData) {
      const savedValues = JSON.parse(savedData);

      // Apply saved values to input fields
      Object.keys(savedValues).forEach(id => {
        const inputField = document.getElementById(id);
        if (inputField) {
          inputField.value = savedValues[id];
        }
      });
    }
  }

  // Format currency function
  function formatCurrency(value) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
  }

  // Format percentage function
  function formatPercentage(value) {
    return new Intl.NumberFormat('de-DE', { style: 'percent', minimumFractionDigits: 2 }).format(value / 100);
  }

  // Calculate future value function
  function calculateFutureValue(presentValue, rate, periods) {
    return presentValue * Math.pow(1 + rate / 100, periods);
  }

  // Calculate future value of annuity function
  function calculateFutureValueAnnuity(payment, rate, periods) {
    const r = rate / 100;
    if (r === 0) return payment * periods;
    return payment * ((Math.pow(1 + r, periods) - 1) / r);
  }

  // Calculate monthly mortgage payment
  function calculateMonthlyPayment(principal, annualRate, months) {
    const monthlyRate = annualRate / 100 / 12;
    if (monthlyRate === 0) return principal / months;
    return principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
  }

  // Main calculation function
  function calculateComparison() {
    console.log('Starting calculation');
    // Get input values
    const housePrice = parseFloat(document.getElementById('housePrice').value);
    const downPayment = parseFloat(document.getElementById('downPayment').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const mortgageLength = parseInt(document.getElementById('mortgageLength').value);
    const appreciationRate = parseFloat(document.getElementById('appreciationRate').value);
    const buyingCosts = parseFloat(document.getElementById('buyingCosts').value);
    const sellingCostsRate = parseFloat(document.getElementById('sellingCosts').value);
    const maintenanceCostsRate = parseFloat(document.getElementById('maintenanceCosts').value);
    const houseInsurance = parseFloat(document.getElementById('houseInsurance').value);
    const lifeInsurance = parseFloat(document.getElementById('lifeInsurance').value);
    const adminFees = parseFloat(document.getElementById('adminFees').value);
    const propertyTaxes = parseFloat(document.getElementById('propertyTaxes').value);
    const rentPayment = parseFloat(document.getElementById('rentPayment').value);
    const rentDeposits = parseInt(document.getElementById('rentDeposits').value);
    const rentIncreaseRate = parseFloat(document.getElementById('rentIncreaseRate').value);
    const stayLength = parseInt(document.getElementById('stayLength').value);
    const investmentReturn = parseFloat(document.getElementById('investmentReturn').value);
    const inflation = parseFloat(document.getElementById('inflation').value);

    console.log('Input values retrieved successfully');

    // Buying calculations
    const financedAmount = housePrice - downPayment;
    const monthlyPayment = calculateMonthlyPayment(financedAmount, interestRate, mortgageLength);
    const annualMaintenanceCosts = housePrice * (maintenanceCostsRate / 100);
    const yearlyHousingExpenses = annualMaintenanceCosts + houseInsurance + lifeInsurance + (adminFees * 12) + propertyTaxes;
    const totalMonthlyHousingExpenses = monthlyPayment + (yearlyHousingExpenses / 12);

    // Calculate for the stay length
    const stayLengthMonths = stayLength * 12;
    const totalMortgagePaid = Math.min(stayLengthMonths, mortgageLength) * monthlyPayment;

    // Calculate future housing expenses with inflation
    const totalHousingExpenses = calculateFutureValueAnnuity(yearlyHousingExpenses, inflation, stayLength);

    // Calculate house future value
    const houseFutureValue = calculateFutureValue(housePrice, appreciationRate, stayLength);
    const sellingCosts = houseFutureValue * (sellingCostsRate / 100);

    // Total housing expenditure
    const totalHousingExpenditure = downPayment + buyingCosts + totalMortgagePaid + totalHousingExpenses + sellingCosts;

    // Renting calculations
    const totalRentDeposits = rentPayment * rentDeposits;
    const finalRent = calculateFutureValue(rentPayment, rentIncreaseRate, stayLength);
    const totalRentPaid = calculateFutureValueAnnuity(rentPayment * 12, rentIncreaseRate, stayLength);

    // Calculate future value of initial investment (down payment + buying costs)
    const initialInvestment = downPayment + buyingCosts;
    const rentingInvestmentValue = calculateFutureValue(initialInvestment, investmentReturn, stayLength);

    // Compare monthly expenses
    const monthlySavings = rentPayment - totalMonthlyHousingExpenses;
    let savingsValue = 0;

    if (monthlySavings > 0) {
      // Renting is more expensive monthly, buying is cheaper
      savingsValue = calculateFutureValueAnnuity(monthlySavings * 12, investmentReturn, stayLength);

      // Show buying savings section, hide renting savings section
      document.getElementById('buyingSavingsSection').style.display = 'block';
      document.getElementById('rentingSavingsSection').style.display = 'none';

      // Update buying savings values
      document.getElementById('buyingMonthlySavings').textContent = formatCurrency(monthlySavings);
      document.getElementById('buyingSavingsFutureValue').textContent = formatCurrency(savingsValue);
    } else if (monthlySavings < 0) {
      // Buying is more expensive monthly, renting is cheaper
      savingsValue = calculateFutureValueAnnuity(Math.abs(monthlySavings) * 12, investmentReturn, stayLength);

      // Show renting savings section, hide buying savings section
      document.getElementById('rentingSavingsSection').style.display = 'block';
      document.getElementById('buyingSavingsSection').style.display = 'none';

      // Update renting savings values
      document.getElementById('rentingMonthlySavings').textContent = formatCurrency(Math.abs(monthlySavings));
      document.getElementById('rentingSavingsFutureValue').textContent = formatCurrency(savingsValue);
    } else {
      // Equal monthly costs
      document.getElementById('buyingSavingsSection').style.display = 'none';
      document.getElementById('rentingSavingsSection').style.display = 'none';
    }

    console.log('Calculating net worth');
    // Calculate net worth for buying
    const remainingMortgage = financedAmount - totalMortgagePaid;
    
    // Revised buyingNetWorth calculation that properly accounts for all expenditures and remaining mortgage
    // The net worth is: Asset value (house) - Remaining mortgage - Selling costs - Initial investment (down payment + buying costs)
    // Plus any savings from lower monthly payments if buying is cheaper than renting
    const buyingNetWorth = houseFutureValue - remainingMortgage - sellingCosts - (downPayment + buyingCosts) + (monthlySavings > 0 ? savingsValue : 0);

    // Calculate net worth for renting
    const rentingNetWorth = rentingInvestmentValue - totalRentPaid + totalRentDeposits + (monthlySavings < 0 ? savingsValue : 0);

    // Calculate the difference
    const netDifference = buyingNetWorth - rentingNetWorth;

    console.log('Updating result values');
    // Update result values
    document.getElementById('financedAmount').textContent = formatCurrency(financedAmount);
    document.getElementById('monthlyPayment').textContent = formatCurrency(monthlyPayment);
    document.getElementById('yearlyHousingExpenses').textContent = formatCurrency(yearlyHousingExpenses);
    document.getElementById('totalMonthlyHousingExpenses').textContent = formatCurrency(totalMonthlyHousingExpenses);
    document.getElementById('totalMortgagePaid').textContent = formatCurrency(totalMortgagePaid);
    document.getElementById('totalHousingExpenses').textContent = formatCurrency(totalHousingExpenses);
    document.getElementById('houseFutureValue').textContent = formatCurrency(houseFutureValue);
    document.getElementById('totalHousingExpenditure').textContent = formatCurrency(totalHousingExpenditure);
    document.getElementById('initialRent').textContent = formatCurrency(rentPayment);
    document.getElementById('totalRentDeposits').textContent = formatCurrency(totalRentDeposits);
    document.getElementById('finalRent').textContent = formatCurrency(finalRent);
    document.getElementById('totalRentPaid').textContent = formatCurrency(totalRentPaid);
    document.getElementById('rentingInvestmentValue').textContent = formatCurrency(rentingInvestmentValue);

    // Update net worth values with color coding
    const buyingNetWorthElement = document.getElementById('buyingNetWorth');
    buyingNetWorthElement.textContent = formatCurrency(buyingNetWorth);
    buyingNetWorthElement.className = buyingNetWorth >= 0 ? 'result-value positive-value' : 'result-value negative-value';

    const rentingNetWorthElement = document.getElementById('rentingNetWorth');
    rentingNetWorthElement.textContent = formatCurrency(rentingNetWorth);
    rentingNetWorthElement.className = rentingNetWorth >= 0 ? 'result-value positive-value' : 'result-value negative-value';

    // Update comparison result
    const comparisonResultElement = document.getElementById('comparisonResult');
    if (netDifference > 0) {
      comparisonResultElement.textContent = `Buying is better by ${formatCurrency(netDifference)}`;
      comparisonResultElement.className = 'comparison-value positive-value';
    } else if (netDifference < 0) {
      comparisonResultElement.textContent = `Renting is better by ${formatCurrency(Math.abs(netDifference))}`;
      comparisonResultElement.className = 'comparison-value negative-value';
    } else {
      comparisonResultElement.textContent = 'Buying and renting are financially equivalent';
      comparisonResultElement.className = 'comparison-value';
    }

    // Update comparison text
    const comparisonTextElement = document.getElementById('comparisonText');
    if (netDifference > 0) {
      comparisonTextElement.textContent = `After ${stayLength} years, buying this property would leave you financially better off compared to renting, considering all costs and the potential appreciation of the property.`;
    } else if (netDifference < 0) {
      comparisonTextElement.textContent = `After ${stayLength} years, renting would leave you financially better off compared to buying this property, considering all costs and the potential investment returns.`;
    } else {
      comparisonTextElement.textContent = `After ${stayLength} years, buying and renting would result in the same financial outcome, considering all costs and potential returns.`;
    }
    
    // Generate and populate the results table
    generateResultsTable(
      housePrice, downPayment, interestRate, mortgageLength, appreciationRate, 
      buyingCosts, sellingCostsRate, maintenanceCostsRate, houseInsurance, 
      lifeInsurance, adminFees, propertyTaxes, rentPayment, rentDeposits, 
      rentIncreaseRate, stayLength, investmentReturn, inflation
    );
  }
  
  // Function to generate and populate the results table
  function generateResultsTable(
    housePrice, downPayment, interestRate, mortgageLength, appreciationRate, 
    buyingCosts, sellingCostsRate, maintenanceCostsRate, houseInsurance, 
    lifeInsurance, adminFees, propertyTaxes, rentPayment, rentDeposits, 
    rentIncreaseRate, stayLength, investmentReturn, inflation
  ) {
    console.log('Generating results table');
    
    // Determine the number of years to show in the table
    const mortgageLengthYears = Math.ceil(mortgageLength / 12);
    const yearsToShow = stayLength;
    
    // Get the table body element
    const tableBody = document.querySelector('#resultsTable tbody');
    tableBody.innerHTML = ''; // Clear existing rows
    
    // Initial calculations
    const financedAmount = housePrice - downPayment;
    const monthlyPayment = calculateMonthlyPayment(financedAmount, interestRate, mortgageLength);
    const annualMaintenanceCosts = housePrice * (maintenanceCostsRate / 100);
    const yearlyHousingExpenses = annualMaintenanceCosts + houseInsurance + lifeInsurance + (adminFees * 12) + propertyTaxes;
    const totalMonthlyHousingExpenses = monthlyPayment + (yearlyHousingExpenses / 12);
    const initialInvestment = downPayment + buyingCosts;
    const monthlySavings = rentPayment - totalMonthlyHousingExpenses;
    
    // Arrays to store data for the chart
    const years = [];
    const buyingNetWorthData = [];
    const rentingNetWorthData = [];
    
    // Generate a row for each year
    for (let year = 1; year <= yearsToShow; year++) {
      // Calculate values for this year
      const yearMonths = year * 12;
      
      // Buying calculations for this year
      const houseFutureValue = calculateFutureValue(housePrice, appreciationRate, year);
      const sellingCosts = houseFutureValue * (sellingCostsRate / 100);
      const totalMortgagePaid = Math.min(yearMonths, mortgageLength) * monthlyPayment;
      const remainingMortgage = financedAmount - totalMortgagePaid;
      const totalHousingExpenses = calculateFutureValueAnnuity(yearlyHousingExpenses, inflation, year);
      
      // Renting calculations for this year
      const finalRent = calculateFutureValue(rentPayment, rentIncreaseRate, year);
      const totalRentPaid = calculateFutureValueAnnuity(rentPayment * 12, rentIncreaseRate, year);
      const rentingInvestmentValue = calculateFutureValue(initialInvestment, investmentReturn, year);
      
      // Calculate savings values
      let buyingSavingsValue = 0;
      let rentingSavingsValue = 0;
      
      if (monthlySavings > 0) {
        // Buying is cheaper monthly
        buyingSavingsValue = calculateFutureValueAnnuity(monthlySavings * 12, investmentReturn, year);
      } else if (monthlySavings < 0) {
        // Renting is cheaper monthly
        rentingSavingsValue = calculateFutureValueAnnuity(Math.abs(monthlySavings) * 12, investmentReturn, year);
      }
      
      // Calculate net worth for this year
      const buyingNetWorth = houseFutureValue - remainingMortgage - sellingCosts - initialInvestment + buyingSavingsValue;
      const rentingNetWorth = rentingInvestmentValue - totalRentPaid + (rentPayment * rentDeposits) + rentingSavingsValue;
      const difference = buyingNetWorth - rentingNetWorth;
      
      // Store data for the chart
      years.push(year);
      buyingNetWorthData.push(buyingNetWorth);
      rentingNetWorthData.push(rentingNetWorth);
      
      // Create a new row
      const row = document.createElement('tr');
      
      // Create and append cells
      const yearCell = document.createElement('td');
      yearCell.textContent = year;
      row.appendChild(yearCell);
      
      const buyingCell = document.createElement('td');
      buyingCell.textContent = formatCurrency(buyingNetWorth);
      buyingCell.className = buyingNetWorth >= 0 ? 'positive-value' : 'negative-value';
      row.appendChild(buyingCell);
      
      const rentingCell = document.createElement('td');
      rentingCell.textContent = formatCurrency(rentingNetWorth);
      rentingCell.className = rentingNetWorth >= 0 ? 'positive-value' : 'negative-value';
      row.appendChild(rentingCell);
      
      const differenceCell = document.createElement('td');
      differenceCell.textContent = formatCurrency(difference);
      differenceCell.className = difference >= 0 ? 'positive-diff' : 'negative-diff';
      row.appendChild(differenceCell);
      
      // Append the row to the table
      tableBody.appendChild(row);
    }
    
    // Create the chart
    createNetWorthChart(years, buyingNetWorthData, rentingNetWorthData);
  }
  
  // Function to create the net worth chart
  function createNetWorthChart(years, buyingData, rentingData) {
    console.log('Creating net worth chart');
    
    try {
      // Get the chart canvas
      const chartCanvas = document.getElementById('netWorthChart');
      if (!chartCanvas) {
        console.error('Chart canvas element not found');
        return;
      }
      
      // Properly destroy existing chart instance if it exists
      if (window.netWorthChart instanceof Chart) {
        window.netWorthChart.destroy();
      } else if (window.netWorthChart) {
        // If it exists but isn't a Chart instance, remove it
        window.netWorthChart = null;
      }
      
      // Calculate min and max values for y-axis
      const allValues = [...buyingData, ...rentingData];
      const minValue = Math.min(...allValues);
      const maxValue = Math.max(...allValues);
      
      // Round min and max to nearest 50,000 for cleaner scale
      const roundedMin = Math.floor(minValue / 50000) * 50000;
      const roundedMax = Math.ceil(maxValue / 50000) * 50000;
      
      // Create the chart
      window.netWorthChart = new Chart(chartCanvas, {
        type: 'line',
        data: {
          labels: years,
          datasets: [
            {
              label: 'Buying Net Worth',
              data: buyingData,
              borderColor: '#34a853', // Google green
              backgroundColor: 'rgba(52, 168, 83, 0.1)',
              borderWidth: 2,
              pointRadius: 3,
              pointHoverRadius: 5,
              fill: true,
              tension: 0.1
            },
            {
              label: 'Renting Net Worth',
              data: rentingData,
              borderColor: '#4285f4', // Google blue
              backgroundColor: 'rgba(66, 133, 244, 0.1)',
              borderWidth: 2,
              pointRadius: 3,
              pointHoverRadius: 5,
              fill: true,
              tension: 0.1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              mode: 'index',
              intersect: false,
              callbacks: {
                label: function(context) {
                  let label = context.dataset.label || '';
                  if (label) {
                    label += ': ';
                  }
                  if (context.parsed.y !== null) {
                    label += formatCurrency(context.parsed.y);
                  }
                  return label;
                }
              }
            },
            legend: {
              position: 'top',
              labels: {
                font: {
                  family: "'Google Sans', sans-serif",
                  size: 14
                }
              }
            },
            title: {
              display: false
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Years',
                font: {
                  family: "'Google Sans', sans-serif",
                  size: 14
                }
              },
              ticks: {
                font: {
                  family: "'Roboto', sans-serif",
                  size: 12
                }
              }
            },
            y: {
              min: roundedMin,
              max: roundedMax,
              grace: '5%',
              title: {
                display: true,
                text: 'Net Worth (€)',
                font: {
                  family: "'Google Sans', sans-serif",
                  size: 14
                }
              },
              ticks: {
                font: {
                  family: "'Roboto', sans-serif",
                  size: 12
                },
                callback: function(value) {
                  return formatCurrency(value);
                }
              }
            }
          },
          interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
          }
        }
      });
    } catch (error) {
      console.error('Error creating chart:', error);
      // Continue execution even if chart creation fails
    }
  }
}); 