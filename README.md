<p align="center">
  <img src="assets/mint/logo-transparent.png" alt="Mint logo" width="100">
</p>

# Introduction to Mint

> A simple and painless custom TurboWarp extension development platform, powered by bundling.

Have you ever tried to contribute to a custom TurboWarp extension, but got overwhelmed by the pure size of the file? Mint's mission is to fix this issue.

With a bundling solution powered by Node.js, you can now build custom TurboWarp extensions modularly! With the power of JS modules, you can build a custom TurboWarp extension without even touching the 1,000 lines of code you would have had to use if you were to develop it normally.

The only monolith you'll ever have to even see is the build output!

## Key Features

- **Bundling:** Powered by Node.js, you don't have to edit a huge file just to make a small patch to your custom extension. You can simply edit the file where the logic is held!
- **In-repo documentation:** A separate documentation repository isn't required &mdash; just edit the `/docs/` folder, and link to that in your extension _(just remember to make it a URL and not a file path)_.
- **Extensive CI/CD:** One of Mint's main features is automation &mdash; you get CodeQL, Dependabot, auto PR checking, and more right out of the box when you use Mint as your toolchain.
