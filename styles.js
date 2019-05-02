"use strict";

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [
            new Contact("Heather", "heather@hi.com", 1234567890, "Self"),
            new Contact("Steve", "steve@hi.com", 1234567890, "Boyfriend")
        ];
    }
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    print() {
        for (let i = 0; i < this.contacts.length; i++) {
            console.log(`${i}. Name: ${this.contacts[i].name}, Email: ${this.contacts[i].email}, Phone: ${this.contacts[i].phone}, Relation: ${this.contacts[i].relation}`);
        }
    }
}

const book = new AddressBook();

while (true) {
    let choice = prompt("Do you want to Add, Delete, Print or Quit?");
    if (choice === "Quit") {
        console.log("Bye!");
        break;
    }
    else if (choice === "Print") {
        book.print();
    }
    else if (choice === "Delete") {
        let index = prompt("What is the index of the contact?");
        book.deleteAt(index);
    }
    else if (choice === "Add") {
        book.add(new Contact(
            prompt("What is the name?"),
            prompt("What is the email?"),
            prompt("What is the phone number?"),
            prompt("What is the relation?")
        ));
    }
}