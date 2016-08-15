/**
 * this object is used to read any Accela records
 */
/*-USER-----------DATE----------------COMMENTS----------------------------------------------------------/
 | SLEIMAN         06/01/2016 10:11:10 formatting code
 | SLEIMAN         06/01/2016 11:29:29 fixing updateAsitColumns bug, invalid indexes
 | SLEIMAN         06/01/2016 11:32:16 fixing asittoarray function
 /-----END CHANGE LOG-----------------------------------------------------------------------------------*/

// import {IAA} from '../AA/AA.d';

var GLOBAL_EVAL = eval;
var aa: any;
var vLevel: number;
var showDebug: any;
var br: any;
var debug: string;
function getScriptText(scriptName: string): string {
    throw new Error("Not implemented yet");
}
var docListResult: any;
var currentUserID: any;
var logDebug: any;
class asiTableValObj {
    constructor(newAsitFieldName: string, fieldValue: string, N: string) { }
}
var s_capResult: any;
var capModel: any;

function Record(id) {
    if (id == null || id == "") {
        var constructorName = (this.constructor == null) ? "undefined" : this.constructor.name;
        throw "ID cannot be null or empty when initialize [" + constructorName + "]";
    }
    // logDebug("**Initiating Record with capID="+id)
    this.CACHEMAP = aa.util.newHashMap();
    if (id.getClass && id.getClass().getName().equals("com.accela.aa.aamain.cap.CapIDModel")) {
        this.capId = id;
        this.altId = id.getCustomID();
        // logDebug("**capID instance of CapIDModel")
        if (!this.altId) {

            this.capId = aa.cap.getCapID(id.getID1(), id.getID2(), id.getID3()).getOutput();
            this.altId = this.capId.getCustomID();
            // logDebug("**capID CustomID is null, new CapID=["+this.capId+"] of
            // CapIDModel and CustomID=["+this.altId+"]")

        }
    } else {
        // logDebug("**id instance of String customID")
        id = id + "";
        this.altId = id;
        this.capId = aa.cap.getCapID(id).getOutput();

    }
    if (this.capId == null) {
        throw "record with ID " + id + " does not exist";
    }

}

/**
 * get the user id who created to record
 */
Record.prototype.getCreatedBy = function() {

    var cap = aa.cap.getCap(this.capId).getOutput();
    var capModel = cap.getCapModel();

    return capModel.getCreatedBy();
}

Record.prototype.isComplete = function() {
    return this.getCap().isCompleteCap();
}
/**
 * set the user id who created to record
 */
Record.prototype.setCreatedBy = function(pubUserID) {

    var cap = aa.cap.getCap(this.capId).getOutput();
    var capModel = cap.getCapModel();

    capModel.setCreatedBy(pubUserID);

    aa.cap.editCapByPK(capModel);
}

/**
 * this is a function to get custom id
 */
Record.prototype.getCustomID = function() {
    return this.altId;
}
Record.prototype.getScheduledDate = function() {
    var date = aa.cap.getCapDetail(this.capId).getOutput().getScheduledDate()
    return this.toDate(date);
}
Record.prototype.getCreationDate = function() {
    var date = aa.cap.getCapViewByID(this.capId).getOutput().getAuditDate()
    return new Date(date.getTime())
}
Record.prototype.getCapID = function() {
    return this.capId;
}

/**
 * get contacts linked to current record.
 *
 * @returns {Array} - array of contact model.
 */
Record.prototype.getContacts = function() {
    var capContactArray = new Array();
    var capContactResult = aa.people.getCapContactByCapID(this.capId);
    if (capContactResult.getSuccess()) {
        capContactArray = capContactResult.getOutput();
    }

    return capContactArray;
}
/**
 * get the ASIT attached to this record
 */
Record.prototype.getASIT = function(tname, ignoreCache) {
    var ret = null;
    if (ignoreCache == null) {
        ignoreCache = false;
    }
    if (!ignoreCache && this.CACHEMAP.containsKey(tname)) {
        ret = this.CACHEMAP.get(tname);
    } else {
        var asit = aa.appSpecificTableScript.getAppSpecificTableModel(this.capId, tname).getOutput();
        if (asit == null) {
            throw "Couldn't load ASI Table " + tname + ", maybe it is empty or Invalid cap ID " + this.capId;
        }

        ret = this.asitToArray(asit);
        this.CACHEMAP.put(tname, ret)
    }
    return ret;

}

Record.prototype.addStdCondition = function(condtionType, condtionname) {
    var standardConditions = aa.capCondition.getStandardConditions(condtionType, condtionname).getOutput();

    for (var i = 0; i < standardConditions.length; i++) {
        var standardCondition = standardConditions[i];
        aa.capCondition.createCapConditionFromStdCondition(this.capId, standardCondition);
    }
}

Record.prototype.voidFeesAndPayment = function(isVoidCapBalance) {
    var fees = aa.finance.getFeeItemByCapID(this.capId).getOutput();
    var voidedInvoices = [];
    var status = "VOIDED";
    if (fees != null) {
        for (var i = 0; i < fees.length; i++) {
            var feelItem = fees[i].getF4FeeItem();
            var feeID = feelItem.getFeeSeqNbr();
            feelItem.setFeeitemStatus(status);
            feelItem.setFee(0.0);
            aa.finance.editFeeItem(feelItem);
            var feeInvoiceScriptModel = aa.finance.getValidFeeItemInvoiceByFeeNbr(this.capId, feeID).getOutput();
            if (feeInvoiceScriptModel != null) {
                var feeInvoice = feeInvoiceScriptModel.getX4FeeItemInvoice();
                var invoiceID = feeInvoice.getInvoiceNbr();
                feeInvoice.setFeeitemStatus(status);
                feeInvoice.setFee(0.0);
                aa.finance.editFeeItemInvoice(feeInvoice);
                aa.finance.editInvoiceBalanceDue(invoiceID, 0.0, 0.0);
                voidedInvoices.push(invoiceID);
            }
        }

        if (isVoidCapBalance) {
            var capDetailScriptModel = aa.cap.getCapDetail(this.capId).getOutput();
            if (capDetailScriptModel != null) {
                var capDetail = capDetailScriptModel.getCapDetailModel();
                capDetail.setBalance(0.0);
                aa.cap.editCapDetail(capDetail);
            }
        }
    }
    return voidedInvoices;
}
Record.prototype.getDocumentList = function() {
    var docListArray = new Array();
    docListResult = aa.document.getCapDocumentList(this.capId, aa.getAuditID());
    if (docListResult.getSuccess()) {
        docListArray = docListResult.getOutput();
    }
    return docListArray;
}
/**
 * get ASI value by name and group
 */
Record.prototype.getASI = function(asiGroup, name, defaultValue) {
    if (typeof defaultValue === "undefined") {
        defaultValue = "";
    }
    var valDef = aa.appSpecificInfo.getAppSpecificInfos(this.capId, asiGroup, name).getOutput();
    if (valDef.length > 0) {
        var val = valDef[0].getChecklistComment()
        if (val == null || val + "" == "") {
            val = defaultValue;
        }
    } else {
        val = defaultValue;
    }

    return val;
}

/**
 * copy values of passed ASIT from specific record into current record if there
 * is difference in names between source ASIT column names and destination
 * column names, passed map will be used to copy values.
 *
 * @param {Record}
 *            record - record which contains ASIT values to be copied
 * @param {string}
 *            asitName - ASIT name which will be copied from source record to
 *            destination record.
 * @param {HashMap}
 *            differentColNamesMap - map contains different column names to be
 *            mapped dynamically during updating ASIT
 */
Record.prototype.copyAsitFromOtherRecord = function(record, asitName, differentColNamesMap) {
    var dataSet = [];
    var asit = record.getASIT(asitName);
    for (var x in asit) {
        var row = asit[x];

        dataSet.push(this.toAsiTableValObj(row, differentColNamesMap));
    }
    this.updateASIT(asitName, dataSet)
}

Record.prototype.getReferenecFee = function(code, feeSchedule) {
    var serviceProviderCode = aa.getServiceProviderCode();
    var refFeeServer = aa.proxyInvoker.newInstance("com.accela.aa.finance.fee.RefFeeBusiness").getOutput()
    var version = refFeeServer.getDefaultVersionBySchedule(serviceProviderCode, feeSchedule, "");
    if (version == null || version == "") {
        throw "Fee schedule[" + feeSchedule + "] does not exist";
    }
    var dao = this.getDao("com.accela.aa.finance.fee.RFeeItemDAO")

    var res = dao.getRefFeeItemByFeeCode(serviceProviderCode, feeSchedule, version, code);

    return res;
}
Record.prototype.getScheduleFees = function(feeSchedule) {
    var serviceProviderCode = aa.getServiceProviderCode();
    var refFeeServer = aa.proxyInvoker.newInstance("com.accela.aa.finance.fee.RefFeeBusiness").getOutput();
    return refFeeServer.getFeeItemList(serviceProviderCode, feeSchedule, "", "A", aa.util.newQueryFormat(), aa.getAuditID());
}
/**
 * create or update fee if exists.
 *
 * @param {string}
 *            fcode - fee code
 * @param {string}
 *            fsched - fee schedule
 * @param {number}
 *            [fqty=1] - fee quantity
 * @param {string}
 *            [fperiod="FINAL"] - fee period
 * @param {boolean}
 *            [pDuplicate="false"] - update existing fee if false
 *
 * @returns {number} created or updated fee sequence number.
 */
Record.prototype.createOrUpdateFee = function(fcode, fsched, fqty, fperiod, pDuplicate, fdesc, amount) {

    if (fqty == null || fqty == "") {
        fqty = 1;
    }

    if (fperiod == null || fperiod == "") {
        fperiod = "FINAL";
    }
    if (pDuplicate == null || pDuplicate.length == 0) {
        pDuplicate = false;
    }

    var invFeeFound = false;
    var adjustedQty = fqty;
    var feeSeq = null;
    var feeUpdated = false;
    var getFeeResult = aa.finance.getFeeItemByFeeCode(this.capId, fcode, fperiod);
    if (getFeeResult.getSuccess()) {
        var feeList;

        feeList = getFeeResult.getOutput();

        for (var feeNum in feeList) {

            if (feeList[feeNum].getFeeitemStatus().equals("INVOICED")) {
                if (pDuplicate == true) {
                    logDebug("Invoiced fee " + fcode + " found, subtracting invoiced amount from update qty.");
                    adjustedQty = adjustedQty - feeList[feeNum].getFeeUnit();
                    invFeeFound = true;
                } else {
                    invFeeFound = true;
                    logDebug("Invoiced fee " + fcode + " found.  Not updating this fee. Not assessing new fee " + fcode);
                }
            }

            if (feeList[feeNum].getFeeitemStatus().equals("NEW")) {
                adjustedQty = adjustedQty - feeList[feeNum].getFeeUnit();
            }
        }

        for (feeNum in feeList)
            if (feeList[feeNum].getFeeitemStatus().equals("NEW") && !feeUpdated) {
                var feeSeq = feeList[feeNum].getFeeSeqNbr();
                var editResult = aa.finance.editFeeItemUnit(this.capId, adjustedQty + feeList[feeNum].getFeeUnit(), feeSeq);

                if (fdesc != null && fdesc != "" && amount != null) {
                    var createFee = aa.finance.getFeeItemByPK(this.getCapID(), feeSeq).getOutput();
                    createFee.setFeeDescription(fdesc);
                    createFee.setFee(amount);
                    aa.finance.editFeeItem(createFee.getF4FeeItem());
                }
                feeUpdated = true;
                if (editResult.getSuccess()) {
                    logDebug("Updated Qty on Existing Fee Item: " + fcode + " to Qty: " + fqty);

                } else {
                    throw "**ERROR: updating qty on fee item (" + fcode + "): " + editResult.getErrorMessage();

                }
            }
    } else {
        throw "**ERROR: getting fee items (" + fcode + "): " + getFeeResult.getErrorMessage();
    }

    // Add fee if no fee has been updated OR invoiced fee already exists and
    // duplicates are allowed
    if (!feeUpdated && adjustedQty != 0 && (!invFeeFound || invFeeFound && pDuplicate == true)) {
        var assessFeeResult = aa.finance.createFeeItem(this.capId, fsched, fcode, fperiod, fqty);
        if (!assessFeeResult.getSuccess()) {
            throw "**ERROR: assessing fee (" + fcode + "): " + assessFeeResult.getErrorMessage();

        } else {
            logDebug("fee created")
            feeSeq = assessFeeResult.getOutput();

            if (fdesc != null && fdesc != "" && amount != null) {
                var createFee = aa.finance.getFeeItemByPK(this.getCapID(), feeSeq).getOutput();
                logDebug("editin fee with pk=" + feeSeq)
                createFee.setFeeDescription(fdesc);
                createFee.setFee(amount);

                var editFeeResult = aa.finance.editFeeItem(createFee.getF4FeeItem());
                if (!editFeeResult.getSuccess()) {
                    throw "**ERROR: editing fee items (" + fcode + "): " + editFeeResult.getErrorMessage();
                }
            }

        }
    } else {
        feeSeq = null;
    }

    return feeSeq;

}
/**
 * make application editable
 *
 * @param [bCompleteWorkflow=true]
 */
Record.prototype.sendBack = function(bCompleteWorkflow) {
    var cap = aa.cap.getCap(this.capId).getOutput().getCapModel();

    cap.setCapClass("EDITABLE");
    aa.cap.editCapByPK(cap);

    if (bCompleteWorkflow == null || bCompleteWorkflow == true) {
        this.completeWorkflow();

    }

}

/**
 * convert ASIT to array
 */
Record.prototype.asitToArray = function(asit) {
    var tsmfldi = asit.getTableField().iterator();
    var tsmcoli = asit.getColumns();
    var rows = new Array();
    var numrows = 0;

    while (tsmfldi.hasNext()) {
        var row = {};
        for (var i = 0; i < tsmcoli.size() && tsmfldi.hasNext(); i++) // cycle

        {
            row[tsmcoli.get(i).getColumnName()] = tsmfldi.next();

        }
        rows.push(row);
        numrows++;
    }

    return rows;
}

/**
 * convert script date to Date object
 */
Record.prototype.toDate = function(scriptDate) {

    if (scriptDate == null) {
        return null;
    }

    var jsdate = new Date(scriptDate.getEpochMilliseconds());
    return jsdate;
}
Record.prototype.getInspection = function(id) {
    var ret = null;
    var r = aa.inspection.getInspections(this.capId);

    if (r.getSuccess()) {
        var inspArray = r.getOutput();

        for (var i in inspArray) {
            if (inspArray[i].getIdNumber() == id) {
                ret = inspArray[i];
                break;
            }
        }
    }
    return ret;
}

/**
 * get last inspection on the record, null if empty
 */
Record.prototype.getLastInspection = function() {
    var ret = null;
    var r = aa.inspection.getInspections(this.capId);

    if (r.getSuccess()) {
        var maxId = -1;
        var maxInsp = null;
        var inspArray = r.getOutput();

        for (var i in inspArray) {
            var id = inspArray[i].getIdNumber();
            if (id > maxId) {
                maxId = id;
                maxInsp = inspArray[i];
            }
        }
        if (maxId >= 0) {
            ret = maxInsp;
        }
    } else {
        aa.debug("LIST INSP ERROR:", r.getErrorMessage())
    }
    return ret;
}

/**
 * delete inspection
 */
Record.prototype.deleteInspection = function(inspectionModel) {
    var removeResult = null;
    var gsiBiz = aa.proxyInvoker.newInstance("com.accela.aa.inspection.inspection.InspectionBusiness").getOutput();
    if (gsiBiz) {
        try {
            removeResult = gsiBiz.removeInspection(inspectionModel)
        } catch (err) {

            throw (err);
        }
    }
}

/**
 * construct array of asiTableValObj to represent ASIT row.
 *
 * @param {Array}
 *            row - each row in this array must has the column name as property
 *            and column value as property value.
 * @param {HashMap}
 *            differentColNamesMap - map contains different column names to be
 *            mapped dynamically during constructing ASIT value object.
 *
 * @returns {asiTableValObj[]} - array of column name as property and
 *          asiTableValObj as property value.
 */
Record.prototype.toAsiTableValObj = function(row, differentColNamesMap) {
    var newRow = new Array();
    for (var field in row) {
        var newAsitFieldName = differentColNamesMap != null && differentColNamesMap.get(field) || field;
        var fieldValue = row[field] == null ? "" : String(row[field]);
        var f = new asiTableValObj(newAsitFieldName, fieldValue, "N");
        newRow[newAsitFieldName] = f;
    }
    return newRow;
}

/**
 * construct array of AIST rows valid to be passed updateASIT.
 *
 * @param {Array}
 *            rows - each row in this array must be an array with the column
 *            name as property and column value as property value.
 * @returns {asiTableValObj[][]} - array of rows each row is an array of column
 *          name as property and asiTableValObj as property value.
 */
Record.prototype.toAsiTableValObjArr = function(rows) {
    var newRows = new Array();

    for (var x in rows) {
        newRows.push(this.toAsiTableValObj(rows[x]));
    }

    return newRows;
}

Record.prototype.deleteASIT = function(tableName) {
    var res = aa.appSpecificTableScript.removeAppSpecificTableInfos(tableName, this.capId, currentUserID);
    if (!res.getSuccess()) {
        throw "**WARNING: error removing ASI table " + tableName + " " + res.getErrorMessage();
    }
}
Record.prototype.addASITRows = function(tableName, dataSet) {
    var asitData = this.getASIT(tableName, true);
    var data = []
    for (var r in asitData) {
        var row = asitData[r];
        data.push(this.toAsiTableValObj(row));
    }
    for (var r in dataSet) {
        var row = dataSet[r];
        data.push(row);
    }
    this.updateASIT(tableName, data);
}
/**
 * update ASIT with passed values.
 *
 * @param {string}
 *            tableName - ASIT name to be updated
 * @param {asiTableValObj[][]}
 *            dataSet
 */
Record.prototype.updateASIT = function(tableName, dataSet) {

    this.deleteASIT(tableName);

    var r = aa.appSpecificTableScript.getAppSpecificTableModel(this.capId, tableName);
    if (!r.getSuccess()) {
        throw "**WARNING: error retrieving app specific table " + tableName + ". ERROR= " + r.getErrorMessage();

    }
    var i = r.getOutput();
    var tableModel = i.getAppSpecificTableModel();
    var o = tableModel.getTableField();
    var u = tableModel.getReadonlyField();
    for (var thisrow in dataSet) {
        var a = tableModel.getColumns();
        var f = a.iterator();
        while (f.hasNext()) {
            var l = f.next();
            var dt = dataSet[thisrow][l.getColumnName()];
            if (typeof dt == "object") {
                var val = dataSet[thisrow][l.getColumnName()].fieldValue;
                if (val == null) {
                    val = "";
                }
                o.add(val);
                u.add(null)
            } else {
                var val = dataSet[thisrow][l.getColumnName()];
                if (val == null) {
                    val = "";
                }
                o.add(val);
                u.add(null)
            }
        }
        tableModel.setTableField(o);
        tableModel.setReadonlyField(u)
    }
    var c = aa.appSpecificTableScript.editAppSpecificTableInfos(tableModel, this.capId, currentUserID);
    if (!c.getSuccess()) {
        throw "**WARNING: error adding record to ASI Table:  " + tableName + " " + c.getErrorMessage();
    }

    this.CACHEMAP.remove(tableName);
}

Record.prototype.updateASITColumn = function(tableName, rowIndex, colName, newValue) {
    var asit = new ASIT(tableName);
    asit.modifyFieldValue(rowIndex, colName, newValue);
    return this.updateASITColumns(asit);
}

Record.prototype.updateASITFromArray = function(tableName, dataSet) {

    var asit = new ASIT(tableName);
    for (var x in dataSet) {
        var row = dataSet[x];
        for (var f in row) {
            var field = row[f];
            var name = field.columnName;
            var value = field.fieldValue;

            asit.modifyFieldValue(x, name, value)
        }

    }
    this.updateASITColumns(asit);

}
Record.prototype.updateASITColumns = function(asit) {

    if (!asit.getTableName) {
        throw "**ERROR: use ASIT object declared in INCLUDE_RECORD as a parameter";
    }
    if (asit.isEmpty()) {
        throw "**ERROR: : noting was sent to update";

    }
    var tableName = asit.getTableName();
    if (tableName == "") {
        throw "**ERROR: tableName cannot be Empty";
    }
    var tsm = aa.appSpecificTableScript.getAppSpecificTableModel(this.capId, tableName);

    if (!tsm.getSuccess()) {
        throw "**ERROR: error retrieving app specific table " + tableName + " " + tsm.getErrorMessage();

    }

    var tsm = tsm.getOutput();
    var tsm = tsm.getAppSpecificTableModel();
    var cells = tsm.getTableField();
    var NumberOfCells = cells.size();
    var newtableFields = aa.util.newArrayList();
    var fields = tsm.getTableFields().iterator();
    var columns = aa.util.newArrayList();
    var columnScripts = tsm.getColumns();
    var NumberOfColumns = columnScripts.size();
    var NumberOfRows = Math.ceil(NumberOfCells / NumberOfColumns);

    if (NumberOfColumns < 0) {
        throw "invalid number of columns";
    }
    // set columns
    var colNames = [];
    for (var iterator = columnScripts.iterator(); iterator.hasNext();) {
        var scriptModel = iterator.next();
        columns.add(scriptModel.getColumnModel());
        colNames.push(scriptModel.getColumnName());
    }
    tsm.setColumns(columns);
    // set table fields
    var editedMsg = "";
    var edited = 0;
    for (var ri = 0; ri < NumberOfRows; ri++) {

        for (var colIndex = 0; colIndex < NumberOfColumns; colIndex++) {
            var cname = colNames[colIndex];
            var rowinIndexDB = fields.next().getRowIndex();
            var val = cells.get((ri * NumberOfColumns) + colIndex);
            if (asit.hasField(ri, cname)) {
                var newValue = asit.getFieldValue(ri, cname);

                editedMsg += "** " + cname + "[" + ri + "]=" + newValue + ", was " + val + "\n";
                val = newValue;
                edited++;

            }
            if (val == null) {
                val = "";
            }

            var res = aa.proxyInvoker.newInstance("com.accela.aa.aamain.appspectable.AppSpecificTableField", [val, columns.get(colIndex)]);
            if (!res.getSuccess()) {
                throw "field creationg failed: " + res.getErrorMessage();
            }
            var field = res.getOutput();
            field.setFieldLabel(cname);
            field.setRowIndex(rowinIndexDB);
            newtableFields.add(field);

        }

    }
    if (edited != asit.fields.length) {
        throw "**ERROR: Could not edit all edited fields! only " + edited + "/" + asit.fields.length + " was edited:\n" + editedMsg;
    }
    tsm.setTableFields(newtableFields);

    var gsiBiz = aa.proxyInvoker.newInstance("com.accela.aa.aamain.appspectable.AppSpecificTableBusiness").getOutput();
    gsiBiz.editAppSpecificTableInfos(tsm, this.capId, aa.getAuditID())
    logDebug("Successfully edited ASI Table: " + tableName + ". " + edited + " Cell(s) was edited:\n" + editedMsg);
    return edited;
}

Record.prototype.scheduleInspection = function(inspectionGroup, checkListGroup, inspectionDate, autoAssign, units, inspector) {
    var inspModel = aa.inspection.getInspectionScriptModel().getOutput().getInspection();
    var activityModel = inspModel.getActivity();
    var inspTypeModel = this.getInspectionTypeModel(inspectionGroup, checkListGroup);
    if (inspTypeModel == null) {
        throw "Inspection [" + inspectionGroup + "].[" + checkListGroup + "] is not defined in accela"
    }
    var inspSequenceNumber = inspTypeModel.getSequenceNumber();
    activityModel.setInspSequenceNumber(inspSequenceNumber);

    activityModel.setCapIDModel(this.capId);
    activityModel.setAutoAssign("Y");

    activityModel.setActivityType(checkListGroup);

    activityModel.setInspectionGroup(inspectionGroup);
    activityModel.setActivityDate(inspectionDate);
    if (units != null && units != "") {
        activityModel.setInspUnits(units);
    } else {
        activityModel.setInspUnits(inspTypeModel.getInspUnits());
    }

    var inspectorObj = null;
    if (inspector != null) {
        inspectorObj = inspector;
        logDebug("FORCING INSPECTOR:" + inspector.getUserID());
        activityModel.setSysUser(inspector);
    }
    if (autoAssign) {

        var atm = this.AutoScheduleInspectionInfo(inspModel, inspectionDate);
        if (!atm.isSuccessful()) {
            var inspInfo = "inspSequenceNumber=[" + inspSequenceNumber + "] inspectionGroup=[" + inspectionGroup + "] " + "checkListGroup=[" + checkListGroup + "] inspModel=[" +
                inspModel + "] inspectionDate=[" + inspectionDate + "]";
            throw "Auto Assign Failed of " + inspInfo + ": " + atm.getMessage();
        }
        if (inspector != null) {
            inspectorObj = inspector;
        } else {
            inspectorObj = atm.getInspector();
        }

        // logDebug("auto Assign to:" + inspectorObj.getFullName() + " of agency
        // ["
        // + inspectorObj.getServiceProviderCode() + "] at " +
        // atm.getScheduleDate());
        activityModel.setActivityDate(atm.getScheduleDate());
    }
    if (inspectorObj != null) {
        logDebug("**Scheduling inspection [" + inspectionGroup + "].[" + checkListGroup + "] for [" + inspectorObj.getUserID() + "]");
    }
    var schedRes = aa.inspection.scheduleInspection(inspModel, inspectorObj);

    if (!schedRes.getSuccess()) {
        throw "**ERROR: Failed to schedule inspection: " + schedRes.getErrorMessage();
    }
    var inspection = this.getInspection(schedRes.getOutput());
    if (inspection.getInspection().getInspector() != null) {
        logDebug("**INSPECTION SCHEDULED FOR[" + inspection.getInspection().getInspector().getUserID() + "]");
    }
    var ret = {};
    // ret.inspection = inspection;
    // ret.inspector = inspectorObj;

    return ret;

}
Record.prototype.getCapStatus = function() {

    return this.getCap().getCapStatus()
}
Record.prototype.getCap = function() {
    return aa.cap.getCap(this.getCapID()).getOutput();

}
Record.prototype.updateStatus = function(stat, cmt) {

    var updateStatusResult = aa.cap.updateAppStatus(this.getCapID(), "APPLICATION", stat, aa.date.getCurrentDate(), cmt, this.getCurrentUserObj());
    if (!updateStatusResult.getSuccess()) {
        throw "**ERROR: application status update to " + stat + " was unsuccessful.  The reason is " + updateStatusResult.getErrorType() + ":" +
        updateStatusResult.getErrorMessage();

    }

}

/**
 * override toString function.
 */
Record.prototype.toString = function() {
    var stringVal = this.constructor.name + ' ID : [' + this.getCapID() + '], custom ID : [' + this.getCustomID() + '] ';
    return stringVal;
}

Record.prototype.getCurrentUserObj = function() {

    var systemUserObjResult = aa.person.getUser(aa.getAuditID().toUpperCase());

    if (!systemUserObjResult.getSuccess()) {
        throw systemUserObjResult.getErrorMessage();
    }
    return systemUserObjResult.getOutput();

}
Record.prototype.editASI = function(group, name, value) {
    var appSpecInfoResult = aa.appSpecificInfo.editSingleAppSpecific(this.capId, name, value, group);

    if (!appSpecInfoResult.getSuccess()) {
        logDebug("WARNING: ASI " + group + "." + name + " was not updated." + appSpecInfoResult.getErrorMessage());
    }

}
Record.prototype.getAddressesCaps = function() {
    return aa.address.getAddressByCapId(this.capId).getOutput();
}
Record.prototype.updateDistrict = function(district) {
    var bupdated = false;
    if (district == "") {
        throw "district cannot be empty";
    }
    var vCapAddArr = this.getAddressesCaps();
    if (vCapAddArr.length == 0) {
        throw "Address not found on " + this.toString();
    }
    var address = vCapAddArr[0];
    var vDistArr = aa.address.getAssignedAddressDistrictForDaily(this.capId.ID1, this.capId.ID2, this.capId.ID3, address.addressId).getOutput();
    var isDisctrictDefined = false;
    for (var x in vDistArr) {

        if (vDistArr[x].getDistrict().equals(district)) {
            isDisctrictDefined = true;

            break;
        }

    }

    if (!isDisctrictDefined) {
        var res = aa.address.addAddressDistrictForDaily(this.capId.ID1, this.capId.ID2, this.capId.ID3, address.addressId, district);
        if (!res.getSuccess()) {
            throw "**Error Adding District " + res.getErrorMessage();

        } else {
            bupdated = true;
        }
    }
    return bupdated;

}

/**
 * get children records with specific type.
 *
 * @param {string}
 *            pCapType - cap type to filter children, i.e.
 *            "GeneralServices/Financial/Fine Record/FINE"
 * @param {object}
 *            [returnClass=Record] - any class extends Record, to cast result
 *            array objects to it.
 * @returns {Record[]|returnClass[]} - array of Record or of any other class
 *          extends Record.
 */
Record.prototype.getChildren = function(pCapType, returnClass) {

    returnClass = returnClass || Record;

    var retArray = new Array();

    var childCapIdSkip = null;

    var typeArray = pCapType.split("/");
    if (typeArray.length != 4) {

        throw ("**ERROR in childGetByCapType function parameter.  The following cap type parameter is incorrectly formatted: " + pCapType);
    }
    var getCapResult = aa.cap.getChildByMasterID(this.capId);
    if (!getCapResult.getSuccess()) {
        var error = getCapResult.getErrorMessage();

        if (error == "") {
            return [];
        } else {
            throw ("**ERROR: getChildren returned an error: " + error);
        }

    }

    var childArray = getCapResult.getOutput();

    var childCapId;
    var capTypeStr = "";
    var childTypeArray;
    var isMatch;
    for (var xx in childArray) {
        childCapId = childArray[xx].getCapID();
        if (childCapIdSkip != null && childCapIdSkip.getCustomID().equals(childCapId.getCustomID())) {
            continue;
        }

        capTypeStr = aa.cap.getCap(childCapId).getOutput().getCapType().toString();
        childTypeArray = capTypeStr.split("/");
        isMatch = true;
        for (var yy in childTypeArray) // looking for matching cap type
        {
            if (!typeArray[yy].equals(childTypeArray[yy]) && !typeArray[yy].equals("*")) {
                isMatch = false;
                continue;
            }
        }
        if (isMatch) {

            var childObj = Object.create(returnClass.prototype);
            returnClass.apply(childObj, [childCapId]);

            retArray.push(childObj);
        }

    }

    return retArray;

}
Record.prototype.listAll = function(recordType, capStatus, returnClass) {
    returnClass = returnClass || Record;
    var capList = new Array();
    var splited = recordType.split("/");
    if (splited.length != 4) {
        throw "invalid record type:" + recordType
    }
    var emptyCm1 = aa.cap.getCapModel().getOutput();
    var emptyCt1 = emptyCm1.getCapType();
    emptyCt1.setGroup(splited[0]);
    emptyCt1.setType(splited[1]);
    emptyCt1.setSubType(splited[2]);
    emptyCt1.setCategory(splited[3]);
    emptyCm1.setCapStatus(capStatus);
    var vCapList;
    var vCapListResult = aa.cap.getCapIDListByCapModel(emptyCm1);
    if (!vCapListResult.getSuccess()) {
        throw vCapListResult.getErrorMessage();
    }
    vCapList = vCapListResult.getOutput();
    for (var thisCap in vCapList) {
        var cpid = aa.cap.getCapID(vCapList[thisCap].getCapID().getID1(), vCapList[thisCap].getCapID().getID2(), vCapList[thisCap].getCapID().getID3()).getOutput();
        var childObj = Object.create(returnClass.prototype);
        returnClass.apply(childObj, [cpid]);

        capList.push(childObj);
    }
    return capList;
}
/**
 * get record parents with specific type and relationship.
 *
 * @param {String}
 *            pAppType - application type of required parent objects.
 * @param {object}
 *            [returnClass=Record] - any class inherits Record, to cast result
 *            array objects to it.
 * @param {String}
 *            relationshipType=Relationship Type with the Parent Record which
 *            could have the below values ["Amendment"] in case the child record
 *            is an amendment record ["Renewal"] in case the child record is a
 *            renewal record ["AssoForm"] in case the child record is an
 *            associated form record ["R"] in case the child record is a regular
 *            related record, this is the default value [""] in other cases
 * @returns {(Record[]|returnClass[])} - array of Record or of any other class
 *          inherits Record.
 */
Record.prototype.getParents = function(pAppType, returnClass, relationshipType) {
    returnClass = returnClass || Record;
    pAppType = pAppType || "";
    var resultArr = [];
    if (!relationshipType || relationshipType == "") {
        relationshipType = "R";
    }
    var recordParents = aa.cap.getProjectByChildCapID(this.getCapID(), relationshipType, "").getOutput();

    for (var record in recordParents) {
        var parentId = recordParents[record].getProjectID();
        var parentCapId = aa.cap.getCap(parentId).getOutput();

        // if (pAppType != "" && !String(parentCapId.getCapType()).equalsIgnoreCase(pAppType)) {
        //     continue;
        // }

        var parentObj = Object.create(returnClass.prototype);
        returnClass.apply(parentObj, [parentCapId.getCapID()]);

        resultArr.push(parentObj);
    }

    return resultArr;
}

Record.prototype.getInspectionTypeModel = function(inspectionGroup, checklist) {

    var inspectionTypeModel = null;
    var inspectionTypesResult = aa.inspection.getInspectionType(inspectionGroup, checklist);
    if (inspectionTypesResult.getSuccess()) {
        var inspectionTypes = inspectionTypesResult.getOutput();
        if (inspectionTypes) {
            for (var i in inspectionTypes) {
                inspectionTypeModel = inspectionTypes[i];

                break;
            }
        }
    }
    return inspectionTypeModel;

}

Record.prototype.getStandardChoices = function(name) {
    var outArr = aa.bizDomain.getBizDomain(name).getOutput().toArray();
    return outArr;
}

Record.prototype.getLookupVal = function(sControl, sValue) {
    var desc = "";
    var bizDomScriptResult = aa.bizDomain.getBizDomainByValue(sControl, sValue);
    if (bizDomScriptResult.getSuccess()) {
        var bizDomScriptObj = bizDomScriptResult.getOutput();
        desc = "" + bizDomScriptObj.getDescription();
    }
    return desc;
}

// Record.prototype.updateTaskAndHandleDisposition = function(task, status) {
//     updateTaskAndHandleDisposition(task, status, this.capId)
// }
Record.prototype.getPriority = function() {
    var cdScriptObjResult = aa.cap.getCapDetail(this.capId).getOutput();
    var fitrCapDetailModel = cdScriptObjResult.getCapDetailModel();
    return fitrCapDetailModel.getPriority();

}
Record.prototype.setPriority = function(priority) {
    var cdScriptObjResult = aa.cap.getCapDetail(this.capId).getOutput();
    var fitrCapDetailModel = cdScriptObjResult.getCapDetailModel();
    fitrCapDetailModel.setPriority(priority);
    var r = aa.cap.editCapDetail(fitrCapDetailModel);
    if (!r.getSuccess()) {
        throw "**ERROR: Failed to get set priority for [" + this + "]: " + r.getErrorMessage();
    }
}
Record.prototype.AutoScheduleInspectionInfo = function(inspModel, date) {

    inspModel.getActivity().setActivityDate(date);
    var inspSchedDate = aa.util.formatDate(date, "MM/dd/yyyy");

    var assignSwitch = aa.proxyInvoker.newInstance("com.accela.aa.inspection.assign.model.AssignSwitch").getOutput();

    assignSwitch.setGetNextAvailableTime(true);
    assignSwitch.setOnlyAssignOnGivenDate(false);
    assignSwitch.setValidateCutOffTime(false);
    assignSwitch.setValidateScheduleNumOfDays(false);
    assignSwitch.setAutoAssignOnGivenDeptAndUser(true);
    assignSwitch.setCheckingCalendar(true);
    var assignService = aa.proxyInvoker.newInstance("com.accela.aa.inspection.assign.AssignInspectionBusiness").getOutput();

    var inspectionList = aa.util.newArrayList();
    inspectionList.add(inspModel);

    var specifiedDate = aa.proxyInvoker.newInstance("com.accela.aa.inspection.assign.model.SpecifiedDateTime").getOutput();
    specifiedDate.setDate(date)
    var result = assignService.autoAssign4AddOns(aa.getServiceProviderCode(), inspectionList, specifiedDate, assignSwitch);
    var assinfo = null;
    if (result.size() > 0) {
        var atm = result.get(0);
        assinfo = atm;

    }
    return assinfo;

}

Record.prototype.activateTask = function(task, desactivateCurrent) {
    var r = aa.workflow.getTaskItems(this.capId, "", "", null, null, null);
    // if (!r.getSuccess()) {
    //     throw "**ERROR: Failed to get workflow object: " + s_capResult.getErrorMessage();
    // }
    var s = r.getOutput();
    for (var i in s) {
        var wfTask = s[i];
        var stepNumber = wfTask.getStepNumber();
        if (wfTask.getTaskDescription().toUpperCase().equals(task.toUpperCase())) {
            aa.workflow.adjustTask(this.capId, stepNumber, "Y", "N", null, null);
        }
        if (desactivateCurrent && wfTask.getActiveFlag().equals("Y")) {
            var completeFlag = wfTask.getCompleteFlag();
            aa.workflow.adjustTask(this.capId, stepNumber, "N", completeFlag, null, null);
        }
    }
}

Record.prototype.getExpirationDate = function() {
    var date = null;
    var exp = aa.expiration.getLicensesByCapID(this.capId).getOutput();
    var scriptDate = exp.getExpDate();
    if (scriptDate) {
        date = this.toDate(scriptDate);
    }
    return date;
}

Record.prototype.setExpirationDate = function(date) {
    var exp = aa.expiration.getLicensesByCapID(this.capId).getOutput();
    if (exp && exp.getB1Expiration() != null) {
        var theMonth = String(parseInt(date.getMonth() + 1));
        var theDay = String(parseInt(date.getDate()));
        var theYear = String(parseInt(date.getFullYear()));
        var expiration = theMonth + "/" + theDay + "/" + theYear;
        var expDateTime = aa.date.parseDate(expiration);
        exp.setExpDate(expDateTime);
        aa.expiration.editB1Expiration(exp.getB1Expiration());
    }

}
/**
 * this function is called to delete a task and its sub process
 *
 * @param taskName
 *            is the task Description
 * @returns {Boolean}
 */
Record.prototype.deleteTaskAndItsSubProcess = function(taskName) {

    var o = aa.workflow.getTask(this.capId, taskName);
    if (!o.getSuccess()) {
        throw "**ERROR: Failed to get workflow object: " + o.getErrorMessage();
    }
    var t = o.getOutput();
    o = aa.workflow.removeSubProcess(t);
    if (!o.getSuccess()) {
        throw "**ERROR: Failed to remove workflow Task Sub Process object: " + o.getErrorMessage();
    }
    o = aa.workflow.removeTask(t);
    if (!o.getSuccess()) {
        throw "**ERROR: Failed to remove workflow Task object: " + o.getErrorMessage();
    }
    return true;
}

Record.prototype.completeWorkflow = function() {
    var r = aa.workflow.getTaskItems(this.capId, "", "", null, null, null);
    if (!r.getSuccess()) {
        throw "**ERROR: Failed to get workflow object: " + s_capResult.getErrorMessage();
    }
    var s = r.getOutput();
    for (var i in s) {
        var wfTask = s[i];
        var stepNumber = wfTask.getStepNumber();

        if (wfTask.getActiveFlag().equals("Y")) {
            var completeFlag = wfTask.getCompleteFlag();
            aa.workflow.adjustTask(this.capId, stepNumber, "N", completeFlag, null, null);
        }
    }
    logDebug("Complete Workflow called on " + this)
}

Record.prototype.setCurrentWorkflowTaskStatus = function(taskStatus, comment) {
    var r = aa.workflow.getTaskItems(this.capId, "", "", null, null, null);
    if (!r.getSuccess()) {
        throw "**ERROR: Failed to get workflow object: " + s_capResult.getErrorMessage();
    }
    var s = r.getOutput();
    for (var i in s) {
        var wfTask = s[i];
        var stepNumber = wfTask.getStepNumber();

        if (wfTask.getActiveFlag().equals("Y")) {
            wfTask.setDisposition(taskStatus);
            wfTask.setSysUser(aa.person.getUser(aa.getAuditID()).getOutput());

            if (comment && comment != "") {
                wfTask.setDispositionComment(comment);

            }
            var updateResult = aa.workflow.handleDisposition(wfTask.getTaskItem(), this.getCapID());
            if (!updateResult.getSuccess()) {
                throw "Problem while updating workflow " + updateResult.getErrorMessage();
            }
        }
    }
}
Record.prototype.hasActiveTask = function() {
    return this.getCurrentWorkflowTask() != null;
}
Record.prototype.getCurrentWorkflowTask = function() {
    var ret = null;
    var r = aa.workflow.getTaskItems(this.capId, "", "", null, null, null);
    if (!r.getSuccess()) {
        throw "**ERROR: Failed to get workflow object: " + s_capResult.getErrorMessage();
    }
    var s = r.getOutput();
    for (var i in s) {
        var wfTask = s[i];
        var stepNumber = wfTask.getStepNumber();

        if (wfTask.getActiveFlag().equals("Y")) {
            ret = wfTask;
            break;
        }
    }
    return ret;
}
Record.prototype.isTaskActive = function(task) {

    var ret = false;

    var workflowResult = aa.workflow.getTaskItems(this.capId, task, "", null, null, "Y");
    if (!workflowResult.getSuccess()) {
        throw "**ERROR: Failed to get workflow object: " + s_capResult.getErrorMessage();
    }
    var wfObj = workflowResult.getOutput();

    for (var i in wfObj) {
        var fTask = wfObj[i];
        if (fTask.getTaskDescription().toUpperCase().equals(task.toUpperCase())) {
            if (fTask.getActiveFlag().equals("Y")) {
                ret = true;
                break;
            }

        }
    }
    return ret;

}
Record.prototype.getCapType = function() {
    return aa.cap.getCap(this.capId).getOutput().getCapType();
}
Record.prototype.findSimilarRecords = function(arrASIFields, sameLicense) {
    var ret = [];
    if (arrASIFields.length > 0) {
        var capType = this.getCapType();
        var firstField = this.parseFieldName(arrASIFields[0]);
        var firstFieldValue = this.getASI(firstField.TABLENAME, firstField.NAME, "");
        var capType = this.getCapType().toString();
        logDebug(capType);
        var records = this.getByAsi(firstField.NAME, firstFieldValue, capType);
        if (records.length > 0) {

            for (var x in records) {
                var rec = records[x];
                if (rec.getCapID().toString() + "" != this.capId.toString() + "") {
                    var match = true;
                    for (var i = 1; i < arrASIFields.length; i++) {
                        var field = this.parseFieldName(arrASIFields[i]);
                        var curValue = this.getASI(field.TABLENAME, field.NAME, "");
                        var recValue = rec.getASI(field.TABLENAME, field.NAME, "");
                        match = curValue == recValue;

                        if (!match) {
                            break;
                        }
                    }

                    if (match) {
                        if (sameLicense) {
                            var curLic = this.getLicense();
                            var recLic = rec.getLicense();
                            if (curLic != null && recLic != null) {
                                if (curLic.getLicenseNbr() == recLic.getLicenseNbr()) {
                                    ret.push(rec);
                                }
                            } else {
                                if (recLic == null && curLic == null) {
                                    ret.push(rec);
                                }
                            }

                        } else {
                            ret.push(rec);
                        }
                    }
                }
            }
        }

    }
    return ret;
}

/**
 * get license linked to current record.
 *
 * @returns {LicenseProfessionalScriptModel}
 */
Record.prototype.getLicense = function() {
    var lic = null;
    var arrLic = this.getLicenses();

    if (arrLic && arrLic.length > 0) {
        lic = arrLic[0]
    }
    return lic;
}

Record.prototype.getLicenses = function() {

    return aa.licenseProfessional.getLicensedProfessionalsByCapID(this.capId).getOutput();

}

/**
 * link specific record as parent to current record.
 *
 * @param {(string|CapIDModel)}
 *            parentAltId - custom id or cap id for the parent record
 */
Record.prototype.addParent = function(parentAltId) {

    var parentRecord = new Record(parentAltId);

    parentRecord.addChild(this.getCapID());
}

/**
 * link specific record as child to current record.
 *
 * @param {(string|CapIDModel)}
 *            childAltId - custom id or cap id for the child record
 */
Record.prototype.addChild = function(childAltId) {

    var childRecord = new Record(childAltId);

    var result = aa.cap.createAppHierarchy(this.getCapID(), childRecord.getCapID());

    if (!result.getSuccess()) {
        throw "Could not link [" + childRecord.getCustomID() + "] to Record [" + this.getCustomID() + "]";
    }
}

/**
 * add license to current record by number.
 *
 * @param {string}
 *            licenseNo license number get related model.
 *
 * @returns {LicenseScriptModel}
 */
Record.prototype.addLicense = function(licenseNo) {

    var licenseScriptResult = aa.licenseScript.getRefLicensesProfByLicNbr(aa.getServiceProviderCode(), licenseNo);

    if (!licenseScriptResult.getSuccess() || licenseScriptResult.getOutput() == null) {
        throw "**ERROR: can not get license model with number [" + licenseNo + "]";
    }

    var licenseScriptModel = licenseScriptResult.getOutput()[0];
    var associateResult = aa.licenseScript.associateLpWithCap(this.getCapID(), licenseScriptModel);

    if (!associateResult.getSuccess()) {
        throw "**ERROR: can not link license model number [" + licenseNo + "] with cap id [" + this.getCustomID() + "]";
    }

    return licenseScriptModel;
}

/**
 * Copy ASI field value into another ASI field in same record, if source ASI
 * field has value.
 *
 * @param {string}
 *            srcGroupName - source group name.
 * @param {string}
 *            srcFieldName - source field name.
 * @param {string}
 *            destGroupName - destination group name.
 * @param {string}
 *            destFieldName - destination field name.
 *
 * @returns {object} - Source ASI Field value or empty string.
 */
Record.prototype.copyASIValue = function(srcGroupName, srcFieldName, destGroupName, destFieldName) {

    if (srcGroupName == null || srcGroupName == "") {
        throw "source group name is required."
    }

    if (srcFieldName == null || srcFieldName == "") {
        throw "source field name is required."
    }

    if (destGroupName == null || destGroupName == "") {
        throw "destination group name is required."
    }

    if (destFieldName == null || destFieldName == "") {
        throw "destination field name is required."
    }

    var asiValue = this.getASI(srcGroupName, srcFieldName, "");
    if (asiValue != null && asiValue != "") {
        this.editASI(destGroupName, destFieldName, asiValue);
    }

    return asiValue;
}
Record.prototype.copyASIFromOtherRecord = function(rec, srcGroupName, srcFieldName, destGroupName, destFieldName) {

    if (srcGroupName == null || srcGroupName == "") {
        throw "source group name is required."
    }

    if (srcFieldName == null || srcFieldName == "") {
        throw "source field name is required."
    }

    if (destGroupName == null || destGroupName == "") {
        throw "destination group name is required."
    }

    if (destFieldName == null || destFieldName == "") {
        throw "destination field name is required."
    }

    var asiValue = rec.getASI(srcGroupName, srcFieldName, "");
    if (asiValue != null && asiValue != "") {
        this.editASI(destGroupName, destFieldName, asiValue);
    }

    return asiValue;
}
Record.prototype.getApplicationName = function() {
    return this.getCap().getSpecialText();
}
Record.prototype.setApplicationName = function(name) {
    var cap = this.getCap().getCapModel();
    cap.setSpecialText(name);
    aa.cap.editCapByPK(cap);
}

/**
 * get license number linked to this record.
 *
 * @returns {String} license number linked to current record.
 */
Record.prototype.getLicenseNumber = function() {
    var licenseModel = this.getLicense();

    var licenseNumber = null;
    if (licenseModel != null) {
        licenseNumber = licenseModel.getLicenseNbr();
    }

    return licenseNumber;
}

/**
 * copy license from passed cap id to current record.
 *
 * @param licenseSrcCapId
 *            {CapIDModel|String} - Cap id or custom id to get license and link
 *            it to current record.
 * @returns {LicenseScriptModel} license model which copied to record.
 */
Record.prototype.copyLicense = function(licenseSrcCapId) {
    var licenseSrcRecord = new Record(licenseSrcCapId);
    var srcLicenseModel = licenseSrcRecord.getLicense();

    var copiedLicense = null;
    if (srcLicenseModel != null) {
        var newLicenseNbr = srcLicenseModel.getLicenseNbr();

        if (newLicenseNbr != this.getLicenseNumber()) {
            copiedLicense = this.addLicense(newLicenseNbr);
        } else {
            copiedLicense = this.getLicense();
        }
    }

    return copiedLicense;
}

/**
 * copy address from passed cap id to current record.
 *
 * @param addressSrcCapId
 * @param {string|Record|CapIDModel}
 *            addressSrcCapId - custom id or Cap id object or record object to
 *            get address from.
 */
Record.prototype.copyAddress = function(addressSrcCapId) {
    var sourceRecord = null;
    if (addressSrcCapId instanceof Record) {
        sourceRecord = addressSrcCapId;
    } else {
        sourceRecord = new Record(addressSrcCapId);
    }

    var srcAddressModel = sourceRecord.getAddressesCaps();

    if (srcAddressModel != null) {
        for (var index in srcAddressModel) {
            var address = srcAddressModel[index];
            address.setCapID(this.getCapID());
            aa.address.createAddress(address);
        }
    }
}

/**
 * Returns map contains all rows in passed ASIT using primary column values as
 * keys and related row as value.
 *
 * @param {string}
 *            asitName - ASIT Name to be represented as map.
 * @param {string}
 *            primaryColName - column name which will be the map key (must be
 *            unique).
 * @returns map represents ASIT.
 */
Record.prototype.getAsitMap = function(asitName, primaryColName) {
    var asitRows = this.getASIT(asitName);
    var asitMap = aa.util.newHashMap();
    for (var idx in asitRows) {
        var row = asitRows[idx];
        asitMap.put(String(row[primaryColName]), row);
    }
    return asitMap;
}

/**
 * Returns list contains all values in specific column of passed ASIT, skip
 * empty values.
 *
 * @param {string}
 *            asitName - ASIT Name to get column data.
 * @param {string}
 *            colName - column name to get related values.
 * @param {boolean}
 *            skipEmptyValues - skip empty values if true
 * @returns {Array} contains all values of this column.
 */
Record.prototype.getAsitColumList = function(asitName, colName, skipEmptyValues) {
    var asitRows = this.getASIT(asitName);
    var asitList = [];

    skipEmptyValues = skipEmptyValues || true;

    for (var idx in asitRows) {
        var row = asitRows[idx];
        var colVal = row[colName];
        if (skipEmptyValues == true && (colVal == null || colVal == "")) {
            continue;
        }

        asitList.push(String(colVal));
    }

    return asitList;
}

Record.prototype.getReportContent = function(reportName, parameters) {
    var report = aa.reportManager.getReportInfoModelByName(reportName).getOutput();
    report.setModule(this.getCap().getCapType().getGroup());

    report.setCapId(this.capId);

    report.setReportParameters(parameters);

    var reportResult = aa.reportManager.getReportResult(report).getOutput();
    return reportResult.getContent();

}

/**
 * assign work flow task to specific user.
 *
 * @param {string}
 *            userId - user id to assign current task to him.
 */
Record.prototype.assignCurrentWfTaskToUser = function(userId) {

    if (userId == null || userId == "" || userId == "null") {
        throw "user id can not be null";
    }

    var sysUserModelObj = aa.people.getSysUserByID(userId).getOutput();

    if (sysUserModelObj == null) {
        throw "No system user linked to user id [" + userId + "]."
    }

    var curTask = this.getCurrentWorkflowTask();

    curTask.setAssignedUser(sysUserModelObj);
    curTask.setAssignmentDate(aa.util.now());

    var res = aa.workflow.assignTask(curTask.getTaskItem());
    if (!res.getSuccess()) {
        throw "**ERROR: Could not assign task: " + res.getErrorMessage();
    }

    logDebug(" Assign Workflow task [" + curTask + "] to user [" + sysUserModelObj.getFullName() + "].");
}

/**
 * set cap class value.
 *
 * @param {string}
 *            capCalss - cap class to be set (ex. COMPLETE, EDITABLE, ...).
 */
Record.prototype.setCapClass = function(capCalss) {

    var cap = aa.cap.getCap(this.capId).getOutput();
    var capModel = cap.getCapModel();
    capModel.setCapClass(capCalss);
    aa.cap.editCapByPK(capModel);
}

/**
 * copy contacts from specific record to current record.
 *
 * @param {Record}
 *            srcRecord - source record to copy contacts from it.
 */
Record.prototype.copyContacts = function(srcRecord) {

    if (srcRecord == null) {
        throw "Record.prototype.copyContacts :: source record can not be null";
    }

    var srcContacts = srcRecord.getContacts();

    for (var index in srcContacts) {

        var contact = srcContacts[index].getCapContactModel();

        var contactType = contact.getContactType();

        // FARAG review with Tony
        contact.setCapID(this.capId);
        var addedContact = aa.people.createCapContact(contact).getOutput();
        var peopleObj = contact.getPeople();
        peopleObj.setFlag("Y");
        contact.setPeople(peopleObj);
        var editResult = aa.people.editCapContact(contact);
        logDebug("Contact [" + contact.getLastName() + "] copied to " + this.toString());
    }
}
/**
 * this function returns in an array all the parcels linked to this record.
 */
Record.prototype.getRelatedParcels = function() {

    return aa.parcel.getParcelByCapId(this.getCapID(), aa.util.newQueryFormat()).getOutput();
}

/**
 *
 * @param attr :
 *            optional
 * @returns in case attr is not specified: HashMap of related parcels attributes
 *          with the parcel number as the key and attribute hash map as the
 *          value in case attr is specified: HashMap with the parcel number as
 *          the key and the value of the specified attribute as the value
 */
Record.prototype.getRelatedParcelAttribute = function(attr) {

    var lookupAttr = null;
    if (arguments.length > 0) {
        lookupAttr = arguments[0];
    }
    var Parcels = aa.parcel.getParcelByCapId(this.getCapID(), aa.util.newQueryFormat()).getOutput();
    var parcelHashMap = aa.util.newHashMap();
    for (var index = 0; index < Parcels.size(); index++) {
        var parcelModel = Parcels.get(index);
        var parcelNumber = parcelModel.getParcelNumber();
        var parcelAttributes = parcelModel.getParcelAttribute();
        if (parcelAttributes != null) {
            var parcelAttHashMap = aa.util.newHashMap();
            for (var i = 0; i < parcelAttributes.size(); i++) {
                var parcelAttribute = parcelAttributes.get(i);
                var fieldName = parcelAttribute.getB1AttributeName();
                var value = parcelAttribute.getB1AttributeValue();
                if (lookupAttr != null && fieldName == attr && value != null && value != "") {
                    parcelHashMap.put(parcelNumber, value);
                } else {
                    if (value != null && value != "")
                        parcelAttHashMap.put(fieldName, value);
                }
            }
            if (lookupAttr == null)
                parcelHashMap.put(parcelNumber, parcelAttHashMap);
        }
    }
    return parcelHashMap;
}

Record.prototype.createNew = function(type, desc) {
    if (desc == null) {
        desc = "";
    }
    if (type == null) {
        throw "Record Type is Not defined";
    }
    var args = type.split("/");

    if (args.length != 4) {
        throw "invalid Record type, must contains 4 /";
    }
    var grp = args[0];
    var typ = args[1];
    var stype = args[2];
    var cat = args[3]
    var appCreateResult = aa.cap.createApp(grp, typ, stype, cat, desc);
    logDebug("creating cap " + grp + "/" + typ + "/" + stype + "/" + cat);
    if (!appCreateResult.getSuccess()) {
        throw "**ERROR: Creating App: " + appCreateResult.getErrorMessage();
    }
    var newId = appCreateResult.getOutput();
    var record = new Record(newId)
    record.setCapClass("COMPLETE");
    // create Detail Record
    var capDetailModel = aa.cap.getCapDetail(newId).getOutput();
    if (capDetailModel == null) {
        capModel = aa.cap.newCapScriptModel().getOutput();
        capDetailModel = capModel.getCapModel().getCapDetailModel();
        capDetailModel.setCapID(newId);
        aa.cap.createCapDetail(capDetailModel);
    }
    return newId;
}

Record.prototype.createNewWithAltID = function(type, appName, altId) {
    if (appName == null) {
        appName = "";
    }
    if (type == null) {
        throw "Record Type is Not defined";
    }
    var args = type.split("/");

    if (args.length != 4) {
        throw "invalid Record type, must contains 4 /";
    }
    var grp = args[0];
    var typ = args[1];
    var stype = args[2];
    var cat = args[3]
    var newAppTyp = aa.cap.getCapTypeModel().getOutput();

    newAppTyp.setGroup(grp);
    newAppTyp.setType(typ);
    newAppTyp.setSubType(stype);
    newAppTyp.setCategory(cat);
    var serviceProviderCode = aa.getServiceProviderCode();
    newAppTyp.setServiceProviderCode(serviceProviderCode);
    newAppTyp.setAuditStatus("A");

    var newAppModel = aa.cap.getCapModel().getOutput();
    newAppModel.setCapType(newAppTyp);
    newAppModel.setSpecialText(appName);

    var capServer = aa.proxyInvoker.newInstance("com.accela.aa.aamain.cap.CapBusiness").getOutput();
    newAppModel = capServer.createCap(serviceProviderCode, currentUserID, newAppModel, altId, false);
    return newAppModel.getCapID();
}

Record.prototype.getByLicense = function(licenseNbr, type) {
    var lic = aa.licenseProfessional.getLicenseProfessionScriptModel().getOutput();
    lic.setLicenseNbr(licenseNbr);
    var vLPres = aa.licenseScript.getRefLicensesProfByLicNbr(aa.getServiceProviderCode(), licenseNbr);
    if (!vLPres.getSuccess()) {
        throw vLPres.getErrorMessage();
    }

    if (vLPres.getOutput() == null) {
        throw "**ERROR:getRecordByLicense: License does not exists";
    }
    var seqNumber = vLPres.getOutput()[0].getLicSeqNbr();
    lic = lic.getLicenseProfessionalModel();
    lic.setLicSeqNbr(seqNumber);

    var ret = new Array();
    var ata = type.split("/");
    if (ata.length != 4) {

        throw "**ERROR:getRecordByLicense: The following Application Type String is incorrectly formatted: " + type;
    }

    var capTypeModel = aa.cap.getCapTypeModel().getOutput();
    capTypeModel.setServiceProviderCode(aa.getServiceProviderCode());
    capTypeModel.setGroup(ata[0]);
    capTypeModel.setType(ata[1]);
    capTypeModel.setSubType(ata[2]);
    capTypeModel.setCategory(ata[3]);

    var capModel = aa.cap.getCapModel().getOutput();
    capModel.setCapType(capTypeModel);
    capModel.setLicenseProfessionalModel(lic);

    var capCollectionResult = aa.cap.getCapIDListByCapModel(capModel);

    if (!capCollectionResult.getSuccess()) {
        throw "Could not get capIds for Licensed Professional in getCapIDListByCapModel()";
    }
    var capCollection = capCollectionResult.getOutput();
    for (var cap in capCollection) {
        var myCap = capCollection[cap].getCapID();
        var rec = new Record(myCap);

        ret.push(rec);

    }

    return ret;

}
/**
 * get records of specific type which has ASI field with specific value.
 *
 * @param {string}
 *            ASIName - ASI field name
 * @param {(string|Date)}
 *            ASIValue - ASI field value to filter records.
 * @param {string}
 *            type - record type
 * @returns {Record[]}
 */
Record.prototype.getByAsi = function(ASIName, ASIValue, type) {
    var ret = new Array();
    var ata = type.split("/");
    if (ata.length != 4) {

        throw "**ERROR: getAppIdByASI in appMatch.  The following Application Type String is incorrectly formatted: " + type;
    }
    if (ASIValue instanceof Date) {
        ASIValue = aa.util.formatDate(ASIValue, "MM/dd/yyyy")
    }
    var getCapResult = aa.cap.getCapIDsByAppSpecificInfoField(ASIName, ASIValue);
    if (!getCapResult.getSuccess()) {
        throw "**ERROR: getting caps by app type: " + getCapResult.getErrorMessage();
    }

    var apsArray = getCapResult.getOutput();
    for (var aps in apsArray) {
        var myCapRes = aa.cap.getCap(apsArray[aps].getCapID());
        if (!myCapRes.getSuccess()) {
            var error = myCapRes.getErrorMessage();
            if (error == "CapByPKNotFoundException") {
                continue;
            } else {
                throw "**ERROR: getting cap for capID [" + apsArray[aps].getCapID() + "]: " + error;
            }

        }
        var myCap = myCapRes.getOutput();
        var myAppTypeString = myCap.getCapType().toString();
        var myAppTypeArray = myAppTypeString.split("/");

        var isMatch = true;
        for (var xx in ata) {
            if (!ata[xx].equalsIgnoreCase(myAppTypeArray[xx]) && !ata[xx].equals("*")) {
                isMatch = false;
            }
        }

        if (isMatch) {
            var debugMsg = "getAppIdByName(" + ASIName + "," + ASIValue + "," + type + ") Returns " + apsArray[aps].getCapID().toString();
            aa.debug(aa.getServiceProviderCode() + " : " + aa.env.getValue("CurrentUserID"), debugMsg);

            ret.push(new Record(apsArray[aps].getCapID()));
        }
    }
    return ret;
}

Record.prototype.parseFieldName = function(fieldfullname) {
    var ret = {};

    if (fieldfullname.indexOf("::") > 0) {
        var parts = fieldfullname.split("::");
        if (parts.length != 3) {
            throw "invalid field full name";
        }

        // ret.TYPE = parts[0];
        // ret.TABLENAME = parts[1];
        // ret.NAME = parts[2];
    } else {
        // ret.TYPE = "";
        // ret.TABLENAME = "";
        // ret.NAME = fieldfullname;
    }

    return ret;
}

Record.prototype.getProxyClass = function(clazz) {
    return aa.proxyInvoker.newInstance(clazz).getOutput();

}
Record.prototype.getDao = function(className) {

    // var itemDaoClass = java.lang.Class.forName(className);
    // return com.accela.aa.util.ObjectFactory.getDAOObject(itemDaoClass)
}

function ASIT(tableName) {
    this.tableName = tableName;
    this.fields = [];
    this.modifyFieldValue = function(row, name, value) {
        var field = {};
        // field.row = row;
        // field.name = name;
        if (value == null) {
            value = "";
        }
        // field.value = value;
        this.fields.push(field);
    }
    this.getFieldValue = function(row, name) {
        var ret = null;
        for (var x in this.fields) {
            var f = this.fields[x];
            if (f.row == row && f.name.toLowerCase() == name.toLowerCase()) {
                ret = f.value + "";
                break;
            }
        }
        return ret;
    }
    this.hasField = function(row, name) {
        var ret = false;
        for (var x in this.fields) {
            var f = this.fields[x];
            if (f.row == row && f.name.toLowerCase() == name.toLowerCase()) {
                ret = true
                break;
            }
        }
        return ret;
    }
    this.getTableName = function() {
        return this.tableName;
    }
    this.isEmpty = function() {
        return this.fields.length == 0;
    }
}

/**
 * get localized message description of specific message key.
 *
 * @param {String}
 *            msgKey - message key to get related description
 * @returns {String} localized message description.
 */
Record.prototype.translate = function(msgKey) {
    return aa.messageResources.getLocalMessage(msgKey);
}

/**
 * get ASIT from session, before submitted to data base.
 *
 * @param {String}
 *            asitName - ASIT name.
 * @returns {Array} array of specific ASIT rows.
 */
Record.prototype.getASITableBefore = function(asitName) {
    var gm = aa.env.getValue("AppSpecificTableGroupModel");
    var gmItem = gm;
    if (gm != null && typeof gm.size != "undefined" && gm.size() > 0) {
        gmItem = gm.get(0)
    } else {
        gmItem = gm
    }

    if (null != gmItem && gmItem != "") {
        var ta = gmItem.getTablesMap().values();
        var tai = ta.iterator();
        while (tai.hasNext()) {
            var tsm = tai.next();
            if (tsm.rowIndex.isEmpty())
                continue;
            var tempObject = new Array;
            var tempArray = new Array;
            var tn = tsm.getTableName();
            var numrows = 0;
            if (!tsm.rowIndex.isEmpty()) {
                var tsmfldi = tsm.getTableField().iterator();
                var tsmcoli = tsm.getColumns().iterator();
                var numrows = 1;
                while (tsmfldi.hasNext()) {
                    if (!tsmcoli.hasNext()) {
                        var tsmcoli = tsm.getColumns().iterator();
                        tempArray.push(tempObject);
                        var tempObject = new Array;
                        numrows++
                    }
                    var tcol = tsmcoli.next();
                    var tval = tsmfldi.next();
                    var readOnly = "N";
                    var fieldInfo = new asiTableValObj(tcol.getColumnName(), tval, readOnly);
                    tempObject[tcol.getColumnName()] = fieldInfo
                }

                tempArray.push(tempObject);

                if (tn == asitName) {
                    return tempArray;
                } else {
                    return null;
                }
            }
        }
    }
}

/**
 * Write message to server logs.
 *
 * @param {String}
 *            msgLabel - message label.
 * @param {Object}
 *            [msgContent] - Message Content, By default it will call toString()
 *            of current object.
 * @param {Any}
 *            [logLevel] - not used, for future use.
 */
Record.prototype.logMsg = function(msgLabel, msgContent, logLevel) {

    if (msgContent == null || (typeof msgContent === "undefined")) {
        msgContent = this.toString();
    }

    aa.debug(msgLabel, msgContent);
}

/**
 *
 * @returns {String} the name of the updated ASIT, applicable only in ASIUB and ASIUA events
 */
Record.prototype.getApplicationSpecificInfoUpdatedTable = function() {

    var updatedTable = "";
    var gm = aa.env.getValue("AppSpecificTableGroupModel");

    var gmItem = gm;

    if (gm != null && typeof (gm).size != "undefined" && gm.size() > 0) {
        gmItem = gm.get(0);

    } else {
        gmItem = gm;

    }

    if (null != gmItem && gmItem != "") {
        var tables = gmItem.getTablesMap();
        if (tables != null && tables.size() > 0) {
            var ta = tables.values().toArray()[0];
            updatedTable = ta.getTableName();

        }

    }
    return updatedTable;

}

Record.prototype.getTaskASI = function(taskName, fieldName, defaultValue) {
    if (typeof defaultValue === "undefined") {
        defaultValue = "";
    }
    var task = aa.workflow.getTask(this.capId, taskName).getOutput();
    var processID = task.getProcessID();
    var stepNumber = task.getStepNumber();
    var valDef = aa.taskSpecificInfo.getTaskSpecifiInfoByDesc(this.capId, processID, stepNumber, fieldName).getOutput();

    if (valDef != null) {
        var val = valDef.getChecklistComment()
        if (val == null || val + "" == "") {
            val = defaultValue;
        }
    } else {
        val = defaultValue;
    }

    return val;
}

/**
 * return the number of status taken on a workflow task, matching the defined
 * parameters
 *
 * @param wfTask
 *            the task name
 * @param wfStatus
 *            the status value
 * @returns {Number} the history count of this status
 */
Record.prototype.getWorkflowTaskStatusHistoryCount = function(wfTask, wfStatus) {
    var Count = 0;
    var history = aa.workflow.getWorkflowHistory(this.capId, aa.util.newQueryFormat()).getOutput();
    for (var i = 0; i < history.length; i++) {
        if ((history[i].getTaskDescription() == wfTask || !wfTask) && history[i].getDisposition() == wfStatus) {
            Count++;
        }

    }
    return Count;
}

Record.prototype.getWorkflowTaskComment = function(task, status) {
    var wfObj = aa.workflow.getTasks(this.capId).getOutput();
    var wfTaskComment = "";
    for (var i in wfObj) {
        var fTask = wfObj[i];
        var taskDescription = fTask.getTaskDescription();
        var wfDisposition = fTask.getDisposition();
        var taskItem = fTask.getTaskItem();
        if (taskDescription == task) {
            if (wfDisposition == status) {
                var cmt = taskItem.getDispositionComment()
                if (cmt) {
                    wfTaskComment = cmt;
                }
            }
            break;
        }
    }
    return wfTaskComment;
}
Record.prototype.hasDocumentOfType = function(documentType) {
    var bret = false;
    var documentModels = aa.document.getDocumentListByEntity(this.capId, "CAP").getOutput().toArray();
    for (var i = 0; i < documentModels.length; i++) {
        if (documentModels[i].getDocCategory() == documentType) {
            bret = true;
            break;
        }
    }
    return bret;
}
Record.prototype.sendReportAsEmail = function(reportName, mailFrom, arrTo, reportParams, emailTemplate, emailParams) {
    logDebug("INSIDE SEND EMAIL");
    var report = aa.reportManager.getReportInfoModelByName(reportName);
    report = report.getOutput();
    if (!report) {
        throw "Report with name [" + reportName + "] does not exist";
    }
    report.setModule(this.getCap().getCapModel().getModuleName());
    report.setCapId(this.capId);
    report.setReportParameters(reportParams);

    var permit = aa.reportManager.hasPermission(reportName, aa.getAuditID());
    logDebug("USER run Report=" + aa.getAuditID())
    if (!permit.getOutput().booleanValue()) {
        logDebug("ERROR:USER " + aa.getAuditID() + " has no permission")
        throw "You dont have permission to run report [" + reportName + "]";
    }
    logDebug("User " + aa.getAuditID() + " has right to execute [" + reportName + "], executing report")
    var reportResult = aa.reportManager.getReportResult(report);
    if (!reportResult.getSuccess()) {
        throw reportResult.getErrorMessage();
    }
    logDebug("Report [" + reportName + "] executed")
    reportResult = reportResult.getOutput();
    report.getReportInfoModel().setIsFrom("EMSE");

    var savetodisk = aa.reportManager.storeReportToDisk(reportResult);
    if (!savetodisk.getSuccess()) {
        throw savetodisk.getErrorMessage();
    }
    var rFile = savetodisk.getOutput();

    if (!rFile) {

        throw "Could not save report to disk";
    }
    logDebug("Report [" + reportName + "] saved to [" + rFile + "]")
    var rFiles = [rFile]

    for (var k in arrTo) {
        var res = aa.document.sendEmailByTemplateName(mailFrom, arrTo[k], "", emailTemplate, emailParams, rFiles);
        if (!res.getSuccess()) {
            throw res.getErrorMessage();
        }
        logDebug("Report [" + reportName + "] send to " + arrTo[k])
    }

}
/**
 * Get Communication Helper.
 *
 * @returns {CommunicationHelper} - CommunicationHelper instance.
 */
Record.prototype.getCommunicationHelper = function() {
    return aa.proxyInvoker.newInstance("com.accela.aa.communication.CommunicationHelper").getOutput();
}

/**
 * delete record
 *
 * @param {CapIDModel} capId - cap id.
 */
Record.prototype.deleteRecord = function(capId) {
    aa.cap.removeRecord(capId);
}
Record.prototype.require = function(serviceName) {
    var type = eval("typeof " + serviceName);
    if (type == "undefined") {
        GLOBAL_EVAL(getScriptText("INCLUDE_" + serviceName));
    }
}

if (typeof logDebug === "undefined") {
    logDebug = function(dstr) {
        vLevel = 1
        if (typeof showDebug === "undefined") {
            showDebug = false;
        }
        if (typeof debug === "undefined") {
            debug = "";
        }
        if (typeof br === "undefined") {
            br = "<br/>";
        }
        if (arguments.length > 1)
            vLevel = arguments[1];
        if ((showDebug & vLevel) == vLevel || vLevel == 1)
            debug += dstr + br;
        if ((showDebug & vLevel) == vLevel)
            aa.debug(aa.getServiceProviderCode() + " : " + aa.env.getValue("CurrentUserID"), dstr);
    }
}
