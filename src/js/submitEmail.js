export const submitEmail = () => {
   
    const email = document.querySelector(".footer input[type=email]");
    const banner = document.querySelector(".subscribe-banner");
    
    // regular expression to validate email
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
    if (email.value == "") {
        email.style.border = "1px solid red";
        
        setTimeout(function () {
            email.style.border = "none";
        }, 2000);
    }
    
    // if email is correct
    if (emailRegex.test(email.value)) {
        email.value = "";
        banner.style.left = "0%";
    }
    
}