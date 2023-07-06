const openDialogButton = document.getElementById('openDialogButton');
const modal_container = document.getElementById('modal_container');
const determineButton = document.getElementById('determineButton');
var coffeeTypeElement = document.getElementById('coffeeType');
var resultElement = document.getElementById('result');

openDialogButton.addEventListener('click', () => {
    modal_container.classList.add('show');
});

determineButton.addEventListener('click', () => {
    modal_container.classList.remove('show');
});


determineButton.addEventListener('click', function() {
  var rasa = parseInt(document.getElementById('rasa').value);
  var tekstur = parseInt(document.getElementById('tekstur').value);
  var aroma = parseInt(document.getElementById('aroma').value);
  
  var coffeeType = '';
  
  if (rasa == 5 && tekstur == 2 && aroma == 4) {
    coffeeType = "Espresso <br> <img src='espresso.png'  width='300' height='300'> <br>Kopi hitam murni tanpa campuran apapun yang pasti membuatmu melek";
  } else if (rasa == 4 && tekstur == 3 && aroma == 3) {
    coffeeType = "Cappuccino <br> <img src='capuccino.jpg' width='300' height='300'> <br>Perpaduan antara espresso, susu steamed, dan busa susu cocok untuk memulai harimu";  
  } else if (rasa == 3 && tekstur == 3 && aroma == 3) {
    coffeeType = "Latte <br> <img src='latte.png' width='300' height='300'> <br>Perpaduan antara espresso dan susu steamed memberikan rasa lembut dan tekstur kental cocok untukmu si pemula";
  } else if (rasa == 3 && tekstur == 3 && aroma == 2) {
    coffeeType = "Iced Latte <br> <img src='icedlatte.jpg' width='300' height='300'> <br>Sama seperti Latte tapi ini lebih seger karena pake es batu";
  } else if (rasa == 3 && tekstur == 2 && aroma == 3) {
    coffeeType = "Americano <br> <img src='americano.png' width='300' height='300'> <br>Varian klasik kopi hitam cocok untukmu penikmat pure rasa kopi original yang dominan memiliki rasa pahit";
  } else if (rasa == 4 && tekstur == 2 && aroma == 3) {
    coffeeType = "Macchiato <br> <img src='macchiato.jpeg' width='300' height='300'> <br>Pilihan yang baik untukmu jika ingin rasa kopi yang kuat tetapi ada sedikit tambahan susu";
  } else if (rasa == 4 && tekstur == 4 && aroma == 4) {
    coffeeType = "Mocha <br> <img src='mocha.png' width='300' height='300'> <br>Perpaduan antara espresso dengan coklat cocok untukmu si pecinta coklat";
  } else if (rasa == 4 && tekstur == 4 && aroma == 3) {
    coffeeType = "Affogato <br> <img src='affogato.png' width='300' height='300'> <br>Perpaduan antara es krim dan sedikit espresso cocok untukmu si pecinta kopi dan es krim";
  } else if (rasa == 4 && tekstur == 2 && aroma == 4) {
    coffeeType = "Flat White <br> <img src='flatwhite.jpg' width='300' height='300'> <br>Hampir sama seperti Latte yang cocok untukmu penikmat kopi dan susu yang seimbang ";
    coffeeType.style.borderRadius = '2% 2% 2% 2%';
  } else if (rasa == 3 && tekstur == 4 && aroma == 3) {
    coffeeType = "Frappucino <br> <img src='frappucino.jpg' width='300' height='300'> <br>Campuran antara kopi, es, susu, dan sirup rasa yang dikocok bersama dan dihiasi dengan krim kocok atau saus cocok untukmu yang suka kopi dingin dengan sentuhan manis";
  } else if (rasa == 4 && tekstur == 3 && aroma == 4) {
    coffeeType = "Espresso Frappucino <br> <img src='espressofrappucino.jpg' width='300' height='300'> <br>Varian Frappucino menggunakan espresso sebagai bahan utama memberikan gabungan dingin dan kekentalan cocok untukmu si penggemar Espresso";
  } else if (rasa == 3 && tekstur == 3 && aroma == 4) {
    coffeeType = "Pumpkin Spice Latte <br> <img src='pumpkin.jpg' width='300' height='300'> <br>Kombinasi Espresso, Susu, dan Sirup Pumpkin Spice memberikan minuman dengan sentuhan hangat dan wangi yang khas";
  } else if (rasa == 2 && tekstur == 3 && aroma == 4) {
    coffeeType = "Pandan Latte <br> <img src='pandan.jpg' width='300' height='300'> <br>Sama seperti Latte dengan rasa dan aroma pandan cocok untukmu yang suka kopi dengan sentuhan rasa tradisional Indonesia";
  } else {
    coffeeType = 'Unknown';
  }
  
  coffeeTypeElement.innerHTML = coffeeType;
  resultElement.classList.remove('hidden');
  
  modal_container.close();
});
