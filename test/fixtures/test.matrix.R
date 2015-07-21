options( digits = 16 );
library( jsonlite );

mu = 0
s = 1
x = 0:24
y = dlogis( x, mu,s )

cat( y, sep = ",\n" )

data = list(
	mu = mu,
s = s,
	data = x,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
