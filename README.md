## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:3000/
```

### Staging

```bash
$ EGG_SERVER_ENV=stag npm start
$ open http://localhost:8080/
$ npm stop
```

### Production

```bash
$ EGG_SERVER_ENV=prod npm start
$ open http://localhost:8080/
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

[egg]: https://eggjs.org