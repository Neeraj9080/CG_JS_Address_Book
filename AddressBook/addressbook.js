class Contact 
{
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName}, ${this.address}, ${this.city}, ${this.state}, ${this.zip}, ${this.phoneNumber}, ${this.email}`;
    }
}

function validateContact(contact) {
    const namePattern = /^[A-Z][a-z]{2,}$/;
    const addressPattern = /^.{4,}$/;  // Minimum 4 characters
    const zipPattern = /^[0-9]{6}$/;
    const phonePattern = /^[0-9]{10}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!namePattern.test(contact.firstName) || !namePattern.test(contact.lastName)) {
        throw new Error("Name should start with a capital letter and have at least 3 characters.");
    }
    if (!addressPattern.test(contact.address) || !addressPattern.test(contact.city) || !addressPattern.test(contact.state)) {
        throw new Error("Address, City, and State should have at least 4 characters.");
    }
    if (!zipPattern.test(contact.zip)) {
        throw new Error("Invalid zip code.");
    }
    if (!phonePattern.test(contact.phoneNumber)) {
        throw new Error("Invalid phone number format.");
    }
    if (!emailPattern.test(contact.email)) {
        throw new Error("Invalid email format.");
    }
    return true;
}

// Example Contact
const contact1 = new Contact("Rajan", "Chouhan", "Anand Nagar", "Bhopal", "Madhya Pradesh", "400088", "1234567890", "rajan@example.com");
console.log(contact1.toString());

try {
    validateContact(contact1);  // Validate contact1
    console.log("Contact is valid.");
} 
catch (error) {
    console.error(error.message);
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        try {
            validateContact(contact);
            this.contacts.push(contact);
            console.log("Contact added successfully.");
        } catch (error) {
            console.error(error.message);
        }
    }
}

// Create address book
const myAddressBook = new AddressBook();
myAddressBook.addContact(contact1);
console.log(myAddressBook.contacts);

AddressBook.prototype.editContact = function (firstName, lastName, newDetails) {
    const index = this.contacts.findIndex(contact => contact.firstName === firstName && contact.lastName === lastName);
    if (index !== -1) {
        this.contacts[index] = { ...this.contacts[index], ...newDetails };
        console.log("Contact updated successfully.");
    } else {
        console.log("Contact not found.");
    }
};

// Example of editing contact
myAddressBook.editContact("Rajan", "Chouhan", { phoneNumber: "1234567890" });
console.log(myAddressBook.contacts);


AddressBook.prototype.deleteContact = function (firstName, lastName) {
    const index = this.contacts.findIndex(contact => contact.firstName === firstName && contact.lastName === lastName);
    if (index !== -1) {
        this.contacts.splice(index, 1);
        console.log("Contact deleted successfully.");
    } else {
        console.log("Contact not found.");
    }
};

// Example of deleting contact
myAddressBook.deleteContact("Rajan", "Chouhan");
console.log(myAddressBook.contacts);


AddressBook.prototype.getNumberOfContacts = function () {
    return this.contacts.length;
};

// Example of getting the number of contacts
console.log("Number of contacts: ", myAddressBook.getNumberOfContacts());

const contact = new Contact("Sachin", "Shrivastwa", "Anand Nagar", "Bhopal", "Madhya Pradesh", "400088", "0987654321", "sachin@example.com");
AddressBook.prototype.addContact = function (contact) {
    const isDuplicate = this.contacts.some(existingContact => 
        existingContact.firstName === contact.firstName && existingContact.lastName === contact.lastName
    );
    if (isDuplicate) {
        console.log("Duplicate entry found.");
    } else {
        try {
            validateContact(contact);
            this.contacts.push(contact);
            console.log("Contact added successfully.");
        } catch (error) {
            console.error(error.message);
        }
    }
};

// Example of adding a non duplicate contact
myAddressBook.addContact(contact);


AddressBook.prototype.searchByCityOrState = function (city, state) {
    return this.contacts.filter(contact => contact.city === city || contact.state === state);
};

// Example of searching contacts
console.log(myAddressBook.searchByCityOrState("Bhopal", "Madhya Pradesh"));


AddressBook.prototype.viewByCityOrState = function (city, state) {
    return this.contacts.filter(contact => contact.city === city || contact.state === state).map(contact => contact.toString());
};

// Example of viewing contacts
console.log(myAddressBook.viewByCityOrState("Bhopal", "Madhya Pradesh"));


AddressBook.prototype.getCountByCityOrState = function (city, state) {
    const filteredContacts = this.contacts.filter(contact => contact.city === city || contact.state === state);
    return filteredContacts.length;
};

// Example of getting contact count
console.log("Number of contacts in Bhopal or Madhya Pradesh : ", myAddressBook.getCountByCityOrState("Bhopal", "Madhya Pradesh"));


AddressBook.prototype.sortByName = function () {
    this.contacts.sort((a, b) => a.firstName.localeCompare(b.firstName) || a.lastName.localeCompare(b.lastName));
};

// Example of sorting by name
myAddressBook.sortByName();
console.log(myAddressBook.contacts);


AddressBook.prototype.sortBy = function (key) {
    this.contacts.sort((a, b) => a[key].localeCompare(b[key]));
};

// Example of sorting by city
myAddressBook.sortBy("city");
console.log(myAddressBook.contacts);
