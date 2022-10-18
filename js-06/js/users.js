fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const tbody = document.querySelector('tbody');

        users.forEach(user => {
            const html = `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                </tr>
            `;

            tbody.innerHTML += html;
        });
    });