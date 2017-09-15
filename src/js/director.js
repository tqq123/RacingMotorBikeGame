function director($body){
	this.$body = $body;
	this.runScene=function(scene){
		this.$body.empty();//原先的就被清除
		this.$body.append(scene);//scene.$mainBody
	}
}