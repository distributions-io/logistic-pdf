options( digits = 16 );
library( jsonlite );


mu = 3
s = 3
x = seq( -1000, 1000, 0.5 )
y = dlogis( x, mu,s )

cat( y, sep = ",\n" )

data = list(
	mu = mu,
	s = s,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/deepset.json" )
