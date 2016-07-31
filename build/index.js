'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGithubCorner = require('react-github-corner');

var _reactGithubCorner2 = _interopRequireDefault(_reactGithubCorner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (storyFn) {
    var location = window.location;
    var hostname = location.hostname.split('.')[0];

    var githubRepository = '/';

    if (hostname.indexOf('github.io') > -1) {
        var repository = location.pathname.replace('/iframe.html', '');
        githubRepository = 'https://github.com/' + user + repository;
    }

    return _react2.default.createElement(
        'div',
        null,
        storyFn(),
        _react2.default.createElement('base', { target: '_parent' }),
        _react2.default.createElement(_reactGithubCorner2.default, { href: githubRepository })
    );
};