let audio = document.getElementById("audio");
let mainMenu = document.getElementById("main-menu");
let settingsMenu = document.getElementById("settings");
let persoStats = document.getElementById("stats_container");

let checkpoint_01Div = document.getElementById("checkpoint_01");

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

function checkpoint_01() {
  hideMainMenu();

  persoStats.style.display = 'flex';

  checkpoint_01Div.style.display = 'block';
  document.body.style.backgroundImage = "url('assets/img/background/background-1.png')";
  audio.src = 'assets/musics/jail-sounds.mp3';
}
