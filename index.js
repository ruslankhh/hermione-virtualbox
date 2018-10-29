const virtualbox = require('virtualbox');

module.exports = function(hermione, opts) {
    const {
        vm,
        vmStartTimeout = 3000,
        vmStopAfterEnd = true
    } = opts;

    if (!vm) throw Error('Option "vm" is required. Please set the option.');

    hermione.on(hermione.events.INIT, () => {
        return new Promise((resolve, reject) => {
            virtualbox.start(vm, true, error => {
                if (error) {
                    reject(error);
                }

                setTimeout(resolve, vmStartTimeout);
            });
        });
    });

    if (vmStopAfterEnd) {
        hermione.on(hermione.events.RUNNER_END, () => {
            return new Promise((resolve, reject) => {
                virtualbox.stop(vm, error => {
                    if (error) {
                        reject(error);
                    }

                    resolve();
                });
            });
        });
    }
};
