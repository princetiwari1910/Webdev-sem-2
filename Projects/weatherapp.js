let a=prompt()
document.addEventListener("DOMContentLoaded", () => {

    const input = document.querySelector(".searchbox");
    const button = document.querySelector(".searchbtn");

    function searchLocation(){
        const location = input.value.trim();

        if(location === ""){
            console.warn("Please enter a location");
            input.focus();
            return;
        }

        console.log("Searching weather for:", location);

        input.value = "";     
        input.focus();        
    }

    button.addEventListener("click", searchLocation);

    input.addEventListener("keydown", (e)=>{
        if(e.key === "Enter"){
            searchLocation();
        }
    });

})
