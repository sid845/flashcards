exports.ClozeCard = function(full, cloze){
	this.full = full;
	this.cloze = cloze;
	this.partial = full.replace(cloze, "_______");
}; 

