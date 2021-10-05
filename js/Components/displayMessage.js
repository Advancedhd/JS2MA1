//Displays a message should something be wrong. Like the api call not working etc.
export function displayMessage(messageType, message, target) {
  const element = document.querySelector(target);

  element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}
