/**
 * ------------------------------------------------------------------------------------------------------/
 * | Program : INCLUDES_ACCELA_FUNCTIONS.js
 * | Event   : N/A
 * |
 * | Usage   : Accela Inc. Developed Master Script Functions.  This file should not be modified.  For custom
 * 			includes make additions and overrides to the INCLUDES_CUSTOM script file.
 * |
 * | Notes   : For Application Submit Before see INCLUDES_ACCELA_FUNCTIONS_ASB
 * |
 * /------------------------------------------------------------------------------------------------------
 */
export declare var INCLUDE_VERSION : number;

/**
 * Compressed Version
 * @param e
 * @return
 */
declare function activateTask(e : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function activeLicense(e : any): boolean;

/**
 *
 * @return
 */
declare function activeTasksCheck(): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @param i
 * @param s
 */
declare function addAddressCondition(e : any, t : any, n : any, r : any, i : any, s : any): void;

/**
 *
 * @param e
 * @param t
 * @param n
 */
declare function addAddressStdCondition(e : any, t : any, n : any): void;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function addAdHocTask(e : any, t : any, n : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 */
declare function addAllFees(e : any, t : any, n : any, r : any): void;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @param i
 * @param s
 */
declare function addAppCondition(e : any, t : any, n : any, r : any, i : any, s : any): void;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function addASITable(e : string, t : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function addASITable4ACAPageFlow(e : any, t : any, n : any): any;

/**
 *
 * @param e
 * @param t
 * @param n
 */
declare function addContactStdCondition(e : any, t : any, n : any): void;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @param i
 * @param s
 */
declare function addCustomFee(e : any, t : any, n : any, r : any, i : any, s : string): void;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @param i
 */
declare function addFee(e : any, t : any, n : any, r : number, i : string): void;

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
declare function addFeeWithExtraData(e : any, t : any, n : any, r : any, i : any, s : any, o : any, u : any, a : any): void;

/**
 *
 * @param e
 * @param t
 * @param n
 */
declare function addGuideSheet(e : any, t : any, n : any): void;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @param i
 * @return
 */
declare function addLicenseCondition(e : any, t : any, n : any, r : any, i : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function addLicenseStdCondition(e : any, t : any, n : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function addLookup(e : any, t : any, n : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 */
declare function addParameter(e : any, t : string, n : string | boolean): void;

/**
 *
 * @param e
 * @return
 */
declare function addParcelAndOwnerFromRefAddress(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @param i
 * @param s
 */
declare function addParcelCondition(e : any, t : any, n : any, r : any, i : any, s : any): void;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function addParcelDistrict(e : any, t : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function addParent(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function addPublicUserLPsToRecord(e : any, t : any): boolean;

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
declare function addrAddCondition(e : any, t : any, n : any, r : any, i : any, s : any, o : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function addReferenceContactByName(e : any, t : any, n : any): boolean;

/**
 *
 * @return
 */
declare function addressExistsOnCap(): boolean;

/**
 *
 * @param e
 * @param t
 */
declare function addStdCondition(e : any, t : any): void;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function addTask(e : any, t : any, n : any): boolean;

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
declare function addTimeAccountingRecord(e : any, t : any, n : any, r : any, i : any, s : any, o : any): boolean;

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
declare function addTimeAccountingRecordToWorkflow(e : any, t : any, n : any, r : any, i : any, s : any, o : any, u : any, a : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function addToASITable(e : any, t : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function allTasksComplete(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @return
 */
declare function appHasCondition(e : any, t : any, n : any, r : any): boolean;

/**
 *
 * @return
 */
declare function applyPayments(): boolean;

/**
 *
 * @param e
 * @return
 */
declare function appMatch(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function appNameIsUnique(e : any, t : any, n : any): boolean;

/**
 *
 */
declare interface asiTableValObj {

	/**
	 *
	 * @param e
	 * @param t
	 * @param n
	 */
	new (e : any, t : any, n : string);

	/**
	 *
	 */
	readOnly : string;

	/**
	 *
	 */
	hasValue : boolean;
}

/**
 *
 * @param e
 * @return
 */
declare function assignCap(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function assignInspection(e : any, t : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function assignTask(e : any, t : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function associateRefContactAddressToRecordContact(e : any, t : any, n : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function autoAssignInspection(e : any): boolean;

/**
 *
 * @param e
 */
declare function branch(e : any): void;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @return
 */
declare function branchTask(e : any, t : string, n : any, r : any): boolean;

/**
 *
 * @param e
 * @param t
 */
declare function callWebService(e : any, t : any): void;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function capHasExpiredLicProf(e : any, t : any, n : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function capIdsFilterByFileDate(e : any, t : any, n : any): boolean;
/**
 *
 */
declare function capIdsFilterByFileDate();

/**
 *
 * @return
 */
declare function capIdsGetByAddr(): boolean;
/**
 *
 */
declare function capIdsGetByAddr();

/**
 *
 * @param e
 * @return
 */
declare function capIdsGetByParcel(e : any): boolean;
/**
 *
 */
declare function capIdsGetByParcel();

/**
 *
 * @param e
 */
declare function capSet(e : any): void;

/**
 *
 * @param e
 * @return
 */
declare function checkCapForLicensedProfessionalType(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function checkInspectionResult(e : any, t : any): boolean;

/**
 *
 * @return
 */
declare function checkRequiredASIFields(): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function childGetByCapType(e : any, t : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function closeCap(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function closeSubWorkflow(e : any, t : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @return
 */
declare function closeTask(e : any, t : string, n : any, r : any): boolean;

/**
 *
 * @param e
 */
declare function comment(e : string | boolean): void;

/**
 *
 * @param e
 * @return
 */
declare function comparePeopleGeneric(e : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function comparePeopleStandard(e : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function completeCAP(e : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function contactAddFromUser(e : any): boolean;

/**
 *
 * @param e
 */
declare function contactObj(e : any): void;

/**
 *
 */
declare namespace contactObj{

	/**
	 *
	 */
	export var asi : Array<any>;

	/**
	 *
	 */
	export var validAttrs : boolean;

	/**
	 *
	 * @return
	 */
	function toString(): string;

	/**
	 *
	 * @param e
	 * @return
	 */
	function getEmailTemplateParams(e : any): any;

	/**
	 *
	 * @param e
	 * @return
	 */
	function replace(e : any): boolean;

	/**
	 *
	 * @param e
	 * @return
	 */
	function equals(e : any): boolean;

	/**
	 *
	 */
	function saveBase(): void;

	/**
	 *
	 */
	function save(): void;

	/**
	 *
	 * @param e
	 */
	function getAttribute(e : any): void;

	/**
	 *
	 * @param e
	 * @param t
	 * @return
	 */
	function setAttribute(e : any, t : any): boolean;

	/**
	 *
	 */
	function remove(): void;

	/**
	 *
	 * @return
	 */
	function isSingleAddressPerType(): boolean;

	/**
	 *
	 * @return
	 */
	function getAddressTypeCounts(): any;

	/**
	 *
	 * @return
	 */
	function createPublicUser(): boolean;

	/**
	 *
	 * @return
	 */
	function getCaps(): any;

	/**
	 *
	 * @return
	 */
	function getRelatedContactObjs(): any;

	/**
	 *
	 * @param e
	 * @param t
	 * @param n
	 * @param r
	 * @return
	 */
	function createRefLicProf(e : any, t : any, n : any, r : any): boolean;

	/**
	 *
	 * @return
	 */
	function getAKA(): boolean;

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
	function addAKA(e : any, t : any, n : any, r : any, i : any, s : any): boolean;

	/**
	 *
	 * @param e
	 * @param t
	 * @param n
	 * @return
	 */
	function removeAKA(e : any, t : any, n : any): boolean;

	/**
	 *
	 * @return
	 */
	function hasPublicUser(): boolean;

	/**
	 *
	 * @param e
	 * @return
	 */
	function linkToPublicUser(e : any): boolean;

	/**
	 *
	 */
	function sendCreateAndLinkNotification(): void;

	/**
	 *
	 * @return
	 */
	function getRelatedRefContacts(): any;
}

/**
 *
 * @param e
 * @return
 */
declare function contactSetPrimary(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function contactSetRelation(e : any, t : any): boolean;

/**
 *
 * @param e
 */
declare function convertContactAddressModelArr(e : any): void;

/**
 *
 * @param e
 * @return
 */
declare function convertDate(e : string): string;

/**
 *
 * @param e
 * @return
 */
declare function convertStringToPhone(e : any): string;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function copyAddresses(e : any, t : any): boolean;
/**
 *
 */
declare function copyAddresses();

/**
 *
 * @param e
 */
declare function copyAppSpecific(e : any): void;

/**
 *
 * @param e
 */
declare function copyAppSpecific4ACA(e : any): void;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function copyASIFields(e : any, t : any): boolean;

/**
 *
 * @param e
 * @param t
 */
declare function copyASITables(e : any, t : any): void;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function copyCalcVal(e : any, t : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function copyConditions(e : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function copyConditionsFromParcel(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function copyContacts(e : any, t : any): boolean;
/**
 *
 */
declare function copyContacts();

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function copyContactsByType(e : any, t : any, n : any): boolean;
/**
 *
 */
declare function copyContactsByType();

/**
 *
 * @param e
 * @param t
 */
declare function copyEducation(e : any, t : any): void;

/**
 *
 * @param e
 * @param t
 */
declare function copyFees(e : any, t : any): void;

/**
 *
 * @param e
 * @param t
 */
declare function copyLicensedProf(e : any, t : any): void;

/**
 *
 * @param e
 * @param t
 */
declare function copyOwner(e : any, t : any): void;

/**
 *
 */
declare interface GetOwnersByParcel {

	/**
	 *
	 * @return
	 */
	new (): GetOwnersByParcel;
}


/**
 *
 * @return
 */
declare function copyParcelGisObjects(): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function copyParcels(e : any, t : any): boolean;
/**
 *
 */
declare function copyParcels();

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function copySchedInspections(e : any, t : any): boolean;
/**
 *
 */
declare function copySchedInspections();

/**
 *
 * @param e
 * @return
 */
declare function countActiveTasks(e : any): boolean;
/**
 *
 */
declare function countActiveTasks();

/**
 *
 * @return
 */
declare function countIdenticalInspections(): number;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function createCap(e : any, t : any): string;
/**
 *
 */
declare function createCap();

/**
 *
 * @param e
 */
declare function createCapComment(e : any): void;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @param i
 */
declare function createChild(e : any, t : any, n : any, r : any, i : any): void;

/**
 *
 * @param e
 * @param t
 */
declare function createLicense(e : any, t : any): void;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @param i
 */
declare function createParent(e : any, t : any, n : any, r : string, i : any): void;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function createPendingInspection(e : any, t : any): boolean;

/**
 *
 * @return
 */
declare function createPendingInspFromReqd(): boolean;

/**
 *
 * @return
 */
declare function createPublicUserFromContact(): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @param i
 */
declare function createRecord(e : any, t : any, n : any, r : any, i : any): void;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function createRefContactAddressFromAddress(e : any, t : any, n : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @param i
 * @param s
 */
declare function createRefContactsFromCapContactsAndLink(e : any, t : any, n : any, r : any, i : any, s : any): void;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function createRefLicProf(e : any, t : any, n : any): boolean;

/**
 *
 * @return
 */
declare function createRefLicProfFromLicProf(): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 */
declare function createRefLP4Lookup(e : any, t : any, n : any, r : any): void;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function dateAdd(e : string, t : number): string;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function dateAddMonths(e : any, t : number): string;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function dateDiff(e : any, t : any): number;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @return
 */
declare function dateFormatted(e : any, t : any, n : any, r : string): string;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function dateNextOccur(e : any, t : any, n : any): string;

/**
 *
 * @param e
 * @return
 */
declare function deactivateActiveTasks(e : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function deactivateTask(e : any): boolean;

/**
 *
 * @param e
 */
declare function decode64(e : any): void;

/**
 *
 * @param e
 */
declare function deleteLicensedProfessional(e : any): void;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function deleteTask(e : any, t : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function describe(e : any): string;

/**
 *
 * @param e
 * @param t
 * @param n
 */
declare function docWrite(e : string, t : boolean, n : number): void;

/**
 *
 */
declare function doScriptActions(): void;

/**
 *
 * @param stdChoiceEntry
 * @param doExecution
 * @param docIndent
 */
declare function doStandardChoiceActions(stdChoiceEntry : any, doExecution : boolean, docIndent : number): void;

/**
 *
 * @param e
 * @return
 */
declare function editAppName(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function editAppSpecific(e : any, t : any): boolean;

/**
 *
 * @param e
 * @param t
 */
declare function editAppSpecific4ACA(e : string, t : any): void;

/**
 *
 * @param e
 * @return
 */
declare function editBuildingCount(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @return
 */
declare function editCapConditionStatus(e : any, t : any, n : any, r : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function days_between(e : any, t : any): number;

/**
 *
 * @param e
 * @param t
 * @param n
 */
declare function editCapContactAttribute(e : any, t : any, n : any): void;

/**
 *
 * @param e
 * @return
 */
declare function editChannelReported(e : any): boolean;

/**
 *
 * @param e
 * @param t
 */
declare function editContactType(e : any, t : any): void;

/**
 *
 * @param e
 * @return
 */
declare function editCreatedBy(e : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function editFirstIssuedDate(e : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function editHouseCount(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function editInspectionRequiredFlag(e : any, t : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function editLookup(e : any, t : any, n : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function editPriority(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function editRefLicProfAttribute(e : string, t : string, n : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function editReportedChannel(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @return
 */
declare function editTaskACAVisibility(e : any, t : any, n : any, r : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function editTaskComment(e : any, t : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function editTaskDueDate(e : any, t : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function editTaskSpecific(e : any, t : any, n : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @return
 */
declare function email(e : any, t : any, n : any, r : any): boolean;

/**
 *
 * @param e
 * @param t
 */
declare function emailContact(e : any, t : any): void;

/**
 *
 * @param e
 * @return
 */
declare function encode64(e : any): string;

/**
 *
 */
declare function endBranch(): void;

/**
 *
 * @param tableArray
 */
declare function executeASITable(tableArray : any): void;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function exists(e : any, t : Array<any> | boolean): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @param i
 * @return
 */
declare function externalLP_CA(e : string, t : any, n : any, r : boolean, i : any): boolean;
/**
 *
 */
declare function externalLP_CA();

/**
 *
 * @param e
 * @return
 */
declare function feeAmountExcept(e : any): boolean;
/**
 *
 */
declare function feeAmountExcept();

/**
 *
 * @param e
 * @return
 */
declare function feeBalance(e : any): boolean;
/**
 *
 */
declare function feeBalance();

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function feeBalanceFromDate(e : any, t : any): boolean;
/**
 *
 */
declare function feeBalanceFromDate();

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function feeCopyByDateRange(e : any, t : any): boolean;
/**
 *
 */
declare function feeCopyByDateRange();

/**
 *
 * @param e
 * @return
 */
declare function feeExists(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function feeGetTotByDateRange(e : any, t : any): boolean;
/**
 *
 */
declare function feeGetTotByDateRange();

/**
 *
 * @param e
 * @return
 */
declare function feeQty(e : any): boolean;
/**
 *
 */
declare function feeQty();

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @return
 */
declare function generateReport(e : any, t : any, n : any, r : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @return
 */
declare function generateReport4Workflow(e : any, t : any, n : any, r : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function genericTemplateObject(e : any): /* !this */ any;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function getACADocDownloadParam4Notification(e : any, t : any, n : any): any;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function getACADocumentDownloadUrl(e : any, t : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function getACARecordParam4Notification(e : any, t : any): any;

/**
 *
 * @param e
 * @return
 */
declare function getACARecordURL(e : any): string;

/**
 *
 * @return
 */
declare function getACAUrl(): string;

/**
 *
 * @param e
 * @return
 */
declare function getAddressCountyByAddressType(e : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function getAddressLineByAddressType(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @param i
 * @return
 */
declare function getAppConditions(e : any, t : any, n : any, r : any, i : any): any;

/**
 *
 * @param e
 * @param t
 * @param n
 */
declare function getAppIdByASI(e : any, t : any, n : any): void;

/**
 *
 * @param e
 * @param t
 * @param n
 */
declare function getAppIdByName(e : any, t : any, n : any): void;

/**
 *
 * @param e
 */
declare function getApplication(e : any): void;

/**
 *
 * @param e
 * @return
 */
declare function getAppSpecific(e : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function getCapByAddress(e : any): boolean;

/**
 *
 */
declare function getCapId(): void;

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
declare function getCapsWithConditionsRelatedByRefContact(e : any, t : any, n : any, r : any, i : any, s : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function getChildren(e : string, t : any): any;

/**
 *
 * @param e
 * @return
 */
declare function getChildTasks(e : any): any;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @return
 */
declare function getCAPConditions(e : any, t : any, n : any, r : any): any;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @return
 */
declare function getAddressConditions(e : any, t : any, n : any, r : any): any;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @return
 */
declare function getParcelConditions(e : any, t : any, n : any, r : any): any;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @return
 */
declare function getLicenseConditions(e : any, t : any, n : any, r : any): any;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @return
 */
declare function getContactConditions(e : any, t : any, n : any, r : any): any;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @return
 */
declare function getConditions(e : any, t : any, n : any, r : any): Array<any>;

/**
 *
 */
declare function condMatchObj(): void;

/**
 *
 * @return
 */
declare function getContactArray(): any;

/**
 *
 * @return
 */
declare function getContactArrayBefore(): any;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function getContactByType(e : any, t : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function getContactObj(e : any, t : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function getContactObjsBySeqNbr(e : any, t : any): any;

/**
 *
 * @param e
 * @return
 */
declare function getContactObjs(e : any): any;

/**
 *
 * @param e
 * @return
 */
declare function getContactObjsByCap(e : any): any;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function getContactParams4Notification(e : any, t : any): any;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function getCSLBInfo(e : any, t : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function getDateDiff(e : any): number;

/**
 *
 * @param e
 */
declare function getDepartmentName(e : any): void;

/**
 *
 * @return
 */
declare function getDocumentList(): any;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function getGISBufferInfo(e : any, t : any, n : any): boolean;
/**
 *
 */
declare function getGISBufferInfo();

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function getGISInfo(e : any, t : any, n : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function getGISInfoArray(e : any, t : any, n : any): boolean;
/**
 *
 */
declare function getGISInfoArray();

/**
 *
 * @param e
 * @return
 */
declare function getGuideSheetObjects(e : any): any;

/**
 *
 * @param e
 * @return
 */
declare function getInspector(e : any): boolean;

/**
 *
 * @param e
 */
declare function getLastInspector(e : any): void;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function compareInspDateDesc(e : any, t : any): boolean;

/**
 *
 * @param e
 */
declare function getLastScheduledInspector(e : any): void;

/**
 *
 * @param e
 */
declare function getLicenseProfessional(e : any): void;

/**
 *
 * @param e
 * @param t
 */
declare function getNode(e : any, t : string): void;

/**
 *
 * @return
 */
declare function getParent(): boolean;

/**
 *
 * @param e
 * @return
 */
declare function getParentByCapId(e : any): boolean;

/**
 *
 */
declare function getParentCapID4Renewal(): void;

/**
 *
 * @param e
 * @return
 */
declare function getParentLicenseCapID(e : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function getParents(e : any): Array<any>;

/**
 *
 * @param e
 */
declare function getPartialCapID(e : any): void;

/**
 *
 * @param e
 */
declare function getPeople(e : any): void;

/**
 *
 * @param e
 * @return
 */
declare function getPrimaryAddressLineParam4Notification(e : any): any;

/**
 *
 * @param e
 * @return
 */
declare function getPrimaryOwnerParams4Notification(e : any): any;

/**
 *
 * @param e
 * @param t
 */
declare function getProp(e : any, t : any): void;

/**
 *
 * @param e
 * @return
 */
declare function getRecordParams4Notification(e : any): any;

/**
 *
 * @param e
 * @return
 */
declare function getRefLicenseProf(e : string): boolean;

/**
 *
 * @param e
 * @return
 */
declare function getRelatedCapsByAddress(e : any): boolean;
/**
 *
 */
declare function getRelatedCapsByAddress();

/**
 *
 * @param e
 * @return
 */
declare function getRelatedCapsByParcel(e : any): boolean;
/**
 *
 */
declare function getRelatedCapsByParcel();

/**
 *
 * @param e
 */
declare function getRenewalCapByParentCapIDForReview(e : any): void;

/**
 *
 * @return
 */
declare function getReportedChannel(): boolean;
/**
 *
 */
declare function getReportedChannel();

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function getRootNode(e : any, t : number): any;

/**
 *
 * @param e
 * @return
 */
declare function getRoots(e : any): any;

/**
 *
 * @param e
 * @return
 */
declare function getScheduledInspId(e : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function getScriptAction(e : any): any;

/**
 *
 * @param e
 * @return
 */
declare function getScriptAction_v1_6(e : any): any;

/**
 *
 * @param e
 * @return
 */
 //declare function getScriptText(e : string): string;

/**
 *
 * @return
 */
declare function getShortNotes(): boolean;
/**
 *
 */
declare function getShortNotes();

/**
 *
 * @param e
 * @return
 */
declare function getTaskDueDate(e : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function getTaskStatusForEmail(e : any): boolean;
/**
 *
 */
declare function getTaskStatusForEmail();

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
declare function getURLToNewRecord(e : any, t : any, n : any, r : any, i : any, s : any): string;
/**
 *
 */
declare function getURLToNewRecord();

/**
 *
 * @return
 */
declare function getUserEmail(): boolean;

/**
 *
 * @return
 */
declare function getUserFullName(): string;
/**
 *
 */
declare function getUserFullName();

/**
 *
 * @param e
 * @param t
 */
declare function guideSheetObject(e : any, t : any): void;

/**
 *
 */
declare namespace guideSheetObject{

	/**
	 *
	 */
	export var info : Array<any>;

	/**
	 *
	 */
	export var infoTables : Array<any>;

	/**
	 *
	 */
	export var validTables : boolean;

	/**
	 *
	 */
	export var validInfo : boolean;

	/**
	 *
	 */
	function loadInfo(): void;

	/**
	 *
	 */
	function loadInfoTables(): void;
}

/**
 *
 * @param e
 * @param t
 */
declare function handleError(e : Error, t : string): void;

/**
 *
 * @param e
 * @return
 */
declare function hasPrimaryAddressInCap(e : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function xmlEscapeXMLToHTML(e : any): any;

/**
 *
 * @param s
 */
declare function include(s : string): void;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function insertSubProcess(e : any, t : any, n : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function insertTask(e : any, t : any, n : any): boolean;

/**
 *
 * @return
 */
declare function inspCancelAll(): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function invoiceFee(e : any, t : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function isBlank(e : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function isEmpty(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function isSameNode(e : any, t : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function isMatchPeople(e : any, t : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function isReadyRenew(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function isRenewProcess(e : any, t : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function isScheduled(e : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function isTaskActive(e : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function isTaskComplete(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function isTaskStatus(e : any, t : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function jsDateToASIDate(e : any): string;

/**
 *
 * @param e
 * @return
 */
declare function jsDateToMMDDYYYY(e : Date | string): string;

/**
 *
 * @param e
 * @param t
 */
declare function licEditExpInfo(e : any, t : any): void;

/**
 *
 * @param e
 * @return
 */
declare function licenseObject(e : any): boolean;

/**
 *
 */
declare namespace licenseObject{

	/**
	 *
	 */
	export var refProf : boolean;

	/**
	 *
	 */
	export var b1ExpDate : string;

	/**
	 *
	 */
	export var refExpDate : string;

	/**
	 *
	 * @param e
	 */
	function setExpiration(e : string): void;

	/**
	 *
	 * @param e
	 */
	function setIssued(e : any): void;

	/**
	 *
	 * @param e
	 */
	function setLastRenewal(e : any): void;

	/**
	 *
	 * @param e
	 */
	function setStatus(e : string): void;

	/**
	 *
	 */
	function getStatus(): void;

	/**
	 *
	 */
	function getCode(): void;
}

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function licenseProfObject(e : any, t : string): /* !this */ any;

/**
 *
 * @return
 */
declare function linkPublicUserToContact(): boolean;

/**
 *
 * @param e
 */
declare function loadAddressAttributes(e : any): void;

/**
 *
 * @param e
 * @return
 */
declare function loadAddressAttributes4ACA(e : any): boolean;

/**
 *
 * @param e
 */
declare function loadAppSpecific(e : any): void;

/**
 *
 * @param e
 */
declare function loadAppSpecific4ACA(e : any): void;

/**
 *
 * @param e
 * @param t
 */
declare function loadAppSpecific4Contact(e : any, t : any): void;

/**
 *
 * @param e
 * @return
 */
declare function loadASITable(e : any): boolean;
/**
 *
 */
declare function loadASITable();

/**
 *
 */
declare function loadASITables(): void;

/**
 *
 */
declare function loadASITables4ACA(): void;

/**
 *
 */
declare function loadASITablesBefore(): void;

/**
 *
 * @return
 */
declare function loadFees(): boolean;
/**
 *
 */
declare function loadFees();

/**
 *
 */
declare interface Fee {

	/**
	 *
	 * @return
	 */
	new (): Fee;
}


/**
 *
 * @param e
 * @return
 */
declare function loadGuideSheetItems(e : any): any;

/**
 *
 * @param e
 */
declare function loadParcelAttributes(e : any): void;

/**
 *
 * @param e
 * @return
 */
declare function loadTasks(e : any): boolean;
/**
 *
 */
declare function loadTasks();

/**
 *
 */
declare interface Task {

	/**
	 *
	 * @return
	 */
	new (): Task;
}


/**
 *
 * @param e
 * @return
 */
declare function loadTaskSpecific(e : any): boolean;

/**
 *
 * @param e
 */
declare function logDebug(e : string | boolean): void;

/**
 *
 * @param e
 */
declare function logGlobals(e : any): void;

/**
 *
 * @param e
 */
declare function logMessage(e : string | boolean): void;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function lookup(e : string, t : string): string;

/**
 *
 * @param e
 * @param t
 */
declare function lookupDateRange(e : any, t : any): void;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function lookupFeesByValuation(e : any, t : any, n : any): string;
/**
 *
 */
declare function lookupFeesByValuation();

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function lookupFeesByValuationSlidingScale(e : any, t : any, n : any): string;
/**
 *
 */
declare function lookupFeesByValuationSlidingScale();

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @return
 */
declare function loopTask(e : any, t : string, n : any, r : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function matches(e : string, t : string): boolean;

/**
 *
 * @param e
 * @return
 */
declare function nextWorkDay(e : any): string;

/**
 *
 * @param e
 */
declare function openUrlInNewWindow(e : any): void;

/**
 *
 * @param e
 */
declare function pairObj(e : any): void;

/**
 *
 * @param e
 * @return
 */
declare function parcelConditionExists(e : any): boolean;

/**
 *
 * @return
 */
declare function parcelExistsOnCap(): boolean;

/**
 *
 * @param e
 * @return
 */
declare function paymentByTrustAccount(e : any): boolean;

/**
 *
 * @return
 */
declare function paymentGetNotAppliedTot(): number;
/**
 *
 */
declare function paymentGetNotAppliedTot();

/**
 *
 * @return
 */
declare function prepareRenewal(): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function proximity(e : any, t : any, n : any): boolean;

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
declare function proximityToAttribute(e : any, t : any, n : any, r : any, i : any, s : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function refLicProfGetAttribute(e : any, t : any): string;
/**
 *
 */
declare function refLicProfGetAttribute();

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function refLicProfGetDate(e : any, t : any): string;
/**
 *
 */
declare function refLicProfGetDate();

/**
 *
 * @param e
 */
declare function removeAllFees(e : any): void;

/**
 *
 * @param e
 * @return
 */
declare function removeASITable(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function removeCapCondition(e : any, t : any): boolean;

/**
 *
 * @param e
 * @param t
 */
declare function removeFee(e : any, t : any): void;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function removeParcelCondition(e : any, t : any, n : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function removeRefContactAddressFromRecordContact(e : any, t : any, n : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function removeTask(e : any, t : any): boolean;

/**
 *
 * @param m
 * @return
 */
declare function replaceMessageTokens(m : string): string;

/**
 *
 * @param e
 * @param t
 * @param n
 */
declare function replaceNode(e : any, t : any, n : any): void;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 */
declare function resultInspection(e : any, t : any, n : any, r : any): void;

/**
 *
 * @param e
 * @param t
 */
declare function runEvent(e : any, t : any): void;

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
declare function runReport4Email(e : any, t : any, n : any, r : any, i : any, s : any, o : any, u : any): boolean;

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
declare function runReport4EmailOrPrint(e : any, t : any, n : any, r : any, i : any, s : any, o : any): void;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function runReportAttach(e : any, t : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 */
declare function scheduleInspect(e : any, t : any, n : any): void;

/**
 *
 * @param e
 * @param t
 */
declare function scheduleInspectDate(e : any, t : any): void;

/**
 *
 * @param e
 * @param t
 */
declare function scheduleInspection(e : any, t : any): void;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function searchProject(e : any, t : any): any;

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
declare function sendNotification(e : any, t : any, n : string, r : string, i : any, s : any): boolean;

/**
 *
 * @param e
 */
declare function setContactTypeFlagByType(e : any): void;

/**
 *
 * @param e
 */
declare function setIVR(e : any): void;

/**
 *
 * @param e
 * @return
 */
declare function setLicExpirationDate(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function setTask(e : any, t : any, n : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function stripNN(e : any): string;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function taskCloseAllExcept(e : any, t : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function taskStatus(e : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function taskStatusDate(e : any): boolean;
/**
 *
 */
declare function taskStatusDate();

/**
 *
 * @param e
 * @return
 */
declare function token(e : string): string;

/**
 *
 * @param e
 * @param t
 */
declare function transferFeesAndPayments(e : any, t : any): void;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function transferFunds(e : any, t : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function transferReceiptAndApply(e : any, t : any): boolean;
/**
 *
 */
declare function transferReceiptAndApply();

/**
 *
 * @param e
 * @param t
 */
declare function updateAppStatus(e : any, t : string): void;

/**
 *
 * @param e
 * @return
 */
declare function updateEnfOfficer(e : any): boolean;

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
declare function updateFee(e : any, t : any, n : any, r : any, i : any, s : string, o : any): void;

/**
 *
 * @param e
 * @param t
 */
declare function updateFeeItemInvoiceFlag(e : any, t : string): void;

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
declare function updateGuidesheetASIField(e : any, t : any, n : any, r : any, i : any, s : any, o : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @return
 */
declare function updateGuidesheetID(e : any, t : any, n : any): boolean;

/**
 *
 */
declare function updateRefParcelToCap(): void;

/**
 *
 * @param e
 * @return
 */
declare function updateShortNotes(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @param n
 * @param r
 * @return
 */
declare function updateTask(e : any, t : string, n : any, r : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function updateTaskAssignedDate(e : any, t : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function updateTaskDepartment(e : any, t : any): boolean;

/**
 *
 * @param e
 * @return
 */
declare function updateWorkDesc(e : any): boolean;

/**
 *
 * @return
 */
declare function validateGisObjects(): boolean;

/**
 *
 */
declare function verhoeff(): void;

/**
 *
 * @param e
 * @return
 */
declare function workDescGet(e : any): boolean;

/**
 *
 * @param e
 * @param t
 * @return
 */
declare function zeroPad(e : any, t : any): string;

/**
 *
 */
export declare var inspSchedDate : string;

/**
 *
 */
declare var thisFee : {

	/**
	 *
	 */
	amountPaid : number;
}

/**
 *
 */
export declare var j : number;

/**
 *
 */
export declare var oldDate : Date;

/**
 *
 */
export declare var newLic : boolean;

/**
 *
 */
export declare var stopBranch : boolean;

/**
 *
 */
declare namespace doObj{

	/**
	 *
	 */
	export var enabled : boolean;
}

/**
 *
 */
export declare var licObj : boolean;

/**
 *
 */
export declare var isMatch : boolean;

/**
 *
 */
export declare var contactArray : Array</* .I */ any>;

/**
 *
 */
export declare var showMessage : boolean;

/**
 *
 */
export declare var argnum : number;

/**
 *
 */
export declare var endPos : number;

/**
 *
 */
export declare var parentLic : boolean;

/**
 *
 */
export declare var pLicArray : Array<string>;

/**
 *
 */
export declare var myArray : Array<any>;

/**
 *
 */
export declare var insertPType : string;

/**
 *
 */
export declare var retVal : boolean;

/**
 *
 */
export declare var debug : string;

/**
 *
 */
export declare var message : string;

/**
 *
 */
export declare var newurl : string;

/**
 *
 */
export declare var invNbr : string;

/**
 *
 */
export declare var iFound : boolean;

/**
 *
 */
export declare var feeSeqNbrArray : Array<any>;

/**
 *
 */
export declare var invNbrArray : Array<string>;

/**
 *
 */
export declare var feeAllocArray : /* [fn(e:?)->bool */ any | number | /* string] */ any;

/**
 *
 */
export declare var prefix : string;

/**
 *
 */
export declare var myOutArray : Array<any>;

/**
 *
 */
export declare var thisLic : any;

/**
 *
 */
export declare var re : RegExp;

/**
 *
 */
export declare var feeUpdated : boolean;

/**
 *
 */
export declare var Op : Array</* .I */ any>;

/**
 *
 */
export declare var Inv : Array<number>;

/**
 *
 * @param e
 * @return
 */
declare function reverse_str(e : string): string;

/**
 *
 */
export declare var baseDate : Date;

/**
 *
 */
export declare var workArr : /* pLicArray */ any;

/**
 *
 */
export declare var workVals : /* pLicArray */ any;

/**
 *
 */
declare namespace INCLUDES_ACCELA_FUNCTIONS.ts{

	/**
	 *
	 */
	interface String {

		/**
		 *
		 */
		prototype : {

			/**
			 *
			 * @param e
			 * @return
			 */
			left(e : any): string;

			/**
			 *
			 * @param e
			 * @return
			 */
			right(e : any): string;
		}
	}
}
