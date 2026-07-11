## Motivation

We set out to prove this approach to building apps largely because we've seen the drawbacks of all the other approaches in real life, and thought "there must be a better way". For example, The two major available approaches to building the same application for Web, iOS/Android are:

- [x] Build a native app for each platform, effectively doing the work twice.
- [x] Use React Native or Flutter to build the application once and produce native looking and feeling apps which behave nearly identically.

The drawback of the first approach is doing the work twice. In order to build every feature for Web, iOS/Android at the same time, you need twice the number of people, either people who happily do Swift and Kotlin (and they are very rare), or more likely a set of iOS engineers and another set of Android engineers. This typically leads to forming two separate, platform-focused teams. We have witnessed situations first-hand, where those teams struggle with the same design problems, and despite one encountering and solving the problem first, the other one can learn nothing from their experience (and that's despite long design discussions).

The main issue with the JavaScript ecosystem is that it's built on sand. The underlying language is quite loose and has a lot of inconsistencies. It came with no package manager originally, now it has three. To serve code to the browser, it gets bundled, and the list of bundlers is too long to include here. Webpack, the most popular one, is famously difficult to configure. JavaScript was built as a dynamic language which leads to a lot of basic human errors, which are made while writing the code, only being discovered when running the code. Static type systems aim to solve that problem and TypeScript adds this onto JavaScript, but the types only go so far (until they hit an any type, or dependencies with no type definitions), and they disappear at runtime.

In short, upgrading JavaScript to something modern takes a lot of tooling. Getting all this tooling set up and ready to build things is an all day job, and so more tooling, like Next.js has popped up providing this configuration in a box, batteries included. Perhaps the final admission of this problem is the recent Biome toolchain (formerly the Rome project), attempting to bring all the various tools under one roof (and Biome itself is built in Rust...).

It's no wonder that even a working setup of all the tooling has sharp edges, and cannot afford to be nearly as strict as tooling designed with strictness in mind, such as Rust's. The heart of the problem is that computers are strict and precise instruments, and humans are sloppy creatures. With enough humans (more than 10, being generous) and no additional help, the resulting code will be sloppy, full of unhandled edge cases, undefined behaviour being relied on, circular dependencies preventing testing in isolation, etc. (and yes, these are not hypotheticals).

In short, we think the JS ecosystem has jumped the shark, the "complexity toothpaste" is out of the tube, and it's time to stop. But there's no real viable alternative. **HtmlPluse** is our attempt to provide one.

## 1- Clone the repository

```bash
git clone git@github.com:htmlplus/platform.git
```

## 2- Clone the submodules

```bash
npm run submodules:clone
```

## 3- Checkout to main branches

```bash
npm run submodules:checkout
```

## 4- Install node modules

```bash
npm i
```
