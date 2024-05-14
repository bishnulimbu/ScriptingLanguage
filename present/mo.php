<?php

class Animal {
  public function makeSound() {
    echo "Generic animal sound\n";
  }
}

class Dog extends Animal {
  public function makeSound() {
    echo "Woof!\n";
  }
}

class Cat extends Animal {
  public function makeSound() {
    echo "Meow!\n";
  }
}

$animal = new Animal();
$animal->makeSound(); // Prints "Generic animal sound"

$dog = new Dog();
$dog->makeSound(); // Prints "Woof!"

$cat = new Cat();
$cat->makeSound(); // Prints "Meow!"

// Polymorphism example
$genericAnimal = new Dog(); // Upcasting
$genericAnimal->makeSound(); // Prints "Woof!" (Executes Dog's overridden method)

?>
