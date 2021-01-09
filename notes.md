practicing unit testing
followed along with web dev simplifieds video on unit testing, 
learned: -
-.toBe() is saying that this is the original thing while saying .toEqual() is saying this equals the original things value but is different and has a different place in memory. 
- Adding --coverage to the test part in scripts of package.json will id what is being tested
so "jest --coverage" 
- to know what is being tested visit the html file and it will show what is or isnt being tested in code
-test verifies functions are working as desired
-unit tests are breaking everything into small units so you where and what is broken in code, like a roadmap
- in order for npm test to work go to scripts and have test: jest--coverage