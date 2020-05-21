CKEDITOR.editorConfig = function( config ) {
	config.toolbar = [
	                  ['Source','-', 'Bold', 'Italic','Underline'], 
	                  ['Image'],
	                  ['shortline','longline','tianzige'],
	                  ['FontSize','lineheight','help']
	                 ];

	//	复制保留纯文本
	config.forcePasteAsPlainText = false;
	
	config.font_names='宋体/SimSun;黑体/SimHe;幼圆/YouYuan;微软雅黑/Microsoft YaHei;Time New Roman/Time New Roman;隶书/LiSu;Arial/Arial;comicz/comicz;CURLZ___/CURLZ___';
	config.fontSize_sizes ='8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;30/30px;32/32px;34/34px;36/36px;48/48px;72/72px'
	// config.font_names; // 添加字体
	config.skin = 'moono-color';// 设置皮肤
	
	config.removeDialogTabs = 'image:advanced;image:Link;';	// 图片上传去除无用标签
	config.language = 'zh-cn';								//组件默认语言
		
	config.extraPlugins = 'sourcedialog,removeformat,image,shortline,longline,tianzige,fullfilling,lineheight,help,eqneditor,simage';// 附加组件
	config.image_previewText = ' ';			//上传图片组件默认参数
	config.disableObjectResizing = true;	//是否开启 图片和表格 的改变大小的功能
	
	config.allowedContent = true;
	config.enterMode = CKEDITOR.ENTER_P;
	config.fillEmptyBlocks = false;
	//config.forcePasteAsPlainText = true;			//复制粘贴内容不带样式
	config.pasteFromWordRemoveFontStyles = true;	//去除字体相关样式
	config.pasteFromWordRemoveStyles = false;

	CKEDITOR.dtd.$removeEmpty['span'] = false;
	CKEDITOR.dtd.$removeEmpty['p'] = false;
	
	config.protectedSource.push(/<span[^>]><\/span>/g);																						
	config.protectedSource.push(/<p[^>]><\/p>/g);		

	// 	服务器端的验证项目跟上面提到的一样，都是根据标签名称来判断是否允许提交。
	config.protectedSource.push( /<\s*iframe[\s\S]*?>/gi ) ; //<iframe> tags. 
	config.protectedSource.push( /<\s*frameset[\s\S]*?>/gi ) ; //<frameset> tags. 
	config.protectedSource.push( /<\s*frame[\s\S]*?>/gi ) ; // <frame>tags. 
	config.protectedSource.push( /<\s*script[\s\S]*?\/script\s*>/gi ) ; //<SCRIPT> tags. 
	config.protectedSource.push( /<%[\s\S]*?%>/g ) ; // ASP style server sidecode 
	config.protectedSource.push( /<\?[\s\S]*?\?>/g ) ; // PHP style serverside code 
	config.protectedSource.push(/(<asp:[^\>]+>[\s|\S]*?<\/asp:[^\>]+>)|(<asp:[^\>]+\/>)/gi) ;
};
