/*\
title: $:/bj/inset.js
type: application/javascript
tags: $:/tags/tiddlyclip
module-type: library

\*/
exports.name ="inset";
exports.run  = function(base,ext) {
	var found, i, j, oldbase=base.split(',');
              found = false;
               for (j=0;j<oldbase.length;j++) {
                      if (oldbase[j].trim()===ext.trim()) found = true;
               }
              if (found) return 'true';
	return 'false';
}

