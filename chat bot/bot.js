// Get the chatbot elements
const chatBox = document.querySelector('.chat-box');
const userInput = document.querySelector('#user-input');
const sendBtn = document.querySelector('#send-btn');
const aiResponse = document.querySelector('#ai-response');
const userMessageContainer = document.querySelector('#userMessage');

// Store the user's messages in an array
let userMessages = [];

userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      sendBtn.click();
    }
  });
  
sendBtn.addEventListener('click', () => {
    const userInputValue = userInput.value.trim();
    if (userInputValue !== '') {
      // Store the user's message in the array
      userMessages.push(userInputValue);
  
      // Display the user's message in the chatbox
      userMessageContainer.innerHTML += `<div class="my-message">${userInputValue}</div>`;
  
      // Generate a new response based on the user's message
      const aiResponseText = generateResponse(userInputValue);
  
      // Display the AI's response in the chatbox
      userMessageContainer.innerHTML += `<div class="ai-response">${aiResponseText}</div>`;
  
      userInput.value = '';
    }
  });
// Function to generate a new response based on the user's message
function generateResponse(userInputValue) {
  // TO DO: implement your chatbot's logic to generate a response based on the user's input
  // For now, just return a dummy response
  return `You said: ${userInputValue}`;
}


function updateMessageContainer() {
    const messageContainer = document.querySelector('.message-container');
    const messageElements = messageContainer.children;
    if (messageElements.length > 4) {
        messageContainer.style.overflowY = 'auto';
    } else {
        messageContainer.style.overflowY = 'visible';
    }
}