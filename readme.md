A Simple Gulp.js Boilerplate
======

I love the way Rails compiles Coffeescript, Scss, and JS, and I sought out to recreate that with a task runner. Gulp made that easy.

Non-compiled Scss goes in `assets/stylesheets/`. These must be Scss.

Non-compiled Coffeescript goes in `assets/coffeescripts`. These must be Coffeescript.

If you chose to use JS & Coffeescript, or are including libraries in JS, they go in `assets/javascripts`. Here live the compiled Coffeescript files. They get linted an concatenated from here.

All compiled assets go to `dist/`. This includes a non-minified JS file, and a minified one. This also includes whatever Scss files in `assets/stylesheets`. I recommend keeping a `main.scss` file that uses `@import` to import Scss partials.

Thanks to https://github.com/travm for this wonderful guide on getting started w/ Gulp.
http://travismaynard.com/writing/getting-started-with-gulp


The MIT License (MIT)

Copyright (c) 2014 Matt Boldt | mattboldt.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.