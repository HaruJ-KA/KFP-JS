let charNameEL = document.getElementById("charName");
let charQuoteEL = document.getElementById("charQuote");
let charImageEL = document.getElementById("charImage");

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let name = document.getElementById("charIn").value.toLowerCase();

  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    setCharacter("Po", "po", `"Buddy, I am the Dragon Warrior!"`);
  } else if (name === "tigress" || name === "master tigress") {
    setCharacter("Tigress", "tigress", `"That was hardcore!"`);
  } else if (name === "mantis") {
    setCharacter("Mantis", "mantis", `"Fear the bug!"`);
  } else if (name === "monkey") {
    setCharacter("Monkey", "monkey", `"We should hang out!"`);
  } else if (name === "viper") {
    setCharacter("Viper", "viper", `"I don't need to bite to fight!"`);
  } else if (name === "crane") {
    setCharacter("Crane", "crane", `"Wings of Justice!"`);
  } else if (name === "boss wolf" || name === "wolf") {
    setCharacter(
      "Boss Wolf",
      "boss-wolf",
      `"Is that all you've got? 'Cause it feels like I'm fighting a big, old, fluffy cloud!"`
    );
  } else if (name === "croc") {
    setCharacter("Croc", "croc", `"Vengeance is served!"`);
  } else if (name === "kai") {
    setCharacter(
      "Kai",
      "kai",
      `"Look at you pathetic fools, groveling at the feet of Oogway the Magnificent!"`
    );
  } else if (name === "mr ping" || name === "ping") {
    setCharacter(
      "Mr Ping",
      "mr-ping",
      `"To make something special you just have to believe it's special.
    "`
    );
  } else if (
    name === "oogway" ||
    name === "turtle" ||
    name === "master oogway"
  ) {
    setCharacter(
      "Oogway",
      "oogway",
      `"It matters not what someone is born, but what they grow to be."`
    );
  } else if (name === "shen") {
    setCharacter(
      "Shen",
      "shen",
      `"The only reason you are still alive is that I find your stupidity mildly amusing."`
    );
  } else if (name === "shifu") {
    setCharacter(
      "Shifu",
      "shifu",
      `"Before the battle of the fist comes the battle of the mind."`
    );
  } else if (name === "soothsayer") {
    setCharacter(
      "Soothsayer",
      "soothsayer",
      `"It is the rest of your story, who you choose to be."`
    );
  } else if (name === "storming ox" || name === "ox") {
    setCharacter(
      "Storming Ox",
      "storming-ox",
      `"Then the weapon would kill... everyone!"`
    );
  } else if (name === "tai lung") {
    setCharacter(
      "Tai Lung",
      "tai-lung",
      `"All I ever did, I did to make you PROUD!!"`
    );
  } else {
    setCharacter("???????", "question-mark", "-------------");
  }
}

function setCharacter(name, imgname, quote) {
  document.getElementById("charName").innerHTML = name;
  document.getElementById("charImage").src = `img/${imgname}.png`;
  document.getElementById("charQuote").innerHTML = quote;
}

let changeEL = document.getElementById("changeTheme");

document.getElementById("btnTheme").addEventListener("click", ChangeTheme);

function ChangeTheme() {
  if (
    changeEL.value.toLowerCase() == "dark" ||
    changeEL.value.toLowerCase() == "black"
  ) {
    document.body.style.background = "rgba(0, 0, 0, 0.7)";
    document.getElementById("h1").style.color = "white";
    document.getElementById("intro").style.color = "white";
  } else if (
    changeEL.value.toLowerCase() == "light" ||
    changeEL.value.toLowerCase() == "white"
  ) {
    document.body.style.background = "rgba(255,255,255, 0.7)";
    document.getElementById("h1").style.color = "black";
    document.getElementById("intro").style.color = "white";
  } else if (changeEL.value.toLowerCase() == "random") {
    r = Math.round(Math.random() * (255 - 0) + 0);
    g = Math.round(Math.random() * (255 - 0) + 0);
    b = Math.round(Math.random() * (255 - 0) + 0);

    var rgb = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.background = rgb;

    a = Math.round(Math.random() * (255 - 0) + 0);
    c = Math.round(Math.random() * (255 - 0) + 0);
    d = Math.round(Math.random() * (255 - 0) + 0);

    var acd = "rgb(" + a + "," + c + "," + d + ")";
    document.getElementById("h1").style.color = acd;
    document.getElementById("intro").style.color = acd;
  }
}
