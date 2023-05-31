

function run(program) {
  let ast = parse(program);
  for (let exp of ast) {
    evaluate(exp, globalScope);
  }
}



specialForms.set = (args, scope) => {
    if (args.length != 2 || args[0].type != "word") {
          throw new SyntaxError("Incorrect use of set");
      }
  
      const name = args[0].name;
      const value = evaluate(args[1], scope);
    
      while (scope) {
          if (Object.hasOwnProperty.call(scope, name)) {
              scope[name] = value;
              return value;
          }
  
          scope = Object.getPrototypeOf(scope);
      }
  
      throw new ReferenceError(`Referencing an undefined binding: ${name}`);
  };
  
  run(`
  do(define(x, 4),
     define(setx, fun(val, set(x, val))),
     setx(50),
     print(x))
  `);
  run(`set(quux, true)`);
  // → Some kind of ReferenceError