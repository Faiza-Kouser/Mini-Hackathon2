// function isAuthenticated() {
//     const user = localStorage.getItem('user');
//     return user !== null;
// }

// // Check if the user is authenticated
// if (!isAuthenticated()) {
//     window.location.href = './signin.html' ;
// }

// const logout = () => {
//     localStorage.removeItem('user');
// }
/////////////////////////////////////////////////////////

let logout = document.getElementById("logout-btn");

    function isAuthenticated() {
        const user = localStorage.getItem('user');
        const uid = localStorage.getItem('uid');
        let arr = [user , uid]
        return user !== null && uid !== null;
        // arr !== null;
        // return arr
    }
    if (!isAuthenticated()) {
         window.location.href = './signin.html' ;
    } 
    const log_out = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('uid');
        window.location.href = './signin.html' ;
    }
if (logout) {
    logout.addEventListener("click",log_out);
  }
