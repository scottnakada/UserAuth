'use strict';

angular.module('ionFireAuthApp')
    .controller('AdminCtrl', function ($scope, Auth, toaster, $location) {

        $scope.data = {};
        $scope.data.sortReverse = false;
        $scope.data.columns = [
            {"id": "1453", "name": "Product"},
            {"id": "1355", "name": "Weight"},
            {"id": "0393", "name": "Height"},
            {"id": "3932", "name": "Width"},
            {"id": "2939", "name": "Depth"},
            {"id": "1234", "name": "Color"}
        ];
        $scope.data.items = [
            {"1234": "Pink", "1355": "21 oz.", "1453": "ea", "2939": "3 in.", "3932": "29  in.", "0393": "12  in."},
            {
                "1234": "Black",
                "1355": "26 oz.",
                "1453": "irure",
                "2939": "13 in.",
                "3932": "9  in.",
                "0393": "19  in."
            },
            {
                "1234": "Yellow",
                "1355": "1 oz.",
                "1453": "laborum",
                "2939": "12 in.",
                "3932": "27  in.",
                "0393": "1  in."
            },
            {
                "1234": "Gold",
                "1355": "19 oz.",
                "1453": "magna",
                "2939": "27 in.",
                "3932": "23  in.",
                "0393": "22  in."
            },
            {
                "1234": "Purple",
                "1355": "24 oz.",
                "1453": "in",
                "2939": "9 in.",
                "3932": "23  in.",
                "0393": "25  in."
            },
            {
                "1234": "Silver",
                "1355": "32 oz.",
                "1453": "labore",
                "2939": "12 in.",
                "3932": "22  in.",
                "0393": "12  in."
            },
            {
                "1234": "Brown",
                "1355": "7 oz.",
                "1453": "reprehenderit",
                "2939": "13 in.",
                "3932": "30  in.",
                "0393": "1  in."
            },
            {
                "1234": "Gold",
                "1355": "6 oz.",
                "1453": "culpa",
                "2939": "11 in.",
                "3932": "31  in.",
                "0393": "16  in."
            },
            {
                "1234": "Pink",
                "1355": "19 oz.",
                "1453": "est",
                "2939": "29 in.",
                "3932": "29  in.",
                "0393": "24  in."
            },
            {
                "1234": "Silver",
                "1355": "10 oz.",
                "1453": "adipisicing",
                "2939": "7 in.",
                "3932": "0  in.",
                "0393": "23  in."
            },
            {"1234": "Brown", "1355": "15 oz.", "1453": "et", "2939": "6 in.", "3932": "0  in.", "0393": "4  in."},
            {
                "1234": "Purple",
                "1355": "27 oz.",
                "1453": "fugiat",
                "2939": "18 in.",
                "3932": "21  in.",
                "0393": "27  in."
            }
        ];

        // Make sure the user is an Admin before showing this page
        if (!Auth.isAdmin()) {
            toaster.pop('error', 'You need Admin privileges to access this page');
            // See if they are signed In
            if (!Auth.signedIn()) {
                // Not logged in, go to the login page
                $location.path("/login");
            } else {
                // Not authorized for this page; go back to the store
                $location.path("/store");
            }
        }

        // Provide access to the list of user profiles
        $scope.users = Auth.all;

    });
