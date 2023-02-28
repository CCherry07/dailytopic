function fakeAjax(url, cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function () {
		cb(fake_responses[url]);
	}, randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************

function getFile(file) {
	return new Promise(function (resolve) {
		fakeAjax(file, resolve);
	});
}



function* loadFiles() {
	// Request all files at once in

	// "parallel" via `getFile(..)`.
	var p1 = getFile("file1");
	var p2 = getFile("file2");
	var p3 = getFile("file3");

	// Render as each one finishes,

	// but only once previous rendering

	// is done.

	output(yield p1);
	output(yield p2);
	output(yield p3);
}

var it = loadFiles();

// `run(..)` will resume the

// generator to the next `yield`
console.log(it.next().value.then(function (text) {
	console.log(text);
}));
console.log(it.next().value.then(function (text) {
	console.log(text);
}));
console.log(it.next().value.then(function (text) {
	console.log(text);
}));
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// ASQ().runner(function* loadFiles() {
// 	const p1 = getFile("file1");
// 	const p2 = getFile("file2");
// 	const p3 = getFile("file3");

// 	output(yield p1);
// 	debugger;
// 	output(yield p2);
// 	output(yield p3);
// }).val(function () {
// 	output("Complete!");
// });

// Request all files at once in
// "parallel" via `getFile(..)`.
//
// Render as each one finishes,
// but only once previous rendering
// is done.

// ???
