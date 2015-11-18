let HomeController = function(ContactService) {
  
  // console.log('Hello from HomeController');

  let vm = this;


  ContactService.getAllContacts().then( (res) =>{
    console.log(res);
    vm.myContacts = res.data.results;
    console.log(vm.myContacts);
  });

};

HomeController.$inject = ['ContactService'];

export default HomeController;