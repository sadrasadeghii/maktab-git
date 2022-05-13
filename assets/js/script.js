const input = document.getElementsByClassName("input");
const fieldAlert = document.getElementsByClassName("field-alert");
const fieldAlertMax = document.getElementsByClassName("field-alert-max");
const registerFormBtn = document.getElementById("register-form-btn");
const Alert = document.getElementById("alert");

class formValidation {
  Minimom(index) {
    if (input[index].dataset.type === "text") {
      console.log("text");
      if (input[index].value.length < 3) {
        fieldAlert[index].classList.remove("d-none");
        fieldAlert[index].classList.add("d-flex");
      } else {
        fieldAlert[index].classList.add("d-none");
        fieldAlert[index].classList.remove("d-flex");
      }
    } else {
      null;
    }
  }
  MinimomForNum(index) {
    if (input[index].dataset.type === "number") {
      console.log("num");
      if (input[index].value.length < 11) {
        fieldAlert[index].classList.remove("d-none");
        fieldAlert[index].classList.add("d-flex");
      } else {
        fieldAlert[index].classList.add("d-none");
        fieldAlert[index].classList.remove("d-flex");
      }
    } else {
      null;
    }
  }
  Email(index) {
    if (input[index].dataset.type === "email") {
      if (
        input[index].value.match(/[@]/g) == null ||
        input[index].value.match(/[.]/g) == null
      ) {
        fieldAlert[index].classList.remove("d-none");
        fieldAlert[index].classList.add("d-flex");
      } else {
        fieldAlert[index].classList.add("d-none");
        fieldAlert[index].classList.remove("d-flex");
      }
    } else {
      null;
    }
  }
  showAlert(type) {
    let IsAlert = false;
    if(type === 'text'){
      for (let i = 0; i < input.length; i++) {
        if (fieldAlert[i].classList.contains("d-flex")) {
          IsAlert = true;
        }
      }
      if ((IsAlert = true)) {
        Alert.classList.remove("d-none");
        Alert.classList.add("d-flex");
        Alert.innerHTML = 'نام یا نام خانوادگی نادرست است'
      }
    }else if(type === 'number'){
      for (let i = 0; i < input.length; i++) {
        if (fieldAlert[i].classList.contains("d-flex")) {
          IsAlert = true;
        }
      }
      if ((IsAlert = true)) {
        Alert.classList.remove("d-none");
        Alert.classList.add("d-flex");
        Alert.innerHTML = 'شماره تلفن نادرست است'
      }
    }else if(type === 'email'){
      for (let i = 0; i < input.length; i++) {
        if (fieldAlert[i].classList.contains("d-flex")) {
          IsAlert = true;
        }
      }
      if ((IsAlert = true)) {
        Alert.classList.remove("d-none");
        Alert.classList.add("d-flex");
        Alert.innerHTML = 'ایمیل نادرست است'
      }
    }
  }
}


const registerForm = new formValidation();




for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("keyup", () => {
    registerForm.Minimom(i);
    registerForm.MinimomForNum(i);
    registerForm.Email(i);
    registerFormBtn.addEventListener("click", () => {
      registerForm.showAlert(input[i].dataset.type);
    });
  });
}
