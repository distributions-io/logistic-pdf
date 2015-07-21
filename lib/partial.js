'use strict';

// FUNCTIONS //

var exp = Math.exp,
	ln = Math.log,
	pow = Math.pow;


// PARTIAL //

/**
* FUNCTION: partial( mu, s )
*	Partially applies location parameter `mu` and scale parameter `s` and returns a function for evaluating the probability density function (PDF) for a Logistic distribution.
*
* @param {Number} mu - location parameter
* @param {Number} s - scale parameter
* @returns {Function} PDF
*/
function partial( mu, s ) {

	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability density function (PDF) for a Logistic distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {
		var lnl, z;
		z = ( x - mu ) / s;
		lnl = -z - ln( s * pow( 1 + exp( -z ), 2 ) );
		return exp( lnl );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
