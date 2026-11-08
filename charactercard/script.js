const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 1,
  health: 100,
  image: "https://andejuli.github.io/wdd131/character_card/snortleblat.webp",

  attacked: function() {
    this.health -= 20;

    if (this.health <= 0) {
      this.health = 0;
      document.querySelector("#message").textContent =
        this.name + " has died!";
      document.querySelector("#attacked").disabled = true;
    }
  },

  levelUp: function() {
    this.level += 1;
  }
};

function displayCharacter() {
  document.querySelector("#characterName").textContent = character.name;
  document.querySelector("#characterClass").textContent = character.class;
  document.querySelector("#characterLevel").textContent = character.level;
  document.querySelector("#characterHealth").textContent = character.health;
  document.querySelector("#characterImage").src = character.image;
}

document.querySelector("#attacked").addEventListener("click", function() {
  character.attacked();
  displayCharacter();
});

document.querySelector("#levelUp").addEventListener("click", function() {
  character.levelUp();
  displayCharacter();
});

displayCharacter();
