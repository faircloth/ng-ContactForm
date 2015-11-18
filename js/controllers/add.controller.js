let AddController = function(ContactService, $state) {
  
  // console.log('Hello from AddController');

  let vm = this;

  vm.addContact = addContact;


  vm.errorFN = 'Please add a first name';
  vm.errorLN = 'Please add a last name';
  vm.errorEMAIL = 'Please enter a valid email address including @';
  vm.errorWEB = 'Please enter a valid website starting with http(s)://';
  vm.errorMSG = 'Please enter a message';

  let vfirst = false;
  let vlast = false;
  let vemail = false;
  let vweb = false;
  let vmsg = false;


  function addContact (contactObj) {
    ContactService.addContact(contactObj).then( (res) =>{
      console.log(res);
      $state.go('root.home');
    });
  }

  let validateFN = function (firstName) {
    if (firstName < 1) {
      vm.errorFN = "Please add your first name";
    } else {
      vm.errorFN = 'Cool';
    }
  };




};

AddController.$inject = ['ContactService', '$state'];

export default AddController;