
// ================================
// Select HTML Elements
// ================================


const form = document.querySelector("#registrationForm");

const openAccountBtn = document.querySelector("#openAccountBtn");

const successCard = document.querySelector("#successCard");



// Form Fields

const nameInput = document.querySelector("#name");

const dobInput = document.querySelector("#dob");

const genderInput = document.querySelector("#gender");

const mobileInput = document.querySelector("#mobile");

const emailInput = document.querySelector("#email");

const addressInput = document.querySelector("#address");

const accountTypeInput = document.querySelector("#accountType");

const depositInput = document.querySelector("#deposit");

const passwordInput = document.querySelector("#password");

const confirmPasswordInput = document.querySelector("#confirmPassword");

const termsInput = document.querySelector("#terms");




// Success Card Elements

const customerName = document.querySelector("#customerName");

const customerAccount = document.querySelector("#customerAccount");

const customerMobile = document.querySelector("#customerMobile");






// ================================
// Smooth Scroll Button
// ================================


openAccountBtn.addEventListener("click", function(){

    document.querySelector("#registration")
    .scrollIntoView({
        behavior:"smooth"
    });

});







// ================================
// Display Error Message
// ================================


function showError(input, message){


    const errorElement = input.parentElement.querySelector(".error");


    errorElement.innerText = message;


}






// ================================
// Clear Error Message
// ================================


function clearError(input){


    const errorElement = input.parentElement.querySelector(".error");


    errorElement.innerText = "";


}







// ================================
// Name Validation
// ================================


function validateName(){


    const namePattern = /^[A-Za-z ]+$/;


    if(nameInput.value.trim() === ""){


        showError(
            nameInput,
            "Full name is required"
        );

        return false;

    }



    else if(!namePattern.test(nameInput.value.trim())){


        showError(
            nameInput,
            "Name should contain only letters and spaces"
        );


        return false;

    }



    else{


        clearError(nameInput);

        return true;

    }


}









// ================================
// Date Validation
// ================================


function validateDOB(){


    if(dobInput.value === ""){


        showError(
            dobInput,
            "Date of birth is required"
        );


        return false;

    }


    clearError(dobInput);

    return true;


}







// ================================
// Gender Validation
// ================================


function validateGender(){


    if(genderInput.value === ""){


        showError(
            genderInput,
            "Please select gender"
        );


        return false;

    }



    clearError(genderInput);


    return true;


}








// ================================
// Mobile Validation
// ================================


function validateMobile(){


    const mobilePattern = /^[0-9]{10}$/;



    if(mobileInput.value.trim()===""){


        showError(
            mobileInput,
            "Mobile number is required"
        );


        return false;


    }



    else if(!mobilePattern.test(mobileInput.value)){


        showError(
            mobileInput,
            "Enter valid 10 digit mobile number"
        );


        return false;


    }



    clearError(mobileInput);

    return true;


}








// ================================
// Email Validation
// ================================


function validateEmail(){



    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if(emailInput.value.trim()===""){


        showError(
            emailInput,
            "Email is required"
        );


        return false;

    }



    else if(!emailPattern.test(emailInput.value)){


        showError(
            emailInput,
            "Enter valid email address"
        );


        return false;


    }



    clearError(emailInput);


    return true;


}









// ================================
// Address Validation
// ================================


function validateAddress(){



    if(addressInput.value.trim()===""){


        showError(
            addressInput,
            "Address is required"
        );


        return false;


    }


    clearError(addressInput);


    return true;


}








// ================================
// Account Type Validation
// ================================


function validateAccountType(){



    if(accountTypeInput.value===""){


        showError(
            accountTypeInput,
            "Select account type"
        );


        return false;


    }



    clearError(accountTypeInput);


    return true;


}








// ================================
// Deposit Validation
// ================================


function validateDeposit(){


    if(depositInput.value===""){


        showError(
            depositInput,
            "Initial deposit is required"
        );


        return false;


    }



    else if(Number(depositInput.value)<1000){


        showError(
            depositInput,
            "Minimum deposit should be ₹1000"
        );


        return false;


    }



    clearError(depositInput);


    return true;


}








// ================================
// Password Validation
// ================================


function validatePassword(){


    if(passwordInput.value===""){


        showError(
            passwordInput,
            "Password is required"
        );


        return false;


    }



    else if(passwordInput.value.length < 8){


        showError(
            passwordInput,
            "Password must contain minimum 8 characters"
        );


        return false;


    }



    clearError(passwordInput);


    return true;


}









// ================================
// Confirm Password Validation
// ================================


function validateConfirmPassword(){


    if(confirmPasswordInput.value===""){


        showError(
            confirmPasswordInput,
            "Please confirm password"
        );


        return false;


    }



    else if(
        passwordInput.value !== confirmPasswordInput.value
    ){


        showError(
            confirmPasswordInput,
            "Passwords do not match"
        );


        return false;


    }



    clearError(confirmPasswordInput);


    return true;


}








// ================================
// Terms Validation
// ================================


function validateTerms(){


    const error =
    document.querySelector(".terms-error");



    if(!termsInput.checked){


        error.innerText =
        "Please accept Terms & Conditions";


        return false;


    }



    error.innerText="";


    return true;


}









// ================================
// Form Submit Event
// ================================


form.addEventListener(
"submit",
function(event){


    event.preventDefault();



    const isNameValid = validateName();
const isDOBValid = validateDOB();
const isGenderValid = validateGender();
const isMobileValid = validateMobile();
const isEmailValid = validateEmail();
const isAddressValid = validateAddress();
const isAccountValid = validateAccountType();
const isDepositValid = validateDeposit();
const isPasswordValid = validatePassword();
const isConfirmPasswordValid = validateConfirmPassword();
const isTermsValid = validateTerms();


const isValid =
    isNameValid &&
    isDOBValid &&
    isGenderValid &&
    isMobileValid &&
    isEmailValid &&
    isAddressValid &&
    isAccountValid &&
    isDepositValid &&
    isPasswordValid &&
    isConfirmPasswordValid &&
    isTermsValid;






    if(isValid){



        // Display Customer Data


        customerName.innerText =
        nameInput.value;



        customerAccount.innerText =
        accountTypeInput.value;



        customerMobile.innerText =
        mobileInput.value;





        successCard.style.display =
        "block";





        // Reset Form


        form.reset();



        // Scroll to Success Message


        successCard.scrollIntoView({

            behavior:"smooth"

        });



    }



});