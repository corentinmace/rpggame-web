let playerName;
let playerSex;

let defaultHP = "20";
let defaultSP = "0";
let defaultExp = "0";
let actualHP = "10";
let level = "1";

let hpBarHTML = document.getElementById("hpBar");
let levelHTML = document.getElementById("level");
let hpTextHTML = document.getElementById("hpText");

function checkHP() {
  if (actualHP == defaultHP * 0.5) {
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

function setPlayerInfos(){
  playerName = nameInput.value;
  playerSex = genderInput.value;

  let player = new Player(playerName, playerSex, 20, 0, 0);

  console.log(player.getName());
  console.log(player.getSex());
  console.log(player.getExp());
}

    hpBarHTML.max = defaultHP;
    hpBarHTML.value = actualHP;
    hpTextHTML.innerHTML = `${actualHP}/${defaultHP}`;
    levelHTML.innerHTML = `Lv. ${level}`;

    function ChangeValue() {
      actualHP = document.getElementById("test").value;

      hpBarHTML.max = defaultHP;
      hpBarHTML.value = actualHP;
      hpTextHTML.innerHTML = `HP ${actualHP}/${defaultHP}`;
      levelHTML.innerHTML = `Lv. ${level}`;

      }


      checkHP();
