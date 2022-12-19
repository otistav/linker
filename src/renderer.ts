// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

const onDrop = (event: any) => {
  event.preventDefault();
  const html = event.dataTransfer.getData('text/html');
  const url = new DOMParser().parseFromString(html, "text/html").querySelector('img').src;
  console.log(url, 'url')
  window.electronAPI.downloadImage(url);
}
document.addEventListener('drop', onDrop);

document.addEventListener('dragover', (e) => {
  e.preventDefault();
  e.stopPropagation();
});