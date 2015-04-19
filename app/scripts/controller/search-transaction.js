/* 
 * @Author: ThanhCong
 * @Date:   2015-04-08 16:35:18
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 14:02:53
 */

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
    var Controller = function($scope, $element) {
        var input = $element.find('input');

        $scope.isTyping = false;
        $scope.term = '';
        $scope.handleSearchBoxKeyUp = function(e) {
            var term = input.val();
            if (e.keyCode == 13) {
                $scope.term = term;
                CommandBus.execute('SearchTransaction', {
                    term: term
                });
            }
            $scope.isTyping = (term == '') ? false : true;
        }
        $scope.handleCancelBtnClick = function() {
            input.val('');
            if ($scope.term != '') {
                CommandBus.execute('SearchTransaction', {
                    term: ''
                });
                $scope.term = '';
            }
            $scope.isTyping = false;
        }
    };

    app.controller('SearchTransactionCtrl', ['$scope', '$element', Controller]);

    return Controller;
});