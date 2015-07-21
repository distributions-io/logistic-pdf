'use strict';

// FUNCTIONS //

var exp = Math.exp,
	ln = Math.log,
	pow = Math.pow;


// PDF //

/**
* FUNCTION: pdf( x, mu, s )
*	Evaluates the probability density function (PDF) for a Logistic distribution with location parameter `mu` and scale parameter `s` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} mu - location parameter
* @param {Number} s - scale parameter
* @returns {Number} evaluated PDF
*/
function pdf( x, mu, s ) {
	var lnl, z;
	z = ( x - mu ) / s;
	lnl = -z - ln( s * pow( 1 + exp( -z ), 2 ) );
	return exp( lnl );
} // end FUNCTION pdf()


// EXPORTS //

module.exports = pdf;
