export default function copyButton(toCopy?: string) {
  const buttonCopy = document.getElementById('copy')
  if (buttonCopy) {
    buttonCopy.style.color = toCopy ? '#00ff88' : '';
    buttonCopy.style.borderColor = toCopy ? '#00ff88' : '';
  }
}