/**
 * 文件描述
 * @author ydr.me
 * @create 2017-08-21 11:18
 * @update 2017-08-21 11:18
 */


'use strict';

var debug = require('../src/index');

var i = 0;
var j = 20;
var next = function () {
    if (i > j) {
        debug.waitEnd('find', i, {
            colors: ['red', 'bold']
        });
        return;
    }

    debug.wait('go', i, {
        colors: ['red', 'bold']
    });
    i++;
    setTimeout(next, 300);
};

next();



// debug.primary('debug', 'primary');
// debug.success('debug', 'success');
// debug.info('debug', 'info');
// debug.warning('debug', 'warning');
// debug.warn('debug', 'warn');
// debug.error('debug', 'error');
// debug.danger('debug', 'danger');
// debug.normal('debug', 'normal');
// debug.ignore('debug', 'ignore');




