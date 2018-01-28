

interface User {
  name: string;
  tel: string;
  age: number;
}

let state: User = {
  name: "Ichiro Morita",
  tel: "893-893893",
  age: 32
};state = {...state, tel: "4643-893"}

console.log(state);

function updateUser(newState: Partial<User>) {
  state = {...state, ...newState}
}

updateUser({age: 35})

console.log(state);


