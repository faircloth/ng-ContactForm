let AddController = function(ContactService) {
  
  // console.log('Hello from AddController');

  let vm = this;

  vm.addContact = addContact;

  function addContact (contactObj) {
    ContactService.addContact(contactObj).then( (res) =>{
      console.log(res);
    });
  }

};

AddController.$inject = ['ContactService'];

export default AddController;