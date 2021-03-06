/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-260.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is an array index named property, name is data property and 'desc' is data descriptor, test setting the [[Value]] attribute value of 'name' from undefined to number (15.4.5.1 step 4.c)
 */


function testcase() {

        var arrObj = [undefined];
        Object.defineProperty(arrObj, "0", {
            value: 100
        });
        return dataPropertyAttributesAreCorrect(arrObj, "0", 100, true, true, true);
    }
runTestCase(testcase);
