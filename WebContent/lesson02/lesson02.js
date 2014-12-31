//类的声明
//function user(){
//	this.name = 'simon';
//	this.age = 26;	
//	var email='simon.jia@cni.local';
//	
//	this.getEmail=function(){
//		return email;
//	}
//}
//var u = new user();
////alert(u.name+u.age);
////alert(u.getEmail());
//
//
//var person = {
//	name:'simon',
//	age:26
//};
//alert(person.name+person.age);



//(function(){
//	Ext.onReady(function(){
//		var win=new Ext.window.Window({
//			width:400,
//			height:600,
//			title:'My Ext.window.Window'
//		});
//		win.show();
//	});
//})();


//给按钮增加事件
//(function(){
//	Ext.onReady(function(){
//		var myWin=new Ext.window.Window({
//			width:400,
//			height:600,
//			title:'My Ext.window.Window'
//		});
//		
//		Ext.get("myButton").on("click",function(){
//			myWin.show();			
//		});
//	});
//})();


//create
(function(){
	Ext.onReady(function(){
		var myWin=Ext.create('Ext.window.Window',{
			width:800,
			height:500,
			title:'My Ext.window.Window create',		
			layout: 'fit',
			items: {  // Let's put an empty grid in just to illustrate fit layout
		        xtype: 'grid',
		        border: false,
		        columns: [{header: 'World'}],                // One header just for show. There's no data,
		        store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
	    	}	
		});
		myWin.show();	
	});	
})();


//extend
//(function(){
//	Ext.onReady(function(){
////		如下注释行可定义在extends/myWin.js,用于他处调用
////		Ext.define(
////			'myWin',
////			{
////				extend:'Ext.window.Window',
////				width:800,
////				height:600,
////				title:'My title',
////				newTitle:'My new title2 ',
////				mySetTitle:function(){
////					this.title=this.newTitle;
////				},
////				initComponent:function(){
////					this.mySetTitle();
////					this.callParent(arguments);
////				}
////			}
////		);
//		
//		Ext.create('myWin',{title:'My new title1'}).show();
//	});
//})();


////异步加载js 实例
//(function(){
//	Ext.Loader.setConfig({
//		enabled:true,
//		paths:{
//			myWin:'../extends/myWin.js'
//		}
//	});
//	Ext.onReady(function(){
//		Ext.get('myButton').on('click',function(){
////			alert(Ext.Loader.getPath('myWin'));
//			Ext.create(
//				'myWin',
//				{
//					requires:['myWin']
//				}
//			).show();
//		});
//	}
//	);
//})();


////config 
//(function(){
//	Ext.Loader.setConfig({
//		enabled:true,
//		paths:{
//			myWin:'../extends/myWin.js'
//		}
//	});
//	Ext.onReady(function(){
//		Ext.get('myButton').on('click',function(){
//			var myWin = Ext.create(
//				'myWin',				
//				{
//					price:600,
//					requires:['myWin']					
//				}
//			);
//			myWin.show();
////			alert(myWin.getPrice())
//			Ext.MessageBox.alert(myWin.getPrice()+'');
//		});
//	}
//	);
//})();


////mixins 
//(function(){
//	Ext.onReady(function(){
//		Ext.define(
//			'say',
//			{
//				canSay:function(){
//					alert('I can say!');
//				}
//			}
//		);
//		
//		Ext.define(
//			'sing',
//			{
//				canSing:function(){
//					alert('I can sing!');
//				}
//			}
//		);
//		Ext.define(
//			'user',
//			{
////				extend:'say' // 只支持单继承
//				mixins:		//可实现多继承
//				{
//					say:'say',
//					sing:'sing'
//				}
//			}
//		);
//		var u = Ext.create('user',{});
//		u.canSay();
//		u.canSing();
//	
//	});
//})();


























