function ajax(options) {
  const xhr = new XMLHttpRequest();
  xhr.open(options.method || "GET", options.url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        options.success && options.success(xhr.responseText);
      } else {
        options.error && options.error(xhr.status);
      }
    }
  };

  if (options.method === "POST") {
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  }

  xhr.send(options.data || null);
}

// Usage example:
ajax({
  method: "GET",
  url: "https://api.example.com/data",
  success: function (response) {
    console.log("Success:", response);
  },
  error: function (status) {
    console.error("Error:", status);
  },
});
