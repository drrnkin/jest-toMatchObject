# jest-toMatchObject
Demos a bug with jest toMatchObject


To reproduce, run
* yarn
* yarn test

The toMatchObject() hangs until the test times out.

Logged https://github.com/jestjs/jest/issues/14769
