var helloWorldJs = (
  function(me) {
    me.greeting = "Hello World";

    me.write = function(element) {
      element.innerHTML = me.greeting;
    };

    return me;
  }
  (helloWorld || {})
)