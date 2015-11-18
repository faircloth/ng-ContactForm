let AddController = function(ContactService, $state, $scope) {

  let vm = this;

  vm.addContact = addContact;
  
  $scope.$watch('contact.email', function (newVal) {
    
    if (!newVal) return;

    if (!validateEmail(newVal)) {
      return console.log('email needs an @symbol');
    }
  });

  function addContact (contactObj) {
    
    if (!validateEmpty(contactObj.firstName)) {
      console.log('first name is empty');
    }

    if (!validateEmpty(contactObj.lastName)) {
      console.log('last name is empty');
    }

    if (!validateEmpty(contactObj.email)) {
      console.log('email is empty');
    }

    if (!validateEmpty(contactObj.website)) {
      console.log('website is empty');
    }


    if (!validateWebsite(contactObj.website)) {
      return console.log('website needs an http(s)');
    }

    console.log('added to the server');

    // ContactService.addContact(contactObj).then( (res) =>{
    //   console.log(res);
    //   $state.go('root.home');
    // });
  }

  function validateEmpty (field) {
    return field ? true : false;
  }

  function validateEmail (field) {
    return (field.indexOf('@') >= 0) ? true : false;
  }

  function validateWebsite (field) {
    var pattern = /^https?:\/\//i;
    return pattern.test(field);
  }

};

AddController.$inject = ['ContactService', '$state', '$scope'];

export default AddController;