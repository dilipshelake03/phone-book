app.controller('contactListCtrl', ['$scope', 'contactService', 'toaster',
    function ($scope, contactService, toaster) {
        $scope.title = 'My Contact Book';
        $scope.contactList = [];
        $scope.selectedId = null;
        $scope.contactForm = {};
        $scope.addNewContact = false;
        // Get contacts.
        contactService.getContacts().then(function (response) {
            $scope.contactList = response;
        },
            function (error) {
                console.log(error)
            });

        /**
         * Add new Contact.
         */
        $scope.onAddNew = function () {
            $scope.addNewContact = true;
        }

        /**
         * Remove existing contact.
         */
        $scope.removeContact = function (index) {
            $scope.contactList.splice(index, 1);
            toaster.pop('success', "success", "Contact deleted successfully");
        };

        /**
         * Update existing contact.
         */
        $scope.editContact = function (contactDetails, index) {
            $scope.selectedId = index;
            $scope.contactForm = angular.copy(contactDetails);
        }

        /**
         * Save edited or new contact.
         */
        $scope.saveContact = function (contactDetails, index) {
            if (index !== undefined) {
                $scope.contactList[index] = contactDetails;
                toaster.pop('success', "success", "Contact updated successfully");
            } else {
                $scope.contactList.push(contactDetails);
                toaster.pop('success', "success", "New contact added successfully");
            }
            $scope.resetData();
        }

        /**
         * Reset all flags & variables.
         */
        $scope.resetData = function () {
            $scope.selectedId = null;
            $scope.addNewContact = false;
            $scope.contactForm = {};
        }
    }
]);