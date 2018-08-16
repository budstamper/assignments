// CONSTRUCTOR FUNCTIONS // 
// Vehicle, make, model, sound
// class - no relation to HTML or CSS

// function Vehicle(make, model, sound){
//   this.make = make
//   this.model = model
//   this.sound = sound
// }

// Vehicle.prototype.honk = function(){
//   console.log(this.sound)
// }


// ES6 Classes //
class Vehicle {
    constructor(make, model, sound){
      this.make = make
      this.model = model
      this.sound = sound
    }
    honk(){
      console.log(this.sound)
    }
  }
  
  class MotorCycle extends Vehicle {
    constructor(make, model, sound, hasSideCar){
      super(make, model, sound)
      this.hasSideCar = hasSideCar
    }
  }
  
  const harley = new MotorCycle('harley', 'davidson', 'screeeee', true)
  harley.honk()
