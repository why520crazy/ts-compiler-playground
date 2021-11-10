import ts from 'typescript';

const source = "let x: string  = 'string'";

let result = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, sourceMap: true } });

console.log(JSON.stringify(result));
