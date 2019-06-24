const helloWorldTs = (me: any): void => {
  me.greeting = "Hello World";

  me.write = function(): string {
    return me.greeting;
  };

  return me;
}