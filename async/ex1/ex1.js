const files = []

function fakeAjax(url, cb) {
	files.push(url)
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
// The old-n-busted callback way
const result = {}
function getFile(file) {
	fakeAjax(file, function (text) {
		// what do we do here?
		if (result[file] === undefined) { // 将响应的结果存入 结果容器
			result[file] = text
		}
		// 每次请求的时候我们都要遍历一次结果容器，看是否有 结果已经被响应，从而可以被遍历输出
		for (let i = 0; i < files.length; i++) {
			if (files[i] in result) { // 判断 结果容器 是否存在 当前这个元素的key
				if (result[files[i]] !== true) { // 存在结果，获取value 并输出 ，当为true 时，意味着，已经被输出
					output(result[files[i]])
					result[files[i]] = true // 将已经输出的value 置为true 保证下次 不会被输出
				}
			} else {
				return // 如果前面没有命中，直接跳出return ， 保证顺序正确
			}
		}
		return output('comlate')
	});
}

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
