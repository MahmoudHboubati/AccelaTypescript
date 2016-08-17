import {IRecord} from '../../../development/libs/DefinitelyTyped/RECORD/INCLUDE_RECORD.d';
import {IAA} from '../../../development/libs/DefinitelyTyped/AA/AA.d';

declare var Record: IRecord;
declare var aa: IAA;

/*---Here we go---*/

function getScriptText(vScriptName) {
    var servProvCode = aa.getServiceProviderCode();
    if (arguments.length > 1) servProvCode = arguments[1]; // use different serv prov code
    vScriptName = vScriptName.toUpperCase();
    var emseBiz = aa.proxyInvoker.newInstance("com.accela.aa.emse.emse.EMSEBusiness").getOutput();
    try {
        var emseScript = emseBiz.getScriptByPK(servProvCode, vScriptName, "ADMIN");
        return emseScript.getScriptText() + "";
    } catch (err) {
        return "";
    }
}
eval(getScriptText("INCLUDE_RECORD"));

try {
    var fira = new Record('FICA-2016-004883');
    var warehousesAmendment = fira.getASI('GENERAL', 'Label Status Remark', 'The value is null');
    aa.print(warehousesAmendment);
} catch (e) {
    aa.print(e.message);
}
