(function() {
	/* We want to get the device pixel ratio. */
	var pixelRatio = window.devicePixelRatio || 1;


	/* Actually implement the real `imgsrc` algorithm here */
	function getImgSrc(image) {
		if(!image.attributes['srcset']) return false;
		var img_src, img_ratio, i,
			imgsrc_parts = image.attributes['srcset'].nodeValue.split(",");

		for (i = 0; i < imgsrc_parts.length; i++)
		{
			img_src = imgsrc_parts[i].match(/[^\s]+/)[0];
			img_ratio = imgsrc_parts[i].match(/(\d+)x/)[1];

			if (pixelRatio == img_ratio) image.src = img_src;
		}
	}


	var imgs = document.getElementsByTagName('img');

	for(var i=0; i < imgs.length; i++) {
		getImgSrc(imgs[i]);
	}
})();