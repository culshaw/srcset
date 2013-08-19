# srcset.js

### A lightweight polyfill for browsers that don't yet support srcset (non-webkit nightly).

The goal of this script is to provide a robust and precise way to emulate the behaviour of the `srcset` attribute implemented by (Webkit)[https://www.webkit.org/blog/2910/improved-support-for-high-resolution-displays-with-the-srcset-image-attribute/] until other browser vendors implement the attribute.

Usage Instructions
======

There are a couple of ways to utilise this script.

1. Mobile first
<pre>
	<img src="mobile-image.gif" srcset="larger-image.gif 2x, even-larger-image.gif 3x">
</pre>

2. Space saver
<pre>
	<img src="spacer.gif" srcset="mobile-image.gif 1x, larger-image.gif 2x, even-larger-image.gif 3x">
</pre>


Support
======
- This script is provided as-is but I can try and help where possible :)
- Please dig into the code in `srcset-polyfill.js` and see if there are any optimisations you can make, please feel free to make a pull req.

