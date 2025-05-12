$(document).ready(function()
{
    $('#tI').DataTable( {
    	paging: false,
    	searching: false, 
    	info: false, 
    	columnDefs: [{ 
    		orderable: false, 
    		targets: [1, 3] }
    	],
    } );
    $('#tII').DataTable( {
    	paging: false, 
    	searching: false, 
    	info: false, 
    	    	columnDefs: [{ 
    		orderable: false, 
    		targets: [1, 3] }
    	],
    } );
});
