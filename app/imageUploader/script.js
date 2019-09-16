let items=['image','mp3','gif','webm'];


$(document).ready(function(){
	for(i=0;i<items.length;i++){
    $('body')
        .append('<form id=' + items[i] + 'UploadForm>'); 
    $("#"  + items[i] + "UploadForm") 
        .attr("action", items[i] + "Upload.php").attr("method","POST").attr("enctype","multipart/form-data")
        .append('<input type="hidden" name="MAX_FILE_SIZE" value="1000000"/>')
        .append('<input class="fileSelect" type="file" name="upload"/>')
        .append('<input class="rename" type="text" name="renameFile" value="renameFile">')
        .append('<input class="folderSelect" type="text" name="folderName" value="folderName"/>')
        .append('<input class="submit" type="submit" name="submit" value="submit"/>')
				.append("'<div class='uploadDiv'>" + items[i] + "</div>'");
}
});
