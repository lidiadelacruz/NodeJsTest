const creditorData = require("./server/db/model/creditorData");

const seed = async () => {

  try {
    await db.sync({ force: true });

  const data = await creditorData.create([
    {
      id: 1,
      creditorName: "CBNA",
      firstName: "Suman",
      lastName: "Tester79",
      minPaymentPercentage: 2.00,
      balance: 1363.00
    },
    {
      id: 2,
      creditorName: "AMEX",
      firstName: "Suman",
      lastName: "Tester79",
      minPaymentPercentage: 2.00,
      balance: 2763.00
    },
    {
      id: 3,
      creditorName: "AMEX",
      firstName: "Suman",
      lastName: "Tester79",
      minPaymentPercentage: 2.00,
      balance: 429.00
    },
    {
      id: 4,
      creditorName: "AMEX",
      firstName: "Suman",
      lastName: "Tester79",
      minPaymentPercentage: 2.00,
      balance: 1363.00
    },
    {
      id: 5,
      creditorName: "DISCOVERBANK",
      firstName: "Suman",
      lastName: "Tester79",
      minPaymentPercentage: 2.00,
      balance: 2644.00
    },
    {
      id: 6,
      creditorName: "CAPITAL ONE",
      firstName: "Suman",
      lastName: "Tester79",
      minPaymentPercentage: 4.00,
      balance: 5464.00
    },
    {
      id: 7,
      creditorName: "CAPITAL ONE",
      firstName: "Suman",
      lastName: "Tester79",
      minPaymentPercentage: 4.00,
      balance: 2345.00
    },
    {
      id: 8,
      creditorName: "CAPITAL ONE",
      firstName: "Suman",
      lastName: "Tester79",
      minPaymentPercentage: 4.00,
      balance: 836.00
    },
    {
      id: 9,
      creditorName: "CBNA",
      firstName: "Suman",
      lastName: "Tester79",
      minPaymentPercentage: 3.50,
      balance: 687.00
    },
    {
      id: 10,
      creditorName: "CBNA",
      firstName: "Suman",
      lastName: "Tester79",
      minPaymentPercentage: 3.50,
      balance: 235.00
    }
  ])


  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch(err => {
      console.error(red("Oh no! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
