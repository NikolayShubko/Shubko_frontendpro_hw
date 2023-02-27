class Hamburger {
  constructor(info, stuffing) {
    this.info = info;
    this.stuffing = stuffing;
    this.toppings = [];
  }
  static get sizeSmall() {
    return { size: "Small", price: 50, calories: 20 };
  }

  static get sizeHuge() {
    return { size: "Huge", price: 100, calories: 40 };
  }

  static get cheese() {
    return { stuffingName: "Cheese", price: 10, calories: 20 };
  }

  static get salad() {
    return { stuffingName: "Salad", price: 20, calories: 5 };
  }

  static get potato() {
    return { stuffingName: "Potato", price: 15, calories: 10 };
  }

  static get toppingSeasonings() {
    return { toppingType: "Add Seasonings", price: 15, calories: 0 };
  }

  static get toppingMayonnaise() {
    return { toppingType: "Add Mayo", price: 20, calories: 5 };
  }
  addTopping(topping) {
    this.toppings.push(topping);
    return this;
  }

  calculateCalories() {
    const toppingCalories = this.toppings.reduce(
      (total, topping) => total + topping.calories,
      0
    );
    return this.info.calories + this.stuffing.calories + toppingCalories;
  }

  calculatePrice() {
    const toppingPrice = this.toppings.reduce(
      (total, topping) => total + topping.price,
      0
    );
    return this.info.price + this.stuffing.price + toppingPrice;
  }
}
const hamburger = new Hamburger(Hamburger.sizeSmall, Hamburger.cheese);
hamburger.addTopping(Hamburger.toppingMayonnaise);
console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());
hamburger.addTopping(Hamburger.toppingSeasonings);
console.log("Price with Seasonings: " + hamburger.calculatePrice());
