let ajax = (url) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        resolve(request.responseText);
      } else {
        reject(request.status);
      }
    };
    request.onerror = () => reject(request.statusText);
    request.send();
  });
};

ajax({ url: "info.txt" })
  .then((data) => {
    addToPage(data);
  })
  .catch((error) => {
    showError(error);
  });

function addToPage(content) {
  document.getElementById("content").textContent = content;
}

function showError(error) {
  document.getElementById("error").textContent = error;
}
