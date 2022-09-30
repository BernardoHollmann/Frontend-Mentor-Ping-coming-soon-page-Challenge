window.onload = function(){

    const form = document.querySelector('form');
    const input = document.querySelector('input');
    const button = document.querySelector('button');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        inputValue = input.value.trim();

        if (inputValue === '') {
            errorFunc(input, "Email cannot be empty");
        } else if (!isEmail(inputValue)) {
            errorFunc(input, "Please provide a valid email address");
        } else {
            successFunc(input);
        }

        function errorFunc(element, message){
            element.className = "error";
            const parent = element.parentElement;
            const div = parent.parentElement;
            const span = div.querySelector('span');
            span.className = "error-text";
            span.innerText = message;
        }

        function successFunc(element){
            element.className = "success";   
            const parent = element.parentElement;
            const div = parent.parentElement;
            const span = div.querySelector('span');
            console.log(span);
            span.className = ''; 
            span.innerText = ''; 
        }

        function isEmail(input) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
        }
    })

}