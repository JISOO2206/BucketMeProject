$('#targetImg').click(function (e) {
   document.signForm.targetUrl.value = document.getElementById('targetImg').src;
   e.preventDefault();
   $('#file').click();
});

function changeValue(obj){
    document.signForm.submit();
}