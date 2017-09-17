// Defining angularjs Controller and injecting ProductsService
app.controller('myCtrl', function ($scope, $http, GoodnewsService, JournalistService) {

    
    $scope.predicates = ['NewsId', 'Title', 'NewsDate', 'JournalistId', 'Content', 'ImageUrl', 'NewsType'];
    $scope.selectedPredicate = $scope.predicates[0];
    $scope.itemsByPage = 2;

    $scope.goodnewsData = null;
    $scope.goodnewsDataOriginal = null;

    // Fetching records from the factory created at the bottom of the script file
    GoodnewsService.GetAllRecords().then(function (d) {
        $scope.goodnewsDataOriginal = d.data;
        $scope.goodnewsData = chunk($scope.goodnewsDataOriginal, 3); // Success
    }, function () {
        alert('Error Occured !!!'); // Failed
    });

    $scope.Goodnews = {
        NewsId: '',
        Title: '',
        NewsDate: '',
        JournalistId: '',
        Content: '',
        ImageUrl: '',
        NewsType: '',
    };

    $scope.clearGoodnews = function () {
        $scope.Goodnews.NewsId = '';
        $scope.Goodnews.Title = '';
        $scope.Goodnews.NewsDate = '';
        $scope.Goodnews.JournalistId = '';
        $scope.Goodnews.Content = '';
        $scope.Goodnews.ImageUrl = ''; //optional
        $scope.Goodnews.NewsType = ''; //optional
    }

    $scope.saveGoodnews = function () {
        if ($scope.Goodnews.Title != "" &&
            $scope.Goodnews.NewsDate != "" &&
            $scope.Goodnews.JournalistId != "" &&
            $scope.Goodnews.Content != "") {
            $http({
                method: 'POST',
                url: 'api/Goodnews/PostGoodnews/',
                data: $scope.Goodnews
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.goodnewsDataOriginal.push(response.data);
                $scope.clearGoodnews();
                $scope.goodnewsNotifyStyle = "alert alert-success";
                $scope.goodnewsNotify = "Good News Added Successfully !!!";
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.goodnewsNotifyStyle = "alert alert-danger";
                $scope.goodnewsNotify = "Error : " + response.data.ExceptionMessage;
            });
        }
    }

    $scope.editGoodnews = function (data) {
        $scope.Goodnews = {
            NewsId: data.NewsId,
            Title: data.Title,
            NewsDate: data.NewsDate,
            JournalistId: data.JournalistId,
            Content: data.Content,
            ImageUrl: data.ImageUrl,
            NewsType: data.NewsType
        };
    }

    $scope.updateGoodnews = function () {
        if ($scope.Goodnews.Title != "" &&
            $scope.Goodnews.NewsDate != "" &&
            $scope.Goodnews.JournalistId != "" &&
            $scope.Goodnews.Content != "") {
            $http({
                method: 'PUT',
                url: 'api/Goodnews/PutGoodnews/' + $scope.Goodnews.NewsId,
                data: $scope.Goodnews
            }).then(function successCallback(response) {
                $scope.goodnewsDataOriginal = response.data;
                $scope.clearGoodnews();
                $scope.goodnewsNotifyStyle = "alert alert-success";
                $scope.goodnewsNotify = "Good News " + $scope.Goodnews.Title + " Updated Successfully !!!";
            }, function errorCallback(response) {
                $scope.goodnewsNotifyStyle = "alert alert-danger";
                $scope.goodnewsNotify = "Error : " + response.data.ExceptionMessage;
            });
        }
    }

    $scope.deleteGoodnews = function () {
        $http({
            method: 'DELETE',
            url: 'api/Goodnews/DeleteGoodnews/' + $scope.Goodnews.NewsId,
        }).then(function successCallback(response) {
            $scope.goodnewsDataOriginal = response.data;
            $scope.clearGoodnews();
            $scope.goodnewsNotifyStyle = "alert alert-success";
            $scope.goodnewsNotify = "Good News " + $scope.Goodnews.Title + " Deleted Successfully !!!";
        }, function errorCallback(response) {
            $scope.goodnewsNotifyStyle = "alert alert-danger";
            $scope.goodnewsNotify = "Error : " + response.data.ExceptionMessage;
        });
    }

    $scope.journalistData = null;
    $scope.journalistDataOriginal = null;

    function chunk(arr, size) {
        var newArr = [];
        for (var i = 0; i < arr.length; i += size) {
            newArr.push(arr.slice(i, i + size));
        }
        return newArr;
    }

    // Fetching records from the factory created at the bottom of the script file
    JournalistService.GetAllRecords().then(function (d) {
        $scope.journalistDataOriginal = d.data;
        $scope.journalistData = chunk($scope.journalistDataOriginal, 3); // Success
    }, function () {
        alert('Error Occured !!!'); // Failed
    });

    $scope.Journalist = {
        JournalistId: '',
        FullName: '',
        PhoneNumber: '',
        Address: '',
        Email: '',
        ImageUrl: ''
    };

    $scope.clearJournalist = function () {
        $scope.Journalist.FullName = '';
        $scope.Journalist.PhoneNumber = '';
        $scope.Journalist.Address = '';
        $scope.Journalist.Email = '';
        $scope.Journalist.ImageUrl = '';
    }

    $scope.saveJournalist = function () {
        if ($scope.Journalist.FullName != "" &&
            $scope.Journalist.PhoneNumber != "" &&
            $scope.Journalist.Email != "") {
            $http({
                method: 'POST',
                url: 'api/Journalist/PostJournalist/',
                data: $scope.Journalist
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.journalistDataOriginal.push(response.data);
                $scope.clearJournalist();
                $scope.journalistNotifyStyle = "alert alert-success";
                $scope.journalistNotify = "Jounralist Added Successfully !!!";
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.journalistNotifyStyle = "alert alert-danger";
                $scope.journalistNotify = "Error : " + response.data.ExceptionMessage;
            });
        }
    }

    $scope.editJournalist = function (data) {
        $scope.Journalist = {
            JournalistId: data.JournalistId,
            FullName: data.FullName,
            PhoneNumber: data.PhoneNumber,
            Address: data.Address,
            Email: data.Email,
            ImageUrl: data.ImageUrl,
        };
    }

    $scope.updateJournalist = function () {
        if ($scope.Journalist.FullName != "" &&
            $scope.Journalist.PhoneNumber != "" &&
            $scope.Journalist.Email != "") {
            $http({
                method: 'PUT',
                url: 'api/Journalist/PutJournalist/' + $scope.Journalist.JournalistId,
                data: $scope.Journalist
            }).then(function successCallback(response) {
                $scope.journalistDataOriginal = response.data;
                $scope.clearJournalist();
                $scope.journalistNotifyStyle = "alert alert-success";
                $scope.journalistNotify = "Jounralist " + $scope.Journalist.FullName + " Updated Successfully !!!";
            }, function errorCallback(response) {
                $scope.journalistNotifyStyle = "alert alert-danger";
                $scope.journalistNotify = "Error : " + response.data.ExceptionMessage;
            });
        }
    }

    $scope.deleteJournalist = function () {
        $http({
            method: 'DELETE',
            url: 'api/Journalist/DeleteJournalist/' + $scope.Journalist.JournalistId,
        }).then(function successCallback(response) {
            $scope.journalistDataOriginal = response.data;
            $scope.clearJournalist();
            $scope.journalistNotifyStyle = "alert alert-success";
            $scope.journalistNotify = "Journalist " + $scope.Journalist.FullName + " Deleted Successfully !!!";
        }, function errorCallback(response) {
            $scope.journalistNotifyStyle = "alert alert-danger";
            $scope.journalistNotify = "Error : " + response.data.ExceptionMessage;
        });
    }

});
    
//Factory service for JournalistService
app.factory('JournalistService', function ($http) {
    var fac = {};
    fac.GetAllRecords = function () {
        return $http.get('api/Journalist/GetAllJournalists');
    }
    return fac;
});

app.factory('GoodnewsService', function ($http) {
    var fac = {};
    fac.GetAllRecords = function () {
        return $http.get('api/Goodnews/GetAllGoodnews');
    }
    return fac;
});