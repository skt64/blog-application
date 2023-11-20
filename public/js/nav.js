let ul = document.querySelector('.links-container');
let loginBtn = document.getElementById('login-btn');

auth.onAuthStateChanged((user) => {
    if (user){
        //user is loggin
        console.log("login");
        loginBtn.style.display = 'none';
        ul.innerHTML += `
        <li class="link-item"><a href="/admin" class="link">Dashboard</a></li>
        <li class="link-item"><a href="/#" onClick="logoutUser()" class="link">Logout</a></li>
        `;
    } else {
        // loginBtn.style.display = 'flex';
    }
})