export const submitEmail = () => {
   
    const form = document.querySelector(".footer form" );
    const email = document.querySelector(".footer form input[type=email]");
    const banner = document.querySelector(".subscribe-banner");
    
    // regular expression to validate email
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
    if (email.value == "" || !emailRegex.test(email.value)) {
        form.style.border = "1px solid red";
        setTimeout(function () {
            form.style.border = "none";
        }, 2000);
        
    }else{
        email.value = "";
        banner.style.left = "0";
    }
}