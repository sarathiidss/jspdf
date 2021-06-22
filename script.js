$(document).ready(function() {
  $('#print').click(function() {
    html2canvas(document.getElementById('mytable'), {
      onrendered: function(canvas) {
        var data = canvas.toDataURL();
        var docDefinition = {
          content: [
            {
              image: data,
              width: 500
            }
          ]
        };
        pdfMake.createPdf(docDefinition).download('Table.pdf');
      }
    });
  });
});
