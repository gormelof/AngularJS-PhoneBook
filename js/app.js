var app = angular.module('PhoneBook', []);

app.controller('PhoneController', function($scope){

    $scope.persons = [
        { id:0, name:'Furkan Başaran',   phoneNumber:'+901230984554'},
        { id:1, name:'Ahmet Ozan Tekin', phoneNumber:'+904567890101'},
        { id:2, name:'Oğuzhan Aygün',    phoneNumber:'+909812315454'},
        { id:3, name:'Batuhan Çiftçi',   phoneNumber:'+908769870011'}
    ];

    $scope.addPerson = function(){

        $scope.persons.push(

            {
                id: $scope.persons.length,
                name: $scope.newPerson.name,
                phoneNumber: $scope.newPerson.phoneNumber
            }

        );

        $scope.newPerson.name="";
        $scope.newPerson.phoneNumber="";

    };

    $scope.deletePerson = function(name, id){

        if(confirm("Delete " + name + "?")){
            for(var i=0; i<$scope.persons.length; i++){
                if($scope.persons[i].id === id){
                    $scope.persons.splice(i,1);
                }
            }
        }

    };
});
