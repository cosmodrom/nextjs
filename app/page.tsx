<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
  <style>
    .popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
      height: 200px;
      background: rgba(10, 10, 51, 0.8);
      backdrop-filter: blur(10px);
      border: 2px solid cyan;
      box-shadow: 0 0 15px cyan;
      color: white;
      text-align: center;
      display: none;
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    .close-btn {
      cursor: pointer;
      color: red;
      font-size: 20px;
      position: absolute;
      top: 10px;
      right: 15px;
    }
  </style>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="50" fill="#0A0A33" text-anchor="middle" dominant-baseline="middle">
    Cosmodro<tspan id="clickable-m">m</tspan>
  </text>
  
  <!-- Transparent Popup -->
  <foreignObject x="0" y="0" width="100%" height="100%">
    <div id="popup" class="popup">
      <span class="close-btn" onclick="closePopup()">✖</span>
      <p>Futuristic Music Player</p>
      <audio id="music-player" controls loop>
        <source src="your-music-file.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div>
  </foreignObject>

  <script>
    document.getElementById("clickable-m").addEventListener("click", function() {
      document.getElementById("popup").style.display = "block";
    });

    function closePopup() {
      document.getElementById("popup").style.display = "none";
    }
  </script>
</svg>
