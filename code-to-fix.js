'use strict';
const incomesAndExpenses = Object.freeze([
  { value: 2500, description: 'Salary 💰', familyMember: 'nar' },
  { value: -1200, description: 'Buying iPhone 📱', familyMember: 'nar' },
  {
    value: 50,
    description: 'Sold the old refrigerator 🧊',
    familyMember: 'adelya',
  },
  { value: -40, description: 'Buying groceries 🛒', familyMember: 'adelya' },
  { value: 500, description: 'Freelance income 💰', familyMember: 'nar' },
  { value: 1200, description: 'Salary 💰', familyMember: 'adelya' },
  { value: -50, description: 'Buying a handbag 👜', familyMember: 'adelya' },
  { value: -1050, description: 'Buying a dress 👗', familyMember: 'adelya' },
  { value: -2300, description: 'Buying Macbook 💻', familyMember: 'nar' },
]);

const expenseLimits = Object.freeze({
  nar: 1500,
  adelya: 1100,
});

const getExpenseLimit = (familyMember, limits) =>
  expenseLimits?.[familyMember] ?? 0;

const addExpense = function (state, limits, value, description, familyMember) {
  if (!familyMember) familyMember = 'adelya';
  const lowerFamilyMember = familyMember.toLowerCase();

  // const expenseLimit = expenseLimits[familyMember]
  //   ? expenseLimits[familyMember]
  //   : 0;

  return value <= getExpenseLimit(lowerFamilyMember, limits)
    ? [
        ...state,
        {
          value: -value,
          description: description,
          familyMember: lowerFamilyMember,
        },
      ]
    : state;
};

const incomesAndExpenses1 = addExpense(
  incomesAndExpenses,
  expenseLimits,
  20,
  'sushi 🍱'
);
console.log(incomesAndExpenses1);
const incomesAndExpenses2 = addExpense(
  incomesAndExpenses1,
  expenseLimits,
  200,
  'Going to cinema 🍿',
  'nar'
);
console.log(incomesAndExpenses2);

addExpense(incomesAndExpenses, expenseLimits, 20, 'Sushi 🍱');
addExpense(incomesAndExpenses, expenseLimits, 10, 'Going to cinema 🍿', 'nar');
addExpense(incomesAndExpenses, expenseLimits, 200, 'Something', 'adelya');
// console.log(incomesAndExpenses);

// const checkExpences = function (state, limits) {
//   return state.map(item =>
//     item.value < -getExpenseLimit(item.familyMember, limits)
//       ? { ...item, flag: 'limit' }
//       : item
//   );
//   // for (const item of state)
//   //   if (item.value < -getExpenseLimit(item.familyMember, limits))
//   //     item.flag = 'limit';
// };
const checkExpences = (state, limits) =>
  state.map(item =>
    item.value < -getExpenseLimit(item.familyMember, limits)
      ? { ...item, flag: 'limit' }
      : item
  );

const incomesAndExpenses4 = checkExpences(incomesAndExpenses2, expenseLimits);

console.log(incomesAndExpenses4);

const printVeryBigExpenses = function (state, limit) {
  const output = state
    .filter(item => item.value <= -limit)
    .reduce(
      (acc, currentItem) => `${acc} / ${currentItem.description.slice(-2)}`,
      ''
    )
    .substring(2);
  console.log(output);
  // let output = '';
  // for (const item of incomesAndExpenses) {
  //   output += item.value <= -limit ? `${item.description.slice(-2)} / ` : '';
  // }
  // output = output.slice(0, -2);
  // console.log(output);
};
printVeryBigExpenses(incomesAndExpenses4, 100);
