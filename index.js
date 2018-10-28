const virtualbox = require('virtualbox');

module.exports = function(hermione, opts) {
    const { vm } = opts;

    if (!vm) throw Error('Option "vm" is required. Please set the option.');

    hermione.on(hermione.events.RUNNER_START, () => {
        return new Promise(resolve => {
            virtualbox.start(vm, true, error => {
                if (error) throw error;
                resolve();
            });
        });
    });

    hermione.on(hermione.events.RUNNER_END, () => {
        return new Promise(resolve => {
            virtualbox.stop(vm, error => {
                if (error) throw error;
                resolve();
            });
        });
    });
};
