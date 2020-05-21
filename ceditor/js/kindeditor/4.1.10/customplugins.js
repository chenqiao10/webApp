KindEditor.plugin('longline', function(K) {
	var editor = this, name = 'longline';
	editor.clickToolbar(name, function() {
	  	var spaceNumber = 0;
	  	if(areaWidth>560)//A3两栏
	  	{
	  		spaceNumber = 109;
	  	}
	  	else if(areaWidth>550)//B4两栏
	  	{
	  		spaceNumber = 88;
	  	}
	  	else if(areaWidth>460)//A3三栏
	  	{
	  		spaceNumber = 73;
	  	}
	  	else//B4三栏
	  	{
	  		spaceNumber = 62;
	  	}
	  	var strHtml = '<p><br />';
	  	if(redFlag==1)strHtml+='<span style="color:red">';
	  	for(var i=0;i<spaceNumber;i++)
	  	{
	  		strHtml += '_';
	  	}
	  	if(redFlag==1)strHtml+='</span>';
	  	strHtml += '</p>'; 
		editor.insertHtml(strHtml);
	});
});
KindEditor.plugin('shortline', function(K)
{
	var editor = this;
	editor.clickToolbar('shortline',function() {
	  	var spaceNumber = 0;
	  	if(areaWidth>560)//A3两栏
	  	{
	  		spaceNumber = 33;
	  	}
	  	else if(areaWidth>550)//B4两栏
	  	{
	  		spaceNumber = 27;
	  	}
	  	else if(areaWidth>460)//A3三栏
	  	{
	  		spaceNumber = 23;
	  	}
	  	else//B4三栏
	  	{
	  		spaceNumber = 19;
	  	}
    	var strHtml = '';
    	if(redFlag==1)strHtml+='<span style="color:red">';
    	for(var i=0;i<spaceNumber;i++)
    	{
    		strHtml += '_';
    	}
    	if(redFlag==1)strHtml+='</span>&nbsp;';
		editor.insertHtml(strHtml);
	});
});
KindEditor.plugin('numbers', function(K) {
	var self = this, name = 'numbers', lang = self.lang(name + '.');
	self.clickToolbar(name, function() {
		var wrapperDiv = K('<div class="ke-plugin-numbers"></div>');
		var menu = self.createMenu({
			name : name,
			width : 130
		});
		menu.div.append(wrapperDiv);
		K.each(lang.numbers, function(i, value) {
			var item = K('<div class="ke-plugin-number">'+value+'</div>');
			item.click(function(){
				self.insertHtml(value);
				self.hideMenu();
			});
			item.mouseover(function(){
				K(this).addClass('ke-plugin-numberOver');
			});
			item.mouseout(function(){
				K(this).removeClass('ke-plugin-numberOver');
			});
			wrapperDiv.append(item);
		});
	});
});
KindEditor.plugin('edithelp', function(K) {
	var editor = this;
	editor.clickToolbar('edithelp',function() {
		var dialog = K.dialog({
			width : 800,
			title : '使用帮助',
			body : '<div><iframe frameborder="0" style="width:100%;height:500px;" src="sheet/help.shtml"></iframe></div>',
			closeBtn : {
				name : '关闭',
				click : function(e) {
					dialog.remove();
				}
			}
		});
	});
});
KindEditor.plugin('tianzi', function(K) {
	var self = this, name = 'tianzi', lang = self.lang(name + '.');
	var imgpath = rPath+'images/sheet/';
	if(redFlag)
	{
		imgpath += 'tianred.png';
	}
	else
	{
		imgpath += 'tian.png';
	}
	var str = '<div class="ke-plugin-tianzi"><div>每行插入<select id="id_tianziNum">';
	var max = 10;
	if(areaWidth>560)//A3两栏
  	{
		max = 18;
  	}
  	else if(areaWidth>550)//B4两栏
  	{
  		max = 14;
  	}
  	else if(areaWidth>460)//A3三栏
  	{
  		max = 12;
  	}
  	else//B4三栏
  	{
  		max = 10;
  	}
	str += getOptions(max);
	str += '</select>个<img src="'+imgpath+'" /></div>';
	str += '<div>一共插入<select id="id_tianziRNum">';
	str += getOptions(10);
	str += '</select>行</div>';
	str += '<div class="cls_tianzi_add"><input id="id_tianzi_add" type="button" value="确 定" class="btn-ok" /></div></div>';
	self.clickToolbar(name, function() {
		var wrapperDiv = K(str);
		var menu = self.createMenu({
			name : name,
			width : 150
		});
		menu.div.append(wrapperDiv);
		$("#id_tianzi_add").click(function(){
			var strHtml = '';
			var num = parseInt($("#id_tianziNum").val());
			var r = parseInt($("#id_tianziRNum").val());
			for(var m=0;m<r;m++)
			{
				strHtml += '<p>&nbsp;';
				for(var k=0;k<num;k++)
				{
					strHtml += '<img src="'+imgpath+'" class="cls_tianzige" />';
				}
				strHtml += '</p>';
			}
			self.insertHtml(strHtml);
			self.hideMenu();
		});
	});
	
	function getOptions(n)
	{
		var stro = '';
		for(var i=0;i<n;i++)
		{
			stro += '<option value="'+(i+1)+'">'+(i+1)+'</option>';
		}
		return stro;
	}
});