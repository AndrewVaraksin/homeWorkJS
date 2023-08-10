
// let firstName = 'Andrew'
// let lastName = 'Varaksin'
// let age = 33
// let myWeight = 80
// let myHeaight = 180
// console.log(firstName, lastName, age, 'y.o,', myWeight, 'kg,', myHeaight, 'cm')


let age = prompt('Введите ваш возраст')

// if (age >= 18){
//   console.log('Вы совершеннолетний')
// } else {
//   console.log('Вам еще нет 18')
// }


// age >= 18 ? console.log('Вы совершеннолетний') : console.log('Вам еще нет 18')

switch (true) {
  case age < 18:
    alert('Вам еще нет 18');
    break;
  case age >= 18 && age <= 29:
    alert('Вы совершеннолетний');
    break;
  case age >= 30:
    alert('Вы пенсионер');
    break;
  default:
    alert('мдааа');
}