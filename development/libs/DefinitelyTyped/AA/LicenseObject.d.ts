export interface ILicenseObject {

    /**
     *
     * @param e
     */
    setExpiration(e: string): void;

    /**
     *
     * @param e
     */
    setIssued(e: any): void;

    /**
     *
     * @param e
     */
    setLastRenewal(e: any): void;

    /**
     *
     * @param e
     */
    setStatus(e: string): void;

    /**
     *
     */
    getStatus(): void;

    /**
     *
     */
    getCode(): void;
}
