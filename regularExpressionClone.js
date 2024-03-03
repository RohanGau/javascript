<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Rohan Kumar</title>
    <link rel="stylesheet" href="/assets/css/segments.css" />
    <script defer src="index.js"></script>
  </head>
  <body style="text-align: center">
    <p>Enter a regular expression to clone</p>
    <input type="text" id="data" name="regExp" />
    <button id="submit">Clone Regex</button>
    <div id="display"></div>
  </body>
  <script>
    function cloneRegex(input, outputFlag) {
      var pattern = input.source;
      var flags = [...new Set(input.flags + outputFlag)].join("");
      return new RegExp(pattern, flags);
    }

    document.getElementById("submit").addEventListener("click", () => {
      const value = document.getElementById("data").value;
      var regExp = new RegExp(value, "i");
      var clonedregex = cloneRegex(regExp, "g");
      document.getElementById("display").textContent = clonedregex;
    });
  </script>
</html>
