const chai = require('chai'); // boiler plate from chai
var should = require('chai').should(); // boiler plate from chai
var assert = require('assert'); // boiler plate code from Mocha install
const { expect } = require('chai');

let MathEnforcer = require("../mathEnforcer"); // imported our Class (object factory and will use it!)

describe('AddFive Static Method', function() {      // Parameters are: (the text label, function to call test)
    it('Total should equal 10 when the first parameter is the number 5', function() {
      let total = MathEnforcer.addFive(5);         // total should be 10 (num + 5 = 10)
      total.should.equal(10);
    });
    it('total should equal 0 when the first parameter is the number -5', () => {
      let total = MathEnforcer.addFive(-5);
      total.should.equal(0);
    });
    it('total should be within .01 of 10 if 5 is added to 4.99', () => {
      let total = MathEnforcer.addFive(4.99);
      expect(total).to.be.closeTo(10, 0.01);
    });   
    
});
