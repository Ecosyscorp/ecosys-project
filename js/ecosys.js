$("#project-table").DataTable({
    dom: 'Bfrtip',
    "paging":   false,
    "searching":false,
    "stateSave": true,
    "order": [[ 0, "asc" ]],
    "buttons": [
        {
            extend: 'excel',
            exportOptions: {
                columns: ':visible'
            }
        },
        {
            extend: 'csv',
            exportOptions: {
                columns: ':visible'
            }
        },
        {
            extend: 'collection',
            text: 'Hide/Show Columns',
            buttons: [ 'columnsVisibility' ],
            visibility: true
        }
    ]
});
