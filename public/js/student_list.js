var fetchRecordUrl = "/student_list";

$(document).ready(function () {
    $('#my-table').dynatable({
        dataset: {
            perPageDefault: 3,
            perPageOptions: [3, 4, 6, 8]
        }
    });

});
