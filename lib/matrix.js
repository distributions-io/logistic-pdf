'use strict';

// MODULES //

var partial = require( './partial.js' );


// PDF //

/**
* FUNCTION: pdf( out, matrix, mu, s )
*	Evaluates the probability density function (PDF) for a Logistic distribution with location parameter `mu` and scale parameter `s` for each matrix element.
*
* @param {Matrix} out - output matrix
* @param {Matrix} arr - input matrix
* @param {Number} mu - location parameter
* @param {Number} s - scale parameter
* @returns {Matrix} output matrix
*/
function pdf( y, x, mu, s ) {
	var len = x.length,
		fcn,
		i;
	if ( y.length !== len ) {
		throw new Error( 'pdf()::invalid input arguments. Input and output matrices must be the same length.' );
	}
	fcn = partial( mu, s );
	for ( i = 0; i < len; i++ ) {
		y.data[ i ] = fcn( x.data[ i ] );
	}
	return y;
} // end FUNCTION pdf()


// EXPORTS //

module.exports = pdf;
