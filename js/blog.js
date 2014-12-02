$(function() {

    Parse.$ = jQuery;

    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("Q0bpoZGDWmMOcluJO63OpMW9w4tk1GZxhOouwcPS", "pkVywv9azkBPNaxZvdMR0wwvBPPDdfQZdIPlRhmg");

    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });

});
