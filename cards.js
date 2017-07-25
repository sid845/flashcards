exports.ClozeCards = function(full, cloze){
	this.full = full;
	this.cloze = cloze;
	this.partial = full.replace(cloze, "________");
}; 
