class CarSelection {
    constructor() {
        this.nextButton = document.getElementById('next-button');
        this.carForm = document.getElementById('car-form');
        this.formContent = document.getElementById('form-content');
        this.submitButton = document.getElementById('submit-button');
        this.resultDiv = document.getElementById('result');
        
        this.nextButton.addEventListener('click', () => this.showForm());
        this.submitButton.addEventListener('click', () => this.submitForm());
    }

    showForm() {
        const selectedType = document.querySelector('input[name="car-type"]:checked');
        if (selectedType) {
            const typeValue = selectedType.value;
            let formHtml = '';

            switch (typeValue) {
                case 'car':
                    formHtml = `
                    <div class="container">
                    <div class="content1">
                    <h2>Общие:</h2>
                        <div class="form-group">
                            <label for="year">Год:</label>
                            <input type="text" id="year" name="year">
                        </div>
                        <div class="form-group">
                            <label for="make">Марка:</label>
                            <input type="text" id="make" name="make">
                        </div>
                        <div class="form-group">
                            <label for="model">Модель:</label>
                            <input type="text" id="model" name="model">
                        </div>
                        <div class="form-group">
                            <label for="engineCapacity">Объем двигателя:</label>
                            <input type="text" id="engineCapacity">
                        </div>
                        <div class="form-group">
                            <label for="fuelType">Тип топлива:</label>
                            <input type="text" id="fuelType">
                        </div>
                        </div>
                        <div class="content2">
                        <h2>Уникальные:</h2>
                        <div class="form-group">
                    <label for="carView">Вид:</label>
                    <input type="text" id="carView">
                    </div>
                    <div class="form-group">
                    <label for="typeFinalDrive">Тип главной передачи:</label>
                    <input type="text" id="typeFinalDrive">
                    <div>
                    <div class="form-group">
                    <label for="presencePassenger">Наличие пассажира:</label>
                    <input type="text" id="presencePassenger">
                    </div>
                    <div class="form-group">
                    <label for="presenceWindShield">Наличие лобового стекла:</label>
                    <input type="text" id="presenceWindShield">
                    </div>
                    <div class="form-group">
                    <label for="presenceCradle">Наличие люльки:</label>
                    <input type="text" id="presenceCradle">
                    </div>
                        </div>
                        </div>
                    `;
                    break;
                case 'truck':
                    formHtml = `
                           <div class="container">
                    <div class="content1">
                    <h2>Общие:</h2>
                        <div class="form-group">
                            <label for="year">Год:</label>
                            <input type="text" id="year" name="year">
                        </div>
                        <div class="form-group">
                            <label for="make">Марка:</label>
                            <input type="text" id="make" name="make">
                        </div>
                        <div class="form-group">
                            <label for="model">Модель:</label>
                            <input type="text" id="model" name="model">
                        </div>
                        <div class="form-group">
                            <label for="engineCapacity">Объем двигателя:</label>
                            <input type="text" id="engineCapacity">
                        </div>
                        <div class="form-group">
                            <label for="fuelType">Тип топлива:</label>
                            <input type="text" id="fuelType">
                        </div>
                        </div>
                        <div class="content2">
                        <h2>Уникальные:</h2>
                        <div class="form-group">
                    <label for="carView">Вид:</label>
                    <input type="text" id="carView">
                    </div>
                    <div class="form-group">
                    <label for="typeFinalDrive">Тип главной передачи:</label>
                    <input type="text" id="typeFinalDrive">
                    <div>
                    <div class="form-group">
                    <label for="presencePassenger">Наличие пассажира:</label>
                    <input type="text" id="presencePassenger">
                    </div>
                    <div class="form-group">
                    <label for="presenceWindShield">Наличие лобового стекла:</label>
                    <input type="text" id="presenceWindShield">
                    </div>
                    <div class="form-group">
                    <label for="presenceCradle">Наличие люльки:</label>
                    <input type="text" id="presenceCradle">
                    </div>
                        </div>
                        </div>
                    `;
                    break;
                case 'moto':
                    formHtml = `
                          <div class="container">
                    <div class="content1">
                    <h2>Общие:</h2>
                        <div class="form-group">
                            <label for="year">Год:</label>
                            <input type="text" id="year" name="year">
                        </div>
                        <div class="form-group">
                            <label for="make">Марка:</label>
                            <input type="text" id="make" name="make">
                        </div>
                        <div class="form-group">
                            <label for="model">Модель:</label>
                            <input type="text" id="model" name="model">
                        </div>
                        <div class="form-group">
                            <label for="engineCapacity">Объем двигателя:</label>
                            <input type="text" id="engineCapacity">
                        </div>
                        <div class="form-group">
                            <label for="fuelType">Тип топлива:</label>
                            <input type="text" id="fuelType">
                        </div>
                        </div>
                        <div class="content2">
                        <h2>Уникальные:</h2>
                        <div class="form-group">
                    <label for="carView">Вид:</label>
                    <input type="text" id="carView">
                    </div>
                    <div class="form-group">
                    <label for="typeFinalDrive">Тип главной передачи:</label>
                    <input type="text" id="typeFinalDrive">
                    <div>
                    <div class="form-group">
                    <label for="presencePassenger">Наличие пассажира:</label>
                    <input type="text" id="presencePassenger">
                    </div>
                    <div class="form-group">
                    <label for="presenceWindShield">Наличие лобового стекла:</label>
                    <input type="text" id="presenceWindShield">
                    </div>
                    <div class="form-group">
                    <label for="presenceCradle">Наличие люльки:</label>
                    <input type="text" id="presenceCradle">
                    </div>
                        </div>
                        </div>
                    `;
                    break;
            }

            this.formContent.innerHTML = formHtml;
            this.carForm.style.display = 'block';
        } else {
            alert('Пожалуйста, выберите тип машины.');
        }
    }

    submitForm() {
        const selectedType = document.querySelector('input[name="car-type"]:checked');
        if (selectedType) {
            const typeValue = selectedType.value;
            let formData = '';

            switch (typeValue) {
                case 'car':
                    formData = `
                        <h3>Информация о Легковой машине</h3>
                        <p>Год: ${document.getElementById('year').value} </p>
                        <p>Марка: ${document.getElementById('make').value}</p>
                        <p>Модель: ${document.getElementById('model').value}</p>
                        <p>Обьем двигателя: ${document.getElementById('engineCapacity').value}</p>
                        <p>Тип топлива: ${document.getElementById('fuelType').value}</p>
                        <p>Вид машины: ${document.getElementById('carView').value}</p>
                        <p>Тип главной передачи: ${document.getElementById('typeFinalDrive').value}</p>
                        <p>Наличие пассаржира: ${document.getElementById('presencePassenger').value}</p>
                        <p>Наличие лобового стекла: ${document.getElementById('presenceWindShield').value}</p>
                        <p>Наличие люльки: ${document.getElementById('presenceCradle').value}</p>
                        `;
                    break;
                case 'truck':
                    formData = `
                        <h3>Информация о Грузовой машине</h3>
                        <p>Год: ${document.getElementById('year').value} </p>
                        <p>Марка: ${document.getElementById('make').value}</p>
                        <p>Модель: ${document.getElementById('model').value}</p>
                        <p>Обьем двигателя: ${document.getElementById('engineCapacity').value}</p>
                        <p>Тип топлива: ${document.getElementById('fuelType').value}</p>
                        <p>Вид машины: ${document.getElementById('carView').value}</p>
                        <p>Тип главной передачи: ${document.getElementById('typeFinalDrive').value}</p>
                        <p>Наличие пассаржира: ${document.getElementById('presencePassenger').value}</p>
                        <p>Наличие лобового стекла: ${document.getElementById('presenceWindShield').value}</p>
                        <p>Наличие люльки: ${document.getElementById('presenceCradle').value}</p>
                    `;
                    break;
                case 'moto':
                    formData = `
                       <h3>Информация о Мото машине</h3>
                        <p>Год: ${document.getElementById('year').value} </p>
                        <p>Марка: ${document.getElementById('make').value}</p>
                        <p>Модель: ${document.getElementById('model').value}</p>
                        <p>Обьем двигателя: ${document.getElementById('engineCapacity').value}</p>
                        <p>Тип топлива: ${document.getElementById('fuelType').value}</p>
                        <p>Вид машины: ${document.getElementById('carView').value}</p>
                        <p>Тип главной передачи: ${document.getElementById('typeFinalDrive').value}</p>
                        <p>Наличие пассаржира: ${document.getElementById('presencePassenger').value}</p>
                        <p>Наличие лобового стекла: ${document.getElementById('presenceWindShield').value}</p>
                        <p>Наличие люльки: ${document.getElementById('presenceCradle').value}</p>
                    `;
                    break;
            }

            this.resultDiv.innerHTML = formData; // Обновляем содержимое блока с результатом
            this.carForm.style.display = 'none'; // Скрываем форму после отправки
            document.getElementById('car-selection').style.display = 'none'; // Скрываем выбор после отправки
        } else {
            alert('Пожалуйста, выберите тип машины.');
        }
    }
}

// Инициализация класса
new CarSelection();
