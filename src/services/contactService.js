'use strict'
app.factory('contactService', ['$http', '$q', function ($http, $q) {

    /**
     * Get contact list from REST API.
     */
    function getContacts() {
        var deferred = $q.defer();
        $http.get('https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts').then(function (data) {
            // Convert item.phone to number type as we are using input type=number for Phone numbers.
            // string values are not working with input type number. 
            const response = data.data.map(item => {
                let obj = { ...item };
                obj.phone = Number(obj.phone);
                return obj;
            });
            deferred.resolve(response);
        }, function (err) {
            deferred.reject(err);
        });

        return deferred.promise;
    }

    return {
        getContacts: getContacts
    };
}]);
