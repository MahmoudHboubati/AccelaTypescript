declare interface IRecord {

    /**
     *
     * @param id
     */
    new (id: string): IRecord;

    /**
     * get the user id who created to record
     */
    getCreatedBy(): void;

    /**
     *
     */
    isComplete(): void;

    /**
     * set the user id who created to record
     * @param pubUserID
     */
    setCreatedBy(pubUserID: any): void;

    /**
     * this is a function to get custom id
     * @return
     */
    getCustomID(): /* !this.altId */ any;

    /**
     *
     * @return
     */
    getScheduledDate(): Date;

    /**
     *
     * @return
     */
    getCreationDate(): Date;

    /**
     *
     * @return
     */
    getCapID(): /* !this.capId */ any;

    /**
     * get contacts linked to current record.
     *
     * @returns {Array} - array of contact model.
     * @return
     */
    getContacts(): any;

    /**
     * get the ASIT attached to this record
     * @param tname
     * @param ignoreCache
     * @return
     */
    getASIT(tname: any, ignoreCache: boolean): any;

    /**
     *
     * @param condtionType
     * @param condtionname
     */
    addStdCondition(condtionType: any, condtionname: any): void;

    /**
     *
     * @param isVoidCapBalance
     * @return
     */
    voidFeesAndPayment(isVoidCapBalance: any): any;

    /**
     *
     * @return
     */
    getDocumentList(): any;

    /**
     * get ASI value by name and group
     * @param asiGroup
     * @param name
     * @param defaultValue
     * @return
     */
    getASI(asiGroup: any, name: any, defaultValue: string): string;

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
     * @param record
     * @param asitName
     * @param differentColNamesMap
     */
    copyAsitFromOtherRecord(record: any, asitName: any, differentColNamesMap: any): void;

    /**
     *
     * @param code
     * @param feeSchedule
     */
    getReferenecFee(code: any, feeSchedule: any): void;

    /**
     *
     * @param feeSchedule
     */
    getScheduleFees(feeSchedule: any): void;

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
     * @param fcode
     * @param fsched
     * @param fqty
     * @param fperiod
     * @param pDuplicate
     * @param fdesc
     * @param amount
     * @return
     */
    createOrUpdateFee(fcode: any, fsched: any, fqty: number, fperiod: string, pDuplicate: boolean, fdesc: any, amount: any): number;

    /**
     * make application editable
     *
     * @param [bCompleteWorkflow=true]
     * @param bCompleteWorkflow
     */
    sendBack(bCompleteWorkflow: any): void;

    /**
     * convert ASIT to array
     * @param asit
     * @return
     */
    asitToArray(asit: any): Array</* Record.prototype.getASIT.!ret.<i> */ any>;

    /**
     * convert script date to Date object
     * @param scriptDate
     * @return
     */
    toDate(scriptDate: any): Date;

    /**
     *
     * @param id
     */
    getInspection(id: any): void;

    /**
     * get last inspection on the record, null if empty
     */
    getLastInspection(): void;

    /**
     * delete inspection
     * @param inspectionModel
     */
    deleteInspection(inspectionModel: any): void;

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
     * @param row
     * @param differentColNamesMap
     * @return
     */
    toAsiTableValObj(row: any, differentColNamesMap: any): any;

    /**
     * construct array of AIST rows valid to be passed updateASIT.
     *
     * @param {Array}
     *            rows - each row in this array must be an array with the column
     *            name as property and column value as property value.
     * @returns {asiTableValObj[][]} - array of rows each row is an array of column
     *          name as property and asiTableValObj as property value.
     * @param rows
     * @return
     */
    toAsiTableValObjArr(rows: any): any;

    /**
     *
     * @param tableName
     */
    deleteASIT(tableName: any): void;

    /**
     *
     * @param tableName
     * @param dataSet
     */
    addASITRows(tableName: any, dataSet: any): void;

    /**
     * update ASIT with passed values.
     *
     * @param {string}
     *            tableName - ASIT name to be updated
     * @param {asiTableValObj[][]}
     *            dataSet
     * @param tableName
     * @param dataSet
     */
    updateASIT(tableName: any, dataSet: any): void;

    /**
     *
     * @param tableName
     * @param rowIndex
     * @param colName
     * @param newValue
     * @return
     */
    updateASITColumn(tableName: any, rowIndex: any, colName: any, newValue: any): number;

    /**
     *
     * @param tableName
     * @param dataSet
     */
    updateASITFromArray(tableName: any, dataSet: any): void;

    /**
     *
     * @param asit
     * @return
     */
    updateASITColumns(asit: /* Record.prototype.+ASIT */ any): number;

    /**
     *
     * @param inspectionGroup
     * @param checkListGroup
     * @param inspectionDate
     * @param autoAssign
     * @param units
     * @param inspector
     * @return
     */
    scheduleInspection(inspectionGroup: any, checkListGroup: any, inspectionDate: any, autoAssign: any, units: any, inspector: any): any;

    /**
     *
     */
    getCapStatus(): void;

    /**
     *
     */
    getCap(): void;

    /**
     *
     * @param stat
     * @param cmt
     */
    updateStatus(stat: any, cmt: any): void;

    /**
     *
     */
    getCurrentUserObj(): void;

    /**
     *
     * @param group
     * @param name
     * @param value
     */
    editASI(group: any, name: any, value: string): void;

    /**
     *
     */
    getAddressesCaps(): void;

    /**
     *
     * @param district
     * @return
     */
    updateDistrict(district: any): boolean;

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
     * @param pCapType
     * @param returnClass
     * @return
     */
    getChildren(pCapType: any, returnClass: any): any;

    /**
     *
     * @param recordType
     * @param capStatus
     * @param returnClass
     * @return
     */
    listAll(recordType: any, capStatus: any, returnClass: any): any;

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
     * @param pAppType
     * @param returnClass
     * @param relationshipType
     * @return
     */
    getParents(pAppType: any, returnClass: any, relationshipType: any): any;

    /**
     *
     * @param inspectionGroup
     * @param checklist
     */
    getInspectionTypeModel(inspectionGroup: any, checklist: any): void;

    /**
     *
     * @param name
     */
    getStandardChoices(name: any): void;

    /**
     *
     * @param sControl
     * @param sValue
     * @return
     */
    getLookupVal(sControl: any, sValue: any): string;

    /**
     * Record.prototype.updateTaskAndHandleDisposition = function(task, status) {
     *     updateTaskAndHandleDisposition(task, status, this.capId)
     * }
     */
    getPriority(): void;

    /**
     *
     * @param priority
     */
    setPriority(priority: any): void;

    // /**
    //  *
    //  */
    // interface AutoScheduleInspectionInfo {
    //
    //  /**
    //   *
    //   * @param inspModel
    //   * @param date
    //   * @return
    //   */
    //  new (inspModel : any, date : any): AutoScheduleInspectionInfo;
    // }


    /**
     *
     * @param task
     * @param desactivateCurrent
     */
    activateTask(task: any, desactivateCurrent: any): void;

    /**
     *
     * @return
     */
    getExpirationDate(): Date;

    /**
     *
     * @param date
     */
    setExpirationDate(date: any): void;

    /**
     * this function is called to delete a task and its sub process
     *
     * @param taskName
     *            is the task Description
     * @returns {Boolean}
     * @param taskName
     * @return
     */
    deleteTaskAndItsSubProcess(taskName: any): boolean;

    /**
     *
     */
    completeWorkflow(): void;

    /**
     *
     * @param taskStatus
     * @param comment
     */
    setCurrentWorkflowTaskStatus(taskStatus: any, comment: any): void;

    /**
     *
     * @return
     */
    hasActiveTask(): boolean;

    /**
     *
     */
    getCurrentWorkflowTask(): void;

    /**
     *
     * @param task
     * @return
     */
    isTaskActive(task: any): boolean;

    /**
     *
     */
    getCapType(): void;

    /**
     *
     * @param arrASIFields
     * @param sameLicense
     * @return
     */
    findSimilarRecords(arrASIFields: any, sameLicense: any): any;

    /**
     * get license linked to current record.
     *
     * @returns {LicenseProfessionalScriptModel}
     * @return
     */
    getLicense(): any;

    /**
     *
     */
    getLicenses(): void;

    /**
     * link specific record as parent to current record.
     *
     * @param {(string|CapIDModel)}
     *            parentAltId - custom id or cap id for the parent record
     * @param parentAltId
     */
    addParent(parentAltId: any): void;

    /**
     * link specific record as child to current record.
     *
     * @param {(string|CapIDModel)}
     *            childAltId - custom id or cap id for the child record
     * @param childAltId
     */
    addChild(childAltId: string): void;

    /**
     * add license to current record by number.
     *
     * @param {string}
     *            licenseNo license number get related model.
     *
     * @returns {LicenseScriptModel}
     * @param licenseNo
     * @return
     */
    addLicense(licenseNo: any): any;

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
     * @param srcGroupName
     * @param srcFieldName
     * @param destGroupName
     * @param destFieldName
     * @return
     */
    copyASIValue(srcGroupName: any, srcFieldName: any, destGroupName: any, destFieldName: any): any;

    /**
     *
     * @param rec
     * @param srcGroupName
     * @param srcFieldName
     * @param destGroupName
     * @param destFieldName
     */
    copyASIFromOtherRecord(rec: /* Record.prototype.+Record */ any, srcGroupName: any, srcFieldName: any, destGroupName: any, destFieldName: any): void;

    /**
     *
     */
    getApplicationName(): void;

    /**
     *
     * @param name
     */
    setApplicationName(name: any): void;

    /**
     * get license number linked to this record.
     *
     * @returns {String} license number linked to current record.
     * @return
     */
    getLicenseNumber(): string;

    /**
     * copy license from passed cap id to current record.
     *
     * @param licenseSrcCapId
     *            {CapIDModel|String} - Cap id or custom id to get license and link
     *            it to current record.
     * @returns {LicenseScriptModel} license model which copied to record.
     * @param licenseSrcCapId
     * @return
     */
    copyLicense(licenseSrcCapId: any): any;

    /**
     * copy address from passed cap id to current record.
     *
     * @param addressSrcCapId
     * @param {string|Record|CapIDModel}
     *            addressSrcCapId - custom id or Cap id object or record object to
     *            get address from.
     * @param addressSrcCapId
     */
    copyAddress(addressSrcCapId: any): void;

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
     * @param asitName
     * @param primaryColName
     */
    getAsitMap(asitName: any, primaryColName: any): void;

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
     * @param asitName
     * @param colName
     * @param skipEmptyValues
     * @return
     */
    getAsitColumList(asitName: any, colName: any, skipEmptyValues: boolean): any;

    /**
     *
     * @param reportName
     * @param parameters
     */
    getReportContent(reportName: any, parameters: any): void;

    /**
     * assign work flow task to specific user.
     *
     * @param {string}
     *            userId - user id to assign current task to him.
     * @param userId
     */
    assignCurrentWfTaskToUser(userId: any): void;

    /**
     * set cap class value.
     *
     * @param {string}
     *            capCalss - cap class to be set (ex. COMPLETE, EDITABLE, ...).
     * @param capCalss
     */
    setCapClass(capCalss: string): void;

    /**
     * copy contacts from specific record to current record.
     *
     * @param {Record}
     *            srcRecord - source record to copy contacts from it.
     * @param srcRecord
     */
    copyContacts(srcRecord: any): void;

    /**
     * this function returns in an array all the parcels linked to this record.
     */
    getRelatedParcels(): void;

    /**
     * @param attr :
     *            optional
     * @returns in case attr is not specified: HashMap of related parcels attributes
     *          with the parcel number as the key and attribute hash map as the
     *          value in case attr is specified: HashMap with the parcel number as
     *          the key and the value of the specified attribute as the value
     * @param attr
     */
    getRelatedParcelAttribute(attr: any): void;

    /**
     *
     * @param type
     * @param desc
     */
    createNew(type: any, desc: string): void;

    /**
     *
     * @param type
     * @param appName
     * @param altId
     */
    createNewWithAltID(type: any, appName: string, altId: any): void;

    /**
     *
     * @param licenseNbr
     * @param type
     * @return
     */
    getByLicense(licenseNbr: any, type: any): any;

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
     * @param ASIName
     * @param ASIValue
     * @param type
     * @return
     */
    getByAsi(ASIName: any, ASIValue: string, type: any): any;

    /**
     *
     * @param fieldfullname
     * @return
     */
    parseFieldName(fieldfullname: any): any;

    /**
     *
     * @param clazz
     */
    getProxyClass(clazz: any): void;

    /**
     *
     * @param className
     */
    getDao(className: string): void;

    /**
     * get localized message description of specific message key.
     *
     * @param {String}
     *            msgKey - message key to get related description
     * @returns {String} localized message description.
     * @param msgKey
     * @return
     */
    translate(msgKey: any): string;

    /**
     * get ASIT from session, before submitted to data base.
     *
     * @param {String}
     *            asitName - ASIT name.
     * @returns {Array} array of specific ASIT rows.
     * @param asitName
     * @return
     */
    getASITableBefore(asitName: any): any;

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
     * @param msgLabel
     * @param msgContent
     * @param logLevel
     */
    logMsg(msgLabel: any, msgContent: string, logLevel: any): void;

    /**
     * @returns {String} the name of the updated ASIT, applicable only in ASIUB and ASIUA events
     * @return
     */
    getApplicationSpecificInfoUpdatedTable(): string;

    /**
     *
     * @param taskName
     * @param fieldName
     * @param defaultValue
     * @return
     */
    getTaskASI(taskName: any, fieldName: any, defaultValue: string): string;

    /**
     * return the number of status taken on a workflow task, matching the defined
     * parameters
     *
     * @param wfTask
     *            the task name
     * @param wfStatus
     *            the status value
     * @returns {Number} the history count of this status
     * @param wfTask
     * @param wfStatus
     * @return
     */
    getWorkflowTaskStatusHistoryCount(wfTask: any, wfStatus: any): number;

    /**
     *
     * @param task
     * @param status
     * @return
     */
    getWorkflowTaskComment(task: any, status: any): string;

    /**
     *
     * @param documentType
     * @return
     */
    hasDocumentOfType(documentType: any): boolean;

    /**
     *
     * @param reportName
     * @param mailFrom
     * @param arrTo
     * @param reportParams
     * @param emailTemplate
     * @param emailParams
     */
    sendReportAsEmail(reportName: any, mailFrom: any, arrTo: any, reportParams: any, emailTemplate: any, emailParams: any): void;

    /**
     * Get Communication Helper.
     *
     * @returns {CommunicationHelper} - CommunicationHelper instance.
     * @return
     */
    getCommunicationHelper(): any;

    /**
     * delete record
     *
     * @param {CapIDModel} capId - cap id.
     * @param capId
     */
    deleteRecord(capId: any): void;

    /**
     *
     * @param serviceName
     */
    require(serviceName: any): void;

    // /**
    //  *
    //  */
    // export var capId : string;
    //
    // /**
    //  *
    //  */
    // export var altId : string;
}

/**
 *
 */
declare interface ASIT {

    /**
     *
     * @param tableName
     * @return
     */
    new (tableName: any): ASIT;
}


/**
 *
 */
declare namespace ASIT {

    /**
     *
     */
    export var fields: Array<any>;

    /**
     *
     * @param row
     * @param name
     * @param value
     */
    function modifyFieldValue(row: any, name: any, value: string): void;

    /**
     *
     * @param row
     * @param name
     * @return
     */
    function getFieldValue(row: number, name: any): string;

    /**
     *
     * @param row
     * @param name
     * @return
     */
    function hasField(row: number, name: any): boolean;

    /**
     *
     * @return
     */
    function getTableName(): /* !this.tableName */ any;

    /**
     *
     * @return
     */
    function isEmpty(): boolean;
}

/**
 *
 */
export declare var showDebug: boolean;

/**
 *
 */
export declare var debug: string;

/**
 *
 */
export declare var br: string;

/**
 *
 * @param dstr
 */
declare function logDebug(dstr: string): void;
