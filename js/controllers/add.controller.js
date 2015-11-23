let AddController = function(ContactService, $state, $scope) {

  let vm = this;

  vm.addContact = addContact;
  vm.validateEmail = validateEmail;
  vm.validateEmpty = validateEmpty;
  vm.validateWebsite = validateWebsite;
  
  $scope.$watch('contact.email', function (newVal) {
    
    if(!newVal) return;

    if(!validateEmail(newVal)) {
      $scope.contact.emailError = 'Email needs an @ symbol';
      return console.log('email needs an @ symbol');
    } else {
      $scope.contact.emailError = undefined;
    }

  });

  $scope.$watch('contact.website', function (newVal) {
    
    if(!newVal) return;

    if(!validateWebsite(newVal)) {
      $scope.contact.webError = 'Website must contain http(s)';
      return console.log('Website must contain http(s)');
    } else {
      $scope.contact.webError = undefined;
    }

  });

  function addContact (contactObj) {
    
    if (!validateEmpty(contactObj.firstName)) {
      console.log('first name is empty');
      $scope.contact.fnError = "First name cannot be empty";
    }

    if (!validateEmpty(contactObj.lastName)) {
      console.log('last name is empty');
      $scope.contact.lnError = "Last name cannot be empty";
    }

    if (!validateEmpty(contactObj.email)) {
      console.log('email is empty');

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

    if (!validateEmpty(contactObj.comment)) {
      console.log('email is empty');
      $scope.contact.commentError = "Comment cannot be empty";
    }

    console.log('added to the server');

    ContactService.addContact(contactObj).then( (res) =>{
      console.log(res);
      $state.go('root.home');
    });
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