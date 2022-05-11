async function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email);
    try {
        const SignIn = await fetch("https://localhost:3000/api/users/signin", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
               
            },
            
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
       
      
        const response = await SignIn.json();
        console.log(response);
        // if (SignIn.status == 200) {
        //     alert("Success");

        //     localStorage.setItem("token", response.token);
        //     localStorage.setItem("user", JSON.stringify(response.data));
        //     if (response.data.role == "user") {
        //         location.href = "../dash.html";
        //     }
        //     else {
        //         location.href = "../dash.html";
        //     }

        // }
        // else {
        //     alert("Error");
        // }
    } catch (error) {
        console.log(error)
        // alert("Error");
    }
}
