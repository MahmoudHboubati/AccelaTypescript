export interface IAA {
    util: any;
    cap: any;
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
    appSpecificInfo: any;
    bizDomain: any;
    expiration: any;
    date: any;
    person: any;
    address:any;

    debug(title: string, message: string): void;
    getServiceProviderCode(): any;
    getAuditID(): any;

    /**use this only in test script*/
    print(message: string): void;
}
