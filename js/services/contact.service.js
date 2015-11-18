let ContactService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/contact';

  this.addContact = addContact;
  this.getAllContacts = getAllContacts;

  
  function Contact (contactObj) {
    this.firstName = contactObj.firstName;
    this.lastName = contactObj.lastName;
    this.email = contactObj.email;
    this.cellPhone = contactObj.cellPhone;
    this.website = contactObj.website;
    this.comment = contactObj.comment;
    this.notes = contactObj.notes;
  }


  function addContact (contactObj) {
    let contact = new Contact (contactObj);
    return $http.post(url, contact, PARSE.CONFIG);
  }

  function getAllContacts () {
    return $http.get(url, PARSE.CONFIG);
  }

};

ContactService.$inject = ['$http', 'PARSE'];

export default ContactService;