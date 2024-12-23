angular.module('eventApp').controller('EventController', ['$scope', function($scope) {
    
    $scope.events = [];
    $scope.attendees = [];
    $scope.tasks = [];
    
   
    $scope.newEvent = {
        name: '',
        description: '',
        location: '',
        date: null
    };
    
    $scope.newAttendee = {
        name: ''
    };
    
    $scope.newTask = {
        name: '',
        deadline: null,
        status: 'Pending'
    };
    
    
    $scope.addEvent = function(event) {
        event.preventDefault();
        if ($scope.eventForm.$valid) {
            $scope.events.push({
                name: $scope.newEvent.name,
                description: $scope.newEvent.description,
                location: $scope.newEvent.location,
                date: $scope.newEvent.date
            });
            
           
            $scope.newEvent = {
                name: '',
                description: '',
                location: '',
                date: null
            };
            $scope.eventForm.$setPristine();
            $scope.eventForm.$setUntouched();
        }
    };
    
    $scope.addAttendee = function(event) {
        event.preventDefault();
        if ($scope.attendeeForm.$valid) {
            $scope.attendees.push({
                name: $scope.newAttendee.name
            });
            
            
            $scope.newAttendee = {
                name: ''
            };
            $scope.attendeeForm.$setPristine();
            $scope.attendeeForm.$setUntouched();
        }
    };
    
    $scope.addTask = function(event) {
        event.preventDefault();
        if ($scope.taskForm.$valid) {
            $scope.tasks.push({
                name: $scope.newTask.name,
                deadline: $scope.newTask.deadline,
                status: 'Pending'
            });
            
           
            $scope.newTask = {
                name: '',
                deadline: null,
                status: 'Pending'
            };
            $scope.taskForm.$setPristine();
            $scope.taskForm.$setUntouched();
        }
    };
    
    $scope.deleteEvent = function(index) {
        $scope.events.splice(index, 1);
    };
    
    $scope.deleteAttendee = function(index) {
        $scope.attendees.splice(index, 1);
    };
    
    $scope.deleteTask = function(index) {
        $scope.tasks.splice(index, 1);
    };
    
    $scope.markTaskComplete = function(index) {
        $scope.tasks[index].status = 'Completed';
    };
    
    $scope.getProgressPercentage = function() {
        if ($scope.tasks.length === 0) return 0;
        const completed = $scope.tasks.filter(task => task.status === 'Completed').length;
        return (completed / $scope.tasks.length) * 100;
    };
}]);
