function popup(day) {
    // Seu array de dados JSON
    var jsonData = [
      { "day": "mon", "amount": 17.45 },
      { "day": "tue", "amount": 34.91 },
      { "day": "wed", "amount": 52.36 },
      { "day": "thu", "amount": 31.07 },
      { "day": "fri", "amount": 23.39 },
      { "day": "sat", "amount": 43.28 },
      { "day": "sun", "amount": 25.48 }
    ];

    // Encontrar o objeto correspondente ao dia
    var dayData = jsonData.find(item => item.day === day);

    // Exibir o valor ao passar o mouse
    var day1 = document.getElementById(`${day}1`) 
    day1.innerHTML =  " $" + dayData.amount.toFixed(2)
    day1.style.padding = '2px'
    day1.style.display = 'block'
  }

function esconderpopup(day){
    var day1 = document.getElementById(`${day}1`) 
    day1.style.display = 'none'
}

