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

        userMessageContainer.innerHTML += ` <div class="bubble right">${userInputValue}</div> </br>`;

        const aiResponseText = generateResponse(userInputValue);

        userMessageContainer.innerHTML += ` <div class="row"><div class="chat-image avatar">
  <div class="w-11 rounded-full">
    <img
      alt="bot"
      src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTHsK1ZoItA_jI8Qsh_g-KScUGYtHjh5MqFuQGjFQAXyKD8UYneQToPyqYOgGzQWnbl"
    />
  </div>
</div>
<div class="bubble left">${aiResponseText}</div></div></br>`;

        userInput.value = '';

        userMessageContainer.scrollTop = userMessageContainer.scrollHeight;
    }
});

function generateResponse(userInputValue) {
    // TO DO: implement your chatbot's logic to generate a response based on the user's input
    // For now, just return a dummy response
    return `You said: ${userInputValue}`;
}