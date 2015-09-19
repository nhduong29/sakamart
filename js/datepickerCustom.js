/**
 * Created by nhuuduong on 7/21/15.
 */
$(document).ready(function() {
    $('#datePickerFrom')
        .datepicker({
            format: 'mm/dd/yyyy'
        });

    $('#datePickerTo').timepicker();
});