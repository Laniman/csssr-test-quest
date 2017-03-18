import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import '../blocks/textarea/textarea.js';

$(() => {
	svg4everybody();
	$('head').append('<style></style>')
});
