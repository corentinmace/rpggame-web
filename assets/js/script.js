let playerName;
let playerSex;

let defaultHP = 20;
let defaultSP = "0";
let defaultExp = 0;
let lvlExp = 10;
let lvl1limit = 10;
let lvl2limit = 15;
let lvl3limit = 20;
let actualHP = 10;
let level = 1;
let gold;
let steak = 2;
let nvEpee = 0;
let damage = 0;
let monstre11_hp = 15;
let soldat17_hp = 25;
let cleHangar = 0;


let hpBarHTML = document.getElementById("hpBar");
let levelHTML = document.getElementById("level");
let hpTextHTML = document.getElementById("hpText");
let playerNameHTML = document.getElementById("playerNameP");
let playerSexImg = document.getElementById("playerSexImg");
let playerGold = document.getElementById("playerGold");
let monsterHP = document.getElementById("hpMonstre");
let soldat17_hpDiv = document.getElementById("hpSoldat17");
let playerXp = document.getElementById("xp");

let gameOverText = document.getElementById("gameOver");

function checkHP() {
  if (actualHP >= defaultHP * 1) {
   console.log('> 100% HP')
   actualHP = defaultHP;
 } else if (actualHP == defaultHP * 0.5) {
    console.log('50% HP')
    hpBarHTML.style.setProperty("--c", "orange");
  } else if (actualHP <= defaultHP * 0.25) {
    console.log('25% HP')
    hpBarHTML.style.setProperty("--c", "red");
  } else if (actualHP > defaultHP * 0.50) {
    console.log('> 50% HP')
    hpBarHTML.style.setProperty("--c", "green");
  } else if (actualHP > defaultHP * 0.25) {
    hpBarHTML.style.setProperty("--c", "orange");
  }


}

function checkXp() {
  if (level === 1) {
    if (defaultExp >= lvl1limit) {
      level = 2;
      lvlExp = lvl2limit;
      defaultExp = 0;
      defaultHP = 25;
      actualHP = 25;
      hpBarHTML.style.setProperty("--c", "green");
      checkHP();
    }
  } else if (level === 2) {
    if (defaultExp >= lvl2limit) {
      level = 3;
      lvlExp = lvl3limit;
      defaultExp = 0;
      defaultHP = 30;
      actualHP = 30;
      hpBarHTML.style.setProperty("--c", "green");
      checkHP();
    }
  }
}


//nameInput = document.getElementById('playerName');
//genderInput = document.getElementById('playerGender');

class Player{
  constructor(name, sex, hp, sp, exp){
    this.name = name;
    this.sex = sex;
    this.hp = hp;
    this.sp = sp;
    this.exp = exp;
  }

  getName(){
    return this.name;
  }
  getSex(){
    return this.sex;
  }
  getHp(){
    return this.hp;
  }
  getSp(){
    return this.sp;
  }
  getExp(){
    return this.exp;
  }
}

let nameInput = document.getElementById("nameInput");

function setPlayerInfos(){
  playerName = nameInput.value;

  let player = new Player(playerName, playerSex, 20, 0, 0);

  playerNameP.innerHTML = playerName;

  if (playerSex === 'm' ) {
    playerSexImg.src="assets/img/icons/male.png";
  } else {
    playerSexImg.src="assets/img/icons/female.png";

  }

  console.log(player.getName());
  console.log(player.getSex());
  console.log(player.getExp());

  ChangeValue();
  checkpoint_04();
}

    hpBarHTML.max = defaultHP;
    hpBarHTML.value = actualHP;
    hpTextHTML.innerHTML = `${actualHP}/${defaultHP}`;
    levelHTML.innerHTML = `Lv. ${level}`;
    playerXp.innerHTML = `${defaultExp}/${lvlExp}`;

    function ChangeValue() {
      checkHP();
      checkXp();

      hpBarHTML.max = defaultHP;
      hpBarHTML.value = actualHP;
      hpTextHTML.innerHTML = `HP ${actualHP}/${defaultHP}`;
      levelHTML.innerHTML = `Lv. ${level}`;
      playerXp.innerHTML = `${defaultExp}/${lvlExp}`;
      playerGold.innerHTML = `${gold} G`;

      }




let audio = document.getElementById("audio");
let mainMenu = document.getElementById("main-menu");
let settingsMenu = document.getElementById("settings");
let persoStats = document.getElementById("stats_container");
let mainStoryDiv = document.getElementById("mainStory");

let checkpointCounter = 0;
// Variable div

let checkpoint_00Div = document.getElementById("checkpoint_00");
let checkpoint_01Div = document.getElementById("checkpoint_01");
let checkpoint_02Div = document.getElementById("checkpoint_02");
let checkpoint_03Div = document.getElementById("checkpoint_03");
let checkpoint_04Div = document.getElementById("checkpoint_04");
let checkpoint_05Div = document.getElementById("checkpoint_05");
let checkpoint_06Div = document.getElementById("checkpoint_06");
let checkpoint_07Div = document.getElementById("checkpoint_07");
let checkpoint_08Div = document.getElementById("checkpoint_08");
let checkpoint_09Div = document.getElementById("checkpoint_09");
let checkpoint_10Div = document.getElementById("checkpoint_10");
let checkpoint_11Div = document.getElementById("checkpoint_11");
let checkpoint_12Div = document.getElementById("checkpoint_12");
let checkpoint_13Div = document.getElementById("checkpoint_13");
let checkpoint_14Div = document.getElementById("checkpoint_14");
let checkpoint_15Div = document.getElementById("checkpoint_15");
let checkpoint_16Div = document.getElementById("checkpoint_16");
let checkpoint_17Div = document.getElementById("checkpoint_17");
let checkpoint_18Div = document.getElementById("checkpoint_18");
let checkpoint_19Div = document.getElementById("checkpoint_19");
let checkpoint_20Div = document.getElementById("checkpoint_20");
let checkpoint_21Div = document.getElementById("checkpoint_21");
let checkpoint_22Div = document.getElementById("checkpoint_22");
let checkpoint_23Div = document.getElementById("checkpoint_23");

// Text div

let text_01_00Div = document.getElementById("text_01_00");
let text_01_01Div = document.getElementById("text_01_01");
let text_08_00Div = document.getElementById("text_08_00");
let text_15_00Div = document.getElementById("text_15_00");
let text_20_00Div = document.getElementById("text_20_00");

// Button

let hiddenButton = document.getElementById("hiddenButton");

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

function reloadPage() {
  document.location.reload(true);
}


function eatSteak() {

  if (steak <= 0) {
    steak = 0;
  } else {
    steak--;
    console.log(steak);
    actualHP = actualHP + 4;
    ChangeValue();
  }
}

function doDamages() {
  if (nvEpee === 1) {
    damage = Math.floor(Math.random() * (4 - 1)) + 1;
    console.log('epee = 1 ' + damage)
  } else if (nvEpee === 2) {
    damage = Math.floor(Math.random() * (8 - 4)) + 4;
    console.log('epee = 2 ' + damage)
  } else {
    damage = Math.floor(Math.random() * (2 - 1)) + 1;
    console.log('epee = 0 ' + damage)
  }
}

function monsterDamage() {
  damage = Math.floor(Math.random() * (3 - 1)) + 1;
}

function soldat17Damage() {
  damage = Math.floor(Math.random() * (6 - 1)) + 1;
}

function changeText15_00() {
  text_15_00.innerHTML = " Vous avez dormi toute la nuit, vous vous sentez en pleine forme, tout vos HP vous ont ete rendu"
}

function checkpoint_00() {

    mainStoryDiv.style.display = "flex";
    hideMainMenu();
    checkpoint_00Div.style.display = 'block';
}

function checkpoint_01() {
  checkHP();
  checkpointCounter = 1;
  checkpoint_00Div.style.display = "none";
  persoStats.style.display = 'flex';
  checkpoint_01Div.style.display = 'block';
  document.body.style.backgroundImage = "url('assets/img/background/background-1.png')";
  audio.src = 'assets/musics/jail-sounds.mp3';
}

function checkpoint_02() {
  checkpointCounter = 2;
  checkpoint_01Div.style.display = "none";
  checkpoint_02Div.style.display = "block";
    persoStats.style.display = 'none';
  document.body.style.backgroundImage = "url('assets/img/background/simple_black.jpg')";
  audio.src = 'assets/musics/music-1.mp3';
  setTimeout(checkpoint_03, 500);
}

function checkpoint_03() {
  hpBarHTML.style.setProperty("--c", "green");
  actualHP = 20;
  gold = "200";
  ChangeValue();
  checkpointCounter = 3;
  checkpoint_02Div.style.display = "none";
  checkpoint_03Div.style.display = "block";
    persoStats.style.display = 'flex';
  document.body.style.backgroundImage = "url('assets/img/background/bedroom.gif')";
  document.body.style.backgroundPosition = "center";
}

function checkpoint_04() {
  checkpointCounter = 4;
  checkpoint_03Div.style.display = "none";
  checkpoint_04Div.style.display = "block";
    persoStats.style.display = 'flex';
  document.body.style.backgroundImage = "url('assets/img/background/simple_black.jpg')";
}

function checkpoint_06() {
  checkpointCounter = 6;
  checkpoint_04Div.style.display = "none";
  checkpoint_06Div.style.display = "block";
}

function checkpoint_07() {
  checkpointCounter = 7;
  checkpoint_06Div.style.display = "none";
  checkpoint_07Div.style.display = "block";
}

function checkpoint_08() {
  checkpointCounter = 8;
  checkpoint_07Div.style.display = "none";
  checkpoint_08Div.style.display = "block";

  if (nvEpee === 1) {
    text_08_00Div.innerHTML = `Vous partez de la base avec ${steak} steak rendant 4hp chacun et une epee rouillee`;
  } else {
    text_08_00Div.innerHTML = `Vous partez de la base avec ${steak} steak rendant 4hp chacun et une epee de niveau 1`;
  }
}

function checkpoint_09() {
  checkpointCounter = 9;
  checkpoint_08Div.style.display = "none";
  checkpoint_09Div.style.display = "block";
}

function checkpoint_10() {
  actualHP = 0;
  ChangeValue();

  checkpointCounter = 0;
  checkpoint_09Div.style.display = "none";
  checkpoint_10Div.style.display = "block";
  setTimeout(reloadPage, 5000)
}

function checkpoint_11() {
  checkpointCounter = 11;
  checkpoint_09Div.style.display = "none";
  checkpoint_11Div.style.display = "block";
  document.body.style.backgroundImage = "url('assets/img/background/simple_black.jpg')";
  audio.src = 'assets/musics/battle-theme.mp3';
  audio.volume = '0.3';
}

function checkpoint_12() {
  checkpointCounter = 12;
  checkpoint_11Div.style.display = "none";
  checkpoint_12Div.style.display = "block";
    audio.src = 'assets/musics/main-theme.mp3';
}

function checkpoint_13() {
  checkpointCounter = 13;
  checkpoint_12Div.style.display = "none";
  checkpoint_13Div.style.display = "block";
}

function checkpoint_14() {
  checkpointCounter = 14;
  checkpoint_13Div.style.display = "none";
  checkpoint_14Div.style.display = "block";
  nvEpee = 2;

}

function checkpoint_15() {
  checkpointCounter = 15;
  checkpoint_13Div.style.display = "none";
  checkpoint_14Div.style.display = "none";
  checkpoint_15Div.style.display = "block";
  actualHP = defaultHP;
  hpBarHTML.style.setProperty("--c", "green");
  ChangeValue();

setTimeout(changeText15_00, 2000);
}

function checkpoint_16() {

  checkpointCounter = 16;
  checkpoint_15Div.style.display = "none";
  checkpoint_16Div.style.display = "block";

}

function checkpoint_17() {

  checkpointCounter = 17;
  checkpoint_16Div.style.display = "none";
  checkpoint_17Div.style.display = "block";
  audio.src = 'assets/musics/battle-theme.mp3';
}

function checkpoint_18() {

  checkpointCounter = 18;
  checkpoint_17Div.style.display = "none";
  checkpoint_18Div.style.display = "block";
  audio.src = 'assets/musics/music-1.mp3';
  cleHangar = 1;
}

function checkpoint_19() {
  checkpointCounter = 19;
  checkpoint_16Div.style.display = "none";
  checkpoint_18Div.style.display = "none";
  checkpoint_19Div.style.display = "block";
}

function checkpoint_20() {
  checkpointCounter = 20;
  checkpoint_19Div.style.display = "none";
  checkpoint_20Div.style.display = "block";
}

function checkpoint_21() {
  checkpointCounter = 21;
  checkpoint_20Div.style.display = "none";
  checkpoint_21Div.style.display = "block";
}

function checkpoint_22() {
  checkpointCounter = 22;
  checkpoint_19Div.style.display = "none";
  checkpoint_21Div.style.display = "none";
  checkpoint_22Div.style.display = "block";
}

function checkpoint_23() {
  checkpointCounter = 23;
  checkpoint_22Div.style.display = "none";
  checkpoint_23Div.style.display = "block";
  document.body.style.backgroundImage = "url('assets/img/background/background-1.png')";
  audio.src = 'assets/musics/jail-sounds.mp3';
}





function choix_01_00() {
  text_01_00Div.style.display = "block";
  text_01_01Div.style.display = "none";
  hiddenButton.style.display = "block";
}

function choix_01_01() {
  text_01_01Div.style.display = "block";
  text_01_00Div.style.display = "none";
  hiddenButton.style.display = "block";

}

function choix_04_00() {
  checkpoint_04Div.style.display = "none";
  checkpoint_08Div.style.display = "block";
  checkpoint_08();
}

function choix_04_01() {
  checkpoint_04Div.style.display = "none";
  checkpoint_06Div.style.display = "block";
}

function choix_06_00() {
  gold = gold - 100;
  nvEpee = 1;
  ChangeValue();
  checkpoint_07();
}

function choix_07_00() {
  gold = gold - 20;
  steak = steak + 3;
  ChangeValue();
  checkpoint_08();
}

function choix_11_00() {
  doDamages();
  monstre11_hp = monstre11_hp - damage;
  monsterHP.innerHTML = `HP : ${monstre11_hp}/15`

  monsterDamage();
  actualHP = actualHP - damage;
  ChangeValue()

  if (actualHP <= 0) {
    actualHP = 0;
    gameOverText.style.display = 'block';
    setTimeout(reloadPage, 5000)
  }

  if (monstre11_hp <= 0) {
    monstre11_hp = 0;
    defaultExp = defaultExp + Math.floor(Math.random() * (8 - 4)) + 4;
    ChangeValue();
    console.log("monstre tué")
    checkpoint_12();
  }

}

function choix_12_00() {
  eatSteak();
}

function choix_12_01() {
  checkpoint_13()
}

function choix_17_00() {
  doDamages();
  soldat17_hp = soldat17_hp - damage;
  soldat17_hpDiv.innerHTML = `HP : ${soldat17_hp}/25`

  soldat17Damage();
  actualHP = actualHP - damage;
  ChangeValue()

  if (actualHP <= 0) {
    actualHP = 0;
    gameOverText.style.display = 'block';
    setTimeout(reloadPage, 3000)
  }

  if (soldat17_hp <= 0) {
    soldat17_hp = 0;
    defaultExp = defaultExp + Math.floor(Math.random() * (10 - 7)) + 4;
    ChangeValue();
    console.log("monstre tué")
    checkpoint_18();
  }
}

function choix_20_00() {
  if (cleHangar === 1) {
    text_20_00.innerHTML = "Vous entrez dans le hangar grace a la cle du soldat";
    setTimeout(checkpoint_21, 2000);
  } else if (cleHangar === 0){
    text_20_00.innerHTML = "Vous ne pouvez pas entrer dans le hangar"
  }
}
