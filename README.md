# osx-ulimit
Darwin (OS X kernel) has a low limit for file descriptors (256 per process) by default.

When you try to open more file descriptors than this, an exception is thrown.

This is a simple library that allows you to easily raise this limit manually for the running process.

Node.js 0.12 [joyent/node@6820054](https://github.com/joyent/node/commit/6820054d2d42ff9274ea0755bea59cfc4f26f353) has a proper fix so you hopefully won't need it for when it's released as stable.

## Install

```
npm install osx-ulimit
```

## Usage
```
require('osx-ulimit').set(threshold);
```

The threshold should be an integer number with the minimum soft limit of file descriptors you want. Default: 30000.

## Tests
Run `nodeunit`.

## Reference
[OS X ulimit guides#8](https://github.com/sindresorhus/guides/issues/8)

[Too many files in src() leads to stack overflow vinyl-fs#14](https://github.com/wearefractal/vinyl-fs/issues/14)

## License
[MIT License](http://henvic.mit-license.org/)