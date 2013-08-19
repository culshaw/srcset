# srcset.js

### A lightweight polyfill for browsers that don't yet support srcset (non-webkit nightly).

The goal of this script is to provide a robust and precise way to emulate the behaviour of the `srcset` attribute implemented by (Webkit)[https://www.webkit.org/blog/2910/improved-support-for-high-resolution-displays-with-the-srcset-image-attribute/] until other browser vendors implement the attribute.

Thanks to @scottjehl: http://odin.s0.no/web/srcset/polyfill.htm from https://twitter.com/scottjehl/status/202618980475744256 for the original code/idea.

Usage Instructions
======

Firstly it's worth noting by specifying the src attribute on 2x & 3x screens you will be making a wasted request loading the initial src. You can however get away with this in method 3, but it won't validate.

There are a couple of ways to utilise this script.

1. Mobile first
<pre>
	&lt;img src="mobile-image.gif" srcset="larger-image.gif 2x, even-larger-image.gif 3x"&gt;
</pre>

2. Space saver – By default it will download a blank gif then grab the relevant resolution image and replace with that.
<pre>
	
	&lt;img src="spacer.gif" srcset="mobile-image.gif 1x, larger-image.gif 2x, even-larger-image.gif 3x"&gt;
</pre>

3. Single request.
<pre>
	&lt;img srcset="small-image.gif 1x, better-image.gif 2x" alt="Srcset image"&gt;
</pre>

The script also has a future-proof test to check whether srcset is supported out of the box. If so it halts execution.

Support
======
- This script is provided as-is but I can try and help where possible :)
- Please dig into the code in `srcset-polyfill.js` and see if there are any optimisations you can make, please feel free to make a pull req.
