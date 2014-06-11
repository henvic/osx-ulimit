var index = require('../index'),
    posix = require('posix'),
    darwinLimit = 256;

exports.setUp = function (callback) {
	// reset to the default before trying to set again
	index.set(darwinLimit);

	callback();
};

exports['Set a higher number of file descriptors'] = function (test) {
	index.set();
	test.equal(posix.getrlimit('nofile').soft, index.defaultSoftLimit);
    test.done();
};

exports['Set specific number of file descriptors'] = function (test) {
	var threshold = index.defaultSoftLimit + 12345;

	index.set(threshold);
	test.equal(posix.getrlimit('nofile').soft, threshold);
    test.done();
};
