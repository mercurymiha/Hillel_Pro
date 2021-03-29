//1
let name = 'Sergej'
let surname = 'Miheev'
let sex = 'Male'
let my_color = 'Black'
let hobby = 'Dota 2, UFC'
let age = 22
let weight = 90
let faction = 'Dire'
let eyes_color = 'Red'
let amount_of_brains = null
let is_alive = true
let list = [name, surname, sex, my_color, hobby, age, weight, faction, eyes_color, amount_of_brains, is_alive];
list.forEach(item => console.log(item, typeof item));

//2
let Miha = {
    age: 22,
    sex: 'Male',
    faction: 'Dire',
    eyes_color: 'Red',
    is_alive: false,
    is_hillel_student: true
}
console.log(Miha);
 
//3
alert('Здрасте! Ответьте на пару вопросов!!! Буду благодарен!')
alert('И так, начнем!!!')
let q_name = prompt('Как по именни вашему ?')
let who_are_you = prompt('Кто по жизни ?')
let dota_2 = confirm('Играешь в доту ?')
if (dota_2){
    var hero = prompt('Кем поднимаешь MMR ?')
    var is_go_dota = confirm('Го в пати ?')
    alert('Супер !')
    alert('Спасибо за внимение !')
} else {
    var not_understood = confirm('Вот так вот да ?')
    if (not_understood){
        var is_go_dota = '"Го в пати ?"'
        alert(`Фиг тебе а не ${is_go_dota}!`)
    } else {
        alert('Спасибо за опрос !')
    }
}
let answers_list = [q_name, who_are_you, dota_2, hero, is_go_dota, not_understood]
answers_list.forEach(item => console.log(item));