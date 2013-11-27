/// <reference path="../../jasmine.js" />
/// <reference path="../../jquery-1.10.2.js" />

/* This is the function we're testing.  We wouldn't normally include these with our tests */
(function($) {

    function getValueFromArray(val) {
        var arr = ['foo', 'bar', 'baz'];

        return arr.indexOf(val);
    }

    //function getValueFromArray(val) {
    //    var arr = ['foo', 'bar', 'baz'];

    //    return $.inArray(val, arr);
    //}

/* jasmine.js tests start here */

    describe("array should...", function() {

        it("return the array index of query", function() {
            expect(getValueFromArray('bar')).toBe(1);
        });

    });

}(jQuery.noConflict()));