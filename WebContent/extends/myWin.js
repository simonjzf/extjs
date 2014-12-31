Ext.define(
	'myWin',
	{
		extend:'Ext.window.Window',
		width:800,
		height:600,
		title:'My title',
		newTitle:'My new title3 ',
		config:{
			price:500
		},
		mySetTitle:function(){
			this.title=this.newTitle;
		},
		initComponent:function(){
			this.mySetTitle();
			this.callParent(arguments);
		}
	}
);