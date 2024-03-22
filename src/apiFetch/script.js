const haPasadoMasDeUnMinuto = async () => {
    try {
        const newDate = new Date();
        const dateLocal = JSON.parse(localStorage.getItem("date"));
        const lastDate = new Date(dateLocal);
        const diferenciaEnMilisegundos = newDate - lastDate;
        const diferenciaEnMinutos = diferenciaEnMilisegundos / 60000;
        console.log(diferenciaEnMinutos);
        if (diferenciaEnMinutos > 1) {
            console.log("Ha pasado más de un minuto");
            return true;
        } else {
            console.log("NOOO ha pasado más de un minuto");
            return false;
        }
    } catch (error) {
        console.error(error);
    }
};

const getUsersUsignFetch = async (url) => {
    try {
        
    console.log("Obteniendo Usuarios de API FETCH");
        const newDate = new Date();
        const response = await fetch(url);
        const data = await response.json();
        const users = data.data;
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("date", JSON.stringify(newDate));
        console.log(`Se ha guardado una nueva fecha en el Local Storage`);
        console.log(users);
        return (users);
    } catch (error) {
        console.error(error);
    }
};

const userTable = (users) => {
    const rows = users.map(
        (user, index, array) => `
    
    <tr>
            <th scope="row" class="align-middle">${user.id}</th>
            <td class="align-middle">${user.first_name}</td>
            <td class="align-middle">${user.last_name}</td>
            <td class="align-middle">${user.email}</td>
            <td><img src="${user.avatar}" alt="image-user${user.id}" class="rounded-circle" > </td>
          </tr>

    `
    );

    document.getElementById("user-table").innerHTML = rows.join("");
};

const getUsers = async () => {
    try {
        const haPasado = await haPasadoMasDeUnMinuto();
        let users;
        if (haPasado) {
             document.getElementById("user-table").innerHTML =("");
             document.getElementById("subtitle").innerHTML =("Obteniendo usuarios del API Fetch");
             users = await getUsersUsignFetch("https://reqres.in/api/users?delay=3");
             
        } else {
            document.getElementById("subtitle").innerHTML =("Obteniendo usuarios del LocalStorage");
            users = JSON.parse(localStorage.getItem("users"));
            console.log(users);
        }
        userTable(users); 
    } catch (error) {
        console.error("Error en getUsers:", error);
    }
};
