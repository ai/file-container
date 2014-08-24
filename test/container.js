var container = require('../');

describe('file-container', function () {

    it('splits file by types', function () {
        var file = '{ a: 1 }\n' +
                   'b\n' +
                   '\n' +
                   'one:\n' +
                   '  1\n' +
                   '\n' +
                   'two2:\n' +
                   '  2\n';
        container(file).should.eql({
            main: '{ a: 1 }\nb\n',
            one:  '1\n',
            two2: '2\n'
        });
    });

    it('trims first 2 spaces', function () {
        var file = 'one:\n' +
                   '    1\n' +
                   '\n' +
                   'two:\n' +
                   '2\n';
        container(file).should.eql({ one: '  1\n', two: '2\n' });
    });

});
