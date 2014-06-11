module.exports = {
    defaultSoftLimit: 30000,

    set: function set(threshold) {
        var current,
            posix;

        if (process.platform === 'darwin') {
            threshold = threshold || this.defaultSoftLimit;
            posix = require('posix');

            current = posix.getrlimit('nofile').soft;

            if (current !== null && current < threshold) {
                posix.setrlimit('nofile', {
                    soft: threshold,
                    hard: null
                });
            }
        }
    }
};
