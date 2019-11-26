let audio = document.getElementById("audio");
let mainMenu = document.getElementById("main-menu");
let settingsMenu = document.getElementById("settings");


function muteVolume() {
  audio.pause();
}

function playMusic() {
  audio.play();
}

function showMainMenu() {
  mainMenu.style.display = 'flex';
}

function hideMainMenu() {
  mainMenu.style.display = 'none';
}

function showSettings() {
  settingsMenu.style.display = 'block';

  hideMainMenu();
}

function hideSettingsMenu() {
  settingsMenu.style.display = 'none';

  showMainMenu();
}
