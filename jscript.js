/* Загальні функції */

function showModal_logout_unreg() 
{
    document.getElementById('logout-unreg').style.display = 'flex';
}
function hideModal_logout_unreg() 
{
    document.getElementById('logout-unreg').style.display = 'none';
} 

function showModal_login_unreg() 
{
    document.getElementById('login-ureg').style.display = 'flex';
}
function hideModal_login_unreg() 
{
    document.getElementById('login').value = '';
    document.getElementById('login-ureg').style.display = 'none';
}

function showModal_login_reg() {
    document.getElementById('login-reg').style.display = 'flex';
}
function hideModal_login_reg() {
    document.getElementById('login-reg').style.display = 'none';
}

function showModal_logout_reg() {
    document.getElementById('logout-reg').style.display = 'flex';
}

function hideModal_logout_reg() {
    document.getElementById('logout-reg').style.display = 'none';
}

function login_homepage() 
{
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;
    if (login == 'kotyk_v' && password == 'poi098') {
        document.getElementById('login').value = '';
        window.location.href = "../registrated/homepage.html";
    } else {
        alert("Ви ввели неправильний логін або пароль!");
    }
}

var items = ['Бавовняна футболка Tommy Jeans', 'Пухова куртка Marella', 'Дитячі штани Coccodrillo', 'Дитяча футболка Tommy Hilfiger', 'Джинси Armani Exchange', 'Джинси Medicine', 'Джинси Calvin Klein Jeans', 'Джинси Guess Drake', 'Бавовняна кофта adidas Originals', 'Кофта Calvin Klein Jeans', 'Дитяча бавовняна кофта Guess', 'Дитяча кофта The North Face', 'Куртка Mustang', 'Безрукавка Calvin Klein', 'Пухова куртка BOSS', 'Куртка Guess', 'Пальто з домішкою вовни Morgan', 'Вовняне пальто Medicine', 'Пальто United Colors of Benetton', 'Вовняне пальто BOSS', 'Дитячий піджак Guess', 'Дитячий піджак Mayoral', 'Піджак Elisabetta Franchi', 'Піджак Sisley', 'Костюм з домішкою вовни Tiger Of Sweden', 'Костюм Lindbergh', 'Вовняний костюм Tiger Of Sweden', 'Вовняний костюм BOSS', 'Светр Artigli', 'Светр з домішкою вовни Sisley', 'Вовняний светр Armani Exchange', 'Бавовняний светр Pepe Jeans', 'Сорочка PS Paul Smith', 'Сорочка Columbia', 'Сорочка United Colors of Benetton', 'Сорочка Michael Kors', 'Бавовняна футболка Vans', 'Бавовняна футболка adidas', 'Бавовняна футболка HUGO', 'Бавовняна футболка Armani Exchange'];

function search_homepage() 
{
    var input = document.querySelector('.search-field').value.toLowerCase();
    var results = document.getElementById('results');
    results.innerHTML = '';
    results.style.display = 'none';
    if (input.length > 0) {
        results.style.display = 'flex';
        for (var i = 0; i < items.length; i++) {
            if (items[i].toLowerCase().includes(input)) {
                var result = document.createElement('a');
                result.href = 'products/' + items[i] + '.html';
                result.classList.add('result');
                result.innerHTML = items[i].replace(new RegExp(input, 'gi'), function(match) {
                    return '<span style="background-color: yellow; ">' + match + '</span>';
                });
                results.appendChild(result);
            }
        }
    }
}
function clearSearch() 
{
    document.querySelector('.search-field').value = '';
    document.getElementById('results').style.display = 'none';
}


function login_else() 
{
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;
    if (login == 'kotyk_v' && password == 'poi098') {
        document.getElementById('login').value = '';
        window.location.href = "../../registrated/homepage.html";
    } else {
        alert("Ви ввели неправильний логін або пароль!");
    }
}

function search_categories() 
{
    var input = document.querySelector('.search-field').value.toLowerCase();
    var results = document.getElementById('results');
    results.innerHTML = '';
    results.style.display = 'none';
    if (input.length > 0) {
        results.style.display = 'flex';
        for (var i = 0; i < items.length; i++) {
            if (items[i].toLowerCase().includes(input)) {
                var result = document.createElement('a');
                result.href = '../products/' + items[i] + '.html';
                result.classList.add('result');
                result.innerHTML = items[i].replace(new RegExp(input, 'gi'), function(match) {
                    return '<span style="background-color: yellow; ">' + match + '</span>';
                });
                results.appendChild(result);
            }
        }
    }
}

function search_products() 
{
    var input = document.querySelector('.search-field').value.toLowerCase();
    var results = document.getElementById('results');
    results.innerHTML = '';
    results.style.display = 'none';
    if (input.length > 0) {
        results.style.display = 'flex';
        for (var i = 0; i < items.length; i++) {
            if (items[i].toLowerCase().includes(input)) {
                var result = document.createElement('a');
                result.href = '' + items[i] + '.html';
                result.classList.add('result');
                result.innerHTML = items[i].replace(new RegExp(input, 'gi'), function(match) {
                    return '<span style="background-color: yellow; ">' + match + '</span>';
                });
                results.appendChild(result);
            }
        }
    }
}

function checkSizeAndShowModal() {
    var size = document.getElementById('size-select').value;
    if (size === "") {
        alert("Ви не обрали розмір!");
    } else {
        showModal_order();
    }
}
function showModal_order() {
    document.getElementById('order').style.display = 'flex';
}
function hideModal_order() {
    document.getElementById('order').style.display = 'none';
}
function showModal_confirm() {
    hideModal_order();
    document.getElementById('confirm').style.display = 'flex';
}
function hideModal_confirm() {
    document.getElementById('confirm').style.display = 'none';
}
function orderProduct() {
    hideModal_confirm();
    setTimeout(function() {
        alert("Товар успішно замовлено!");
    }, 20);
}
function paymentUnavailable() {
    alert("Функція недоступна!");
}