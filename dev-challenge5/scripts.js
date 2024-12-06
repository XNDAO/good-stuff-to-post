let currentStep = 1;
const form1 = document.getElementById('form-1');
const form2 = document.getElementById('form-2');
const formResult = document.getElementById('form-result');

const stepDiv1 = document.querySelector('.step-div-1');
const stepDiv2 = document.querySelector('.step-div-2');
const stepDivResult = document.querySelector('.step-div-result');

let userData = {
  name: "",
  email: "",
  topics: []
};

function nextStep(event) {
    // Impede o comportamento padrão de submissão do formulário
    if (event) event.preventDefault();
  
    if (currentStep === 1) {
      // Coleta o nome e o email
      const nameInput = document.querySelector('.input-name').value.trim();
      const emailInput = document.querySelector('.input-email').value.trim();
  
      if (!nameInput || !emailInput) {
        alert("Please fill in all the fields!");
        return;
      }
  
      userData.name = nameInput;
      userData.email = emailInput;
  
      // Troca para a etapa 2
      form1.style.display = "none";
      form2.style.display = "flex";
      stepDiv1.style.display = "none";
      stepDiv2.style.display = "flex";
  
      currentStep++;
    } else if (currentStep === 2) {
      // Coleta os tópicos selecionados
      const selectedTopics = [];
      document.querySelectorAll('.input-form-2').forEach(button => {
        if (button.style.backgroundColor === 'rgb(101, 44, 209)') {
          selectedTopics.push(button.value);
        }
      });
  
      if (selectedTopics.length === 0) {
        alert("Please select at least one topic!");
        return;
      }
  
      userData.topics = selectedTopics;
  
      // Troca para a etapa 3
      form2.style.display = "none";
      formResult.style.display = "flex";
      stepDiv2.style.display = "none";
      stepDivResult.style.display = "flex";
  
      // Preenche o sumário
      document.querySelector('.name-result').innerText = `Name: ${userData.name}`;
      document.querySelector('.email-result').innerText = `Email: ${userData.email}`;
      document.querySelector('.multiple-result').innerText = `Topics: ${userData.topics.join(', ')}`;
  
      currentStep++;
    }
  }

function toggleTopicSelection(event) {
  const button = event.target;
  if (button.style.backgroundColor === 'rgb(101, 44, 209)') {
    button.style.backgroundColor = '#394150';
  } else {
    button.style.backgroundColor = '#652CD1';
  }
}


function submitForm(event) {
    // Impede o comportamento padrão de submissão do formulário
    if (event) event.preventDefault();
    alert("Registration Completed!");
    location.reload();
  }

// Add event listeners for topic selection
document.querySelectorAll('.input-form-2').forEach(button => {
  button.addEventListener('click', toggleTopicSelection);
});
