install:
	nmp ci

summariser:
	node src/summariser.js

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8