let AddController = function(ContactService, $state) {
  
  // console.log('Hello from AddController');

  let vm = this;

  vm.addContact = addContact;

  function addContact (contactObj) {
    ContactService.addContact(contactObj).then( (res) =>{
      console.log(res);
      $state.go('root.home');
    });
  }

};

AddController.$inject = ['ContactService', '$state'];

export default AddController;