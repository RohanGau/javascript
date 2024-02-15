<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Rohan Kumar</title>
    <!-- no-js fallback for non critical css -->
    <!-- <noscript>
      <link rel="stylesheet" href="/assets/css/segments.css" />
    </noscript> -->
    <!-- <style>
      .go {
        color: green;
      }
      .stop {
        color: red;
      }
    </style> -->
    <!-- critical css loading -->
    <!-- async non critical css -->
    <!-- <link
      rel="stylesheet"
      media="print"
      onload="this.onload=null;this.removeAttribute('media');"
      href="/assets/css/segments.css"
    /> -->
    <link rel="stylesheet" href="/assets/css/segments.css" />
    <script defer src="index.js"></script>
  </head>
  <body>
    <!-- Include Header -->
    <!-- Include Header -->
    <div id="header-container"></div>
    <div id="navbar-container"></div>
    <!-- Main Container -->
    <main class="main-container">
      <section>
        <button class="button-4 primary" onclick="start()">start</button>
        <button class="stop" onclick="stop()">stop</button>
        <span id="result"></span>
        <div class="event" id="grandparent">
          <div class="event" id="parent">
            <div class="event" id="child"></div>
          </div>
        </div>
      </section>
    </main>
    <script>
      // document.querySelector("#grandparent").addEventListener(
      //   "click",
      //   () => {
      //     console.log("grand parent clicked!");
      //   },
      //   true // capture
      // );

      // document.querySelector("#parent").addEventListener(
      //   "click",
      //   (e) => {
      //     console.log("parent clicked!");
      //   },
      //   false // bubbling
      // );

      // document.querySelector("#child").addEventListener(
      //   "click",
      //   () => {
      //     console.log("child clicked!");
      //   },
      //   false // bubbling
      // );

      // granparent
      // child
      // parent

      // const buttonId = document.getElementById("grandparent");

      // buttonId.addEventListener("click", function () {
      //   console.log("grand parent call");
      // });

      // stop propagation
      document.querySelector("#grandparent").addEventListener(
        "click",
        () => {
          console.log("grand parent clicked!");
        },
        false // bubbling
      );

      document.querySelector("#parent").addEventListener(
        "click",
        (e) => {
          console.log("parent clicked!");
          e.stopPropagation();
        },
        false // bubbling
      );

      document.querySelector("#child").addEventListener(
        "click",
        (e) => {
          console.log("child clicked!");
          e.stopPropagation();
        },
        false // bubbling
      );
    </script>
  </body>
</html>
