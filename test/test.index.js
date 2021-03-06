/**
 * mocha 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var expect = require('chai').expect;
var debug = require('../src/index.js');

describe('测试文件', function () {
    it('config', function () {
        debug.config({
            padding: 15
        });
        expect(debug.config('padding')).to.equal(15);
    });

    it('print', function () {
        debug.error('error', '春风吹北风吹春风吹北风吹春风吹北风吹 hello world!\n' +
            '春风吹北风吹春风吹北风吹春风吹北风吹 hello world!\n' +
            '春风吹北风吹春风吹北风吹春风吹北风吹 hello world!', {
            colors: ['italic']
        });
        debug.primary('primaryprimaryprimaryprimary', '春风吹北风吹春风吹北风吹春风吹北风吹 hello world!\n' +
            '春风吹北风吹春风吹北风吹春风吹北风吹 hello world!\n' +
            '春风吹北风吹春风吹北风吹春风吹北风吹 hello world!');
        debug.warn('warn', '春风吹北风吹春风吹北风吹春风吹北风吹 hello world!');
        debug.success('success', '春风吹北风吹春风吹北风吹春风吹北风吹 hello world!');
        debug.success('successsuccesssuccesssuccesssuccesssuccesssuccess[]', '春风吹北风吹春风吹北\n风吹春风吹北风吹 hello world!');
        debug.normal('normal', '春风吹北风吹春风吹北风吹春风吹北风吹 hello world!');
        debug.ignore('ignore', '春风吹北风吹春风吹北风吹春风吹北风吹 hello world!');
    });

    it('wait', function (done) {
        var i = 0;
        var j = 20;
        var next = function () {
            if (i > j) {
                debug.waitEnd('find', i, {
                    colors: ['red', 'bold']
                });
                done();
                return;
            }

            debug.wait('go', i, {
                colors: ['red', 'bold']
            });
            i++;
            setTimeout(next, 500);
        };

        next();
    });
});

