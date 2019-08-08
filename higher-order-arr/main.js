const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for loop companies

//   for(let i = 0; i < companies.length; i++) {
//       console.log(companies[i]);
//   }
  
// forEach companies

//   companies.forEach(function(company) {
//       console.log(company);
//   })

// for loop ages

// let canDrive = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 15) {
//         canDrive.push(ages[i]);
//     }
// }

// filter ages

// const canDrive = ages.filter(function(age) {
//     if(age >= 15) {
//         return true;
//     }
// })

// filter ages with arrow

// const canDrive = ages.filter(age => age >= 15);

// console.log(canDrive);

// filter companies

// const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//         return true;
//     }
// });

// const retailCompanies = companies.filter(company => company.category === "Retail");

console.log(retailCompanies);

