import {
  attach,
  extract,
  parse,
  print,
  reactProxy,
  read,
  sass,
  uhtml,
  validate,
} from "@htmlplus/element/compiler";

export default [
  read(),
  parse(),
  validate(),
  extract({
    prefix: "plus",
  }),
  sass({
    loadPaths: ["./src/styles"],
  }),
  attach(),
  uhtml(),
  print(),
  reactProxy({
    compact: true,
    dist: "../ports/react.new",
    eventName(eventName) {
      return eventName.replace("plus", "");
    },
    importerComponent(context) {
      return `@htmlplus/components/dist/components/${context.fileName}/${context.fileName}#${context.componentClassName}`;
    },
    importerComponentType(context) {
      return `@htmlplus/components/dist/components/${context.fileName}/${context.fileName}#${context.componentClassName}JSX`;
    },
  }),
];
