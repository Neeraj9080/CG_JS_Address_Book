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

try {
    // Example Contact
    const contact1 = new Contact("Rajan", "Chouhan", "Anand Nagar", "Bhopal", "Madhya Pradesh", "400088", "1234567890", "rajan@example.com");
    validateContact(contact1);  // Validate contact1
    console.log("Contact is valid.");
    console.log(contact1.toString());
} 
catch (error) {
    console.error(error.message);
}
