// Translations object
const translations = {
  en: {
    // Page title
    "pageTitle": "Buy vs Rent Calculator",
    "description": "Deciding whether to buy a home or continue renting is rarely straightforward. This calculator helps you compare the long-term financial outcomes of both options by considering multiple factors: property appreciation, mortgage terms, maintenance costs, investment returns, and more. Enter your specific details below to see which choice might be better for your financial future.",
    
    // Tabs
    "inputsTab": "Inputs",
    "resultsTab": "Results",
    "exportBtn": "Export",
    
    // Property Purchase Details
    "propertyPurchaseDetails": "Property Purchase Details",
    "housePrice": "House Price",
    "downPayment": "Down Payment",
    "interestRate": "Interest Rate",
    "interestRateTooltip": "Annual interest rate for your mortgage. This is the percentage charged by the lender on the loan amount.",
    "mortgageLength": "Mortgage Length",
    "mortgageLengthTooltip": "The total duration of your mortgage in months. A 30-year mortgage would be 360 months.",
    "appreciationRate": "Home Appreciation Rate",
    "appreciationRateTooltip": "The annual percentage at which you expect the property value to increase. Historical average in many markets is 3-5%.",
    "buyingCosts": "Buying Costs",
    "buyingCostsTooltip": "Costs associated with purchasing the property (notary, taxes, etc.)",
    "sellingCosts": "Selling Costs",
    "sellingCostsTooltip": "Costs associated with selling the property (agent fees, taxes, etc.)",
    
    // Ongoing Housing Expenses
    "ongoingHousingExpenses": "Ongoing Housing Expenses",
    "maintenanceCosts": "Maintenance & Renovation",
    "maintenanceCostsTooltip": "Annual costs for maintaining and renovating the property, expressed as a percentage of the home value. A common rule of thumb is 1% of the property value per year.",
    "houseInsurance": "House Insurance",
    "houseInsuranceTooltip": "Annual cost of insuring your property against damage, theft, and other risks.",
    "lifeInsurance": "Life Insurance",
    "lifeInsuranceTooltip": "Annual cost of life insurance often required by mortgage lenders to ensure the loan can be repaid in case of death.",
    "adminFees": "Building Administration Fees",
    "adminFeesTooltip": "Monthly fees paid to a homeowners association or building management for common area maintenance and services.",
    "propertyTaxes": "Property Taxes",
    "propertyTaxesTooltip": "Annual taxes levied by local governments based on the assessed value of your property.",
    
    // Rental Details
    "rentalDetails": "Rental Details",
    "rentPayment": "Monthly Rent",
    "rentPaymentTooltip": "The initial monthly rent payment for a comparable property to the one you're considering buying.",
    "rentDeposits": "Number of Deposits",
    "rentDepositsTooltip": "The number of months' rent required as a security deposit. This is typically 1-3 months depending on location.",
    "rentIncreaseRate": "Rent Increase Rate",
    "rentIncreaseRateTooltip": "Rent won't remain the same for the entirety of your stay. It's expected to increase annually at a rate similar to inflation, usually 2-3% per year in most markets.",
    
    // General Parameters
    "generalParameters": "General Parameters",
    "stayLength": "Stay Length",
    "stayLengthTooltip": "The number of years you plan to live in the property. This is a critical factor in the buy vs. rent decision, as shorter stays often favor renting.",
    "investmentReturn": "Investment Return",
    "investmentReturnTooltip": "Expected annual return rate if investing in the market instead of buying property. This represents what your down payment and other costs could earn if invested elsewhere. Historical stock market returns average around 7-10% before inflation.",
    "inflation": "Inflation Rate",
    "inflationTooltip": "The annual rate at which the purchasing power of money decreases. This affects future costs and values. Central banks typically target around 2% inflation.",
    
    // Buttons
    "calculateBtn": "Calculate",
    "backToInputsBtn": "Back to Inputs",
    
    // Results - Buying Scenario
    "buyingScenario": "Buying Scenario",
    "financedAmount": "Financed Amount",
    "financedAmountTooltip": "The amount borrowed from the lender. Calculated as the house price minus your down payment.",
    "monthlyPayment": "Monthly Mortgage Payment",
    "monthlyPaymentTooltip": "Your regular monthly payment to the lender. Calculated based on the financed amount, interest rate, and mortgage length.",
    "yearlyHousingExpenses": "Annual Housing Expenses",
    "yearlyHousingExpensesTooltip": "Yearly costs beyond the mortgage payment. Includes maintenance, insurance, property taxes, and administration fees.",
    "totalMonthlyHousingExpenses": "Total Monthly Housing Expenses",
    "totalMonthlyHousingExpensesTooltip": "The complete monthly cost of homeownership. Combines the mortgage payment with a monthly portion of the annual housing expenses.",
    "totalMortgagePaid": "Total Mortgage Paid",
    "totalMortgagePaidTooltip": "The total amount paid toward the mortgage during your stay. Calculated as the monthly payment multiplied by the number of months (limited by mortgage length).",
    "totalHousingExpenses": "Total Housing Expenses",
    "totalHousingExpensesTooltip": "The sum of all non-mortgage housing costs over your stay period, adjusted for inflation.",
    "houseFutureValue": "House Future Value",
    "houseFutureValueTooltip": "The estimated value of your property at the end of your stay. Calculated using the home appreciation rate over the stay period.",
    "totalHousingExpenditure": "Total Housing Expenditure",
    "totalHousingExpenditureTooltip": "The total amount spent on housing during your stay. Includes down payment, buying costs, mortgage payments, housing expenses, and selling costs.",
    
    // Monthly savings from buying
    "monthlySavingsFromBuying": "Monthly Savings from Buying",
    "buyingMonthlySavings": "Monthly Savings (Rent - Buying)",
    "buyingMonthlySavingsTooltip": "The monthly amount saved by buying instead of renting. Calculated as the difference between monthly rent and total monthly housing expenses.",
    "buyingSavingsFutureValue": "Future Value of Monthly Savings",
    "buyingSavingsFutureValueTooltip": "The potential value of your monthly savings if invested at the specified investment return rate over your stay period.",
    
    // Net result
    "netResultAfterStayPeriod": "Net Result After Stay Period",
    "buyingNetWorthTooltip": "Your financial position at the end of your stay if you buy. Includes the house value minus remaining mortgage, selling costs, initial investment, plus any investment returns from monthly savings.",
    
    // Results - Renting Scenario
    "rentingScenario": "Renting Scenario",
    "initialRent": "Initial Monthly Rent",
    "initialRentTooltip": "The starting monthly rent payment for a comparable property.",
    "totalRentDeposits": "Total Rent Deposits",
    "totalRentDepositsTooltip": "The security deposit paid at the beginning of your rental. Calculated as the initial monthly rent multiplied by the number of deposits.",
    "finalRent": "Final Monthly Rent",
    "finalRentTooltip": "The estimated monthly rent at the end of your stay period. Calculated using the rent increase rate over the stay period.",
    "totalRentPaid": "Total Rent Paid",
    "totalRentPaidTooltip": "The total amount paid in rent over your stay period, accounting for annual rent increases.",
    "rentingInvestmentValue": "Future Value of Initial Investment",
    "rentingInvestmentValueTooltip": "The potential value of the down payment and buying costs if invested in the market instead of buying property. Calculated using the investment return rate over the stay period.",
    
    // Monthly savings from renting
    "monthlySavingsFromRenting": "Monthly Savings from Renting",
    "rentingMonthlySavings": "Monthly Savings (Buying - Rent)",
    "rentingMonthlySavingsTooltip": "The monthly amount saved by renting instead of buying. Calculated as the difference between total monthly housing expenses and monthly rent.",
    "rentingSavingsFutureValue": "Future Value of Monthly Savings",
    "rentingSavingsFutureValueTooltip": "The potential value of your monthly savings if invested at the specified investment return rate over your stay period.",
    
    // Net result
    "rentingNetWorthTooltip": "Your financial position at the end of your stay if you rent. Includes the future value of your initial investment, minus total rent paid, plus security deposits returned, and any investment returns from monthly savings.",
    
    // Comparison
    "buyVsRentComparison": "Buy vs Rent Comparison",
    "buyVsRentComparisonTooltip": "The final comparison between buying and renting based on the net financial outcome after your stay period.",
    "buyingIsBetter": "Buying is better by",
    "rentingIsBetter": "Renting is better by",
    "financiallyEquivalent": "Buying and renting are financially equivalent",
    "buyingBetterText": "After {years} years, buying this property would leave you financially better off compared to renting, considering all costs and the potential appreciation of the property.",
    "rentingBetterText": "After {years} years, renting would leave you financially better off compared to buying this property, considering all costs and the potential investment returns.",
    "equivalentText": "After {years} years, buying and renting would result in the same financial outcome, considering all costs and potential returns.",
    
    // Net Results Over Time
    "netResultsOverTime": "Net Results Over Time",
    "netResultsOverTimeTooltip": "This table shows how the net financial position for buying and renting changes each year throughout the analysis period.",
    "year": "Year",
    "buyingNetResult": "Buying Net Result",
    "rentingNetResult": "Renting Net Result",
    "difference": "Difference",
    
    // Chart
    "netResultComparison": "Net Result comparison",
    "netResultComparisonTooltip": "This chart visualizes how the net worth for buying and renting changes over time, helping you identify the crossover point where one option becomes better than the other.",
    "buyingNetWorth": "Buying Net Worth",
    "rentingNetWorth": "Renting Net Worth",
    "netWorth": "Net Worth (€)",
    "years": "Years",
    
    // Export
    "exportResults": "Buy vs Rent Calculation Results",
    "parameter": "Parameter",
    "value": "Value",
    "exportToExcel": "Export to Excel",
    
    // Footer
    "createdWith": "Created with ❤️ by",
  },
  
  pt: {
    // Page title
    "pageTitle": "Calculadora de Comprar vs Alugar",
    "description": "Decidir entre comprar uma casa ou continuar alugando raramente é simples. Esta calculadora ajuda a comparar os resultados financeiros a longo prazo de ambas as opções, considerando múltiplos fatores: valorização do imóvel, condições do empréstimo, custos de manutenção, retornos de investimento e mais. Insira seus detalhes específicos abaixo para ver qual escolha pode ser melhor para seu futuro financeiro.",
    
    // Tabs
    "inputsTab": "Entradas",
    "resultsTab": "Resultados",
    "exportBtn": "Exportar",
    
    // Property Purchase Details
    "propertyPurchaseDetails": "Detalhes da Compra do Imóvel",
    "housePrice": "Preço do Imóvel",
    "downPayment": "Entrada",
    "interestRate": "Taxa de Juros",
    "interestRateTooltip": "Taxa de juros anual para seu empréstimo. Esta é a porcentagem cobrada pelo credor sobre o valor do empréstimo.",
    "mortgageLength": "Duração do Empréstimo",
    "mortgageLengthTooltip": "A duração total do seu empréstimo em meses. Um empréstimo de 30 anos seria 360 meses.",
    "appreciationRate": "Taxa de Valorização do Imóvel",
    "appreciationRateTooltip": "A porcentagem anual em que você espera que o valor do imóvel aumente. A média histórica em muitos mercados é de 3-5%.",
    "buyingCosts": "Custos de Compra",
    "buyingCostsTooltip": "Custos associados à compra do imóvel (escritura, impostos, etc.)",
    "sellingCosts": "Custos de Venda",
    "sellingCostsTooltip": "Custos associados à venda do imóvel (comissões de agentes, impostos, etc.)",
    
    // Ongoing Housing Expenses
    "ongoingHousingExpenses": "Despesas Contínuas de Habitação",
    "maintenanceCosts": "Manutenção e Renovação",
    "maintenanceCostsTooltip": "Custos anuais para manutenção e renovação do imóvel, expressos como uma porcentagem do valor do imóvel. Uma regra comum é 1% do valor do imóvel por ano.",
    "houseInsurance": "Seguro Residencial",
    "houseInsuranceTooltip": "Custo anual de seguro do seu imóvel contra danos, roubo e outros riscos.",
    "lifeInsurance": "Seguro de Vida",
    "lifeInsuranceTooltip": "Custo anual do seguro de vida frequentemente exigido pelos credores para garantir que o empréstimo possa ser pago em caso de morte.",
    "adminFees": "Taxas de Administração do Condomínio",
    "adminFeesTooltip": "Taxas mensais pagas a uma associação de proprietários ou administração de condomínio para manutenção de áreas comuns e serviços.",
    "propertyTaxes": "Impostos sobre o Imóvel",
    "propertyTaxesTooltip": "Impostos anuais cobrados pelos governos locais com base no valor avaliado do seu imóvel.",
    
    // Rental Details
    "rentalDetails": "Detalhes do Aluguel",
    "rentPayment": "Aluguel Mensal",
    "rentPaymentTooltip": "O pagamento mensal inicial de aluguel para um imóvel comparável ao que você está considerando comprar.",
    "rentDeposits": "Número de Depósitos",
    "rentDepositsTooltip": "O número de meses de aluguel exigidos como caução. Isso geralmente é de 1-3 meses, dependendo da localização.",
    "rentIncreaseRate": "Taxa de Aumento do Aluguel",
    "rentIncreaseRateTooltip": "O aluguel não permanecerá o mesmo durante toda a sua estadia. Espera-se que aumente anualmente a uma taxa semelhante à inflação, geralmente 2-3% ao ano na maioria dos mercados.",
    
    // General Parameters
    "generalParameters": "Parâmetros Gerais",
    "stayLength": "Duração da Estadia",
    "stayLengthTooltip": "O número de anos que você planeja morar no imóvel. Este é um fator crítico na decisão de comprar vs. alugar, pois estadias mais curtas geralmente favorecem o aluguel.",
    "investmentReturn": "Retorno do Investimento",
    "investmentReturnTooltip": "Taxa de retorno anual esperada se investir no mercado em vez de comprar um imóvel. Isso representa o que sua entrada e outros custos poderiam render se investidos em outro lugar. Os retornos históricos do mercado de ações têm média de cerca de 7-10% antes da inflação.",
    "inflation": "Taxa de Inflação",
    "inflationTooltip": "A taxa anual em que o poder de compra do dinheiro diminui. Isso afeta custos e valores futuros. Os bancos centrais geralmente têm como meta uma inflação de cerca de 2%.",
    
    // Buttons
    "calculateBtn": "Calcular",
    "backToInputsBtn": "Voltar para Entradas",
    
    // Results - Buying Scenario
    "buyingScenario": "Cenário de Compra",
    "financedAmount": "Valor Financiado",
    "financedAmountTooltip": "O valor emprestado do credor. Calculado como o preço do imóvel menos sua entrada.",
    "monthlyPayment": "Pagamento Mensal do Empréstimo",
    "monthlyPaymentTooltip": "Seu pagamento mensal regular ao credor. Calculado com base no valor financiado, taxa de juros e duração do empréstimo.",
    "yearlyHousingExpenses": "Despesas Anuais de Habitação",
    "yearlyHousingExpensesTooltip": "Custos anuais além do pagamento do empréstimo. Inclui manutenção, seguros, impostos sobre o imóvel e taxas de administração.",
    "totalMonthlyHousingExpenses": "Despesas Mensais Totais de Habitação",
    "totalMonthlyHousingExpensesTooltip": "O custo mensal completo da propriedade. Combina o pagamento do empréstimo com uma porção mensal das despesas anuais de habitação.",
    "totalMortgagePaid": "Total Pago do Empréstimo",
    "totalMortgagePaidTooltip": "O valor total pago para o empréstimo durante sua estadia. Calculado como o pagamento mensal multiplicado pelo número de meses (limitado pela duração do empréstimo).",
    "totalHousingExpenses": "Despesas Totais de Habitação",
    "totalHousingExpensesTooltip": "A soma de todos os custos de habitação não relacionados ao empréstimo durante o período de estadia, ajustados pela inflação.",
    "houseFutureValue": "Valor Futuro do Imóvel",
    "houseFutureValueTooltip": "O valor estimado do seu imóvel no final da sua estadia. Calculado usando a taxa de valorização do imóvel durante o período de estadia.",
    "totalHousingExpenditure": "Despesa Total com Habitação",
    "totalHousingExpenditureTooltip": "O valor total gasto com habitação durante sua estadia. Inclui entrada, custos de compra, pagamentos do empréstimo, despesas de habitação e custos de venda.",
    
    // Monthly savings from buying
    "monthlySavingsFromBuying": "Economias Mensais da Compra",
    "buyingMonthlySavings": "Economias Mensais (Aluguel - Compra)",
    "buyingMonthlySavingsTooltip": "O valor mensal economizado ao comprar em vez de alugar. Calculado como a diferença entre o aluguel mensal e as despesas mensais totais de habitação.",
    "buyingSavingsFutureValue": "Valor Futuro das Economias Mensais",
    "buyingSavingsFutureValueTooltip": "O valor potencial de suas economias mensais se investidas na taxa de retorno de investimento especificada durante o período de estadia.",
    
    // Net result
    "netResultAfterStayPeriod": "Resultado Líquido Após Período de Estadia",
    "buyingNetWorthTooltip": "Sua posição financeira no final da sua estadia se você comprar. Inclui o valor do imóvel menos o empréstimo restante, custos de venda, investimento inicial, mais quaisquer retornos de investimento das economias mensais.",
    
    // Results - Renting Scenario
    "rentingScenario": "Cenário de Aluguel",
    "initialRent": "Aluguel Mensal Inicial",
    "initialRentTooltip": "O pagamento mensal inicial de aluguel para um imóvel comparável.",
    "totalRentDeposits": "Total de Depósitos de Aluguel",
    "totalRentDepositsTooltip": "O depósito de segurança pago no início do seu aluguel. Calculado como o aluguel mensal inicial multiplicado pelo número de depósitos.",
    "finalRent": "Aluguel Mensal Final",
    "finalRentTooltip": "O aluguel mensal estimado no final do seu período de estadia. Calculado usando a taxa de aumento do aluguel durante o período de estadia.",
    "totalRentPaid": "Total de Aluguel Pago",
    "totalRentPaidTooltip": "O valor total pago em aluguel durante o período de estadia, considerando aumentos anuais de aluguel.",
    "rentingInvestmentValue": "Valor Futuro do Investimento Inicial",
    "rentingInvestmentValueTooltip": "O valor potencial da entrada e custos de compra se investidos no mercado em vez de comprar um imóvel. Calculado usando a taxa de retorno de investimento durante o período de estadia.",
    
    // Monthly savings from renting
    "monthlySavingsFromRenting": "Economias Mensais do Aluguel",
    "rentingMonthlySavings": "Economias Mensais (Compra - Aluguel)",
    "rentingMonthlySavingsTooltip": "O valor mensal economizado ao alugar em vez de comprar. Calculado como a diferença entre as despesas mensais totais de habitação e o aluguel mensal.",
    "rentingSavingsFutureValue": "Valor Futuro das Economias Mensais",
    "rentingSavingsFutureValueTooltip": "O valor potencial de suas economias mensais se investidas na taxa de retorno de investimento especificada durante o período de estadia.",
    
    // Net result
    "rentingNetWorthTooltip": "Sua posição financeira no final da sua estadia se você alugar. Inclui o valor futuro do seu investimento inicial, menos o total de aluguel pago, mais depósitos de segurança devolvidos e quaisquer retornos de investimento das economias mensais.",
    
    // Comparison
    "buyVsRentComparison": "Comparação Comprar vs Alugar",
    "buyVsRentComparisonTooltip": "A comparação final entre comprar e alugar com base no resultado financeiro líquido após o período de estadia.",
    "buyingIsBetter": "Comprar é melhor em",
    "rentingIsBetter": "Alugar é melhor em",
    "financiallyEquivalent": "Comprar e alugar são financeiramente equivalentes",
    "buyingBetterText": "Após {years} anos, comprar este imóvel deixaria você financeiramente melhor em comparação com alugar, considerando todos os custos e a potencial valorização do imóvel.",
    "rentingBetterText": "Após {years} anos, alugar deixaria você financeiramente melhor em comparação com comprar este imóvel, considerando todos os custos e os potenciais retornos de investimento.",
    "equivalentText": "Após {years} anos, comprar e alugar resultariam no mesmo resultado financeiro, considerando todos os custos e retornos potenciais.",
    
    // Net Results Over Time
    "netResultsOverTime": "Resultados Líquidos ao Longo do Tempo",
    "netResultsOverTimeTooltip": "Esta tabela mostra como a posição financeira líquida para comprar e alugar muda a cada ano ao longo do período de análise.",
    "year": "Ano",
    "buyingNetResult": "Resultado Líquido da Compra",
    "rentingNetResult": "Resultado Líquido do Aluguel",
    "difference": "Diferença",
    
    // Chart
    "netResultComparison": "Comparação de Resultado Líquido",
    "netResultComparisonTooltip": "Este gráfico visualiza como o patrimônio líquido para comprar e alugar muda ao longo do tempo, ajudando você a identificar o ponto de cruzamento onde uma opção se torna melhor que a outra.",
    "buyingNetWorth": "Patrimônio Líquido da Compra",
    "rentingNetWorth": "Patrimônio Líquido do Aluguel",
    "netWorth": "Patrimônio Líquido (€)",
    "years": "Anos",
    
    // Export
    "exportResults": "Resultados do Cálculo de Comprar vs Alugar",
    "parameter": "Parâmetro",
    "value": "Valor",
    "exportToExcel": "Exportar para Excel",
    
    // Footer
    "createdWith": "Criado com ❤️ por",
  }
};

// Function to translate the page
function translatePage(lang) {
  // Set the active language
  document.documentElement.setAttribute('lang', lang);
  
  // Translate all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Translate all tooltips
  document.querySelectorAll('[data-i18n-tooltip]').forEach(element => {
    const key = element.getAttribute('data-i18n-tooltip');
    if (translations[lang][key]) {
      const tooltipSpan = element.querySelector('.tooltip-text');
      if (tooltipSpan) {
        tooltipSpan.textContent = translations[lang][key];
      }
    }
  });
  
  // Update page title
  document.title = translations[lang].pageTitle;
  
  // Save language preference
  localStorage.setItem('buyVsRentLanguage', lang);
  
  // Update chart labels if chart exists
  if (window.netWorthChart) {
    updateChartLabels(lang);
  }
}

// Function to update chart labels
function updateChartLabels(lang) {
  if (!window.netWorthChart) return;
  
  // Update dataset labels
  window.netWorthChart.data.datasets[0].label = translations[lang].buyingNetWorth;
  window.netWorthChart.data.datasets[1].label = translations[lang].rentingNetWorth;
  
  // Update axis labels
  window.netWorthChart.options.scales.x.title.text = translations[lang].years;
  window.netWorthChart.options.scales.y.title.text = translations[lang].netWorth;
  
  // Update chart
  window.netWorthChart.update();
}

// Initialize language selector
document.addEventListener('DOMContentLoaded', function() {
  // Load saved language
  const savedLanguage = localStorage.getItem('buyVsRentLanguage') || 'en';
  
  // Set active language option
  document.querySelectorAll('.language-option').forEach(option => {
    if (option.getAttribute('data-lang') === savedLanguage) {
      option.classList.add('active');
    } else {
      option.classList.remove('active');
    }
  });
  
  // Add click event listeners to language options
  document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      
      // Update active class
      document.querySelectorAll('.language-option').forEach(opt => {
        opt.classList.remove('active');
      });
      this.classList.add('active');
      
      // Translate the page
      translatePage(lang);
    });
  });
  
  // Initial translation
  translatePage(savedLanguage);
}); 