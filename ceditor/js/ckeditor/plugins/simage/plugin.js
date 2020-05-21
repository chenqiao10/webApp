CKEDITOR.plugins.add('simage', {
	icons: 'simage',
	allowedContent: 'img[alt,!src,width,height,data-width,data-height]{border-style,border-width,float,height,margin‌​,margin-bottom,margi‌​n-left,margin-right,‌​margin-top,width}',
	init: function( editor ) {
		editor.addCommand('simage', {
			exec: function (editor) {
				var curr = CKEDITOR.currentInstance.name;
				$("#id_imageUpload").remove();
				
				var a = document.createElement('input');
				a.setAttribute('type','file');
				a.setAttribute('accept', '.jpg,.jpeg,.png,.tif,.gif,.svg');
				a.setAttribute('id','id_imageUpload');
				$("#id_sheetContent").append(a);
				$("#id_imageUpload").change(function(){
					file = a.files[0];
					if (file.size > 5000000){
						toast("文件过大！");
						return false;
					}else if (['jpeg','jpg','png','svg','gif','tif', 'svg+xml'].indexOf(file.type.split('/')[1]) === -1){
						toast("图片格式不正确！");
						return false;
					}
					img = new Image();
					img.onload = function(){
						inputWidth = this.width;
						inputHeight = this.height;
					}
					
					img.src = window_URL.createObjectURL(file)
					formData = new FormData;
					formData.append('file', file);
					
					$.ajax({
						url: editor.config.imageUploadURL,
						type: 'POST',
						data: formData,
						processData: false,
						contentType: false,
						success: function(data, textStatus, jqXHR){
							var isNew;
							if (jqXHR.status == 200) {
								maxWidth = Math.min(inputWidth, 600);
								maxHeight = Math.min(inputHeight, 600);
								if ((maxWidth/maxHeight) > (inputWidth/inputHeight)){
									width = (maxWidth * inputWidth)/inputHeight;
									height = maxHeight;
								} else if ((maxWidth/maxHeight) < (inputWidth/inputHeight)){
									width = maxWidth;
									height = (maxHeight * inputHeight)/inputWidth;
								} else{
									width = maxWidth;
									height = maxHeight;
								};
								var html = '<img src="' + data + '" class="image-editor" data-width="' + inputWidth + '" data-height="' + inputHeight + '" height="' + height + '" width="' + width + '">';
								$("#" + curr).append(html);									
							}
						},
						error: function(data, textStatus, jqXHR){
							toast("图片上传失败,请稍后重试！");
						},
						complete: function(){
							$("#id_imageUpload").remove();
						}
					});
					
					function toast(info) {
						var $toast = $("#id_toast");
						$toast.html("").hide();

						// 展示toast
						$toast.html(info).show();
						setTimeout(hideT, 2500);
						function hideT(){
							$toast.html("").hide();
						}
					}
				});
				a.click();
			}
		});

		editor.ui.addButton( 'SImage', {
			label: '图片上传',
			command: 'simage',
			toolbar: 'insert'
		});
	}
});
