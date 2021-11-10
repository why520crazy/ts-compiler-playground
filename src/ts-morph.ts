import { Project } from 'ts-morph';
import ts from 'typescript';

const project = new Project({
    skipFileDependencyResolution: false,
    skipLoadingLibFiles: false,
});
project.addSourceFileAtPath('src/fixtures/basic/example.ts');
const sources = project.getSourceFiles();
console.log(
    `${sources
        .map((item) => {
            return item.getBaseName();
        })
        .join('\n')}.`
);

const program = ts.createProgram(['src/fixtures/basic/example.ts'], { noLib: true, skipDefaultLibCheck: true });
console.log(
    `${program
        .getSourceFiles()
        .map((item) => {
            return item.fileName;
        })
        .join('\n')}.`
);

// const file = ts.createSourceFile('file', 'const b = "asd"', ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);

// const printer = ts.createPrinter({
//     omitTrailingSemicolon: true,
//     removeComments: false,
//     newLine: ts.NewLineKind.LineFeed,
// });
// const printed = printer.printFile(file);
// console.log(printed); // const b = "asd";\n
