//原始方法创建
//(function(){
//	Ext.onReady(function(){
//		Ext.define(
//			'person',
//			{
//				extend:'Ext.data.Model',
//				fields:
//					[
//						{name:'name',type:'auto'},
//						{name:'age',type:'int'},
//						{name:'email',type:'auto'}
//					]
//			}
//		);
//		
//		var p = new person({
//			name:'simon',
//			age:26,
//			email:'simon.jia@cni.local'
//		});
//		
//		alert(p.get('name')+' - '+p.get('age')+' - '+p.get('email'));
//		Ext.MessageBox.alert(p.get('name')+' - '+p.get('age')+' - '+p.get('email'));
//		
//	});	
//})();


////regModel
//(function(){
//	Ext.onReady(function(){
//		Ext.regModel(
//			'person',
//			{
//				fields:
//				[
//					{name:'name',type:'auto'},
//					{name:'age',type:'int'},
//					{name:'email',type:'auto'}
//				]
//			}
//		);
//
//		var p=Ext.create(
//			'person',
//			{
//				name:'simon',
//				age:23,
//				email:'sandjzf@hotmail.com'
//			}
//			);
//		
//		alert(p.get('name')+'  '+p.get('age')+'  '+p.get('email'));
//		Ext.MessageBox.alert(p.get('name')+'  '+p.get('age')+'  '+p.get('email'));
//		
//	});	
//})();

////ModelManager ModelMgr
//(function(){
//	Ext.onReady(function(){
//		Ext.define(
//			'person',
//			{
//				extend:'Ext.data.Model',
//				fields:
//					[
//						{name:'name',type:'auto'},
//						{name:'age',type:'int'},
//						{name:'email',type:'auto'}
//					]
//			}
//		);
//		
//		var p = Ext.ModelMgr.create(
//			{
//				name:'simon',
//				age:21,
//				email:'pantojzf@yahoo.com.cn'
//			},
//			'person'
//		);
//		
////		alert(p.get('email'));
//		alert(person.getName());
//	});	
//})();

(function(){
	Ext.data.validations.lengthMessage='错误的长度';
	Ext.onReady(function(){
		Ext.define(
			'person',
			{
				extend:'Ext.data.Model',
				fields:
					[
						{name:'name',type:'auto'},
						{name:'age',type:'int'},
						{name:'email',type:'auto'}
					],
				validations:
					[
						{type:'length',field:'name',min:2,max:6}
//						{type:}
					]
			}
		);
		
		var p=Ext.create(
			'person',
			{
				name:'simonjzf',
				age:18,
				email:'simonjzf@gmail.com'
			}
		);
		
		var errors = p.validate();
		var error=[];
		errors.each(function(v){
			error.push(v.field+' '+v.message)
		});
		alert(error.join("\n"));
	});
})();

