const chatBox = document.querySelector('.chat-box');
const userInput = document.querySelector('#user-input');
const sendBtn = document.querySelector('#send-btn');
const aiResponse = document.querySelector('#ai-response');
const userMessageContainer = document.querySelector('#userMessage');

let userMessages = [];

userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      sendBtn.click();
    }
  });
  
sendBtn.addEventListener('click', () => {
    const userInputValue = userInput.value.trim();
    if (userInputValue !== '') {
      userMessages.push(userInputValue);
  
      userMessageContainer.innerHTML += `<div class="my-message">${userInputValue}</div>`;
  
      const aiResponseText = generateResponse(userInputValue);
  
      userMessageContainer.innerHTML += `<div class="ai-response">${aiResponseText}</div>`;
  
      userInput.value = '';

      userMessageContainer.scrollTop = userMessageContainer.scrollHeight;
    }
  });

function generateResponse(userInputValue) {
  // TO DO: implement your chatbot's logic to generate a response based on the user's input
  // For now, just return a dummy response
  return `You said: ${userInputValue}`;
}