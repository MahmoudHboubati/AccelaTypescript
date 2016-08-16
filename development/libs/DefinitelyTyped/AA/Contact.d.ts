/**
 *
 */
export interface IContactObj {

    /**
     *
     * @return
     */
    toString(): string;

    /**
     *
     * @param e
     * @return
     */
    getEmailTemplateParams(e: any): any;

    /**
     *
     * @param e
     * @return
     */
    replace(e: any): boolean;

    /**
     *
     * @param e
     * @return
     */
    equals(e: any): boolean;

    /**
     *
     */
    saveBase(): void;

    /**
     *
     */
    save(): void;

    /**
     *
     * @param e
     */
    getAttribute(e: any): void;

    /**
     *
     * @param e
     * @param t
     * @return
     */
    setAttribute(e: any, t: any): boolean;

    /**
     *
     */
    remove(): void;

    /**
     *
     * @return
     */
    isSingleAddressPerType(): boolean;

    /**
     *
     * @return
     */
    getAddressTypeCounts(): any;

    /**
     *
     * @return
     */
    createPublicUser(): boolean;

    /**
     *
     * @return
     */
    getCaps(): any;

    /**
     *
     * @return
     */
    getRelatedContactObjs(): any;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @param r
     * @return
     */
    createRefLicProf(e: any, t: any, n: any, r: any): boolean;

    /**
     *
     * @return
     */
    getAKA(): boolean;

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
    addAKA(e: any, t: any, n: any, r: any, i: any, s: any): boolean;

    /**
     *
     * @param e
     * @param t
     * @param n
     * @return
     */
    removeAKA(e: any, t: any, n: any): boolean;

    /**
     *
     * @return
     */
    hasPublicUser(): boolean;

    /**
     *
     * @param e
     * @return
     */
    linkToPublicUser(e: any): boolean;

    /**
     *
     */
    sendCreateAndLinkNotification(): void;

    /**
     *
     * @return
     */
    getRelatedRefContacts(): any;
}
