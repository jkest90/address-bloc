const ContactController = require('../controllers/ContactController');
const sequelize = require('../db/models/index').sequelize;

describe("ContactController", () => {

   beforeEach((done) => {
      this.book = new ContactController();

// #1 - clear the test database of any entries created. call done() to indicate test is complete.
      sequelize.sync({force: true}).then((res) => {
         done();
      })
      .catch((err) => {
         done();
      });
   });

   it("should be defined", () => {
      expect(ContactController).toBeDefined();
   });

// #2 - group describe to ContactController suite. Next describe call to group all tests related to addContact method.
   describe("#addContact()", () => {

      it("should add a single contact into the book", (done) => {
         this.book.addContact("Alice", "001-101-1010", "jkest90@gmail.com")
         .then((contact) => {
            expect(contact.name).toBe("Alice");
            expect(contact.phone).toBe("001-101-1010");
            expect(contact.email).toBe("jkest90@gmail.com");
            // signal to Jasmine call has ended, test is finished, and async call is complete.
            done();
         })
         .catch((err) => {
            done();
         });
      });
   });

   describe("#getContacts()", () => {

      it("should return an empty array when no contacts are available", (done) => {
         this.book.getContacts()
         .then((contacts) => {
            expect(contacts.length).toBe(0);
            done();
         })
         .catch((err) => {
            console.log(err);
            done();
         });
      });

      it("should return an array of contacts when contacts are available", (done) => {
         this.book.addContact("Alice", "001-101-1010", "alice@example.com")
         .then( () => {
            this.book.getContacts()
            .then((contacts) => {
               expect(contacts.length).toBe(1);
               done()
            });
         })
         .catch((err) => {
            console.log(err);
            done();
         });
      });

   });

})
