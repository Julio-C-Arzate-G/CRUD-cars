const cars = [
  {
    id:1,
    brand: 'Bugatti',
    model: 'La Voiture Noire',
    color: 'Black',
    year: 2019,
    price: '$18.68 million',
    photo: '<img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Bugatti_La_Voiture_Noire_Genf_2019_1Y7A5873.jpg" width= 150px height= 100px>'
    
  },
  {
    id:2,
    brand: 'Pagani ',
    model: 'Zonda HP Barchetta',
    color: 'Metallic Blue',
    year: 2018,
    price: '$17.5 million',
    photo: '<img src="https://imageresizer.static9.net.au/siPTOs3IkMXZqA0zBj39ygn4P4I=/800x0/smart/https%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2F2018%2F07%2F26%2F16%2F48%2Fzonda-hero.jpg" width= 150px height= 100px>'
  },
  {
    id:3,
    brand: 'Rolls Royce',
    model: 'Sweptail',
    color: 'Ocean Blue',
    year: 2013,
    price: '$13 million',
    photo: '<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-centodieci-1565813005.jpg?crop=0.795xw:0.527xh;0.145xw,0.473xh&resize=1200:*" width= 150px height= 100px>'
  },
  {
    id:4,
    brand: 'Bugatti ',
    model: 'Centodieci',
    color: 'White',
    year: 2019,
    price: '$9 million',
    photo: '<img src="https://moneyinc.com/wp-content/uploads/2018/10/Rolls-Royce-Sweptail-1-750x499.jpg" width= auto height= 100px>'
    
  },
  {
    id:5,
    brand: 'Mercedes-Benz',
    model: 'Maybach Exelero',
    color: 'Black',
    year: 2019,
    price: '$8 million',
    photo: '<img src="https://cdn.topgear.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/08/maybach-exelero.jpg?itok=qG1LOtb8" width= 150px height= 100px>'
    
  },
  {
    id:6,
    brand: 'Lamborghini',
    model: 'Veneno Roadster',
    color: 'Red',
    year: 2016,
    price: '$ 8.3 million',
    photo: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg/1024px-Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg" width= auto height= 100px>'
  },
];

function printCars() {
  //1)Obtener el elemento donde quiero poner los carros
  // 2)Generar el HTML de los carros
  // 3)Poner el HTML en el elemento obtenido
  const container = document.getElementById('container-users');
  let html = '';
  cars.forEach((car) => {
    html += ` <tr>
                <td>${car.brand}</td>
                <td>${car.model}</td>
                <td>${car.color}</td>
                <td>${car.year}</td>
                <td>${car.price}</td>
                <td>${car.photo}</td>
                <td>
                  <button onclick="deleteCar(${car.id})" 
                  class="btn btn-outline-danger">
                  Delete
                  </button>
                </td>
              </tr>`;
  });
  container.innerHTML = html;
}
function deleteCar(id) {


  const index = cars.findIndex((car) => car.id == id )
  cars.splice(index,1);
  alert(`The car ${id} will be eliminated`)
  printCars();
}

function addCars() {
  // obtener el valor del input
  // agregar el car al arreglo
  // imprimir nuevamente el car

  // const inputBrand = document.getElementById('brand');
  // const brand = inputBrand.value;
  const brand = document.getElementById('brand').value;
  const model = document.getElementById('model').value;
  const color = document.getElementById('color').value;
  const year = document.getElementById('year').value;
  const price = document.getElementById('price').value;
  const id = cars [cars.length - 1].id + 1;

  const newCar = {
    brand: brand,
    // model: model, es igual que solo poner model ya que el la propiedad y el id son iguales
    model,
    color,
    year,
    price,
    id
  }
  cars.push(newCar);
  printCars();

  document.getElementById('form-cars').reset();
}

printCars();

