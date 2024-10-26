# mur
### Attempt at for-Focus & Feel Good Music Remix Script
### The idea relies largely on usage of prime number patterns to achieve a neat melodic effect. Here's my favorite song with it: https://mur0110.github.io/mur/psasr.html

So while this isn't exactly a more than primitive web design (I've done some cool stuff, though, like for League of Legends), I'm excited about the idea, and also interested in any inputs on design direction. I'm pretty set on keeping it animation free to keep the Javascript music mod snappy, but aside from that, pretty open.

## For more details on implementation:

### Generate, independently, modifications of 5, 7, 8, or 11 % on the volume or tempo of a given song interval. 

[Notice 5, 7, 11 are primes, 8 is the sum of nextdoor primes 3, 5 and to me adds a subtle dimension being just 1 from nearest]

### -> Apply these to (3, 5, or 7) factor of duration stretch, continuing simply 3, 5, 7, 3, 5, 7 

[Notice these are consecutive primes within 2 of another. I think it's critical that these primes exist at a portion of the number line where they both are fixed offset and quickly scale from 3 to 7 so more than 2x in +2 spaces]

