const autoInput = document.getElementById('autoInput')
const textarea = document.getElementById('main');

textarea.onkeydown = (event) => {
  if (event.key === 'Enter') {
    console.log("### You pressed Enter!")
  } else {
    console.log("### event", event.key);
  }
}

autoInput.onclick = () => {
  textarea.focus();
  const event = new KeyboardEvent('keydown', {
    key: 'Enter'
  });

  textarea.dispatchEvent(event);
}
