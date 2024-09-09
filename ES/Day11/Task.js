// Task 1
function* fibonacciCount(n) {
    let a = 0, b = 1, count = 0;
    while (count < n) {
        yield a;
        [a, b] = [b, a + b];
        count++;
    }
}

const fib1 = fibonacciCount(10);


console.log([...fib1]); 

function* fibonacciMax(max) {
    let a = 0, b = 1;
    while (a <= max) {
        yield a;
        [a, b] = [b, a + b];
    }
}


const fib2 = fibonacciMax(100);
console.log([...fib2]); 
//Task 2
function fetchData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(new Error(`Request failed with status ${xhr.status}`));
            }
        };

        xhr.onerror = () => reject(new Error("Network error"));

        xhr.send();
    });
}
fetchData("https://jsonplaceholder.typicode.com/users")
    .then(data => {
        displayUsers(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });

function displayUsers(users) {
    const tableBody = document.getElementById('userTableBody');
    users.forEach(user => {
        const row = `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.website}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

fetchData("https://jsonplaceholder.typicode.com/users")
    .then(data => {
        displayUsers(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });