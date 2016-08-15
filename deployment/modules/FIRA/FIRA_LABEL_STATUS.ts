import {IExpression} from '../../../development/libs/DefinitelyTyped/accela.d';
var expression : IExpression;

/*------here we go------*/

var reqType = String(expression.getValue("ASI::GENERAL::Request Type").value).trim();
var labelStatus = expression.getValue("ASI::GENERAL::Label Status");
var labelRemarks = expression.getValue("ASI::GENERAL::Label Remarks");

if (reqType != "Food Item Registration") {
    if (labelStatus.value == "Comply With Remarks" || labelStatus.value == "Not Comply") {
        labelRemarks.required = true;
    } else {
        labelRemarks.required = false;
    }
}

expression.setReturn(labelRemarks);
