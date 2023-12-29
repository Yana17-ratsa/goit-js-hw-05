const getTotalBalanceByGender = (users, gender) => {
    let total = 0;
    const result = users.filter((item) => item.gender === gender).reduce((acc, item) => acc + item.balance, 0);
    return result;

}

const allUsersCheck = [
    {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",  
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(allUsersCheck, "male")); // 12053

console.log(getTotalBalanceByGender(allUsersCheck, "female")); // 8863