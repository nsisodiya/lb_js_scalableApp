/*
 * test.lb.data.js - Unit Tests of lb.data namespace
 *
 * Author:    Eric Bréchemier <contact@legalbox.com>
 * Copyright: Legalbox (c) 2010-2011, All Rights Reserved
 * License:   BSD License - http://creativecommons.org/licenses/BSD/
 * Version:   2011-07-12
 *
 * Based on Test Runner from bezen.org JavaScript library
 * CC-BY: Eric Bréchemier - http://bezen.org/javascript/
 */

/*jslint vars:true */
/*global define, window, lb */
define(
  [
    "bezen.org/bezen.assert",
    "bezen.org/bezen.object",
    "bezen.org/bezen.testrunner",
    "lb/lb.data"
  ],
  function(
    assert,
    object,
    testrunner,
    data
  ){

    function testNamespace(){

      assert.isTrue( object.exists(data),
                           "data namespace module not found in dependencies");

      if ( object.exists(window) ){
        assert.isTrue( object.exists(window,'lb','data'),
                                           "lb.data namespace was not found");
        assert.equals( data, lb.data,
                "same module expected in lb.data for backward compatibility");
      }
    }

    var tests = {
      testNamespace: testNamespace
    };

    testrunner.define(tests, "lb.data");
    return tests;
  }
);
