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

        userMessageContainer.innerHTML += `
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="User"
                  src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTHsK1ZoItA_jI8Qsh_g-KScUGYtHjh5MqFuQGjFQAXyKD8UYneQToPyqYOgGzQWnbl"
                />
              </div>
            </div>
            <div class="chat-header">
              User
              <time class="text-xs opacity-50">${new Date().toLocaleTimeString()}</time>
            </div>
            <div class="chat-bubble">${userInputValue}</div>
            <div class="chat-footer opacity-50">Delivered</div>
          </div>
        `;

        const aiResponseText = generateResponse(userInputValue);

        userMessageContainer.innerHTML += `
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="AI"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div class="chat-header">
              AI
              <time class="text-xs opacity-50">${new Date().toLocaleTimeString()}</time>
            </div>
            <div class="chat-bubble">${aiResponseText}</div>
            <div class="chat-footer opacity-50">Seen at ${new Date().toLocaleTimeString()}</div>
          </div>
        `;

        userInput.value = '';

        userMessageContainer.scrollTop = userMessageContainer.scrollHeight;
    }
});

function generateResponse(userInputValue) {
    // TO DO: implement your chatbot's logic to generate a response based on the user's input
    // For now, just return a dummy response
    return `You said: ${userInputValue}`;
}