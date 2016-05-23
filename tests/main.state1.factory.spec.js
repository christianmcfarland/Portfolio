"use strict";

//describe the behavior we are testing
describe("todo list factory", function() {
    //the top level module

    beforeEach(module('app'));

    var ToDoListFactory, httpBackend;

    //inject the factory and httpbackend
    beforeEach(inject(function(_ToDoListFactory_, _$httpBackend_) {
        ToDoListFactory = _ToDoListFactory_;
        httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });


    it("should have a getToDos method", function() {
        expect(angular.isFunction(ToDoListFactory.getToDos)).toBe(true);
    });

    //verify a successful api call
    it("should work", function() {

        httpBackend
            .whenGET('http://localhost:64670/api/ToDoListEntries')
            .respond({ Priority: 2 });

        ToDoListFactory.getToDos({ id: 51 })


        //test the response
        .then(function(response) {
            expect(response.data.Priority).toBe(2);
            expect(response.status).toEqual(200);
        });

        httpBackend.flush();

    });

    //verify the error handling is working
    it("should throw an error on a server exception", function() {
        var result, error

        //setup httpBackend
        httpBackend
            .expectGET('http://localhost:64670/api/ToDoListEntries')
            .respond(500);

        var promise = ToDoListFactory.getToDos({ id: 51 });

        promise.then(function(data) {
            result = data;
        }, function(data) {
            error = data;
        });

        httpBackend.flush();

        //test the response
        expect(result).toBeUndefined();
        expect(error.status).toEqual(500);

    });

});
