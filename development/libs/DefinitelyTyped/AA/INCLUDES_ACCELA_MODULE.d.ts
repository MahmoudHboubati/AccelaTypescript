/**
 * ------------------------------------------------------------------------------------------------------/
 * | Program : INCLUDES_ACCELA_FUNCTIONS.js
 * | Event   : N/A
 * |
 * | Usage   : Accela Inc. Developed Master Script Functions.  This file should not be modified.  For custom
 * 			includes make additions and overrides to the INCLUDES_CUSTOM script file.
 * |
 * | Notes   : For Application Submit Before see INCLUDES_ACCELA_FUNCTIONS_ASB, this file is a copy of INCLUDES_ACCELA_FUNCTIONS but uses Module
 * |
 * /------------------------------------------------------------------------------------------------------
 */

import {ITask} from './Task.d';

export declare var INCLUDE_VERSION: number;

export interface IAccelaFunctions {
    /**
     * Compressed Version
     * @param e
     * @return
     */
    activateTask(e: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    activeLicense(e: any): boolean;

    /**
     *
     * @return
     */
    activeTasksCheck(): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     * @param s
     */
    addAddressCondition(e: any, t: any, n: any, r: any, i: any, s: any): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     */
    addAddressStdCondition(e: any, t: any, n: any): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    addAdHocTask(e: any, t: any, n: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     */
    addAllFees(e: any, t: any, n: any, r: any): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     * @param s
     */
    addAppCondition(e: any, t: any, n: any, r: any, i: any, s: any): void;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    addASITable(e: string, t: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    addASITable4ACAPageFlow(e: any, t: any, n: any): any;

    /**
     *
     * @param e
     * @param t
     * @param n
     */
    addContactStdCondition(e: any, t: any, n: any): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     * @param s
     */
    addCustomFee(e: any, t: any, n: any, r: any, i: any, s: string): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     */
    addFee(e: any, t: any, n: any, r: number, i: string): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     * @param s
     * @param o
     * @param u
     * @param a
     */
    addFeeWithExtraData(e: any, t: any, n: any, r: any, i: any, s: any, o: any, u: any, a: any): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     */
    addGuideSheet(e: any, t: any, n: any): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     * @return
     */
    addLicenseCondition(e: any, t: any, n: any, r: any, i: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    addLicenseStdCondition(e: any, t: any, n: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    addLookup(e: any, t: any, n: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     */
    addParameter(e: any, t: string, n: string | boolean): void;

    /**
     *
     * @param e
     * @return
     */
    addParcelAndOwnerFromRefAddress(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     * @param s
     */
    addParcelCondition(e: any, t: any, n: any, r: any, i: any, s: any): void;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    addParcelDistrict(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    addParent(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    addPublicUserLPsToRecord(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     * @param s
     * @param o
     * @return
     */
    addrAddCondition(e: any, t: any, n: any, r: any, i: any, s: any, o: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    addReferenceContactByName(e: any, t: any, n: any): boolean;

    /**
     *
     * @return
     */
    addressExistsOnCap(): boolean;

    /**
     *
     * @param e
     * @param t
     */
    addStdCondition(e: any, t: any): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    addTask(e: any, t: any, n: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     * @param s
     * @param o
     * @return
     */
    addTimeAccountingRecord(e: any, t: any, n: any, r: any, i: any, s: any, o: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     * @param s
     * @param o
     * @param u
     * @param a
     * @return
     */
    addTimeAccountingRecordToWorkflow(e: any, t: any, n: any, r: any, i: any, s: any, o: any, u: any, a: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    addToASITable(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    allTasksComplete(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @return
     */
    appHasCondition(e: any, t: any, n: any, r: any): boolean;

    /**
     *
     * @return
     */
    applyPayments(): boolean;

    /**
     *
     * @param e
     * @return
     */
    appMatch(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    appNameIsUnique(e: any, t: any, n: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    assignCap(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    assignInspection(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    assignTask(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    associateRefContactAddressToRecordContact(e: any, t: any, n: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    autoAssignInspection(e: any): boolean;

    /**
     *
     * @param e
     */
    branch(e: any): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @return
     */
    branchTask(e: any, t: string, n: any, r: any): boolean;

    /**
     *
     * @param e
     * @param t
     */
    callWebService(e: any, t: any): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    capHasExpiredLicProf(e: any, t: any, n: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    capIdsFilterByFileDate(e: any, t: any, n: any): boolean;
    /**
     *
     */
    capIdsFilterByFileDate();

    /**
     *
     * @return
     */
    capIdsGetByAddr(): boolean;
    /**
     *
     */
    capIdsGetByAddr();

    /**
     *
     * @param e
     * @return
     */
    capIdsGetByParcel(e: any): boolean;
    /**
     *
     */
    capIdsGetByParcel();

    /**
     *
     * @param e
     */
    capSet(e: any): void;

    /**
     *
     * @param e
     * @return
     */
    checkCapForLicensedProfessionalType(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    checkInspectionResult(e: any, t: any): boolean;

    /**
     *
     * @return
     */
    checkRequiredASIFields(): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    childGetByCapType(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    closeCap(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    closeSubWorkflow(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @return
     */
    closeTask(e: any, t: string, n: any, r: any): boolean;

    /**
     *
     * @param e
     */
    comment(e: string | boolean): void;

    /**
     *
     * @param e
     * @return
     */
    comparePeopleGeneric(e: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    comparePeopleStandard(e: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    completeCAP(e: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    contactAddFromUser(e: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    contactSetPrimary(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    contactSetRelation(e: any, t: any): boolean;

    /**
     *
     * @param e
     */
    convertContactAddressModelArr(e: any): void;

    /**
     *
     * @param e
     * @return
     */
    convertDate(e: string): string;

    /**
     *
     * @param e
     * @return
     */
    convertStringToPhone(e: any): string;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    copyAddresses(e: any, t: any): boolean;
    /**
     *
     */
    copyAddresses();

    /**
     *
     * @param e
     */
    copyAppSpecific(e: any): void;

    /**
     *
     * @param e
     */
    copyAppSpecific4ACA(e: any): void;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    copyASIFields(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @param t
     */
    copyASITables(e: any, t: any): void;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    copyCalcVal(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    copyConditions(e: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    copyConditionsFromParcel(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    copyContacts(e: any, t: any): boolean;
    /**
     *
     */
    copyContacts();

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    copyContactsByType(e: any, t: any, n: any): boolean;
    /**
     *
     */
    copyContactsByType();

    /**
     *
     * @param e
     * @param t
     */
    copyEducation(e: any, t: any): void;

    /**
     *
     * @param e
     * @param t
     */
    copyFees(e: any, t: any): void;

    /**
     *
     * @param e
     * @param t
     */
    copyLicensedProf(e: any, t: any): void;

    /**
     *
     * @param e
     * @param t
     */
    copyOwner(e: any, t: any): void;


    /**
     *
     * @return
     */
    copyParcelGisObjects(): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    copyParcels(e: any, t: any): boolean;
    /**
     *
     */
    copyParcels();

    /**
     *
     * @param e
     * @param t
     * @return
     */
    copySchedInspections(e: any, t: any): boolean;
    /**
     *
     */
    copySchedInspections();

    /**
     *
     * @param e
     * @return
     */
    countActiveTasks(e: any): boolean;
    /**
     *
     */
    countActiveTasks();

    /**
     *
     * @return
     */
    countIdenticalInspections(): number;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    createCap(e: any, t: any): string;
    /**
     *
     */
    createCap();

    /**
     *
     * @param e
     */
    createCapComment(e: any): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     */
    createChild(e: any, t: any, n: any, r: any, i: any): void;

    /**
     *
     * @param e
     * @param t
     */
    createLicense(e: any, t: any): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     */
    createParent(e: any, t: any, n: any, r: string, i: any): void;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    createPendingInspection(e: any, t: any): boolean;

    /**
     *
     * @return
     */
    createPendingInspFromReqd(): boolean;

    /**
     *
     * @return
     */
    createPublicUserFromContact(): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     */
    createRecord(e: any, t: any, n: any, r: any, i: any): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    createRefContactAddressFromAddress(e: any, t: any, n: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     * @param s
     */
    createRefContactsFromCapContactsAndLink(e: any, t: any, n: any, r: any, i: any, s: any): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    createRefLicProf(e: any, t: any, n: any): boolean;

    /**
     *
     * @return
     */
    createRefLicProfFromLicProf(): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     */
    createRefLP4Lookup(e: any, t: any, n: any, r: any): void;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    dateAdd(e: string, t: number): string;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    dateAddMonths(e: any, t: number): string;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    dateDiff(e: any, t: any): number;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @return
     */
    dateFormatted(e: any, t: any, n: any, r: string): string;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    dateNextOccur(e: any, t: any, n: any): string;

    /**
     *
     * @param e
     * @return
     */
    deactivateActiveTasks(e: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    deactivateTask(e: any): boolean;

    /**
     *
     * @param e
     */
    decode64(e: any): void;

    /**
     *
     * @param e
     */
    deleteLicensedProfessional(e: any): void;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    deleteTask(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    describe(e: any): string;

    /**
     *
     * @param e
     * @param t
     * @param n
     */
    docWrite(e: string, t: boolean, n: number): void;

    /**
     *
     */
    doScriptActions(): void;

    /**
     *
     * @param stdChoiceEntry
     * @param doExecution
     * @param docIndent
     */
    doStandardChoiceActions(stdChoiceEntry: any, doExecution: boolean, docIndent: number): void;

    /**
     *
     * @param e
     * @return
     */
    editAppName(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    editAppSpecific(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @param t
     */
    editAppSpecific4ACA(e: string, t: any): void;

    /**
     *
     * @param e
     * @return
     */
    editBuildingCount(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @return
     */
    editCapConditionStatus(e: any, t: any, n: any, r: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    days_between(e: any, t: any): number;

    /**
     *
     * @param e
     * @param t
     * @param n
     */
    editCapContactAttribute(e: any, t: any, n: any): void;

    /**
     *
     * @param e
     * @return
     */
    editChannelReported(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     */
    editContactType(e: any, t: any): void;

    /**
     *
     * @param e
     * @return
     */
    editCreatedBy(e: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    editFirstIssuedDate(e: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    editHouseCount(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    editInspectionRequiredFlag(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    editLookup(e: any, t: any, n: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    editPriority(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    editRefLicProfAttribute(e: string, t: string, n: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    editReportedChannel(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @return
     */
    editTaskACAVisibility(e: any, t: any, n: any, r: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    editTaskComment(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    editTaskDueDate(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    editTaskSpecific(e: any, t: any, n: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @return
     */
    email(e: any, t: any, n: any, r: any): boolean;

    /**
     *
     * @param e
     * @param t
     */
    emailContact(e: any, t: any): void;

    /**
     *
     * @param e
     * @return
     */
    encode64(e: any): string;

    /**
     *
     */
    endBranch(): void;

    /**
     *
     * @param tableArray
     */
    executeASITable(tableArray: any): void;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    exists(e: any, t: Array<any> | boolean): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     * @return
     */
    externalLP_CA(e: string, t: any, n: any, r: boolean, i: any): boolean;
    /**
     *
     */
    externalLP_CA();

    /**
     *
     * @param e
     * @return
     */
    feeAmountExcept(e: any): boolean;
    /**
     *
     */
    feeAmountExcept();

    /**
     *
     * @param e
     * @return
     */
    feeBalance(e: any): boolean;
    /**
     *
     */
    feeBalance();

    /**
     *
     * @param e
     * @param t
     * @return
     */
    feeBalanceFromDate(e: any, t: any): boolean;
    /**
     *
     */
    feeBalanceFromDate();

    /**
     *
     * @param e
     * @param t
     * @return
     */
    feeCopyByDateRange(e: any, t: any): boolean;
    /**
     *
     */
    feeCopyByDateRange();

    /**
     *
     * @param e
     * @return
     */
    feeExists(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    feeGetTotByDateRange(e: any, t: any): boolean;
    /**
     *
     */
    feeGetTotByDateRange();

    /**
     *
     * @param e
     * @return
     */
    feeQty(e: any): boolean;
    /**
     *
     */
    feeQty();

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @return
     */
    generateReport(e: any, t: any, n: any, r: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @return
     */
    generateReport4Workflow(e: any, t: any, n: any, r: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    genericTemplateObject(e: any): /* !this */ any;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    getACADocDownloadParam4Notification(e: any, t: any, n: any): any;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    getACADocumentDownloadUrl(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    getACARecordParam4Notification(e: any, t: any): any;

    /**
     *
     * @param e
     * @return
     */
    getACARecordURL(e: any): string;

    /**
     *
     * @return
     */
    getACAUrl(): string;

    /**
     *
     * @param e
     * @return
     */
    getAddressCountyByAddressType(e: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    getAddressLineByAddressType(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     * @return
     */
    getAppConditions(e: any, t: any, n: any, r: any, i: any): any;

    /**
     *
     * @param e
     * @param t
     * @param n
     */
    getAppIdByASI(e: any, t: any, n: any): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     */
    getAppIdByName(e: any, t: any, n: any): void;

    /**
     *
     * @param e
     */
    getApplication(e: any): void;

    /**
     *
     * @param e
     * @return
     */
    getAppSpecific(e: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    getCapByAddress(e: any): boolean;

    /**
     *
     */
    getCapId(): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     * @param s
     * @return
     */
    getCapsWithConditionsRelatedByRefContact(e: any, t: any, n: any, r: any, i: any, s: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    getChildren(e: string, t: any): any;

    /**
     *
     * @param e
     * @return
     */
    getChildTasks(e: any): any;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @return
     */
    getCAPConditions(e: any, t: any, n: any, r: any): any;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @return
     */
    getAddressConditions(e: any, t: any, n: any, r: any): any;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @return
     */
    getParcelConditions(e: any, t: any, n: any, r: any): any;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @return
     */
    getLicenseConditions(e: any, t: any, n: any, r: any): any;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @return
     */
    getContactConditions(e: any, t: any, n: any, r: any): any;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @return
     */
    getConditions(e: any, t: any, n: any, r: any): Array<any>;

    /**
     *
     */
    condMatchObj(): void;

    /**
     *
     * @return
     */
    getContactArray(): any;

    /**
     *
     * @return
     */
    getContactArrayBefore(): any;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    getContactByType(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    getContactObj(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    getContactObjsBySeqNbr(e: any, t: any): any;

    /**
     *
     * @param e
     * @return
     */
    getContactObjs(e: any): any;

    /**
     *
     * @param e
     * @return
     */
    getContactObjsByCap(e: any): any;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    getContactParams4Notification(e: any, t: any): any;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    getCSLBInfo(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    getDateDiff(e: any): number;

    /**
     *
     * @param e
     */
    getDepartmentName(e: any): void;

    /**
     *
     * @return
     */
    getDocumentList(): any;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    getGISBufferInfo(e: any, t: any, n: any): boolean;
    /**
     *
     */
    getGISBufferInfo();

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    getGISInfo(e: any, t: any, n: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    getGISInfoArray(e: any, t: any, n: any): boolean;
    /**
     *
     */
    getGISInfoArray();

    /**
     *
     * @param e
     * @return
     */
    getGuideSheetObjects(e: any): any;

    /**
     *
     * @param e
     * @return
     */
    getInspector(e: any): boolean;

    /**
     *
     * @param e
     */
    getLastInspector(e: any): void;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    compareInspDateDesc(e: any, t: any): boolean;

    /**
     *
     * @param e
     */
    getLastScheduledInspector(e: any): void;

    /**
     *
     * @param e
     */
    getLicenseProfessional(e: any): void;

    /**
     *
     * @param e
     * @param t
     */
    getNode(e: any, t: string): void;

    /**
     *
     * @return
     */
    getParent(): boolean;

    /**
     *
     * @param e
     * @return
     */
    getParentByCapId(e: any): boolean;

    /**
     *
     */
    getParentCapID4Renewal(): void;

    /**
     *
     * @param e
     * @return
     */
    getParentLicenseCapID(e: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    getParents(e: any): Array<any>;

    /**
     *
     * @param e
     */
    getPartialCapID(e: any): void;

    /**
     *
     * @param e
     */
    getPeople(e: any): void;

    /**
     *
     * @param e
     * @return
     */
    getPrimaryAddressLineParam4Notification(e: any): any;

    /**
     *
     * @param e
     * @return
     */
    getPrimaryOwnerParams4Notification(e: any): any;

    /**
     *
     * @param e
     * @param t
     */
    getProp(e: any, t: any): void;

    /**
     *
     * @param e
     * @return
     */
    getRecordParams4Notification(e: any): any;

    /**
     *
     * @param e
     * @return
     */
    getRefLicenseProf(e: string): boolean;

    /**
     *
     * @param e
     * @return
     */
    getRelatedCapsByAddress(e: any): boolean;
    /**
     *
     */
    getRelatedCapsByAddress();

    /**
     *
     * @param e
     * @return
     */
    getRelatedCapsByParcel(e: any): boolean;
    /**
     *
     */
    getRelatedCapsByParcel();

    /**
     *
     * @param e
     */
    getRenewalCapByParentCapIDForReview(e: any): void;

    /**
     *
     * @return
     */
    getReportedChannel(): boolean;
    /**
     *
     */
    getReportedChannel();

    /**
     *
     * @param e
     * @param t
     * @return
     */
    getRootNode(e: any, t: number): any;

    /**
     *
     * @param e
     * @return
     */
    getRoots(e: any): any;

    /**
     *
     * @param e
     * @return
     */
    getScheduledInspId(e: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    getScriptAction(e: any): any;

    /**
     *
     * @param e
     * @return
     */
    getScriptAction_v1_6(e: any): any;

    /**
     *
     * @param e
     * @return
     */
    getScriptText(e: string): string;

    /**
     *
     * @return
     */
    getShortNotes(): boolean;
    /**
     *
     */
    getShortNotes();

    /**
     *
     * @param e
     * @return
     */
    getTaskDueDate(e: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    getTaskStatusForEmail(e: any): boolean;
    /**
     *
     */
    getTaskStatusForEmail();

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     * @param s
     * @return
     */
    getURLToNewRecord(e: any, t: any, n: any, r: any, i: any, s: any): string;
    /**
     *
     */
    getURLToNewRecord();

    /**
     *
     * @return
     */
    getUserEmail(): boolean;

    /**
     *
     * @return
     */
    getUserFullName(): string;
    /**
     *
     */
    getUserFullName();

    /**
     *
     * @param e
     * @param t
     */
    guideSheetObject(e: any, t: any): void;


    /**
     *
     * @param e
     * @param t
     */
    handleError(e: Error, t: string): void;

    /**
     *
     * @param e
     * @return
     */
    hasPrimaryAddressInCap(e: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    xmlEscapeXMLToHTML(e: any): any;

    /**
     *
     * @param s
     */
    include(s: string): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    insertSubProcess(e: any, t: any, n: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    insertTask(e: any, t: any, n: any): boolean;

    /**
     *
     * @return
     */
    inspCancelAll(): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    invoiceFee(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    isBlank(e: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    isEmpty(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    isSameNode(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    isMatchPeople(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    isReadyRenew(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    isRenewProcess(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    isScheduled(e: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    isTaskActive(e: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    isTaskComplete(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    isTaskStatus(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    jsDateToASIDate(e: any): string;

    /**
     *
     * @param e
     * @return
     */
    jsDateToMMDDYYYY(e: Date | string): string;

    /**
     *
     * @param e
     * @param t
     */
    licEditExpInfo(e: any, t: any): void;

    /**
     *
     * @param e
     * @return
     */
    licenseObject(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    licenseProfObject(e: any, t: string): /* !this */ any;

    /**
     *
     * @return
     */
    linkPublicUserToContact(): boolean;

    /**
     *
     * @param e
     */
    loadAddressAttributes(e: any): void;

    /**
     *
     * @param e
     * @return
     */
    loadAddressAttributes4ACA(e: any): boolean;

    /**
     *
     * @param e
     */
    loadAppSpecific(e: any): void;

    /**
     *
     * @param e
     */
    loadAppSpecific4ACA(e: any): void;

    /**
     *
     * @param e
     * @param t
     */
    loadAppSpecific4Contact(e: any, t: any): void;

    /**
     *
     * @param e
     * @return
     */
    loadASITable(e: any): boolean;
    /**
     *
     */
    loadASITable();

    /**
     *
     */
    loadASITables(): void;

    /**
     *
     */
    loadASITables4ACA(): void;

    /**
     *
     */
    loadASITablesBefore(): void;

    /**
     *
     * @return
     */
    loadFees(): boolean;

    /**
     *
     */
    loadFees();

    /**
     *
     * @param e
     * @return
     */
    loadGuideSheetItems(e: any): any;

    /**
     *
     * @param e
     */
    loadParcelAttributes(e: any): void;

    /**
     *
     * @param e
     * @return
     */
    loadTasks(capId: any): [ITask];
    loadTasks(alternateID: string): [ITask];

    /**
     *
     * @param e
     * @return
     */
    loadTaskSpecific(e: any): boolean;

    /**
     *
     * @param e
     */
    logDebug(e: string | boolean): void;

    /**
     *
     * @param e
     */
    logGlobals(e: any): void;

    /**
     *
     * @param e
     */
    logMessage(e: string | boolean): void;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    lookup(e: string, t: string): string;

    /**
     *
     * @param e
     * @param t
     */
    lookupDateRange(e: any, t: any): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    lookupFeesByValuation(e: any, t: any, n: any): string;
    /**
     *
     */
    lookupFeesByValuation();

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    lookupFeesByValuationSlidingScale(e: any, t: any, n: any): string;
    /**
     *
     */
    lookupFeesByValuationSlidingScale();

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @return
     */
    loopTask(e: any, t: string, n: any, r: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    matches(e: string, t: string): boolean;

    /**
     *
     * @param e
     * @return
     */
    nextWorkDay(e: any): string;

    /**
     *
     * @param e
     */
    openUrlInNewWindow(e: any): void;

    /**
     *
     * @param e
     */
    pairObj(e: any): void;

    /**
     *
     * @param e
     * @return
     */
    parcelConditionExists(e: any): boolean;

    /**
     *
     * @return
     */
    parcelExistsOnCap(): boolean;

    /**
     *
     * @param e
     * @return
     */
    paymentByTrustAccount(e: any): boolean;

    /**
     *
     * @return
     */
    paymentGetNotAppliedTot(): number;
    /**
     *
     */
    paymentGetNotAppliedTot();

    /**
     *
     * @return
     */
    prepareRenewal(): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    proximity(e: any, t: any, n: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     * @param s
     * @return
     */
    proximityToAttribute(e: any, t: any, n: any, r: any, i: any, s: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    refLicProfGetAttribute(e: any, t: any): string;
    /**
     *
     */
    refLicProfGetAttribute();

    /**
     *
     * @param e
     * @param t
     * @return
     */
    refLicProfGetDate(e: any, t: any): string;
    /**
     *
     */
    refLicProfGetDate();

    /**
     *
     * @param e
     */
    removeAllFees(e: any): void;

    /**
     *
     * @param e
     * @return
     */
    removeASITable(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    removeCapCondition(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @param t
     */
    removeFee(e: any, t: any): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    removeParcelCondition(e: any, t: any, n: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    removeRefContactAddressFromRecordContact(e: any, t: any, n: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    removeTask(e: any, t: any): boolean;

    /**
     *
     * @param m
     * @return
     */
    replaceMessageTokens(m: string): string;

    /**
     *
     * @param e
     * @param t
     * @param n
     */
    replaceNode(e: any, t: any, n: any): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     */
    resultInspection(e: any, t: any, n: any, r: any): void;

    /**
     *
     * @param e
     * @param t
     */
    runEvent(e: any, t: any): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     * @param s
     * @param o
     * @param u
     * @return
     */
    runReport4Email(e: any, t: any, n: any, r: any, i: any, s: any, o: any, u: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     * @param s
     * @param o
     */
    runReport4EmailOrPrint(e: any, t: any, n: any, r: any, i: any, s: any, o: any): void;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    runReportAttach(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     */
    scheduleInspect(e: any, t: any, n: any): void;

    /**
     *
     * @param e
     * @param t
     */
    scheduleInspectDate(e: any, t: any): void;

    /**
     *
     * @param e
     * @param t
     */
    scheduleInspection(e: any, t: any): void;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    searchProject(e: any, t: any): any;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     * @param s
     * @return
     */
    sendNotification(e: any, t: any, n: string, r: string, i: any, s: any): boolean;

    /**
     *
     * @param e
     */
    setContactTypeFlagByType(e: any): void;

    /**
     *
     * @param e
     */
    setIVR(e: any): void;

    /**
     *
     * @param e
     * @return
     */
    setLicExpirationDate(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    setTask(e: any, t: any, n: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    stripNN(e: any): string;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    taskCloseAllExcept(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    taskStatus(e: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    taskStatusDate(e: any): boolean;
    /**
     *
     */
    taskStatusDate();

    /**
     *
     * @param e
     * @return
     */
    token(e: string): string;

    /**
     *
     * @param e
     * @param t
     */
    transferFeesAndPayments(e: any, t: any): void;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    transferFunds(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    transferReceiptAndApply(e: any, t: any): boolean;
    /**
     *
     */
    transferReceiptAndApply();

    /**
     *
     * @param e
     * @param t
     */
    updateAppStatus(e: any, t: string): void;

    /**
     *
     * @param e
     * @return
     */
    updateEnfOfficer(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     * @param s
     * @param o
     */
    updateFee(e: any, t: any, n: any, r: any, i: any, s: string, o: any): void;

    /**
     *
     * @param e
     * @param t
     */
    updateFeeItemInvoiceFlag(e: any, t: string): void;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @param i
     * @param s
     * @param o
     * @return
     */
    updateGuidesheetASIField(e: any, t: any, n: any, r: any, i: any, s: any, o: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    updateGuidesheetID(e: any, t: any, n: any): boolean;

    /**
     *
     */
    updateRefParcelToCap(): void;

    /**
     *
     * @param e
     * @return
     */
    updateShortNotes(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @return
     */
    updateTask(e: any, t: string, n: any, r: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    updateTaskAssignedDate(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    updateTaskDepartment(e: any, t: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    updateWorkDesc(e: any): boolean;

    /**
     *
     * @return
     */
    validateGisObjects(): boolean;

    /**
     *
     */
    verhoeff(): void;

    /**
     *
     * @param e
     * @return
     */
    workDescGet(e: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    zeroPad(e: any, t: any): string;

    /**
     *
     * @param e
     */
    contactObj(e: any): void;

}
