(function(){
	Ext.onReady(function(){
//		alert("hello world");
//		Ext.MessageBox.alert("hello","Wrold");
		
		
		var myArray=[1,2,3,4,-6,-8];
		Ext.Array.every(myArray,function(item){
			if(item>0){
				return true;
			}else{
//				alert(item);
				return false;
			}
		},this);
		
		
		
		var newMyArray=Ext.Array.filter(myArray,function(item){
			if(item>0){
				return true;
			}else{
				return false;
			}
		},this);
//		alert(newMyArray.join("\n"));
//		Ext.MessageBox.alert(newMyArray.join("\n"));
		
		
		Object.prototype.get = function(key,defaultValue){
			if(this[key]){
				return this[key];
			}else{
				if(defaultValue){
					return defaultValue;
				}
			}
		}
		var person={
			name:'simon',
			age:26
		}
//		alert(person.name);
//		alert(person.get("name"));
		Ext.MessageBox.alert(person.get("name")+person.age);
	});
})();