// Task 1 - Customer Invoice Calculation
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total.toFixed(2)}`);
}

// Test Cases
calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"

// Task 2: Employee Hourly Wage Calculation

// Function Expression to Calculate Hourly Wage
const calculateHourlyWage = function (salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};

// Test Cases
console.log(calculateHourlyWage(52000, 40)); // Expected output: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // Expected output: "Hourly Wage: $41.21"

// Task 3: Customer Loyalty Discount

// Arrow Function to Calculate Loyalty Discount
const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;
    let discountedPrice = amount * (1 - discountRate);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
};

// Test Cases
console.log(calculateLoyaltyDiscount(100, 6)); // Expected output: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected output: "Discounted Price: $190.00"

// Task 4: Product Shipping Cost Calculation

// Function to Calculate Shipping Cost
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost = location === "USA" ? 5 + (0.5 * weight) : 
                   location === "Canada" ? 10 + (0.7 * weight) : 0;

    if (expedited) {
        baseCost += 10; // Additional expedited shipping fee
    }

    return `Shipping Cost: $${baseCost.toFixed(2)}`;
}

// Test Cases
console.log(calculateShippingCost(10, "USA", true)); // Expected output: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected output: "Shipping Cost: $13.50"

// Task 5: Business Loan Interest Calculation

// Function to Calculate Business Loan Interest
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;
}

// Test Cases
console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected output: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected output: "Total Interest: $1750.00"

// Task 6: Filtering High-Value Transactions

// Function to filter high-value transactions
function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}

// Test Data
let transactions = [500, 1200, 3000, 800, 2200];

// Calling the function with filter condition
let highValueTransactions = filterHighValueTransactions(transactions, amount => amount > 1000);

// Logging the filtered transactions
console.log("High Value Transactions: ", highValueTransactions); // Expected output: [1200, 3000, 2200]

// Task 7: Budget Tracker (Closures)

// Function to create a budget tracker
function createBudgetTracker() {
    let balance = 0;  // Initial balance is 0

    // The returned function will allow us to add expenses
    return function(expense) {
        balance -= expense; // Deducting the expense from balance
        console.log("Current Balance: $" + balance);  // Logging the current balance
    };
}

// Test Data
let budget = createBudgetTracker(); // Create a new budget tracker

// Adding expenses and tracking balance
budget(300); // Expected output: "Current Balance: -$300"
budget(200); // Expected output: "Current Balance: -$500"

// Task 8: Business Growth Projection
function calculateGrowth(years, revenue) {
    // Base case: if years are 10 or more, return the projected revenue
    if (years >= 10) {
      return `Projected Revenue: $${revenue.toFixed(2)}`;
    }
    // Recursive case: increase revenue by 5% and call the function again
    return calculateGrowth(years + 1, revenue * 1.05);
  }
  
  // Test cases
  console.log(calculateGrowth(8, 1000));  // Expected output: "Projected Revenue: $1102.50"
  console.log(calculateGrowth(5, 5000));  // Expected output: "Projected Revenue: $6381.41"
  
