const xhr = new XMLHttpRequest();
xhr.open('GET', 'dados.json', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const dados = JSON.parse(xhr.responseText);
    console.log(dados);
  }
};
xhr.send();