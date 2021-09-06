export class Human {
  static minLifeTime = 18;
  static maxLifeTime = 100;
  age = 0;
  lifeTime = Math.floor(Math.random() * (Human.maxLifeTime - Human.minLifeTime + 1) + Human.minLifeTime);

  constructor(name, eyesColor, gender, parents = []) {
    this.name = name;
    this.eyesColor = eyesColor;
    this.gender = gender;
    this.parents = parents;
  }

  growing() {
    if (this.age <= 18) {
      if (this.age <=12){
          this.weight = Math.floor(this.weight += 3.5);
          this.height = Math.floor(this.height += 6);
      }
      if(this.age>12){
        this.weight = Math.floor(this.weight += 4.5);
        this.height = Math.floor(this.height += 8.5);
      }
    }

    this.age++;
  }



}