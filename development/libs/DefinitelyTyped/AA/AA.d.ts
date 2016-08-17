export interface IAA {
    util: any;
    cap: ICap;
    inspection: any;
    people: any;
    appSpecificTableScript: any;
    capCondition: any;
    finance: any;
    document: any;
    proxyInvoker: any;
    env: any;
    workflow: any;
    taskSpecificInfo: any;
    reportManager: any;
    licenseProfessional: any;
    licenseScript: any;
    parcel: any;
    messageResources: any;
    appSpecificInfo: IAppSpecificInfo;
    bizDomain: IBizDomain;
    expiration: any;
    date: any;
    person: any;
    address: any;

    debug(title: string, message: string): void;
    getServiceProviderCode(): any;
    getAuditID(): any;

    /**use this only in test script*/
    print(message: string): void;
}

export interface IScriptResult<T> {
    getSuccess(): boolean;
    getOutput(): T;
    getErrorMessage(): any;
}

export interface IBizDomain {
    getBizDomainByValue(e, t): IScriptResult<any>;
}

export interface IAppSpecificInfo {
    getByCapID(capId: any): IScriptResult<any>;
}

export interface ICap {
    getCapID(e: string): IScriptResult<any>;
    getCap(e: any): IScriptResult<any>;
    updateCapAltID(capID: ICapIDModel, altID: string): IScriptResult<any>;
    createAppHierarchy(projectID: ICapIDModel, capID: ICapIDModel): IScriptResult<any>;
    copyRenewCapDocument(childCapID: ICapIDModel, parentCapID: ICapIDModel, currentUserID: string): IScriptResult<any>
    /**
     *
     * @param id1
     * @param id2
     * @param id3
     * @return IScriptResult<any>
     */
    getCapIDModel(id1: string, id2: string, id3: string): IScriptResult<any>;

    /**
     *
     * @group - app group
     * @type - app type
     * @subtype - app subtype
     * @category - app category
     * @return IScriptResult<any>
     */
    createApp(group: string, type: string, subtype: string, category: string, appName: string): IScriptResult<any>;

    newCapScriptModel(): IScriptResult<any>;
}

export interface ICapIDModel {
}
