describe('State1Controller', function() {
    beforeEach(module('app'));

    var vm, controller;
    
    beforeEach(inject(function(_$rootScope_, _$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $rootscope = _$rootScope_;
    }));

    describe('vm.addNew', function() {

        beforeEach(function() {
            vm = $rootScope.$new();
            controller = $controller('State1Controller', { $scope : vm });
        });

        it('makes the variable vm.edit equal to true', function() {
            vm.addNew();
            expect(vm.edit).toEqual(true);
        });
    });
});
