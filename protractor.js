it('should load and compile correct template', function() {
  element(by.linkText('shampa: page')).click();
  var content = element(by.css('[ng-view]')).getText();
  expect(content).toMatch(/controller\: /);
  expect(content).toMatch(/Book Id\: /);
  expect(content).toMatch(/Chapter Id\: /);

  element(by.partialLinkText('Scarlet')).click();

  content = element(by.css('[ng-view]')).getText();
  expect(content).toMatch(/controller\: /);
  expect(content).toMatch(/Book Id\: /);
});

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/