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
	return new Promise((resolve, reject) => {
		fakeAjax(file, resolve)
	})
}
const p1 = getFile('file1')
const p2 = getFile('file2')
const p3 = getFile('file3')
function parallel() {
	p1.then(output)
		.then(() => p2)
		.then(output)
		.then(() => p3)
		.then(output)
		.then(() => output('complate...'))

	// p1.then(text1 => {
	// 	output(text1)
	// 	return p2
	// }).then(text2 => {
	// 	output(text2)
	// 	return p3
	// }).then(text3 => {
	// 	output(text3)
	// })


	// promise hell
	// p1.then((text) => {
	// 	output(text)
	// 	p2.then(text => {
	// 		output(text)
	// 		p3.then(text => {
	// 			output(text)
	// 		})
	// 	})
	// })

}

parallel()


// request all files at once in "parallel"
// ???
