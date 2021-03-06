// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Date.prototype property "getTime" has { DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.9/S15.9.5.9_A1_T3.js
 * @description Checking DontEnum attribute
 */

if (Date.prototype.propertyIsEnumerable('getTime')) {
  $ERROR('#1: The Date.prototype.getTime property has the attribute DontEnum');
}

for(x in Date.prototype) {
  if(x === "getTime") {
    $ERROR('#2: The Date.prototype.getTime has the attribute DontEnum');
  }
}


