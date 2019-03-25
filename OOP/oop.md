# Object Oriented Programming(OOP)

Some OOP concepts include:
**Class** is a collection of methods and variables that serves as a blueprint that defines the data and behavior of an object.

**Object** is an instance of a class.

**Inheritance** is a feature that allows for code reusability when a class includes property of another class. In humans for example, men and women share properties like number of eyes or limbs, inheritance allows us to have a base human class where a man and woman class to reuse elements in human.

**Abstraction** means only showing what’s required to the user while keeping away details the user does not need. One hides all but the relevant data about an object in order to reduce complexity and increase efficiency. It focuses on what an object does as opposed to how it works.

**Encapsulation** involves binding data and methods together into a single unit. It’s also a mechanism used to restrict access to some components using access modifiers like private, protected etc.

**Polymorphism** is the ability to process objects differently/ take on many forms depending on their data type or class. It means that the child class object can be assigned to any class reference in its parent hierarchy, including itself. The ability to create a variable, a function, or an object that has more than one form.

## S.O.L.I.D. Principles

**S** - Single responsibility principle states that a class should only do one job giving only one reason to change.

**O**  - Open closed principle states that objects, classes, methods, functions etc should be open for extension, but closed for modification. This means that if an entities behaviour was to be extended, they should be able to do so without modifying what was originally there.

**L**  - Liskov substitution principle states that every subclass/derived class should be substitutable for their base/parent class without affecting the program’s functionality.

**I**  - Interface segregation principle states that a client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use. This means that one should never create bloated interfaces.

**D**  - Dependency Inversion principle states that entities must depend on abstractions not on concretions. It states that the high level module must not depend on the low level module, but they should depend on abstractions.
