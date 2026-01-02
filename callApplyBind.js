function greet (city,country) {
    console.log(`Hello ${this.name} from  ${city}, ${country}`);
}
const user = { name: "Nikhil" };
// greet.call(user,'bangalore','India')
// greet.apply(user,['bangalore','India'])
const greetFunc = greet.bind(user,'Bangalore','India');
greetFunc();