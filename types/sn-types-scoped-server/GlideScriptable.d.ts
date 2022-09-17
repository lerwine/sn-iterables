/// <reference path="$$rhino.d.ts" />
/// <reference path="Packages.d.ts" />

/**
 * @file Definitions for scriptable Java classes.
 * @author Leonard T. Erwine
 */

declare type EncryptionAlgorithmHashType = "MD-2" | "MD-5" | "SHA-1" | "SHA-224" | "SHA-256" | "SHA-384" | "SHA-512";

declare type EncryptionAlgorithmSignType = "NONEwithRSA" | "MD2withRSA" | "MD5withRSA" | "SHA1withRSA" | "SHA224withRSA" | "SHA256withRSA" | "SHA384withRSA" |
    "SHA512withRSA" | "NONEwithDSA" | "SHA1withDSA" | "SHA224withDSA" | "SHA256withDSA" | "NONEwithECDSA" | "SHA1withECDSA" | "SHA224withECDSA" | "SHA256withECDSA" |
    "SHA384withECDSA" | "SHA512withECDSA";

/**
 * Enables handling data for URLs in a UI action script.
 * Use the action API to configure UI actions with which users can interact. Use these scripts in the UI Action [sys_ui_action] table. For information, see UI actions.
 * Methods for this API are referred to by the variable name 'action' in any server-side JavaScript.
 * @class Action
 * @implements {Packages.com.glide.script.fencing.ScopedAction}
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/sandiego/server/no-namespace/ActionAPIBoth}
 * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/Action/concept/ActionAPIBoth.html}
 */
declare class Action implements Packages.com.glide.script.fencing.ScopedAction {
    /**
     * Gets a GlideURI object to determine the user view.
     * @return {GlideURI} GlideURI object representing the URI parameter of the user view.
     * @memberof Action
     */
    getGlideURI(): GlideURI;

    /**
     * Gets the URL of the return page in view after a UI action is complete.
     * @return {$$rhino.String} URL of the return page in view after a UI action is complete.
     * @memberof Action
     */
    getReturnURL(): $$rhino.String;

    /**
     * Gets the value of a URL parameter.
     * @param {$$rhino.String} parameterName - Name of the URL parameter name to be queried for the URL parameter value.
     * @return {$$rhino.String} URL parameter value.
     * @memberof Action
     */
    getURLParameter(parameterName: $$rhino.String): $$rhino.String;

    /**
     * Opens a page with a GlideRecord in the user view.
     * @param {GlideRecord} gr - GlideRecord of the page to be opened in the user view.
     * @memberof Action
     */
    openGlideRecord(gr: GlideRecord): void;

    /**
     * Indicates whether to enable or disable pop-up windows on the page in the current view.
     * @param {$$rhino.Boolean} noPop - True: Disables pop-up windows; false: (default) Enables pop-up windows.
     * @memberof Action
     */
    setNoPop(noPop: $$rhino.Boolean): void;

    /**
     * Sets the redirect URI for this transaction, which determines the next page the user sees.
     * @param {(string | GlideRecord)} url - URL to set as the redirect. You can provide the URL as a string or a GlideRecord.
     * If you pass the URL as a GlideRecord, this value takes the focus to that record's form.
     * @memberof Action
     */
    setRedirectURL(url: string | GlideRecord): void;

    /**
     * Sets the return URI for this transaction after a UI action is complete. You can use this method to determine what page the user has in view when they return from submit.
     * @param {(string | GlideRecord)} url - URI to set as the return location after a UI action is complete. You can provide the URL as a string or a GlideRecord.
     * @memberof Action
     */
    setReturnURL(url: string | GlideRecord): void;

    /**
     * Sets a URL parameter name and value.
     * @param {$$rhino.String} parameterName - Name of the URL parameter.
     * @param {$$rhino.String} parameterValue - Value of the parameter.
     * @memberof Action
     */
    setURLParameter(parameterName: $$rhino.String, parameterValue: $$rhino.String): void;
    
    toString(): $$rhino.String;
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    
}

/**
 * APIs available for encrypting certificates in scoped applications.
 * Use these methods to generate a hash for the certificate, sign data using a private key, and generate a message authentication code.
 * @class CertificateEncryption
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_CertificateEncryptionScopedAPI}
 */
declare class CertificateEncryption implements Packages.com.glide.sys.security.CertificateEncryption {
    constructor();

    /**
     * Generates the Message Authentication Code (MAC), which is used to authenticate a message.
     * @param {$$rhino.String} key - Key to use to sign the message. Must be Base64 encoded.
     * @param {EncryptionAlgorithmHashType} algorithm - Algorithm to use to generate the MAC: HmacSHA256, HmacSHA1, HmacMD5, and so on.
     * @param {$$rhino.String} data - Data to process.
     * @return {$$rhino.String} MAC in base64 format.
     * @memberof CertificateEncryption
     */
    generateMac(key: $$rhino.String, algorithm: EncryptionAlgorithmHashType, data: $$rhino.String): $$rhino.String;

    /**
     * Generates a hash (SHA-1, SHA-256, and so on) for the certificate from Trust Store Cert.
     * @param {$$rhino.String} certificateID - sys_id of the certificate record in the X.509 Certificate [sys_certificate] table.
     * @param {EncryptionAlgorithmHashType} algorithm - Algorithm to use to create the hash, such as SHA-1, SHA-256, and so on.
     * @return {$$rhino.String} Thumbprint in base64 format.
     * @memberof CertificateEncryption
     */
    getThumbPrint(certificateID: $$rhino.String, algorithm: EncryptionAlgorithmHashType): $$rhino.String;

    /**
     * Generates a hash (SHA-1, SHA-256, and so on) for the certificate from the keystore entry.
     * @param {$$rhino.String} certificateID - sys_id of the certificate record in the X.509 Certificate [sys_certificate] table.
     * @param {$$rhino.String} alias - Alias name for the certificate.
     * @param {EncryptionAlgorithmHashType} algorithm - Algorithm to use to create the hash, such as SHA-1, SHA-256, and so on.
     * @return {$$rhino.String} Thumbprint in base64 format.
     * @memberof CertificateEncryption
     */
    getThumbPrintFromKeystore(certificateID: $$rhino.String, alias: $$rhino.String, algorithm: EncryptionAlgorithmHashType): $$rhino.String;
    /**
     * Signs the data using the private key and the specified algorithm.
     * @param {$$rhino.String} certificateID - sys_id of the certificate record in the X.509 Certificate [sys_certificate] table.
     * @param {$$rhino.String} alias - Private key name.
     * @param {$$rhino.String} aliaspassword - Password for the private key.
     * @param {EncryptionAlgorithmSignType} algorithm - Algorithm to use, such as SHA-1, SHA-256, and so on.
     * @param {$$rhino.String} datatosign - 
     * @return {$$rhino.String}
     * @memberof CertificateEncryption
     */
    sign(certificateID: $$rhino.String, alias: $$rhino.String, aliaspassword: $$rhino.String, algorithm: EncryptionAlgorithmSignType, datatosign: $$rhino.String): $$rhino.String;
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * A FlowScriptAPI object allows you to access Flow Designer context details from script steps and inline scripts.
 * You cannot instantiate objects of this type. Objects of this type are created automatically and are accessible only in script steps and inline scripts.
 * @class FlowScriptAPI
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/FlowScriptAPI}
 */
declare class FlowScriptAPI {
    private constructor();
    /**
     * Returns the context ID of the running flow.
     * @static
     * @return {$$rhino.String} The sys_id of the running flow.
     * @memberof FlowScriptAPI
     */
    static getContextID(): $$rhino.String;
}

/**
 * The scoped GlideUser API provides access to information about the current user and current user roles. Using the scoped GlideUser API avoids the need to use the slower GlideRecord queries to get user information.
 * @class GlideUser
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideUserScopedAPI}
 * @todo Add members to GlideUser
 */
declare class GlideUser implements Packages.com.glide.script.fencing.ScopedUser {
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
    // TODO: Implement getCompanyID   from com.glide.script.fencing.ScopedUser under com.glide.script.fencing.ScopedUser (category: user info)
    // TODO: Implement getDisplayName from com.glide.script.fencing.ScopedUser under com.glide.script.fencing.ScopedUser (category: user info)
    // TODO: Implement getEmail       from com.glide.script.fencing.ScopedUser under com.glide.script.fencing.ScopedUser (category: user info)
    // TODO: Implement getFirstName   from com.glide.script.fencing.ScopedUser under com.glide.script.fencing.ScopedUser (category: user info)
    // TODO: Implement getID          from com.glide.script.fencing.ScopedUser under com.glide.script.fencing.ScopedUser (category: user info)
    // TODO: Implement getLastName    from com.glide.script.fencing.ScopedUser under com.glide.script.fencing.ScopedUser (category: user info)
    // TODO: Implement getMyGroups    from com.glide.script.fencing.ScopedUser under com.glide.script.fencing.ScopedUser (category: user info)
    // TODO: Implement getName        from com.glide.script.fencing.ScopedUser under com.glide.script.fencing.ScopedUser (category: user info)
    // TODO: Implement getPreference  from com.glide.script.fencing.ScopedUser under com.glide.script.fencing.ScopedUser (category: user preferences)
    // TODO: Implement getRoles       from com.glide.script.fencing.ScopedUser under com.glide.script.fencing.ScopedUser (category: user roles and groups)
    // TODO: Implement getUserRoles   from com.glide.script.fencing.ScopedUser under com.glide.script.fencing.ScopedUser (category: user roles and groups)
    // TODO: Implement hasRole        from com.glide.script.fencing.ScopedUser under com.glide.script.fencing.ScopedUser (category: user roles and groups)
    // TODO: Implement isMemberOf     from com.glide.script.fencing.ScopedUser under com.glide.script.fencing.ScopedUser (category: user roles and groups)
    // TODO: Implement savePreference from com.glide.script.fencing.ScopedUser under com.glide.script.fencing.ScopedUser (category: user preferences)
}

/**
 * The scoped GlideSession API provides a way to find information about the current session.
 * @class GlideSession
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideSessionScopedAPI}
 * @todo Add members to GlideSession
 */
declare class GlideSession implements Packages.com.glide.script.fencing.ScopedGlideSession {
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
    // TODO: Implement getClientData           from com.glide.script.fencing.ScopedGlideSession under com.glide.script.fencing.ScopedGlideSession (category: user sessions)
    // TODO: Implement getClientIP             from com.glide.script.fencing.ScopedGlideSession under com.glide.script.fencing.ScopedGlideSession (category: user sessions)
    // TODO: Implement getCurrentApplicationId from com.glide.script.fencing.ScopedGlideSession under com.glide.script.fencing.ScopedGlideSession (category: user sessions)
    // TODO: Implement getLanguage             from com.glide.script.fencing.ScopedGlideSession under com.glide.script.fencing.ScopedGlideSession (category: user sessions)
    // TODO: Implement getSessionToken         from com.glide.script.fencing.ScopedGlideSession under com.glide.script.fencing.ScopedGlideSession (category: user sessions)
    // TODO: Implement getTimeZoneName         from com.glide.script.fencing.ScopedGlideSession under com.glide.script.fencing.ScopedGlideSession (category: user sessions)
    // TODO: Implement getUrlOnStack           from com.glide.script.fencing.ScopedGlideSession under com.glide.script.fencing.ScopedGlideSession (category: user sessions)
    // TODO: Implement isImpersonating         from com.glide.script.fencing.ScopedGlideSession under com.glide.script.fencing.ScopedGlideSession (category: user sessions)
    // TODO: Implement isInteractive           from com.glide.script.fencing.ScopedGlideSession under com.glide.script.fencing.ScopedGlideSession (category: user sessions)
    // TODO: Implement isLoggedIn              from com.glide.script.fencing.ScopedGlideSession under com.glide.script.fencing.ScopedGlideSession (category: user sessions)
    // TODO: Implement putClientData           from com.glide.script.fencing.ScopedGlideSession under com.glide.script.fencing.ScopedGlideSession (category: user sessions)
}

/**
 * The scoped GlideSystem (referred to by the variable name 'gs' in any server-side JavaScript) API provides a number of convenient methods to get information about the system, the current logged in user, etc.
 * @class GlideSystem
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideSystemScopedAPI}
 * @todo Add members to GlideSystem
 */
declare class GlideSystem implements Packages.com.glide.script.fencing.ScopedGlideSystem {
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
    // TODO: Implement addErrorMessage              from com.glide.script.system.GlideSystemUserSession under com.glide.script.fencing.ScopedGlideSystem (category: logging)
    // TODO: Implement addInfoMessage               from com.glide.script.system.GlideSystemUserSession under com.glide.script.fencing.ScopedGlideSystem (category: logging)
    // TODO: Implement addInfoMessageNoSanitization from com.glide.script.system.GlideSystemUserSession under com.glide.script.fencing.ScopedGlideSystem (category: logging)
    // TODO: Implement base64Decode                 from com.glide.script.fencing.ScopedGlideSystem     under com.glide.script.fencing.ScopedGlideSystem (category: string utilities)
    // TODO: Implement base64Encode                 from com.glide.script.fencing.ScopedGlideSystem     under com.glide.script.fencing.ScopedGlideSystem (category: string utilities)
    // TODO: Implement beginningOfCurrentHour       from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfCurrentMinute     from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLast120Days       from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLast12Months      from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLast15Minutes     from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLast2Hours        from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLast2Quarters     from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLast2Years        from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLast30Days        from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLast30Minutes     from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLast3Months       from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLast45Minutes     from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLast60Days        from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLast6Months       from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLast7Days         from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLast90Days        from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLast9Months       from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLastHour          from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLastMinute        from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLastMonth         from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLastQuarter       from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLastWeek          from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfLastYear          from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfNext2Quarters     from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfNextMonth         from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfNextQuarter       from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfNextWeek          from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfNextYear          from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfOneYearAgo        from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfThisMonth         from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfThisQuarter       from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfThisWeek          from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfThisYear          from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfToday             from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfTomorrow          from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfWeek              from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement beginningOfYesterday         from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement breaker                      from com.glide.script.GlideSystem                   under com.glide.script.fencing.ScopedGlideSystem (category: system control)
    // TODO: Implement dateAdd                      from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement dateGenerate                 from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement datePart                     from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement daysAgo                      from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement daysAgoEnd                   from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement daysAgoStart                 from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement debug                        from com.glide.script.system.GlideSystemLogger      under com.glide.script.fencing.ScopedGlideSystem (category: logging)
    // TODO: Implement endOfCurrentHour             from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfCurrentMinute           from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLast120Days             from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLast12Months            from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLast15Minutes           from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLast2Hours              from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLast2Quarters           from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLast2Years              from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLast30Days              from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLast30Minutes           from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLast3Months             from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLast45Minutes           from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLast60Days              from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLast6Months             from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLast7Days               from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLast90Days              from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLast9Months             from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLastHour                from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLastMinute              from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLastMonth               from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLastQuarter             from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLastWeek                from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfLastYear                from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfNext2Quarters           from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfNextMonth               from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfNextQuarter             from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfNextWeek                from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfNextYear                from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfOneYearAgo              from com.glide.script.system.GlideSystemDateUtil3   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfThisMonth               from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfThisQuarter             from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfThisWeek                from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfThisYear                from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfToday                   from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfTomorrow                from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfWeek                    from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement endOfYesterday               from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement error                        from com.glide.script.system.GlideSystemLogger      under com.glide.script.fencing.ScopedGlideSystem (category: logging)
    // TODO: Implement eventQueue                   from com.glide.script.fencing.ScopedGlideSystem     under com.glide.script.fencing.ScopedGlideSystem (category: event management)
    // TODO: Implement eventQueueScheduled          from com.glide.script.fencing.ScopedGlideSystem     under com.glide.script.fencing.ScopedGlideSystem (category: event management)
    // TODO: Implement executeNow                   from com.glide.script.fencing.ScopedGlideSystem     under com.glide.script.fencing.ScopedGlideSystem (category: scheduled jobs)
    // TODO: Implement generateGUID                 from com.glide.script.GlideSystem                   under com.glide.script.fencing.ScopedGlideSystem (category: string utilities)
    // TODO: Implement getCallerScopeName           from com.glide.script.GlideSystem                   under com.glide.script.fencing.ScopedGlideSystem (category: scope management)
    // TODO: Implement getCssCacheVersionString     from com.glide.script.GlideSystem                   under com.glide.script.fencing.ScopedGlideSystem (category: user interface)
    // TODO: Implement getCurrentApplicationId      from com.glide.script.system.GlideSystemUserSession under com.glide.script.fencing.ScopedGlideSystem (category: scope management)
    // TODO: Implement getCurrentScopeName          from com.glide.script.GlideSystem                   under com.glide.script.fencing.ScopedGlideSystem (category: scope management)
    // TODO: Implement getDateFormat                from com.glide.script.system.GlideSystemUserSession under com.glide.script.fencing.ScopedGlideSystem (category: user info)
    // TODO: Implement getDateTimeFormat            from com.glide.script.system.GlideSystemUserSession under com.glide.script.fencing.ScopedGlideSystem (category: user info)
    // TODO: Implement getDurationDate              from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement getErrorMessages             from com.glide.script.fencing.ScopedGlideSystem     under com.glide.script.fencing.ScopedGlideSystem (category: user sessions)
    // TODO: Implement getErrorMessages             from com.glide.script.system.GlideSystemUserSession under com.glide.script.fencing.ScopedGlideSystem (category: logging)
    // TODO: Implement getEscapedMessage            from com.glide.script.GlideSystem                   under com.glide.script.fencing.ScopedGlideSystem (category: string utilities)
    // TODO: Implement getMaxSchemaNameLength       from com.glide.script.GlideSystem                   under com.glide.script.fencing.ScopedGlideSystem (category: table metadata)
    // TODO: Implement getMessage                   from com.glide.script.GlideSystem                   under com.glide.script.fencing.ScopedGlideSystem (category: string utilities)
    // TODO: Implement getMessageLang               from com.glide.script.GlideSystem                   under com.glide.script.fencing.ScopedGlideSystem (category: string utilities)
    // TODO: Implement getNewAppScopeCompanyPrefix  from com.glide.script.GlideSystem                   under com.glide.script.fencing.ScopedGlideSystem (category: scope management)
    // TODO: Implement getProperty                  from com.glide.script.fencing.ScopedGlideSystem     under com.glide.script.fencing.ScopedGlideSystem (category: properties)
    // TODO: Implement getSession                   from com.glide.script.fencing.ScopedGlideSystem     under com.glide.script.fencing.ScopedGlideSystem (category: user sessions)
    // TODO: Implement getSessionID                 from com.glide.script.GlideSystem                   under com.glide.script.fencing.ScopedGlideSystem (category: user sessions)
    // TODO: Implement getSysTimeZone               from com.glide.script.system.GlideSystemUserSession under com.glide.script.fencing.ScopedGlideSystem (category: user info)
    // TODO: Implement getTimeFormat                from com.glide.script.system.GlideSystemUserSession under com.glide.script.fencing.ScopedGlideSystem (category: user info)
    // TODO: Implement getUrlOnStack                from com.glide.script.system.GlideSystemUserSession under com.glide.script.fencing.ScopedGlideSystem (category: navigation)
    // TODO: Implement getUser                      from com.glide.script.fencing.ScopedGlideSystem     under com.glide.script.fencing.ScopedGlideSystem (category: user info)
    // TODO: Implement getUserDisplayName           from com.glide.script.system.GlideSystemUserSession under com.glide.script.fencing.ScopedGlideSystem (category: user info)
    // TODO: Implement getUserID                    from com.glide.script.system.GlideSystemUserSession under com.glide.script.fencing.ScopedGlideSystem (category: user info)
    // TODO: Implement getUserName                  from com.glide.script.system.GlideSystemUserSession under com.glide.script.fencing.ScopedGlideSystem (category: user info)
    // TODO: Implement hasRole                      from com.glide.script.GlideSystem                   under com.glide.script.fencing.ScopedGlideSystem (category: user roles and groups)
    // TODO: Implement hoursAgo                     from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement hoursAgoEnd                  from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement hoursAgoStart                from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement include                      from com.glide.script.GlideSystem                   under com.glide.script.fencing.ScopedGlideSystem (category: scripting)
    // TODO: Implement info                         from com.glide.script.system.GlideSystemLogger      under com.glide.script.fencing.ScopedGlideSystem (category: logging)
    // TODO: Implement isDebugging                  from com.glide.script.system.GlideSystemLogger      under com.glide.script.fencing.ScopedGlideSystem (category: logging)
    // TODO: Implement isInteractive                from com.glide.script.system.GlideSystemUserSession under com.glide.script.fencing.ScopedGlideSystem (category: user sessions)
    // TODO: Implement isLoggedIn                   from com.glide.script.system.GlideSystemUserSession under com.glide.script.fencing.ScopedGlideSystem (category: user sessions)
    // TODO: Implement isMobile                     from com.glide.script.fencing.ScopedGlideSystem     under com.glide.script.fencing.ScopedGlideSystem (category: user sessions)
    // TODO: Implement isPaused                     from com.glide.script.GlideSystem                   under com.glide.script.fencing.ScopedGlideSystem (category: system control)
    // TODO: Implement isScopeAdminForAnyApp        from com.glide.script.system.GlideSystemUserSession under com.glide.script.fencing.ScopedGlideSystem (category: user roles and groups)
    // TODO: Implement minutesAgo                   from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement minutesAgoEnd                from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement minutesAgoStart              from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement monthsAgo                    from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement monthsAgo                    from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement monthsAgoStart               from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement nil                          from com.glide.script.GlideSystem                   under com.glide.script.fencing.ScopedGlideSystem (category: string utilities)
    // TODO: Implement quartersAgoEnd               from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement quartersAgoStart             from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement setProperty                  from com.glide.script.fencing.ScopedGlideSystem     under com.glide.script.fencing.ScopedGlideSystem (category: properties)
    // TODO: Implement setRedirect                  from com.glide.script.system.GlideSystemUserSession under com.glide.script.fencing.ScopedGlideSystem (category: navigation)
    // TODO: Implement tableExists                  from com.glide.script.GlideSystem                   under com.glide.script.fencing.ScopedGlideSystem (category: table metadata)
    // TODO: Implement urlDecode                    from com.glide.script.fencing.ScopedGlideSystem     under com.glide.script.fencing.ScopedGlideSystem (category: string utilities)
    // TODO: Implement urlEncode                    from com.glide.script.fencing.ScopedGlideSystem     under com.glide.script.fencing.ScopedGlideSystem (category: string utilities)
    // TODO: Implement warn                         from com.glide.script.system.GlideSystemLogger      under com.glide.script.fencing.ScopedGlideSystem (category: logging)
    // TODO: Implement xmlToJSON                    from com.glide.script.GlideSystem                   under com.glide.script.fencing.ScopedGlideSystem (category: string utilities)
    // TODO: Implement yearsAgo                     from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
    // TODO: Implement yesterday                    from com.glide.script.system.GlideSystemDateUtil2   under com.glide.script.fencing.ScopedGlideSystem (category: datetime utilities)
}

declare const gs: GlideSystem;

/**
 * TODO: Document GlideRecord
 * @class GlideRecord
 * @implements {Packages.com.glide.script.fencing.ScopedGlideElement}
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideRecordScopedAPI}
 */
declare class GlideRecord implements Packages.com.glide.script.fencing.ScopedGlideRecord {
    /**
     * Creates an instance of the GlideRecord class for the specified table.
     * @constructor
     * @param {$$rhino.String} tableName - The table to be used.
     */
    constructor(tableName: $$rhino.String);
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
    // TODO: Implement _next                  from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement _next                  from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement _query                 from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement _query                 from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement addActiveQuery         from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement addActiveQuery         from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement addEncodedQuery        from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement addEncodedQuery        from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement addFunction            from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement addInactiveQuery       from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement addJoinQuery           from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement addNotNullQuery        from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement addNotNullQuery        from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement addNullQuery           from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement addNullQuery           from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement addQuery               from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement addQuery               from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement applyEncodedQuery      from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement autoSysFields          from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement canCreate              from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement canDelete              from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement canRead                from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement canWrite               from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement chooseWindow           from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement deleteMultiple         from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement deleteMultiple         from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement deleteRecord           from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement deleteRecord           from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement get                    from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement get                    from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getAttribute           from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getBooleanAttribute    from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getCategory            from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getClassDisplayValue   from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getDisplayName         from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getDisplayValue        from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getDisplayValue        from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getED                  from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getElement             from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getElements            from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getEncodedQuery        from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getEscapedDisplayValue from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getLabel               from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getLabel               from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getLastErrorMessage    from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getLink                from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getPlural              from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getRecordClassName     from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getRecordClassName     from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getRowCount            from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getTableName           from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getTableName           from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getUniqueValue         from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getUniqueValue         from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getValue               from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement getValue               from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement hasNext                from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement hasNext                from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement initialize             from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement initialize             from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement insert                 from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement insert                 from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement isActionAborted        from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement isEncodedQueryValid    from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement isNewRecord            from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement isNewRecord            from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement isValid                from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement isValid                from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement isValidField           from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement isValidRecord          from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement isValidRecord          from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement isWorkflow             from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement newRecord              from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement next                   from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement next                   from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement operation              from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement orderBy                from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement orderBy                from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement orderByDesc            from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement orderByDesc            from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement query                  from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement query                  from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement queryNoDomain          from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement setAbortAction         from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement setCategory            from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement setCategory            from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement setLimit               from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement setLimit               from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement setNewGuidValue        from com.glide.script.GlideRecord               under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement setValue               from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement setWorkflow            from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement update                 from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement update                 from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement updateMultiple         from com.glide.script.fencing.ScopedGlideRecord under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement updateMultiple         from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement updateNoDomain         from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
    // TODO: Implement updateWithReferences   from com.glide.script.GlideRecordSandbox        under com.glide.script.fencing.ScopedGlideRecord
}

/**
 * TODO: Document GlideElement
 * @class GlideElement
 * @implements {Packages.com.glide.script.fencing.ScopedGlideElement}
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideElementScopedAPI}
 */
declare class GlideElement implements Packages.com.glide.script.fencing.ScopedGlideElement {
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
    // TODO: Implement canCreate                from com.glide.script.GlideElement                                                 under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement canRead                  from com.glide.script.GlideElement                                                 under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement canWrite                 from com.glide.script.GlideElement                                                 under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement changes                  from com.glide.script.GlideElement                                                 under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement changesFrom              from com.glide.script.GlideElement                                                 under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement changesTo                from com.glide.script.GlideElement                                                 under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getAttribute             from com.glide.script.GlideElement                                                 under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getBooleanAttribute      from com.glide.script.GlideElement                                                 under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getChoices               from com.glide.script.fencing.ScopedGlideElement                                   under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getChoiceValue           from com.glide.script.GlideElement                                                 under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getDecryptedValue        from com.glide.script.fencing.ScopedGlideElement                                   under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getDisplayValue          from com.glide.script.GlideElement                                                 under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getED                    from com.glide.script.fencing.ScopedGlideElement                                   under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getElements              from com.glide.script.fencing.ScopedGlideElement                                   under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    // TODO: Implement getHTMLValue             from com.glide.script.GlideElement                                                 under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getLabel                 from com.glide.script.GlideElement                                                 under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getName                  from com.glide.script.GlideElement                                                 under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getQuestion              from com.glide.script.fencing.ScopedGlideElement                                   under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    // TODO: Implement getRefRecord             from com.glide.script.fencing.ScopedGlideElement                                   under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getTableName             from com.glide.script.GlideElement                                                 under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement hasAttribute             from com.glide.script.GlideElement                                                 under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement nil                      from com.glide.script.GlideElement                                                 under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement setDisplayValue          from com.glide.script.fencing.ScopedGlideElement                                   under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement setError                 from com.glide.script.GlideElement                                                 under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement setValue                 from com.glide.script.fencing.ScopedGlideElement                                   under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement toString                 from com.glide.script.fencing.ScopedGlideElement                                   under com.glide.script.fencing.ScopedGlideElement

    // TODO: Implement getReferenceTable        from com.glide.script.glide_elements.GlideElementReference                         under com.glide.script.fencing.ScopedGlideElement

    // TODO: Implement changesFrom              from com.glide.script.glide_elements.GlideElementBoolean                           under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement changesTo                from com.glide.script.glide_elements.GlideElementBoolean                           under com.glide.script.fencing.ScopedGlideElement

    // TODO: Implement getCurrencyCode          from com.glide.currency.GlideElementCurrency                                       under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getCurrencyDisplayValue  from com.glide.currency.GlideElementCurrency                                       under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getCurrencyString        from com.glide.currency.GlideElementCurrency                                       under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getCurrencyValue         from com.glide.currency.GlideElementCurrency                                       under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getReferenceCurrencyCode from com.glide.currency.GlideElementCurrency                                       under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getReferenceDisplayValue from com.glide.currency.GlideElementCurrency                                       under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getReferenceValue        from com.glide.currency.GlideElementCurrency                                       under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getSessionCurrencyCode   from com.glide.currency.GlideElementCurrency                                       under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getSessionDisplayValue   from com.glide.currency.GlideElementCurrency                                       under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getSessionValue          from com.glide.currency.GlideElementCurrency                                       under com.glide.script.fencing.ScopedGlideElement

    // TODO: Implement getCurrencyCode          from com.glide.currency.GlideElementPrice                                          under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getCurrencyDisplayValue  from com.glide.currency.GlideElementPrice                                          under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getCurrencyString        from com.glide.currency.GlideElementPrice                                          under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getCurrencyValue         from com.glide.currency.GlideElementPrice                                          under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getReferenceCurrencyCode from com.glide.currency.GlideElementPrice                                          under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getReferenceDisplayValue from com.glide.currency.GlideElementPrice                                          under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getReferenceValue        from com.glide.currency.GlideElementPrice                                          under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getSessionCurrencyCode   from com.glide.currency.GlideElementPrice                                          under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getSessionDisplayValue   from com.glide.currency.GlideElementPrice                                          under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getSessionValue          from com.glide.currency.GlideElementPrice                                          under com.glide.script.fencing.ScopedGlideElement

    // TODO: Implement dateNumericValue         from com.glide.script.glide_elements.GlideElementGlideObject                       under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getJournalEntry          from com.glide.script.glide_elements.GlideElementGlideObject                       under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement setDateNumericValue      from com.glide.script.glide_elements.GlideElementGlideObject                       under com.glide.script.fencing.ScopedGlideElement

    // TODO: Implement getGlobalDisplayValue    from com.glide.PhoneNumber.GlideElementPhoneNumber                                 under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement setPhoneNumber           from com.glide.PhoneNumber.GlideElementPhoneNumber                                 under com.glide.script.fencing.ScopedGlideElement

    // TODO: Implement getProviderType          from com.glide.stages.GlideElementWorkflow                                         under com.glide.script.fencing.ScopedGlideElement
    // TODO: Implement getStages                from com.glide.stages.GlideElementWorkflow                                         under com.glide.script.fencing.ScopedGlideElement

    // TODO: Implement getVariablesValue        from com.glide.vars2.GlideElementVariables                                         under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    
    // TODO: Implement isMultiRow               from com.glide.vars2.GlideElementVariable                                          under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    
    // TODO: Implement addRow                   from com.glide.catalog.component.variables.models.table.api.ITableVariableNode     under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    // TODO: Implement canCreate                from com.glide.catalog.component.variables.models.table.api.ITableVariableNode     under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    // TODO: Implement canRead                  from com.glide.catalog.component.variables.models.table.api.ITableVariableNode     under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    // TODO: Implement canWrite                 from com.glide.catalog.component.variables.models.table.api.ITableVariableNode     under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    // TODO: Implement deleteRow                from com.glide.catalog.component.variables.models.table.api.ITableVariableNode     under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    // TODO: Implement getCells                 from com.glide.catalog.component.variables.models.table.api.ITableVariableNode     under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    // TODO: Implement getLabel                 from com.glide.catalog.component.variables.models.table.api.ITableVariableNode     under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    // TODO: Implement getQuestionIds           from com.glide.catalog.component.variables.models.table.api.ITableVariableNode     under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    // TODO: Implement getRow                   from com.glide.catalog.component.variables.models.table.api.ITableVariableNode     under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    // TODO: Implement getRowCount              from com.glide.catalog.component.variables.models.table.api.ITableVariableNode     under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    // TODO: Implement getRows                  from com.glide.catalog.component.variables.models.table.api.ITableVariableNode     under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    // TODO: Implement isMultiRow               from com.glide.catalog.component.variables.models.table.api.ITableVariableNode     under com.glide.script.fencing.ScopedGlideElement (category: catalog)

    // TODO: Implement deleteRow                from com.glide.catalog.component.variables.models.table.api.ITableVariableRowNode  under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    // TODO: Implement getCell                  from com.glide.catalog.component.variables.models.table.api.ITableVariableRowNode  under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    // TODO: Implement getCells                 from com.glide.catalog.component.variables.models.table.api.ITableVariableRowNode  under com.glide.script.fencing.ScopedGlideElement (category: catalog)

    // TODO: Implement getCellDisplayValue      from com.glide.catalog.component.variables.models.table.api.ITableVariableCellNode under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    // TODO: Implement getCellValue             from com.glide.catalog.component.variables.models.table.api.ITableVariableCellNode under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    // TODO: Implement getLabel                 from com.glide.catalog.component.variables.models.table.api.ITableVariableCellNode under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    // TODO: Implement getName                  from com.glide.catalog.component.variables.models.table.api.ITableVariableCellNode under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    // TODO: Implement getVariableName          from com.glide.catalog.component.variables.models.table.api.ITableVariableCellNode under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    // TODO: Implement setCellValue             from com.glide.catalog.component.variables.models.table.api.ITableVariableCellNode under com.glide.script.fencing.ScopedGlideElement (category: catalog)
    /**
     * Flag that indicates whether the current user has permissions to create new entries in the associated field.
     * @return {$$rhino.Boolean} True if the can create new entries; otherwise, false.
     * @memberof IGlideElement
     */
    canCreate(): $$rhino.Boolean;

    /**
     * Indicates whether the user's role permits them to read the associated {@link GlideRecord}.
     * @return {$$rhino.Boolean} True if the field can be read; otherwise, false.
     * @memberof IGlideElement
     */
    canRead(): $$rhino.Boolean;

    /**
     * Determines whether the user's role permits them to write to the associated {@link GlideRecord}.
     * @return {$$rhino.Boolean} True if the user can write to the field; otherwise, false.
     * @memberof IGlideElement
     */
    canWrite(): $$rhino.Boolean;
    
    /**
     * Determines if the current field has been modified. This functionality is available for all available data types, except Journal fields.
     * @memberof GlideElement
     * @returns {$$rhino.Boolean} True if the fields have been changed, false if the field has not.
     */
    changes(): $$rhino.Boolean;

    /**
     * Determines if the previous value of the current field matches the specified object.
     * @memberof GlideElement
     * @param {*} o - An object value to check against the previous value of the current field.
     * @returns {$$rhino.Boolean} True if the previous value matches, false if it does not.
     */
    changesFrom(o: any): $$rhino.Boolean;

    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @memberof GlideElement
     * @param {*} o - An object value to check against the new value of the current field.
     * @returns {$$rhino.Boolean} True if the previous value matches, false if it does not.
     */
    changesTo(o: any): $$rhino.Boolean;
    /**
     * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration field. Does not require the creation of a GlideDateTime object because the duration field is already a GlideDateTime object.
     * @memberof GlideElement
     * @returns {$$rhino.Number} Number of milliseconds since January 1, 1970, 00:00:00 GMT.
     */
    dateNumericValue(): $$rhino.Number;

    /**
     * Returns the value of the specified attribute from the dictionary.
     * If the attribute is a boolean attribute, use {@link #getBooleanAttribute} to get the value as a boolean rather than as a string.
     * @param {$$rhino.String} attributeName - Attribute name.
     * @return {$$rhino.String} The attribute value.
     * @memberof IGlideElement
     */
    getAttribute(attributeName: $$rhino.String): $$rhino.String;

    /**
     * Returns the Boolean value of the specified attribute from the dictionary.
     * @memberof GlideElement
     * @param {string} attributeName - Attribute name
     * @returns {$$rhino.Boolean} Boolean value of the attribute. Returns false if the attribute does not exist.
     */
    getBooleanAttribute(attributeName: string): $$rhino.Boolean;

    /**
     * Generates a choice list for a field.
     * @memberof GlideElement
     * @param {string} [dependent] - A dependent value
     * @returns {GlideChoice[]} An array list of choices.
     */
    getChoices(dependent?: string): GlideChoice[];

    /**
     * Returns the choice label for the current choice.
     * @memberof GlideElement
     * @returns {string} The selected choice's label.
     */
    getChoiceValue(): string;

    /**
     * Returns the clear text value for Password (2 way encrypted) fields in scoped applications.
     * @memberof GlideElement
     * @returns {string} The clear text password.
     */
    getDecryptedValue(): string;

    /**
     * Gets the formatted display value of the field.
     * @memberof GlideElement
     * @param {$$rhino.Number} [maxCharacters] - Maximum characters desired
     * @returns {string} The display value of the field.
     */
    getDisplayValue(maxCharacters?: $$rhino.Number): string;

    /**
     * 
     * @return {GlideElementDescriptor}
     * @memberof IGlideElement
     */
    getED(): GlideElementDescriptor;

    /**
     * Returns the phone number in international format.
     * @memberof GlideElement
     * @returns {string} The phone number in international format.
     */
    getGlobalDisplayValue(): string;

    /**
     * Returns the HTML value of a field.
     * @memberof GlideElement
     * @param {$$rhino.Number} [maxChars] - Maximum number of characters to return.
     * @returns {string} HTML value for the field.
     */
    getHTMLValue(maxChars?: $$rhino.Number): string;

    /**
     * Returns either the most recent journal entry or all journal entries.
     * @memberof GlideElement
     * @param {$$rhino.Number} mostRecent - If 1, returns the most recent entry. If -1, returns all journal entries.
     * @returns {string} For the most recent entry, returns a string that contains the field label, timestamp, and user display name of the journal entry.For all journal entries, returns the same information for all journal entries ever entered as a single string with each entry delimited by "\n\n".
     */
    getJournalEntry(mostRecent: $$rhino.Number): string;

    /**
     * Determines if a field is null.
     * @memberof GlideElement
     * @returns {$$rhino.Boolean} True if the field is null or an empty string, false if not.
     */
    getLabel(): $$rhino.String;

    /**
     * Returns the name of the field.
     * @memberof GlideElement
     * @returns {string} Field name.
     */
    getName(): string;

    /**
     * 
     * @return {$$rhino.String}
     * @memberof IGlideElement
     */
    getReferenceTable(): $$rhino.String;
    
    /**
     * 
     * @return {GlideRecord}
     * @memberof IGlideElement
     */
    getRefRecord(): GlideRecord;

    /**
     * Returns the name of the field.
     * @memberof GlideElement
     * @returns {string} Field name.
     */
    getTableName(): string;
    
    /**
     * 
     * @return {$$rhino.Boolean}
     * @memberof IGlideElement
     */
    nil(): $$rhino.Boolean;

    /**
     * Sets the value of a date/time element to the specified number of milliseconds since January 1, 1970 00:00:00 GMT.
     * @memberof GlideElement
     * @param {$$rhino.Number} milliseconds - Number of milliseconds since 1/1/1970
     */
    setDateNumericValue(milliseconds: $$rhino.Number): void;

    /**
     * Sets the display value of the field.
     * @memberof GlideElement
     * @param {*} value - The value to set for the field.
     */
    setDisplayValue(value: any): void;

    /**
     * Adds an error message. Available in Fuji patch 3.
     * @memberof GlideElement
     * @param {string} errorMessage - The error message.
     */
    setError(errorMessage: string): void;

    /**
     * Sets the field to the specified phone number.
     * @memberof GlideElement
     * @param {*} phoneNumber - The phone number to set. This can be in either the international or local format.
     * @param {$$rhino.Boolean} strict - When true, specifies that the number specified must match the correct format. When false, the system attempts to correct an improperly formatted phone number.
     * @returns {$$rhino.Boolean} True if the value was set.
     */
    setPhoneNumber(phoneNumber: any, strict: $$rhino.Boolean): $$rhino.Boolean;

    /**
     * Sets the value of a field.
     * @memberof GlideElement
     * @param {*} value - Object value to set the field to.
     */
    setValue(value: any): void;
}

/**
 * TODO: Document GlideElementDescriptor
 * @class GlideElementDescriptor
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideElementDescriptorScopedAPI}
 * @implements {Packages.com.glide.script.fencing.ScopedElementDescriptor}
 */
declare class GlideElementDescriptor implements Packages.com.glide.script.fencing.ScopedElementDescriptor {
    // TODO: Implement getAttachmentEncryptionType from com.glide.script.fencing.ScopedElementDescriptor under com.glide.script.fencing.ScopedElementDescriptor
    // TODO: Implement getEncryptionType           from com.glide.script.fencing.ScopedElementDescriptor under com.glide.script.fencing.ScopedElementDescriptor
    // TODO: Implement getHint                     from com.glide.script.fencing.ScopedElementDescriptor under com.glide.script.fencing.ScopedElementDescriptor
    // TODO: Implement getInternalType             from com.glide.script.fencing.ScopedElementDescriptor under com.glide.script.fencing.ScopedElementDescriptor
    // TODO: Implement getLabel                    from com.glide.script.fencing.ScopedElementDescriptor under com.glide.script.fencing.ScopedElementDescriptor
    // TODO: Implement getLength                   from com.glide.script.fencing.ScopedElementDescriptor under com.glide.script.fencing.ScopedElementDescriptor
    // TODO: Implement getName                     from com.glide.script.fencing.ScopedElementDescriptor under com.glide.script.fencing.ScopedElementDescriptor
    // TODO: Implement getPlural                   from com.glide.script.fencing.ScopedElementDescriptor under com.glide.script.fencing.ScopedElementDescriptor
    // TODO: Implement getReference                from com.glide.script.fencing.ScopedElementDescriptor under com.glide.script.fencing.ScopedElementDescriptor
    // TODO: Implement getReferenceQualifier       from com.glide.script.fencing.ScopedElementDescriptor under com.glide.script.fencing.ScopedElementDescriptor
    // TODO: Implement getTableName                from com.glide.script.fencing.ScopedElementDescriptor under com.glide.script.fencing.ScopedElementDescriptor
    // TODO: Implement hasAttachmentsEncrypted     from com.glide.script.fencing.ScopedElementDescriptor under com.glide.script.fencing.ScopedElementDescriptor
    // TODO: Implement isAutoOrSysID               from com.glide.script.fencing.ScopedElementDescriptor under com.glide.script.fencing.ScopedElementDescriptor
    // TODO: Implement isChoiceTable               from com.glide.script.fencing.ScopedElementDescriptor under com.glide.script.fencing.ScopedElementDescriptor
    // TODO: Implement isEdgeEncrypted             from com.glide.script.fencing.ScopedElementDescriptor under com.glide.script.fencing.ScopedElementDescriptor
    // TODO: Implement isEncrypted                 from com.glide.script.fencing.ScopedElementDescriptor under com.glide.script.fencing.ScopedElementDescriptor
    // TODO: Implement isMandatory                 from com.glide.script.fencing.ScopedElementDescriptor under com.glide.script.fencing.ScopedElementDescriptor
    // TODO: Implement isVirtual                   from com.glide.script.fencing.ScopedElementDescriptor under com.glide.script.fencing.ScopedElementDescriptor
    /**
     * Returns the encryption type used for attachments on the element's table.
     * @memberof GlideElementDescriptor
     * @returns {$$rhino.String} The encryption type used on attachments. Returns null if attachments on the element's table are not being encrypted.
     */
    getAttachmentEncryptionType(): $$rhino.String;

    /**
     * Returns the element's encryption type.
     * @memberof GlideElementDescriptor
     * @returns {$$rhino.String} The element's encryption type. Returns null if the element is not encrypted.
     */
    getEncryptionType(): $$rhino.String;

    /**
     * Returns the element's internal data type.
     * @memberof GlideElementDescriptor
     * @returns {$$rhino.String} The element's internal data type.
     */
    getInternalType(): $$rhino.String;

    /**
     * Returns the element's label.
     * @memberof GlideElementDescriptor
     * @returns {$$rhino.String} The element's label.
     */
    getLabel(): $$rhino.String;

    /**
     * Returns the element's length.
     * @memberof GlideElementDescriptor
     * @returns {$$rhino.Number} The element's size.
     */
    getLength(): $$rhino.Number;

    /**
     * Returns the element's plural label.
     * @memberof GlideElementDescriptor
     * @returns {string} The element's plural label.
     */
    getPlural(): $$rhino.String;

    /**
     * Returns true if an encrypted attachment has been added to the table.
     * @memberof GlideElementDescriptor
     * @returns {$$rhino.Boolean} Returns true if an encrypted attachment has been added to the table.
     */
    hasAttachmentsEncrypted(): $$rhino.Boolean;

    /**
     * Returns true if the element is an automatically generated or system field.
     * @memberof GlideElementDescriptor
     * @returns {$$rhino.Boolean} True if the element is automatically generated or a system field.
     */
    isAutoOrSysID(): $$rhino.Boolean;

    /**
     * Returns true if the element is defined as a dropdown choice in its dictionary definition.
     * @memberof GlideElementDescriptor
     * @returns {$$rhino.Boolean} Returns true if the element is defined as a dropdown choice. Returns true even if there are no entries defined in the choice table. The last choice type, suggestion, does not return true.
     */
    isChoiceTable(): $$rhino.Boolean;

    /**
     * Returns true if an element is encrypted.
     * @memberof GlideElementDescriptor
     * @returns {$$rhino.Boolean} Returns true if the element is encrypted, false otherwise.
     */
    isEdgeEncrypted(): $$rhino.Boolean;

    /**
     * Returns true if the element is a virtual element.
     * @memberof GlideElementDescriptor
     * @returns {$$rhino.Boolean} Returns true if the element is a virtual element.
     */
    isVirtual(): $$rhino.Boolean;
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
    compareTo(o: GlideElementDescriptor): $$rhino.Number;
    getName(): $$rhino.String;
}

/**
 * GlideAggregate enables creating database aggregation queries.
 * @class GlideAggregate
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideAggregateScopedAPI}
 */
declare class GlideAggregate implements Packages.com.glide.script.fencing.ScopedGlideAggregate {
    // TODO: Implement _next                    from com.glide.script.fencing.ScopedGlideAggregate under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement _next                    from com.glide.script.GlideRecord                  under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement _query                   from com.glide.script.fencing.ScopedGlideAggregate under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement addAggregate             from com.glide.script.GlideAggregate               under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement addAggregate             from com.glide.script.GlideAggregateSandbox        under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement addBizCalendarTrend      from com.glide.script.GlideAggregate               under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement addEncodedQuery          from com.glide.script.GlideAggregate               under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement addEncodedQuery          from com.glide.script.GlideAggregateSandbox        under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement addNotNullQuery          from com.glide.script.fencing.ScopedGlideAggregate under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement addNullQuery             from com.glide.script.fencing.ScopedGlideAggregate under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement addQuery                 from com.glide.script.fencing.ScopedGlideAggregate under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement addTrend                 from com.glide.script.GlideAggregate               under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement getAggregate             from com.glide.script.GlideAggregate               under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement getAggregateEncodedQuery from com.glide.script.GlideAggregate               under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement getAggregateEncodedQuery from com.glide.script.GlideAggregateSandbox        under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement getCount                 from com.glide.script.GlideAggregate               under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement getCount                 from com.glide.script.GlideAggregateSandbox        under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement getEncodedQuery          from com.glide.script.GlideAggregate               under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement getEncodedQuery          from com.glide.script.GlideAggregateSandbox        under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement getRowCount              from com.glide.script.GlideAggregate               under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement getRowCount              from com.glide.script.GlideAggregateSandbox        under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement getTableName             from com.glide.script.GlideAggregate               under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement getTableName             from com.glide.script.GlideAggregateSandbox        under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement getValue                 from com.glide.script.GlideAggregate               under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement getValue                 from com.glide.script.GlideAggregateSandbox        under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement groupBy                  from com.glide.script.GlideAggregate               under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement groupBy                  from com.glide.script.GlideAggregateSandbox        under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement hasNext                  from com.glide.script.GlideAggregate               under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement hasNext                  from com.glide.script.GlideAggregateSandbox        under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement next                     from com.glide.script.fencing.ScopedGlideAggregate under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement next                     from com.glide.script.GlideAggregateSandbox        under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement next                     from com.glide.script.GlideRecord                  under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement orderBy                  from com.glide.script.GlideAggregate               under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement orderBy                  from com.glide.script.GlideAggregateSandbox        under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement orderByAggregate         from com.glide.script.GlideAggregate               under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement orderByAggregate         from com.glide.script.GlideAggregateSandbox        under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement orderByDesc              from com.glide.script.GlideAggregate               under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement orderByDesc              from com.glide.script.GlideAggregateSandbox        under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement query                    from com.glide.script.fencing.ScopedGlideAggregate under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement setGroup                 from com.glide.script.GlideAggregate               under com.glide.script.fencing.ScopedGlideAggregate
    // TODO: Implement setGroup                 from com.glide.script.GlideAggregateSandbox        under com.glide.script.fencing.ScopedGlideAggregate
    /**
     * Creates an instance of GlideAggregate.
     * @param {$$rhino.String} tableName - Name of the table.
     * @memberof GlideAggregate
     */
    constructor(tableName: $$rhino.String);

    /**
     * Adds an aggregate to a database query.
     * @param {AggregationType} agg - Name of an aggregate to include in a database query.
     * @param {$$rhino.String} [name] - Name of the field to group the results of the aggregation by.
     * @memberof GlideAggregate
     */
    addAggregate(agg: AggregationType, name?: $$rhino.String): void;

    /**
     * Adds an encoded query to the other queries that may have been set for this aggregate.
     * @param {$$rhino.String} query - An encoded query to add to the aggregate.
     * @memberof GlideAggregate
     */
    addEncodedQuery(query: $$rhino.String): void;

    /**
     * Adds a not null query to the aggregate.
     * @param {$$rhino.String} fieldName - The name of the field.
     * @return {GlideQueryCondition} The scoped query condition.
     * @memberof GlideAggregate
     */
    addNotNullQuery(fieldName: $$rhino.String): GlideQueryCondition;

    /**
     * Adds a null query to the aggregate.
     * @param {$$rhino.String} fieldName - The name of the field.
     * @return {GlideQueryCondition} The scoped query condition.
     * @memberof GlideAggregate
     */
    addNullQuery(fieldName: $$rhino.String): GlideQueryCondition;

    /**
     * Adds a query to the aggregate.
     * @param {$$rhino.String} name - The query to add.
     * @param {$$rhino.String} operator - The operator for the query.
     * @param {$$rhino.String} value - The list of values to include in the query.
     * @return {GlideQueryCondition} The query condition.
     * @memberof GlideAggregate
     */
    addQuery(name: $$rhino.String, operator: $$rhino.String, value: $$rhino.String): GlideQueryCondition;

    /**
     * Adds a trend for a specified field.
     * @param {$$rhino.String} fieldName - Name of the field for which trending should occur.
     * @param {AggregationInterval} timeInterval - Time interval for the trend.
     * @param {$$rhino.Number} [numUnits] - Only valid when timeInterval = minute. Number of minutes to include in the trend; default is 1.
     * @memberof GlideAggregate
     */
    addTrend(fieldName: $$rhino.String, timeInterval: AggregationInterval, numUnits?: $$rhino.Number): void;

    /**
     * Returns the value of an aggregate from the current record.
     * @param {AggregationType} agg - The type of the aggregate.
     * @param {$$rhino.String} name - Name of the field on which to perform the aggregation.
     * @return {$$rhino.String} The value of the aggregation.
     * @memberof GlideAggregate
     */
    getAggregate(agg: AggregationType, name: $$rhino.String): $$rhino.String;

    /**
     * Gets the query necessary to return the current aggregate.
     * @return {$$rhino.String} The encoded query to get the aggregate.
     * @memberof GlideAggregate
     */
    getAggregateEncodedQuery(): $$rhino.String;

    /**
     * Retrieves the encoded query.
     * @return {$$rhino.String} The encoded query.
     * @memberof GlideAggregate
     */
    getEncodedQuery(): $$rhino.String;

    /**
     * Retrieves the number of rows in the GlideAggregate object.
     * @return {$$rhino.Number} The number of rows in the GlideAggregate object.
     * @memberof GlideAggregate
     */
    getRowCount(): $$rhino.Number;

    /**
     * Retrieves the table name associated with this GlideAggregate object.
     * @return {$$rhino.String} The table name.
     * @memberof GlideAggregate
     */
    getTableName(): $$rhino.String;

    /**
     * Returns the value of the specified field.
     * @param {$$rhino.String} name - Name of the field within the current table to return.
     * @return {$$rhino.String} Value of the specified field.
     * @memberof GlideAggregate
     */
    getValue(name: $$rhino.String): $$rhino.String;

    /**
     * Provides the name of a field to use in grouping the aggregates.
     * May be called numerous times to set multiple group fields.
     * @param {$$rhino.String} name - Name of the field.
     * @memberof GlideAggregate
     */
    groupBy(name: $$rhino.String): void;
    
    /**
     * Determines if there are any more records in the GlideAggregate object.
     * @return {$$rhino.Boolean} True if there are more results in the query set; otherwise, false.
     * @memberof GlideAggregate
     */
    hasNext(): $$rhino.Boolean;

    /**
     * Moves to the next record in the GlideAggregate.
     * @return {$$rhino.Boolean} True if there are more records in the query set; otherwise, false.
     * @memberof GlideAggregate
     */
    next(): $$rhino.Boolean;

    /**
     * Orders the aggregates using the value of the specified field. The field will also be added to the group-by list.
     * @param {$$rhino.String} name - Name of the field to order the aggregates by.
     * @memberof GlideAggregate
     */
    orderBy(name: $$rhino.String): void;

    /**
     * Orders the aggregates based on the specified aggregate and field.
     * @param {AggregationType} agg - Type of aggregation.
     * @param {$$rhino.String} fieldName - Name of the field to aggregate.
     * @memberof GlideAggregate
     */
    orderByAggregate(agg: AggregationType, fieldName: $$rhino.String): void;

    /**
     * Sorts the aggregates in descending order based on the specified field. The field will also be added to the group-by list.
     * @param {$$rhino.String} name - Name of the field.
     * @memberof GlideAggregate
     */
    orderByDesc(name: $$rhino.String): void;

    /**
     * Issues the query and gets the results.
     * @memberof GlideAggregate
     */
    query(): void;

    /**
     * Sets whether the results are to be grouped.
     * @param {$$rhino.Boolean} b - When true, the results are grouped.
     * @memberof GlideAggregate
     */
    setGroup(b: $$rhino.Boolean): void;
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * The scoped GlideQueryCondition API provides additional AND or OR conditions that can be added to the current condition, allowing you to build complex queries.
 * @class GlideQueryCondition
 * @implements {Packages.com.glide.script.fencing.ScopedQueryCondition}
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideQueryConditionScopedAPI}
 * @todo Add members to GlideQueryCondition
 */
declare class GlideQueryCondition implements Packages.com.glide.script.fencing.ScopedQueryCondition {
    // TODO: Implement addCondition   from com.glide.script.fencing.ScopedQueryCondition under com.glide.script.fencing.ScopedQueryCondition
    // TODO: Implement addOrCondition from com.glide.script.fencing.ScopedQueryCondition under com.glide.script.fencing.ScopedQueryCondition
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * The scoped GlideSchedule API provides methods for performing operations on GlideSchedule objects, such as adding new schedule segments to a schedule, determining if a datetime is within the schedule, or setting the schedule timezone.
 * @class GlideSchedule
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideScheduleScopedAPI}
 * @todo Add members to GlideSchedule
 */
declare class GlideSchedule implements Packages.com.glide.script.fencing.ScopedGlideSchedule {
    // TODO: Implement add                      from com.glide.script.fencing.ScopedGlideSchedule under com.glide.script.fencing.ScopedGlideSchedule
    // TODO: Implement duration                 from com.glide.script.fencing.ScopedGlideSchedule under com.glide.script.fencing.ScopedGlideSchedule
    // TODO: Implement fetchTimeMapWithExcludes from com.glide.schedules.Schedule                 under com.glide.script.fencing.ScopedGlideSchedule
    // TODO: Implement getDaysOfWeek            from com.glide.schedules.Schedule                 under com.glide.script.fencing.ScopedGlideSchedule
    // TODO: Implement getName                  from com.glide.schedules.Schedule                 under com.glide.script.fencing.ScopedGlideSchedule
    // TODO: Implement getTimeMap               from com.glide.script.fencing.ScopedGlideSchedule under com.glide.script.fencing.ScopedGlideSchedule
    // TODO: Implement getTimeZone              from com.glide.schedules.Schedule                 under com.glide.script.fencing.ScopedGlideSchedule
    // TODO: Implement isInSchedule             from com.glide.schedules.Schedule                 under com.glide.script.fencing.ScopedGlideSchedule
    // TODO: Implement isValid                  from com.glide.schedules.Schedule                 under com.glide.script.fencing.ScopedGlideSchedule
    // TODO: Implement load                     from com.glide.schedules.Schedule                 under com.glide.script.fencing.ScopedGlideSchedule
    // TODO: Implement setTimeZone              from com.glide.schedules.Schedule                 under com.glide.script.fencing.ScopedGlideSchedule
    // TODO: Implement whenNext                 from com.glide.schedules.Schedule                 under com.glide.script.fencing.ScopedGlideSchedule
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideScheduleDateTime
 * @class GlideScheduleDateTime
 * @implements {Packages.com.glide.script.fencing.ScopedGlideScheduleDateTime}
 */
declare class GlideScheduleDateTime implements Packages.com.glide.script.fencing.ScopedGlideScheduleDateTime {
    // TODO: Implement addDays          from com.glide.glideobject.ScheduleDateTime               under com.glide.script.fencing.ScopedGlideScheduleDateTime
    // TODO: Implement addSeconds       from com.glide.glideobject.ScheduleDateTime               under com.glide.script.fencing.ScopedGlideScheduleDateTime
    // TODO: Implement convertTimeZone  from com.glide.glideobject.ScheduleDateTime               under com.glide.script.fencing.ScopedGlideScheduleDateTime
    // TODO: Implement getGlideDateTime from com.glide.script.fencing.ScopedGlideScheduleDateTime under com.glide.script.fencing.ScopedGlideScheduleDateTime
    // TODO: Implement getMS            from com.glide.glideobject.ScheduleDateTime               under com.glide.script.fencing.ScopedGlideScheduleDateTime
    // TODO: Implement getTimeZone      from com.glide.glideobject.ScheduleDateTime               under com.glide.script.fencing.ScopedGlideScheduleDateTime
    // TODO: Implement getValue         from com.glide.glideobject.ScheduleDateTime               under com.glide.script.fencing.ScopedGlideScheduleDateTime
    // TODO: Implement getValueInternal from com.glide.glideobject.ScheduleDateTime               under com.glide.script.fencing.ScopedGlideScheduleDateTime
    // TODO: Implement setMS            from com.glide.glideobject.ScheduleDateTime               under com.glide.script.fencing.ScopedGlideScheduleDateTime
    // TODO: Implement setTimeZone      from com.glide.glideobject.ScheduleDateTime               under com.glide.script.fencing.ScopedGlideScheduleDateTime
    // TODO: Implement setValue         from com.glide.glideobject.ScheduleDateTime               under com.glide.script.fencing.ScopedGlideScheduleDateTime
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideScheduleTimeSpan
 * @class GlideScheduleTimeSpan
 * @implements {Packages.com.glide.script.fencing.ScopedGlideScheduleTimeSpan}
 */
declare class GlideScheduleTimeSpan implements Packages.com.glide.script.fencing.ScopedGlideScheduleTimeSpan {
    // TODO: Implement getAllDay from com.glide.schedules.ScheduleTimeSpan under com.glide.script.fencing.ScopedGlideScheduleTimeSpan
    // TODO: Implement getID     from com.glide.schedules.ScheduleTimeSpan under com.glide.script.fencing.ScopedGlideScheduleTimeSpan
    // TODO: Implement getName   from com.glide.schedules.ScheduleTimeSpan under com.glide.script.fencing.ScopedGlideScheduleTimeSpan
    // TODO: Implement getSpans  from com.glide.schedules.ScheduleTimeSpan under com.glide.script.fencing.ScopedGlideScheduleTimeSpan
    // TODO: Implement getType   from com.glide.schedules.ScheduleTimeSpan under com.glide.script.fencing.ScopedGlideScheduleTimeSpan
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideScheduleDateTimeSpan
 * @class GlideScheduleDateTimeSpan
 * @implements {Packages.com.glide.script.fencing.ScopedGlideScheduleDateTimeSpan}
 */
declare class GlideScheduleDateTimeSpan implements Packages.com.glide.script.fencing.ScopedGlideScheduleDateTimeSpan {
    // TODO: Implement getEnd            from com.glide.script.fencing.ScopedGlideScheduleDateTimeSpan under com.glide.script.fencing.ScopedGlideScheduleDateTimeSpan
    // TODO: Implement getEndTimeSpan    from com.glide.script.fencing.ScopedGlideScheduleDateTimeSpan under com.glide.script.fencing.ScopedGlideScheduleDateTimeSpan
    // TODO: Implement getOriginTimeSpan from com.glide.script.fencing.ScopedGlideScheduleDateTimeSpan under com.glide.script.fencing.ScopedGlideScheduleDateTimeSpan
    // TODO: Implement getStart          from com.glide.script.fencing.ScopedGlideScheduleDateTimeSpan under com.glide.script.fencing.ScopedGlideScheduleDateTimeSpan
    // TODO: Implement getStartTimeSpan  from com.glide.script.fencing.ScopedGlideScheduleDateTimeSpan under com.glide.script.fencing.ScopedGlideScheduleDateTimeSpan
    // TODO: Implement toString          from com.glide.schedules.ScheduleDateTimeSpan                 under com.glide.script.fencing.ScopedGlideScheduleDateTimeSpan
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideScheduleTimeMap
 * @class GlideScheduleTimeMap
 * @implements {Packages.com.glide.script.fencing.ScopedGlideScheduleTimeMap}
 */
declare class GlideScheduleTimeMap implements Packages.com.glide.script.fencing.ScopedGlideScheduleTimeMap {
    // TODO: Implement buildMap      from com.glide.schedules.ScheduleTimeMap                 under com.glide.script.fencing.ScopedGlideScheduleTimeMap
    // TODO: Implement dumpTimeMapTZ from com.glide.schedules.ScheduleTimeMap                 under com.glide.script.fencing.ScopedGlideScheduleTimeMap
    // TODO: Implement hasNext       from com.glide.schedules.ScheduleTimeMap                 under com.glide.script.fencing.ScopedGlideScheduleTimeMap
    // TODO: Implement isEmpty       from com.glide.schedules.ScheduleTimeMap                 under com.glide.script.fencing.ScopedGlideScheduleTimeMap
    // TODO: Implement next          from com.glide.script.fencing.ScopedGlideScheduleTimeMap under com.glide.script.fencing.ScopedGlideScheduleTimeMap
    // TODO: Implement overlapsWith  from com.glide.script.fencing.ScopedGlideScheduleTimeMap under com.glide.script.fencing.ScopedGlideScheduleTimeMap
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * The scoped GlideDateTime class provides methods for performing operations on GlideDateTime objects, such as instantiating GlideDateTime objects or working with glide_date_time fields.
 * @class GlideDateTime
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_APIRef}
 */
declare class GlideDateTime implements Packages.com.glide.script.fencing.ScopedGlideDateTime {
    // TODO: Implement add                           from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement addDaysLocalTime              from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement addDaysUTC                    from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement addMonthsLocalTime            from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement addMonthsUTC                  from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement addSeconds                    from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement addWeeksLocalTime             from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement addWeeksUTC                   from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement addYearsLocalTime             from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement addYearsUTC                   from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement after                         from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement before                        from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement compareTo                     from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement equals                        from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getDate                       from com.glide.script.fencing.ScopedGlideDateTime under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getDayOfMonthLocalTime        from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getDayOfMonthUTC              from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getDayOfWeekLocalTime         from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getDayOfWeekUTC               from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getDaysInMonthLocalTime       from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getDaysInMonthUTC             from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getDisplayValue               from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getDisplayValueInternal       from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getDisplayValueWithoutTZ      from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getDSTOffset                  from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getErrorMsg                   from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getInternalFormattedLocalTime from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getLocalDate                  from com.glide.script.fencing.ScopedGlideDateTime under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getLocalTime                  from com.glide.script.fencing.ScopedGlideDateTime under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getMonthLocalTime             from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getMonthUTC                   from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getNumericValue               from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getTime                       from com.glide.script.fencing.ScopedGlideDateTime under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getTZOffset                   from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getUserFormattedLocalTime     from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getUTCValue                   from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getValue                      from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getWeekOfYearLocalTime        from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getWeekOfYearUTC              from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getYearLocalTime              from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement getYearUTC                    from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement hasDate                       from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement hashCode                      from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement isDST                         from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement isValid                       from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement onOrAfter                     from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement onOrBefore                    from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement setDayOfMonthLocalTime        from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement setDayOfMonthUTC              from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement setDisplayValue               from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement setDisplayValueInternal       from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement setGlideDateTime              from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement setMonthLocalTime             from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement setMonthUTC                   from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement setNumericValue               from com.glide.script.fencing.ScopedGlideDateTime under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement setValue                      from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement setValueUTC                   from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement setYearLocalTime              from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement setYearUTC                    from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement subtract                      from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement subtract                      from com.glide.script.fencing.ScopedGlideDateTime under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    // TODO: Implement toString                      from com.glide.glideobject.GlideDateTime          under com.glide.script.fencing.ScopedGlideDateTime (category: datetime utilities)
    /**
     * Creates an instance of GlideDateTime with the current date time time.
     * @memberof GlideDateTime
     */
    constructor();
    
    /**
     * Creates an instance of GlideDateTime set to the time of the GlideDateTime object passed in the parameter.
     * @param {GlideDateTime} g - The GlideDateTime object to use for setting the time of the new object.
     * @memberof GlideDateTime
     */
    constructor(g: GlideDateTime);

    /**
     * Creates an instance of GlideDateTimefrom a date and time value in the UTC time zone specified with the format yyyy-MM-dd HH:mm:ss.
     * @param {$$rhino.String} value - A UTC date and time using the internal format yyyy-MM-dd HH:mm:ss.
     * @memberof GlideDateTime
     */
    constructor(value: $$rhino.String);

    /**
     * Adds a GlideTime object to the current GlideDateTime object.
     * @param {GlideTime} gd - GlideTime object whose time value to add to the specified GlideDateTime object.
     * @memberof GlideDateTime
     */
    add(gd: GlideTime): void;

    /**
     * Adds the specified number of milliseconds to the current GlideDateTime object.
     * @param {$$rhino.Number} milliseconds - The number of milliseconds to add.
     * @memberof GlideDateTime
     */
    add(milliseconds: $$rhino.Number): void;
    /**
     * 
     * Adds a specified number of days to the current GlideDateTime object.
     * A negative parameter subtracts days.
     * The method determines the local date and time equivalent to the value stored by the GlideDateTime object,
     * then adds or subtracts days using the local date and time values.
     * @param {$$rhino.Number} days - The number of days to add. Use a negative value to subtract.
     * @memberof GlideDateTime
     */
    addDaysLocalTime(days: $$rhino.Number): void;

    /**
     * Adds a specified number of days to the current GlideDateTime object.
     * A negative parameter subtracts days. The method determines the UTC date and time equivalent to the value stored by the GlideDateTime object,
     * then adds or subtracts days using the UTC date and time values.
     * @param {$$rhino.Number} days - The number of days to add. Use a negative number to subtract.
     * @memberof GlideDateTime
     */
    addDaysUTC(days: $$rhino.Number): void;

    /**
     * Adds a specified number of months to the current GlideDateTime object.
     * A negative parameter subtracts months. The method determines the local date and time equivalent to the value stored by the GlideDateTime object,
     * then adds or subtracts months using the local date and time values.
     * @param {$$rhino.Number} months - The number of months to add. use a negative value to subtract.
     * @memberof GlideDateTime
     */
    addMonthsLocalTime(months: $$rhino.Number): void;

    /**
     * Adds a specified number of months to the current GlideDateTime object.
     * A negative parameter subtracts months. The method determines the UTC date and time equivalent to the value stored by the GlideDateTime object,
     * then adds or subtracts months using the UTC date and time values.
     * @param {$$rhino.Number} months - The number of months to add. use a negative value to subtract.
     * @memberof GlideDateTime
     */
    addMonthsUTC(months: $$rhino.Number): void;

    /**
     * Adds the specified number of seconds to the current GlideDateTime object.
     * @param {$$rhino.Number} seconds - The number of seconds to add.
     * @memberof GlideDateTime
     */
    addSeconds(seconds: $$rhino.Number): void;

    /**
     * Adds a specified number of weeks to the current GlideDateTime object.
     * A negative parameter subtracts weeks. The method determines the local date and time equivalent to the value stored by the GlideDateTime object,
     * then adds or subtracts weeks using the local date and time values.
     * @param {$$rhino.Number} weeks - The number of weeks to add. Use a negative value to subtract.
     * @memberof GlideDateTime
     */
    addWeeksLocalTime(weeks: $$rhino.Number): void;

    /**
     * Adds a specified number of weeks to the current GlideDateTime object.
     * A negative parameter subtracts weeks. The method determines the UTC date and time equivalent to the value stored by the GlideDateTime object,
     * then adds or subtracts weeks using the UTC date and time values.
     * @param {$$rhino.Number} weeks - The number of weeks to add. Use a negative value to subtract.
     * @memberof GlideDateTime
     */
    addWeeksUTC(weeks: $$rhino.Number): void;

    /**
     * Adds a specified number of years to the current GlideDateTime object.
     * A negative parameter subtracts years. The method determines the local date and time equivalent to the value stored by the GlideDateTime object,
     * then adds or subtracts years using the local date and time values.
     * @param {$$rhino.Number} years - The number of weeks to add. Use a negative value to subtract.
     * @memberof GlideDateTime
     */
    addYearsLocalTime(years: $$rhino.Number): void;

    /**
     * Adds a specified number of years to the current GlideDateTime object.
     * A negative parameter subtracts years. The date and time value stored by GlideDateTime object is interpreted as being in the UTC time zone.
     * @param {$$rhino.Number} years - The number of weeks to add. Use a negative value to subtract.
     * @memberof GlideDateTime
     */
    addYearsUTC(years: $$rhino.Number): void;

    /**
     * Determines if the GlideDateTime object's date and time occurs after the specified object's date and time.
     * @param {GlideDateTime} gdt - Date and time to check against.
     * @return {$$rhino.Boolean} True if the current GlideDateTime object date and time is after the specified object's date and time;
     * otherwise, false if the current GlideDateTime object date and time is before or equal to the specified object's date and time.
     * @memberof GlideDateTime
     */
    after(gdt: GlideDateTime): $$rhino.Boolean;

    /**
     * Determines if the GlideDateTime object's date and time occurs before the specified GlideDateTime object's date and time.
     * @param {GlideDateTime} gdt - Date and time to check against.
     * @return {$$rhino.Boolean} True if the current GlideDateTime object date and time is before the specified object's date and time;
     * otherwise, false if the current GlideDateTime object date and time is after or equal to the specified object's date and time.
     * @memberof GlideDateTime
     */
    before(gdt: GlideDateTime): $$rhino.Boolean;

    /**
     * Compares two date and time objects to determine whether they are equivalent or one occurs before or after the other.
     * @param {(GlideDateTime | $$rhino.String)} o - Date and time object in GlideDateTime format.
     * @return {$$rhino.Number} Less than 0 if the current GlideDateTime object is less than the date specified in the parameter;
     * Greater than 0 if the current GlideDateTime is greater than the date specified in the parameter;
     * otherwise, 0 if the current GlideDateTime is equal to the date specified in the parameter.
     * @memberof GlideDateTime
     */
    compareTo(o: GlideDateTime | $$rhino.String): $$rhino.Number;

    /**
     * Compares a datetime with an existing value for equality.
     * @param {(GlideDateTime | $$rhino.String)} dateTime - 
     * @return {$$rhino.Boolean} True if the current GlideDateTime object equal to the date specified in the parameter; otherwise, false;
     * @memberof GlideDateTime
     */
    equals(dateTime: GlideDateTime | $$rhino.String): $$rhino.Boolean;

    /**
     * Returns the date stored by the GlideDateTime object. Expressed in the standard format, yyyy-MM-dd, and in the system time zone, GMT by default.
     * @return {$$rhino.String} Date in the system time zone.
     * @memberof GlideDateTime
     */
    getDate(): $$rhino.String;

    /**
     * Gets the day of the month stored by the GlideDateTime object, expressed in the current user's time zone.
     * @return {$$rhino.Number} The day of the month in the user's time zone, from 1 to 31.
     * @memberof GlideDateTime
     */
    getDayOfMonthLocalTime(): $$rhino.Number;

    /**
     * Gets the day of the month stored by the GlideDateTime object, expressed in the UTC time zone.
     * @return {$$rhino.Number} The day of the month in the UTC time zone, from 1 to 31.
     * @memberof GlideDateTime
     */
    getDayOfMonthUTC(): $$rhino.Number;

    /**
     * Gets the day of the week stored by the GlideDateTime object, expressed in the user's time zone.
     * @return {$$rhino.Number} The day of the month in the UTC time zone, from 1 to 31.
     * @memberof GlideDateTime
     */
    getDayOfWeekLocalTime(): $$rhino.Number;

    /**
     * Gets the day of the week stored by the GlideDateTime object, expressed in the UTC time zone.
     * @return {$$rhino.Number} The day of week value from 1 to 7. Monday equals 1, Sunday equals 7.
     * @memberof GlideDateTime
     */
    getDayOfWeekUTC(): $$rhino.Number;

    /**
     * Gets the number of days in the month stored by the GlideDateTime object, expressed in the current user's time zone.
     * @return {$$rhino.Number} The number of days in the current month in the user's time zone.
     * @memberof GlideDateTime
     */
    getDaysInMonthLocalTime(): $$rhino.Number;

    /**
     * Gets the number of days in the month stored by the GlideDateTime object, expressed in the UTC time zone.
     * @return {$$rhino.Number} The number of days in the month stored by the GlideDateTime object, expressed in the UTC time zone.
     * @memberof GlideDateTime
     */
    getDaysInMonthUTC(): $$rhino.Number;

    /**
     * Gets the date and time value in the current user's display format and time zone.
     * @return {$$rhino.String} The date and time in the user's format and time zone.
     * Keep in mind when designing business rules or script includes that this method may return values in different formats for different users.
     * @memberof GlideDateTime
     */
    getDisplayValue(): $$rhino.String;

    /**
     * Gets the display value in the internal format (yyyy-MM-dd HH:mm:ss).
     * @return {$$rhino.String} The date and time values for the GlideDateTime object in the current user's time zone and the internal date and time format of yyyy-MM-dd HH:mm:ss.
     * @memberof GlideDateTime
     */
    getDisplayValueInternal(): $$rhino.String;

    /**
     * Gets the amount of time that daylight saving time is offset.
     * @return {$$rhino.Number} Amount of time, in milliseconds, that daylight saving is offset.
     * Returns 0 if there is no offset or if the time is not during daylight saving time.
     * @memberof GlideDateTime
     */
    getDSTOffset(): $$rhino.Number;

    /**
     * Gets the current error message.
     * @return {$$rhino.String} The error message.
     * @memberof GlideDateTime
     */
    getErrorMsg(): $$rhino.String;

    /**
     * Returns the object's time in the local time zone and in the internal format.
     * @return {$$rhino.String} The object's time in the local time zone and the internal format.
     * @memberof GlideDateTime
     */
    getInternalFormattedLocalTime(): $$rhino.String;

    /**
     * Gets the date stored by the GlideDateTime object, expressed in the standard format, yyyy-MM-dd, and the current user's time zone.
     * @return {GlideDate} The date in the user's time zone.
     * @memberof GlideDateTime
     */
    getLocalDate(): GlideDate;

    /**
     * Returns a GlideTime object that represents the time portion of the GlideDateTime object in the user's time zone.
     * @return {GlideTime} The time in the user's time zone.
     * @memberof GlideDateTime
     */
    getLocalTime(): GlideTime;

    /**
     * Gets the month stored by the GlideDateTime object, expressed in the current user's time zone.
     * @return {$$rhino.Number} The numerical value of the month.
     * @memberof GlideDateTime
     */
    getMonthLocalTime(): $$rhino.Number;

    /**
     * Gets the month stored by the GlideDateTime object, expressed in the UTC time zone.
     * @return {$$rhino.Number} The numerical value of the month.
     * @memberof GlideDateTime
     */
    getMonthUTC(): $$rhino.Number;

    /**
     * Gets the number of milliseconds since January 1, 1970, 00:00:00 GMT.
     * @return {$$rhino.Number} The number of milliseconds since January 1, 1970, 00:00:00 GMT.
     * @memberof GlideDateTime
     */
    getNumericValue(): $$rhino.Number;

    /**
     * Returns a GlideTime object that represents the time portion of the GlideDateTime object.
     * @return {GlideTime} The Unix duration stamp in system format based on GMT time.
     * @memberof GlideDateTime
     */
    getTime(): GlideTime;

    /**
     * Gets the time zone offset in milliseconds.
     * @return {$$rhino.Number} The number of milliseconds of time zone offset.
     * @memberof GlideDateTime
     */
    getTZOffset(): $$rhino.Number;

    /**
     * Returns the object's time in the local time zone and in the user's format.
     * @return {$$rhino.String} The object's time in the local time zone and in the user's format.
     * @memberof GlideDateTime
     */
    getUserFormattedLocalTime(): $$rhino.String;

    /**
     * Gets the date and time value stored by the GlideDateTime object in the internal format, yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default.
     * @return {$$rhino.String} The date and time value in the internal format and system time zone.
     * @memberof GlideDateTime
     */
    getValue(): $$rhino.String;

    /**
     * Gets the number of the week stored by the GlideDateTime object, expressed in the current user's time zone.
     * All weeks begin on Sunday. The first week of the year is the week that contains at least one day of the new year.
     * The week beginning Sunday 2015-12-27 is considered the first week of 2016 as that week contains January 1 and 2.
     * @return {$$rhino.Number} The number of the current week in local time. The highest week number in a year is either 52 or 53.
     * @memberof GlideDateTime
     */
    getWeekOfYearLocalTime(): $$rhino.Number;

    /**
     * Gets the number of the week stored by the GlideDateTime object, expressed in the UTC time zone.
     * All weeks begin on Sunday. The first week of the year is the week that contains at least one day of the new year.
     * The week beginning Sunday 2015-12-27 is considered the first week of 2016 as that week contains January 1 and 2.
     * @return {$$rhino.Number} The number of the current week in UTC time. The highest week number in a year is either 52 or 53.
     * @memberof GlideDateTime
     */
    getWeekOfYearUTC(): $$rhino.Number;

    /**
     * Gets the year stored by the GlideDateTime object, expressed in the current user's time zone.
     * @return {$$rhino.Number} Four-digit year value in the user's time zone.
     * @memberof GlideDateTime
     */
    getYearLocalTime(): $$rhino.Number;

    /**
     * Gets the year stored by the GlideDateTime object, expressed in the UTC time zone.
     * @return {$$rhino.Number} 4-digit year value in the UTC time zone.
     * @memberof GlideDateTime
     */
    getYearUTC(): $$rhino.Number;

    /**
     * Determines if an object's date is set.
     * @return {$$rhino.Boolean} True if the object date is set; otherwise, returns false.
     * @memberof GlideDateTime
     */
    hasDate(): $$rhino.Boolean;

    /**
     * Determines if an object's time uses a daylight saving offset.
     * @return {$$rhino.Boolean} True if the time is daylight saving; otherwise, returns false.
     * @memberof GlideDateTime
     */
    isDST(): $$rhino.Boolean;

    /**
     * Determines if a value is a valid date and time.
     * @return {$$rhino.Boolean} True if value is valid; otherwise, returns false.
     * @memberof GlideDateTime
     */
    isValid(): $$rhino.Boolean;

    /**
     * Determines if the GlideDateTime object's data and time occurs on or after the specified GlideDateTime object's date and time.
     * @param {GlideDateTime} gdt - Date and time to check against.
     * @return {$$rhino.Boolean} True if the current GlideDateTime object date and time is on or after the specified object's date and time; otherwise, false.
     * @memberof GlideDateTime
     */
    onOrAfter(gdt: GlideDateTime): $$rhino.Boolean;

    /**
     * Determines if the GlideDateTime object's data and time occurs on or before the specified GlideDateTime object's date and time.
     * @param {GlideDateTime} gdt - Date and time to check against.
     * @return {$$rhino.Boolean} True if the current GlideDateTime object date and time is on or before the specified object's date and time; otherwise, false.
     * @memberof GlideDateTime
     */
    onOrBefore(gdt: GlideDateTime): $$rhino.Boolean;

    /**
     * Sets the day of the month to a specified value in the current user's time zone.
     * @param {$$rhino.Number} day - The day of month to change to, from 1 to 31.
     * If this value is greater than the maximum number of days in the month, the value is set to the last day of the month.
     * @memberof GlideDateTime
     */
    setDayOfMonthLocalTime(day: $$rhino.Number): void;

    /**
     * Sets the day of the month to a specified value in the UTC time zone.
     * @param {$$rhino.Number} day - The day of month to change to, from 1 to 31.
     * If this value is greater than the maximum number of days in the month, the value is set to the last day of the month.
     * @memberof GlideDateTime
     */
    setDayOfMonthUTC(day: $$rhino.Number): void;

    /**
     * Sets a date and time value using the current user's display format and time zone.
     * @param {$$rhino.String} asDisplayed - The date and time in the current user's display format and time zone.
     * The parameter must be formatted using the current user's preferred display format, such as MM-dd-yyyy HH:mm:ss.
     * To assign the current date and time to a variable in a workflow script, use variable.setDisplayValue(gs.nowDateTime);.
     * @memberof GlideDateTime
     */
    setDisplayValue(asDisplayed: $$rhino.String): void;

    /**
     * Sets a date and time value using the current user's time zone and the specified date and time format.
     * This method throws a runtime exception if the date and time format used in the value parameter does not match the format parameter.
     * You can retrieve the error message by calling getErrorMsg() on the GlideDateTime object after the exception is caught.
     * @param {$$rhino.String} value - Date and time in the current user's time zone.
     * @param {$$rhino.String} format - Date and time format to use to parse the value parameter.
     * Use the following values to describe the value parameter:
     * dd=Day of the month;
     * MM=Month of the year;
     * yyyy=Year;
     * HH=Hour;
     * mm=Minutes;
     * ss=Seconds.
     * For example: "dd-MM-yyyy HH:mm:ss" or "MM-dd-yyyy HH:mm".
     * @memberof GlideDateTime
     */
    setDisplayValue(value: $$rhino.String, format: $$rhino.String): void;
    
    /**
     * Sets a date and time value using the internal format (yyyy-MM-dd HH:mm:ss) and the current user's time zone.
     * @param {$$rhino.String} value - The date and time in internal format.
     * @memberof GlideDateTime
     */
    setDisplayValueInternal(value: $$rhino.String): void;

    /**
     * Sets the date and time of the current object using an existing GlideDateTime object. This method is equivalent to instantiating a new object with a GlideDateTime parameter.
     * @param {GlideDateTime} g - The object to use for setting the datetime value.
     * @memberof GlideDateTime
     */
    setGlideDateTime(g: GlideDateTime): void;

    /**
     * Sets the month stored by the GlideDateTime object to the specified value using the current user's time zone.
     * @param {$$rhino.Number} month - The month to change to.
     * @memberof GlideDateTime
     */
    setMonthLocalTime(month: $$rhino.Number): void;

    /**
     * Sets the month stored by the GlideDateTime object to the specified value using the UTC time zone.
     * @param {$$rhino.Number} month - The month to change to.
     * @memberof GlideDateTime
     */
    setMonthUTC(month: $$rhino.Number): void;

    /**
     * Sets the date and time of the GlideDateTime object.
     * @param {$$rhino.Number} o -The Number value as milliseconds past January 1, 1970 00:00:00 GMT.
     * @memberof GlideDateTime
     */
    setValue(o: $$rhino.Number): void;

    /**
     * Sets the date and time of the GlideDateTime object.
     * @param {GlideDateTime} o - The new date and time.
     * @memberof GlideDateTime
     */
    setValue(o: GlideDateTime): void;

    /**
     * Sets the date and time of the GlideDateTime object.
     * @param {$$rhino.String} o - A string in the UTC time zone and the internal format of yyyy-MM-dd HH:mm:ss.
     * Sets the value of the object to the specified date and time.
     * Using the method this way is equivalent to instantiating a new GlideDateTime object using the GlideDateTime(String value) constructor.
     * If the date and time format used does not match the internal format, the method attempts to set the date and time using other available formats.
     * Resolving the date and time this way can lead to inaccurate data due to ambiguity in the day and month values.
     * When using a non-standard date and time format, use setValueUTC(String dt, String format) instead.
     * @memberof GlideDateTime
     */
    setValue(o: $$rhino.String): void;

    /**
     * Sets a date and time value using the UTC time zone and the specified date and time format.
     * This method throws a runtime exception if the date and time format used in the dt parameter does not match the format parameter.
     * You can retrieve the error message by calling getErrorMsg() on the GlideDateTime object after the exception is caught.
     * @param {$$rhino.String} dt - The date and time to use.
     * @param {$$rhino.String} format - The date and time format to use.
     * @memberof GlideDateTime
     */
    setValueUTC(dt: $$rhino.String, format: $$rhino.String): void;

    /**
     * Sets the year stored by the GlideDateTime object to the specified value using the current user's time zone.
     * @param {$$rhino.Number} year - The year to change to.
     * @memberof GlideDateTime
     */
    setYearLocalTime(year: $$rhino.Number): void;

    /**
     * Sets the year stored by the GlideDateTime object to the specified value using the UTC time zone.
     * @param {$$rhino.Number} year - The year to change to.
     * @memberof GlideDateTime
     */
    setYearUTC(year: $$rhino.Number): void;

    /**
     * Returns the duration difference between two specified GlideDateTime objects.
     * @static
     * @param {GlideDateTime} start - Start date object.
     * @param {GlideDateTime} end - End date object.
     * @return {GlideDuration} Duration difference between the two specified dates.
     * @memberof GlideDateTime
     */
    static subtract(start: GlideDateTime, end: GlideDateTime): GlideDuration;

    /**
     * Subtracts a specified amount of time from the current GlideDateTime object.
     * @param {GlideTime} time - The time value to subtract.
     * @memberof GlideDateTime
     */
    subtract(time: GlideTime): void;

    /**
     * Subtracts the specified number of milliseconds from the GlideDateTime object.
     * @param {$$rhino.Number} milliseconds - Number of milliseconds to subtract.
     * @memberof GlideDateTime
     */
    subtract(milliseconds: $$rhino.Number): void;

    /**
     * Gets the date and time value stored by the GlideDateTime object in the internal format, yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default.
     * This method is equivalent to getValue().
     * @return {$$rhino.String} The date and time stored by the GlideDateTime object in the system time zone and format.
     * @memberof GlideDateTime
     */
    toString(): $$rhino.String;
    hashCode(): $$rhino.Number;
}

/**
 * The scoped GlideDate class provides methods for performing operations on GlideDate objects, such as instantiating GlideDate objects or working with GlideDate fields.
 * @class GlideDate
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideDateScopedAPI}
 */
declare class GlideDate implements Packages.com.glide.script.fencing.ScopedGlideDate {
    // TODO: Implement getByFormat             from com.glide.glideobject.GlideDate under com.glide.script.fencing.ScopedGlideDate
    // TODO: Implement getDayOfMonthNoTZ       from com.glide.glideobject.GlideDate under com.glide.script.fencing.ScopedGlideDate
    // TODO: Implement getDisplayValue         from com.glide.glideobject.GlideDate under com.glide.script.fencing.ScopedGlideDate
    // TODO: Implement getDisplayValueInternal from com.glide.glideobject.GlideDate under com.glide.script.fencing.ScopedGlideDate
    // TODO: Implement getMonthNoTZ            from com.glide.glideobject.GlideDate under com.glide.script.fencing.ScopedGlideDate
    // TODO: Implement getValue                from com.glide.glideobject.GlideDate under com.glide.script.fencing.ScopedGlideDate
    // TODO: Implement getYearNoTZ             from com.glide.glideobject.GlideDate under com.glide.script.fencing.ScopedGlideDate
    // TODO: Implement setDisplayValue         from com.glide.glideobject.GlideDate under com.glide.script.fencing.ScopedGlideDate
    // TODO: Implement setValue                from com.glide.glideobject.GlideDate under com.glide.script.fencing.ScopedGlideDate
    // TODO: Implement subtract                from com.glide.script.fencing.ScopedGlideDate under com.glide.script.fencing.ScopedGlideDate
    /**
     * Creates an instance of GlideDate with the current date time.
     * @memberof GlideDate
     */
    constructor();

    /**
     * Gets the date in the specified date format.
     * @param {$$rhino.String} format - Desired date format using Java SimpleDateFormat. For example, "dd-MM-yyyy" to get the day, month, and year, or "EEEE" to get the day of the week.
     * @return {$$rhino.Number} 
     * @memberof GlideDate
     * @see {@link https://docs.oracle.com/javase/10/docs/api/java/text/SimpleDateFormat.html}
     */
    getByFormat(format: $$rhino.String): $$rhino.Number;

    /**
     * Gets the day of the month stored by the GlideDate object, expressed in the UTC time zone.
     * @return {$$rhino.Number} 
     * @memberof GlideDate
     */
    getDayOfMonthNoTZ(): $$rhino.Number;

    /**
     * Gets the date in the current user's display format and time zone.
     * @return {$$rhino.String} 
     * @memberof GlideDate
     */
    getDisplayValue(): $$rhino.String;

    /**
     * Gets the date in the internal format (yyyy-MM-dd) and current user's timezone.
     * @return {$$rhino.String} 
     * @memberof GlideDate
     */
    getDisplayValueInternal(): $$rhino.String;

    /**
     * Gets the month stored by the GlideDate object, expressed in the UTC time zone.
     * @return {$$rhino.Number} 
     * @memberof GlideDate
     */
    getMonthNoTZ(): $$rhino.Number;

    /**
     * Gets the date in the internal format (yyyy-MM-dd) and the system time zone (UTC by default).
     * @return {$$rhino.String} 
     * @memberof GlideDate
     */
    getValue(): $$rhino.String;

    /**
     * Gets the year stored by the GlideDate object, expressed in the UTC time zone.
     * @return {$$rhino.Number} 
     * @memberof GlideDate
     */
    getYearNoTZ(): $$rhino.Number;
    
    /**
     * Sets a date value using the current user's display format and time zone.
     * @param {$$rhino.String} asDisplayed - 
     * @memberof GlideDate
     */
    setDisplayValue(asDisplayed: $$rhino.String): void;

    /**
     * Sets the date of the current GlideDate object in internal format (yyyy-MM-dd) and the system time zone (UTC by default).
     * @param {$$rhino.String} o - 
     * @memberof GlideDate
     */
    setValue(o: $$rhino.String): void;

    /**
     * Gets the duration difference between two GlideDate values.
     * @static
     * @param {GlideDate} start - 
     * @param {GlideDate} end - 
     * @return {GlideDuration} 
     * @memberof GlideDate
     */
    static subtract(start: GlideDate, end: GlideDate): GlideDuration;
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * The scoped GlideTime class provides methods for performing operations on GlideTime objects, such as instantiating GlideTime objects or working with GlideTime fields.
 * @class GlideTime
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideTimeScoped}
 * @todo Add members to GlideTime
 */
declare class GlideTime implements Packages.com.glide.script.fencing.ScopedGlideTime {
    // TODO: Implement getByFormat             from com.glide.glideobject.GlideTime          under com.glide.script.fencing.ScopedGlideTime
    // TODO: Implement getDisplayValue         from com.glide.glideobject.GlideTime          under com.glide.script.fencing.ScopedGlideTime
    // TODO: Implement getDisplayValueInternal from com.glide.glideobject.GlideTime          under com.glide.script.fencing.ScopedGlideTime
    // TODO: Implement getHourLocalTime        from com.glide.glideobject.GlideTime          under com.glide.script.fencing.ScopedGlideTime
    // TODO: Implement getHourOfDayLocalTime   from com.glide.glideobject.GlideTime          under com.glide.script.fencing.ScopedGlideTime
    // TODO: Implement getHourOfDayUTC         from com.glide.glideobject.GlideTime          under com.glide.script.fencing.ScopedGlideTime
    // TODO: Implement getHourUTC              from com.glide.glideobject.GlideTime          under com.glide.script.fencing.ScopedGlideTime
    // TODO: Implement getMinutesLocalTime     from com.glide.glideobject.GlideTime          under com.glide.script.fencing.ScopedGlideTime
    // TODO: Implement getMinutesUTC           from com.glide.glideobject.GlideTime          under com.glide.script.fencing.ScopedGlideTime
    // TODO: Implement getSeconds              from com.glide.glideobject.GlideTime          under com.glide.script.fencing.ScopedGlideTime
    // TODO: Implement getValue                from com.glide.glideobject.GlideTime          under com.glide.script.fencing.ScopedGlideTime
    // TODO: Implement setDisplayValue         from com.glide.glideobject.GlideTime          under com.glide.script.fencing.ScopedGlideTime
    // TODO: Implement setValue                from com.glide.glideobject.GlideTime          under com.glide.script.fencing.ScopedGlideTime
    // TODO: Implement subtract                from com.glide.script.fencing.ScopedGlideTime under com.glide.script.fencing.ScopedGlideTime
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * The GlideDuration class provides methods for working with spans of time known as durations.
 * GlideDuration objects store the duration as the number of days and time from January 1, 1970, 00:00:00.
 * As a result, setValue() and getValue() use the scoped GlideDateTime object for parameters and return values.
 * @class GlideDuration
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideDurationScopedAPI}
 */
declare class GlideDuration implements Packages.com.glide.script.fencing.ScopedGlideDuration {
    // TODO: Implement add               from com.glide.script.fencing.ScopedGlideDuration under com.glide.script.fencing.ScopedGlideDuration
    // TODO: Implement getByFormat       from com.glide.glideobject.GlideDuration          under com.glide.script.fencing.ScopedGlideDuration
    // TODO: Implement getDayPart        from com.glide.glideobject.GlideDuration          under com.glide.script.fencing.ScopedGlideDuration
    // TODO: Implement getDisplayValue   from com.glide.glideobject.GlideDuration          under com.glide.script.fencing.ScopedGlideDuration
    // TODO: Implement getDurationValue  from com.glide.glideobject.GlideDuration          under com.glide.script.fencing.ScopedGlideDuration
    // TODO: Implement getRoundedDayPart from com.glide.glideobject.GlideDuration          under com.glide.script.fencing.ScopedGlideDuration
    // TODO: Implement getValue          from com.glide.glideobject.GlideDuration          under com.glide.script.fencing.ScopedGlideDuration
    // TODO: Implement setDisplayValue   from com.glide.glideobject.GlideDuration          under com.glide.script.fencing.ScopedGlideDuration
    // TODO: Implement setValue          from com.glide.glideobject.GlideDuration          under com.glide.script.fencing.ScopedGlideDuration
    // TODO: Implement subtract          from com.glide.script.fencing.ScopedGlideDuration under com.glide.script.fencing.ScopedGlideDuration
    /**
     * Creates an instance of GlideDuration.
     * @memberof GlideDuration
     */
    constructor();
    
    /**
     * Creates an instance of GlideDuration.
     * @param {GlideDuration} another - GlideDuration object.
     * @memberof GlideDuration
     */
    constructor(another: GlideDuration);

    /**
     * Creates an instance of GlideDuration.
     * @param {$$rhino.Number} milliseconds - Duration value in milliseconds.
     * @memberof GlideDuration
     */
    constructor(milliseconds: $$rhino.Number);

    /**
     * Creates an instance of GlideDuration.
     * @param {$$rhino.String} displayValue - Duration value.
     * Format: d HH:mm:ss where "d" is number of days.
     * @memberof GlideDuration
     */
    constructor(displayValue: $$rhino.String);

    /**
     * Adds the duration of the specified GlideDuration object to the current GlideDuration object.
     * @param {GlideDuration} duration - GlideDuration object that contains the duration value to add to the current GlideDuration object.
     * @return {GlideDuration} New GlideDuration object whose duration is the sum of the durations of the two GlideDuration objects.
     * @memberof GlideDuration
     */
    add(duration: GlideDuration): GlideDuration;

    /**
     * Returns the duration value in the specified format.
     * @param {$$rhino.String} format - Duration format.
     * Format: Global date and time field format
     * @return {$$rhino.String} Current duration in the specified format.
     * @memberof GlideDuration
     * @see {@link https://docs.servicenow.com/bundle/rome-platform-administration/page/administer/time/reference/r_FormatDateAndTimeFields.html}
     */
    getByFormat(format: $$rhino.String): $$rhino.String; 

    /**
     * Returns the number of days.
     * @return {$$rhino.Number} Number of days in the duration.
     * @memberof GlideDuration
     */
    getDayPart(): $$rhino.Number;

    /**
     * Returns the display value of the duration in number of days, hours, and minutes.
     * @return {$$rhino.String} Number of days, hours, and minutes, such as 2 Days 10 Hours 36 Minutes.
     * Format: Display value: "n" Days "n" Hours "n" Minutes
     * @memberof GlideDuration
     */
    getDisplayValue(): $$rhino.String;

    /**
     * Returns the duration value in "d HH:mm:ss" format.
     * @return {$$rhino.String} Duration value.
     * Format: d HH:mm:ss where "d" is number of days.
     * @memberof GlideDuration
     */
    getDurationValue(): $$rhino.String;

    /**
     * Returns the rounded number of days. If the time part is more than 12 hours, the return value is rounded up. Otherwise, it is rounded down.
     * @return {$$rhino.Number} Day value of the display value rounded.
     * @memberof GlideDuration
     */
    getRoundedDayPart(): $$rhino.Number;

    /**
     * Returns the internal date/time value of the current GlideDuration object.
     * GlideDuration objects store the duration as a date and time from January 1, 1970, 00:00:00.
     * @return {$$rhino.String} Current duration within the GlideDuration object.
     * Format: YYYY-MM-DD HH:mm:ss
     * @memberof GlideDuration
     */
    getValue(): $$rhino.String;
    
    /**
     * Sets the duration display value.
     * @param {$$rhino.String} asDisplayed - Display duration value to set.
     * Format: d HH:mm:ss where "d" is number of days
     * @memberof GlideDuration
     */
    setDisplayValue(asDisplayed: $$rhino.String): void;

    /**
     * Sets the internal date/time value of the GlideDuration object.
     * The method sets the duration value to the difference of the passed in date/time the base date/time value of January 1, 1970, 00:00:00.
     * The passed in date/time object (string) is parsed into a GlideDateTime object.
     * @param {*} o - Date and time to use as the endpoint for the calculated duration time.
     * Format: YYYY-MM-DD HH:mm:ss
     * @memberof GlideDuration
     */
    setValue(o: any): void;
    
    /**
     * Subtracts the duration of the specified GlideDuration object to the current GlideDuration object.
     * @param {GlideDuration} duration - GlideDuration object that contains the duration value to subtract from the current GlideDuration object.
     * @return {GlideDuration} New GlideDuration object whose duration contains the result of the subtraction of the duration of the two GlideDuration objects.
     * @memberof GlideDuration
     */
    subtract(duration: GlideDuration): GlideDuration;
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document AJAXSchedulePage
 * @class AJAXSchedulePage
 * @implements {Packages.com.glide.script.fencing.ScopedAJAXSchedulePage}
 */
declare class AJAXSchedulePage implements Packages.com.glide.script.fencing.ScopedAJAXSchedulePage {
    // TODO: Implement addItem         from com.glide.script.fencing.ScopedAJAXSchedulePage under com.glide.script.fencing.ScopedAJAXSchedulePage
    // TODO: Implement addSchedule     from com.glide.script.fencing.ScopedAJAXSchedulePage under com.glide.script.fencing.ScopedAJAXSchedulePage
    // TODO: Implement addScheduleSpan from com.glide.script.fencing.ScopedAJAXSchedulePage under com.glide.script.fencing.ScopedAJAXSchedulePage
    // TODO: Implement darkenColor     from com.glide.script.fencing.ScopedAJAXSchedulePage under com.glide.script.fencing.ScopedAJAXSchedulePage
    // TODO: Implement getColor        from com.glide.script.fencing.ScopedAJAXSchedulePage under com.glide.script.fencing.ScopedAJAXSchedulePage
    // TODO: Implement getParameter    from com.glide.script.fencing.ScopedAJAXSchedulePage under com.glide.script.fencing.ScopedAJAXSchedulePage
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document AJAXScheduleItem
 * @class AJAXScheduleItem
 * @implements {Packages.com.glide.script.fencing.ScopedAJAXScheduleItem}
 */
declare class AJAXScheduleItem implements Packages.com.glide.script.fencing.ScopedAJAXScheduleItem {
    // TODO: Implement addMenuURL     from com.glide.script.fencing.ScopedAJAXScheduleItem under com.glide.script.fencing.ScopedAJAXScheduleItem
    // TODO: Implement setDescription from com.glide.script.fencing.ScopedAJAXScheduleItem under com.glide.script.fencing.ScopedAJAXScheduleItem
    // TODO: Implement setEditable    from com.glide.script.fencing.ScopedAJAXScheduleItem under com.glide.script.fencing.ScopedAJAXScheduleItem
    // TODO: Implement setName        from com.glide.script.fencing.ScopedAJAXScheduleItem under com.glide.script.fencing.ScopedAJAXScheduleItem
    // TODO: Implement setPopUp       from com.glide.script.fencing.ScopedAJAXScheduleItem under com.glide.script.fencing.ScopedAJAXScheduleItem
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * The GlideScopedEvaluator API allows you to evaluate scripts in a GlideRecord field from both scoped and global server scripts.
 * @class GlideScopedEvaluator
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideEvaluatorScopedAPI}
 * @todo Add members to GlideScopedEvaluator
 */
declare class GlideScopedEvaluator implements Packages.com.glide.script.fencing.ScriptableGlideScopedEvaluator {
    // TODO: Implement evaluateScript       from com.glide.script.fencing.ScriptableGlideScopedEvaluator under com.glide.script.fencing.ScriptableGlideScopedEvaluator
    // TODO: Implement getVariable          from com.glide.script.fencing.ScriptableGlideScopedEvaluator under com.glide.script.fencing.ScriptableGlideScopedEvaluator
    // TODO: Implement putVariable          from com.glide.script.fencing.ScriptableGlideScopedEvaluator under com.glide.script.fencing.ScriptableGlideScopedEvaluator
    // TODO: Implement reset                from com.glide.script.fencing.ScriptableGlideScopedEvaluator under com.glide.script.fencing.ScriptableGlideScopedEvaluator
    // TODO: Implement withEnforcedSecurity from com.glide.script.fencing.ScriptableGlideScopedEvaluator under com.glide.script.fencing.ScriptableGlideScopedEvaluator
    // TODO: Implement withInterpretedMode  from com.glide.script.fencing.ScriptableGlideScopedEvaluator under com.glide.script.fencing.ScriptableGlideScopedEvaluator
    // TODO: Implement withReturnError      from com.glide.script.fencing.ScriptableGlideScopedEvaluator under com.glide.script.fencing.ScriptableGlideScopedEvaluator
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * XMLDocument2 is a JavaScript Object wrapper for parsing and extracting XML data from an XML string.
 * @class XMLDocument2
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_XMLDocument2ScopedAPI}
 * @todo Add members to XMLDocument2
 */
declare class XMLDocument2 implements Packages.com.glide.script.fencing.ScopedXMLDocument2 {
    // TODO: Implement getNode                    from com.glide.script.fencing.ScopedXMLDocument2 under com.glide.script.fencing.ScopedXMLDocument2
    // TODO: Implement getFirstNode               from com.glide.script.fencing.ScopedXMLDocument2 under com.glide.script.fencing.ScopedXMLDocument2
    // TODO: Implement getNextNode                from com.glide.script.fencing.ScopedXMLDocument2 under com.glide.script.fencing.ScopedXMLDocument2
    // TODO: Implement createElement              from com.glide.script.fencing.ScopedXMLDocument2 under com.glide.script.fencing.ScopedXMLDocument2
    // TODO: Implement createElementWithTextValue from com.glide.script.fencing.ScopedXMLDocument2 under com.glide.script.fencing.ScopedXMLDocument2
    // TODO: Implement setCurrentElement          from com.glide.script.fencing.ScopedXMLDocument2 under com.glide.script.fencing.ScopedXMLDocument2
    // TODO: Implement getDocumentElement         from com.glide.script.fencing.ScopedXMLDocument2 under com.glide.script.fencing.ScopedXMLDocument2
    // TODO: Implement setNamespaceAware          from com.glide.script.fencing.ScopedXMLDocument2 under com.glide.script.fencing.ScopedXMLDocument2
    // TODO: Implement parseXML                   from com.glide.script.XMLDocument2               under com.glide.script.fencing.ScopedXMLDocument2
    // TODO: Implement getNodeText                from com.glide.script.XMLDocument2               under com.glide.script.fencing.ScopedXMLDocument2
    // TODO: Implement isValid                    from com.glide.script.XMLDocument2               under com.glide.script.fencing.ScopedXMLDocument2
    // TODO: Implement toString                   from com.glide.script.XMLDocument2               under com.glide.script.fencing.ScopedXMLDocument2
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
   
    toString(): $$rhino.String;
}

/**
 * The scoped XMLNode API allows you to query values from XML nodes. XMLNodes are extracted from XMLDocument2 objects, which contain XML strings.
 * @class XMLNode
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_XMLNodeScopedAPI}
 * @todo Add members to XMLNode
 */
declare class XMLNode implements Packages.com.glide.script.fencing.ScopedXMLNode {
    // TODO: Implement getLastChild         from com.glide.script.fencing.ScopedXMLNode under com.glide.script.fencing.ScopedXMLNode
    // TODO: Implement getFirstChild        from com.glide.script.fencing.ScopedXMLNode under com.glide.script.fencing.ScopedXMLNode
    // TODO: Implement getChildNodeIterator from com.glide.script.fencing.ScopedXMLNode under com.glide.script.fencing.ScopedXMLNode
    // TODO: Implement getAttributes        from com.glide.script.fencing.ScopedXMLNode under com.glide.script.fencing.ScopedXMLNode
    // TODO: Implement getTextContent       from com.glide.script.XMLNode               under com.glide.script.fencing.ScopedXMLNode
    // TODO: Implement getNodeValue         from com.glide.script.XMLNode               under com.glide.script.fencing.ScopedXMLNode
    // TODO: Implement getNodeName          from com.glide.script.XMLNode               under com.glide.script.fencing.ScopedXMLNode
    // TODO: Implement hasAttribute         from com.glide.script.XMLNode               under com.glide.script.fencing.ScopedXMLNode
    // TODO: Implement getAttribute         from com.glide.script.XMLNode               under com.glide.script.fencing.ScopedXMLNode
    // TODO: Implement setAttribute         from com.glide.script.XMLNode               under com.glide.script.fencing.ScopedXMLNode
    // TODO: Implement appendChild          from com.glide.script.XMLNode               under com.glide.script.fencing.ScopedXMLNode
    // TODO: Implement toString             from com.glide.script.XMLNode               under com.glide.script.fencing.ScopedXMLNode
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideSysTitle
 * @class GlideSysTitle
 * @implements {Packages.com.glide.ui.ng.script.ScopedNGSysTitle}
 */
declare class GlideSysTitle implements Packages.com.glide.ui.ng.script.ScopedNGSysTitle {
    // TODO: Implement getTitle from com.glide.ui.ng.script.ScopedNGSysTitle under com.glide.ui.ng.script.ScopedNGSysTitle
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * The scoped XMLNodeIterator class allows you to iterate through a node of a XML document.
 * @class XMLNodeIterator
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_XMLNodeIteratorAPI}
 * @todo Add members to XMLNodeIterator
 */
declare class XMLNodeIterator implements Packages.com.glide.script.fencing.ScopedXMLNodeIterator {
    // TODO: Implement hasNext from com.glide.script.XMLNodeIterator              under com.glide.script.fencing.ScopedXMLNodeIterator
    // TODO: Implement next   from com.glide.script.fencing.ScopedXMLNodeIterator under com.glide.script.fencing.ScopedXMLNodeIterator
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document SOAPDocument2
 * @class SOAPDocument2
 * @implements {Packages.com.glide.script.SOAPDocument2}
 */
declare class SOAPDocument2 implements Packages.com.glide.script.SOAPDocument2 {
    // TODO: Implement createBodyElement   from com.glide.script.SOAPDocument2 under com.glide.script.SOAPDocument2
    // TODO: Implement createElement       from com.glide.script.SOAPDocument2 under com.glide.script.SOAPDocument2
    // TODO: Implement createHeaderElement from com.glide.script.SOAPDocument2 under com.glide.script.SOAPDocument2
    // TODO: Implement getBody             from com.glide.script.SOAPDocument2 under com.glide.script.SOAPDocument2
    // TODO: Implement getBodyText         from com.glide.script.SOAPDocument2 under com.glide.script.SOAPDocument2
    // TODO: Implement setAttribute        from com.glide.script.SOAPDocument2 under com.glide.script.SOAPDocument2
    // TODO: Implement toString            from com.glide.script.SOAPDocument2 under com.glide.script.SOAPDocument2
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * The scoped GlideFormScratchpad class implements the g_scratchpad object for scoped applications.
 * @class GlideFormScratchpad
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideFormScratchpadScopedAPI}
 * @todo Add members to GlideFormScratchpad
 */
declare class GlideFormScratchpad implements Packages.com.glide.script.fencing.ScopedGlideFormScratchpad {
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * Provides the ability to read single lines from an input stream. Because an input stream is used, it is not subject to the 5MB attachment size limit.
 * @class GlideTextReader
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideTextReaderScopedAPI}
 * @todo Add members to GlideTextReader
 */
declare class GlideTextReader implements Packages.com.glide.script.fencing.GlideTextReader {
    // TODO: Implement getEncoding from com.glide.script.fencing.GlideTextReader under com.glide.script.fencing.GlideTextReader
    // TODO: Implement readLine    from com.glide.script.fencing.GlideTextReader under com.glide.script.fencing.GlideTextReader
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * Enables handling the URI parameter in scoped applications.
 * @class GlideURI
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideURIScopedAPI}
 * @todo Add members to GlideURI
 */
declare class GlideURI implements Packages.com.glide.script.fencing.ScopedGlideURI {
    // TODO: Implement get             from com.glide.script.fencing.ScopedGlideURI under com.glide.script.fencing.ScopedGlideURI
    // TODO: Implement set             from com.glide.script.fencing.ScopedGlideURI under com.glide.script.fencing.ScopedGlideURI
    // TODO: Implement getFileFromPath from com.glide.script.fencing.ScopedGlideURI under com.glide.script.fencing.ScopedGlideURI
    // TODO: Implement toString        from com.glide.script.fencing.ScopedGlideURI under com.glide.script.fencing.ScopedGlideURI
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideContentType
 * @class GlideContentType
 * @implements {Packages.com.glide.cms.ScopedContentType}
 */
declare class GlideContentType implements Packages.com.glide.cms.ScopedContentType {
    // TODO: Implement get           from com.glide.cms.ScopedContentType under com.glide.cms.ScopedContentType
    // TODO: Implement getDetailPage from com.glide.cms.ScopedContentType under com.glide.cms.ScopedContentType
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * The scoped GlideSysListControl class allows you to determine if the New or Edit buttons are displayed.
 * @class GlideSysListControl
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideSysListControlScoped}
 * @todo Add members to GlideSysListControl
 */
declare class GlideSysListControl implements Packages.com.glide.script.fencing.ScopedSysListControl {
    // TODO: Implement getControlID     from com.glide.script.fencing.ScopedSysListControl under com.glide.script.fencing.ScopedSysListControl
    // TODO: Implement isOmitEditButton from com.glide.script.fencing.ScopedSysListControl under com.glide.script.fencing.ScopedSysListControl
    // TODO: Implement isOmitNewButton  from com.glide.script.fencing.ScopedSysListControl under com.glide.script.fencing.ScopedSysListControl
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document ContextMenu
 * @class ContextMenu
 * @implements {Packages.com.glide.script.fencing.ScopedContextMenu}
 */
declare class ContextMenu implements Packages.com.glide.script.fencing.ScopedContextMenu {
    // TODO: Implement addAction from com.glide.script.fencing.ScopedContextMenu under com.glide.script.fencing.ScopedContextMenu
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * The scoped GlidePluginManager API provides a method for determining if a plugin has been activated.
 * @class GlidePluginManager
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlidePluginManagerScopedAPI}
 * @todo Add members to GlidePluginManager
 */
declare class GlidePluginManager implements Packages.com.glide.script.fencing.ScopedGlidePluginManager {
    // TODO: Implement isActive from com.glide.sys.PluginManager under com.glide.script.fencing.ScopedGlidePluginManager
    // TODO: Implement isUpgradeSystemBusy from com.glide.sys.PluginManager under com.glide.script.fencing.ScopedGlidePluginManager
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * GlideLocale provides information about display information for the local instance.
 * @class GlideLocale
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideLocaleScopedAPI}
 * @todo Add members to GlideLocale 
 */
declare class GlideLocale implements Packages.com.glide.script.fencing.ScopedGlideLocale {
    // TODO: Implement getDecimalSeparator  from com.glide.script.fencing.ScopedGlideLocale under com.glide.script.fencing.ScopedGlideLocale
    // TODO: Implement getGroupingSeparator from com.glide.script.fencing.ScopedGlideLocale under com.glide.script.fencing.ScopedGlideLocale
    // TODO: Implement static get           from com.glide.script.fencing.ScopedGlideLocale under com.glide.script.fencing.ScopedGlideLocale
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * Enables filtering queries to determine if one or more records meet a specified set of requirements.
 * @class GlideFilter
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideFilterScopedAPI}
 * @todo Add members to GlideFilter
 */
declare class GlideFilter implements Packages.com.glide.script.fencing.ScopedGlideFilter {
    // TODO: Implement static checkRecord from com.glide.script.fencing.ScopedGlideFilter under com.glide.script.fencing.ScopedGlideFilter
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * The scoped GlideUICompatibility class provides the ability for scoped applications to define their own minimum browser versions. This is done by creating system properties for the scoped application.
 * @class GlideUICompatibility
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideUICompatibilityScopedAPI}
 * @todo Add members to GlideUICompatibility
 */
declare class GlideUICompatibility implements Packages.com.glide.script.fencing.ScopedGlideUICompatibility {
    // TODO: Implement getCompatibility from com.glide.script.fencing.ScopedGlideUICompatibility under com.glide.script.fencing.ScopedGlideUICompatibility
    // TODO: Implement isBlocked        from com.glide.script.fencing.ScopedGlideUICompatibility under com.glide.script.fencing.ScopedGlideUICompatibility
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideappWizardIntercept
 * @class GlideappWizardIntercept
 * @implements {Packages.com.glideapp.wizard.ScopedWizardIntercept}
 */
declare class GlideappWizardIntercept implements Packages.com.glideapp.wizard.ScopedWizardIntercept {
    // TODO: Implement get from com.glideapp.wizard.WizardIntercept under com.glideapp.wizard.ScopedWizardIntercept
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideChoiceList
 * @class GlideChoiceList
 * @implements {Packages.com.glide.script.fencing.ScopedChoiceList}
 */
declare class GlideChoiceList implements Packages.com.glide.script.fencing.ScopedChoiceList {
    // TODO: Implement add              from com.glide.script.fencing.ScopedChoiceList under com.glide.script.fencing.ScopedChoiceList
    // TODO: Implement addAll           from com.glide.script.fencing.ScopedChoiceList under com.glide.script.fencing.ScopedChoiceList
    // TODO: Implement addFirst         from com.glide.script.fencing.ScopedChoiceList under com.glide.script.fencing.ScopedChoiceList
    // TODO: Implement addNone          from com.glide.script.fencing.ScopedChoiceList under com.glide.script.fencing.ScopedChoiceList
    // TODO: Implement getChoice        from com.glide.script.fencing.ScopedChoiceList under com.glide.script.fencing.ScopedChoiceList
    // TODO: Implement getChoiceList    from com.glide.script.fencing.ScopedChoiceList under com.glide.script.fencing.ScopedChoiceList
    // TODO: Implement getChoiceNoTrim  from com.glide.script.fencing.ScopedChoiceList under com.glide.script.fencing.ScopedChoiceList
    // TODO: Implement getLabelOf       from com.glide.script.fencing.ScopedChoiceList under com.glide.script.fencing.ScopedChoiceList
    // TODO: Implement getNullOverride  from com.glide.script.fencing.ScopedChoiceList under com.glide.script.fencing.ScopedChoiceList
    // TODO: Implement getSelectedIndex from com.glide.script.fencing.ScopedChoiceList under com.glide.script.fencing.ScopedChoiceList
    // TODO: Implement getSize          from com.glide.script.fencing.ScopedChoiceList under com.glide.script.fencing.ScopedChoiceList
    // TODO: Implement getValueOf       from com.glide.script.fencing.ScopedChoiceList under com.glide.script.fencing.ScopedChoiceList
    // TODO: Implement indexOf          from com.glide.script.fencing.ScopedChoiceList under com.glide.script.fencing.ScopedChoiceList
    // TODO: Implement removeChoice     from com.glide.script.fencing.ScopedChoiceList under com.glide.script.fencing.ScopedChoiceList
    // TODO: Implement removeNone       from com.glide.script.fencing.ScopedChoiceList under com.glide.script.fencing.ScopedChoiceList
    // TODO: Implement sort             from com.glide.script.fencing.ScopedChoiceList under com.glide.script.fencing.ScopedChoiceList
    // TODO: Implement toXML            from com.glide.script.fencing.ScopedChoiceList under com.glide.script.fencing.ScopedChoiceList
    sort(): void;
    getChoice(index: $$rhino.String | $$rhino.Number): GlideChoice;
    getChoiceNoTrim(index: $$rhino.String): GlideChoice;
    getSelectedIndex(): $$rhino.Number;
    addNone(): GlideChoice;
    removeNone(): void;
    add(choice: GlideChoice): $$rhino.Boolean;
    addAll(cl: GlideChoiceList): void;
    addFirst(value: $$rhino.String, label: $$rhino.String): GlideChoice;
    removeChoice(index: $$rhino.String | $$rhino.Number): GlideChoice;
    getLabelOf(value: $$rhino.String): $$rhino.String;
    getValueOf(label: $$rhino.String): $$rhino.String;
    getSize(): $$rhino.Number;
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
    static getChoiceList(tableName: $$rhino.String, fieldName: $$rhino.String): GlideChoiceList;
}

/**
 * TODO: Document GlideHTTPHeader
 * @class GlideHTTPHeader
 * @implements {Packages.com.glide.script.fencing.ScopedHTTPHeader}
 */
declare class GlideHTTPHeader implements Packages.com.glide.script.fencing.ScopedHTTPHeader {
    // TODO: Implement getName  from com.glide.script.fencing.ScopedHTTPHeader under com.glide.script.fencing.ScopedHTTPHeader
    // TODO: Implement getValue from com.glide.script.fencing.ScopedHTTPHeader under com.glide.script.fencing.ScopedHTTPHeader
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideChoice
 * @class GlideChoice
 * @implements {Packages.com.glide.script.fencing.ScopedChoice}
 */
declare class GlideChoice implements Packages.com.glide.script.fencing.ScopedChoice {
    // TODO: Implement getLabel      from com.glide.script.fencing.ScopedChoice under com.glide.script.fencing.ScopedChoice
    // TODO: Implement getParameter  from com.glide.script.fencing.ScopedChoice under com.glide.script.fencing.ScopedChoice
    // TODO: Implement getParameters from com.glide.script.fencing.ScopedChoice under com.glide.script.fencing.ScopedChoice
    // TODO: Implement getValue      from com.glide.script.fencing.ScopedChoice under com.glide.script.fencing.ScopedChoice
    // TODO: Implement setLabel      from com.glide.script.fencing.ScopedChoice under com.glide.script.fencing.ScopedChoice
    // TODO: Implement setParameter  from com.glide.script.fencing.ScopedChoice under com.glide.script.fencing.ScopedChoice
    // TODO: Implement setSelected   from com.glide.script.fencing.ScopedChoice under com.glide.script.fencing.ScopedChoice
    // TODO: Implement setValue      from com.glide.script.fencing.ScopedChoice under com.glide.script.fencing.ScopedChoice
    getLabel(): $$rhino.String;
    getValue(): $$rhino.String;
    getId(): $$rhino.String;
    setId(sysId: $$rhino.String): void;
    getImage(): $$rhino.String;
    getED(): GlideElementDescriptor;
    getSelected(): $$rhino.Boolean;
    getUsed(): $$rhino.Boolean;
    setLabel(label: $$rhino.String): void;
    setValue(value: $$rhino.String): void;
    setImage(image: $$rhino.String): void;
    setED(ed: GlideElementDescriptor): void;
    setSelected(label: $$rhino.Boolean): void;
    getRefFileName(): $$rhino.String;
    setRefFileName(sysId: $$rhino.String): void;
    getUsed(used: $$rhino.String): void;
    setParameter(name: $$rhino.String, value: any): void;
    getParameter(name: $$rhino.String): any;
    getParameters(): Packages.java.util.HashMap<$$rhino.String, any>;
    compareTo(obj: any): $$rhino.Number;
    isReference(): $$rhino.Boolean;
    isMissing(): $$rhino.Boolean;
    setMissing(label: $$rhino.Boolean): void;
    setParent(parentId: $$rhino.String): void;
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideRecordSecure
 * @class GlideRecordSecure
 * @implements {Packages.com.glide.script.fencing.ScopedGlideRecordSecure}
 */
declare class GlideRecordSecure implements Packages.com.glide.script.fencing.ScopedGlideRecordSecure {
    // TODO: Implement getValue from com.glide.script.GlideRecordSecure under com.glide.script.fencing.ScopedGlideRecordSecure
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideappAJAXMapPage
 * @class GlideappAJAXMapPage
 * @implements {Packages.com.glideapp.google_maps.ScopedAJAXMapPage}
 */
declare class GlideappAJAXMapPage implements Packages.com.glideapp.google_maps.ScopedAJAXMapPage {
    // TODO: Implement addItem from com.glideapp.google_maps.ScopedAJAXMapPage under com.glideapp.google_maps.ScopedAJAXMapPage
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideappAJAXMapItem
 * @class GlideappAJAXMapItem
 * @implements {Packages.com.glideapp.google_maps.ScopedAJAXMapItem}
 */
declare class GlideappAJAXMapItem implements Packages.com.glideapp.google_maps.ScopedAJAXMapItem {
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideRenderJavascript
 * @class GlideRenderJavascript
 * @implements {Packages.com.glide.script.fencing.ScopedRenderJavascript}
 */
declare class GlideRenderJavascript implements Packages.com.glide.script.fencing.ScopedRenderJavascript {
    // TODO: Implement getPreference   from com.glide.script.fencing.ScopedRenderJavascript under com.glide.script.fencing.ScopedRenderJavascript
    // TODO: Implement getRenderedPage from com.glide.script.fencing.ScopedRenderJavascript under com.glide.script.fencing.ScopedRenderJavascript
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideappCatalogItem
 * @class GlideappCatalogItem
 * @implements {Packages.com.glideapp.servicecatalog.ScopedGlideappCatalogItem}
 */
declare class GlideappCatalogItem implements Packages.com.glideapp.servicecatalog.ScopedGlideappCatalogItem {
    // TODO: Implement canView         from com.glideapp.servicecatalog.ScopedGlideappCatalogItem under com.glideapp.servicecatalog.ScopedGlideappCatalogItem
    // TODO: Implement canViewInDomain from com.glideapp.servicecatalog.ScopedGlideappCatalogItem under com.glideapp.servicecatalog.ScopedGlideappCatalogItem
    // TODO: Implement get             from com.glideapp.servicecatalog.ScopedGlideappCatalogItem under com.glideapp.servicecatalog.ScopedGlideappCatalogItem
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideScriptedExtensionPoint
 * @class GlideScriptedExtensionPoint
 * @implements {Packages.com.glide.script.system.ScriptedExtensionPoint}
 */
declare class GlideScriptedExtensionPoint implements Packages.com.glide.script.system.ScriptedExtensionPoint {
    // TODO: Implement getExtensions from com.glide.script.system.ScriptedExtensionPoint under com.glide.script.system.ScriptedExtensionPoint
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideUIExtensionPoint
 * @class GlideUIExtensionPoint
 * @implements {Packages.com.glide.ui.extension.UIExtensionPoint}
 */
declare class GlideUIExtensionPoint implements Packages.com.glide.ui.extension.UIExtensionPoint {
    // TODO: Implement getExtensions from com.glide.ui.extension.UIExtensionPoint under com.glide.ui.extension.UIExtensionPoint
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideClientExtensionPoint
 * @class GlideClientExtensionPoint
 * @implements {Packages.com.glide.ui.extension.ClientExtensionPoint}
 */
declare class GlideClientExtensionPoint implements Packages.com.glide.ui.extension.ClientExtensionPoint {
    // TODO: Implement getExtensions from com.glide.ui.extension.ClientExtensionPoint under com.glide.ui.extension.ClientExtensionPoint
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document WSResult
 * @class WSResult
 * @implements {Packages.com.glide.script.fencing.ScopedWSResult}
 */
declare class WSResult implements Packages.com.glide.script.fencing.ScopedWSResult {
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document WSParameters
 * @class WSParameters
 * @implements {Packages.com.glide.script.fencing.ScopedWSParameters}
 */
declare class WSParameters implements Packages.com.glide.script.fencing.ScopedWSParameters {
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document WorkflowDatabus
 * @class WorkflowDatabus
 * @implements {Packages.com.glideapp.workflow.element.ScopedWorkflowDatabus}
 */
declare class WorkflowDatabus implements Packages.com.glideapp.workflow.element.ScopedWorkflowDatabus {
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document ScopedWorkflowVariableGetter
 * @class ScopedWorkflowVariableGetter
 * @implements {Packages.com.glideapp.workflow.ScopedWorkflowVariableGetter}
 */
declare class ScopedWorkflowVariableGetter implements Packages.com.glideapp.workflow.ScopedWorkflowVariableGetter {
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document ActivityLogger
 * @class ActivityLogger
 * @implements {Packages.com.glideapp.workflow.ScopedActivityLogger}
 */
declare class ActivityLogger implements Packages.com.glideapp.workflow.ScopedActivityLogger {
    // TODO: Implement debug from com.glideapp.workflow.ScopedActivityLogger under com.glideapp.workflow.ScopedActivityLogger
    // TODO: Implement error from com.glideapp.workflow.ScopedActivityLogger under com.glideapp.workflow.ScopedActivityLogger
    // TODO: Implement info  from com.glideapp.workflow.ScopedActivityLogger under com.glideapp.workflow.ScopedActivityLogger
    // TODO: Implement warn  from com.glideapp.workflow.ScopedActivityLogger under com.glideapp.workflow.ScopedActivityLogger
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document MappingLookupSourceDescriptor
 * @class MappingLookupSourceDescriptor
 * @implements {Packages.com.glide.element_mapping.MappingLookupSourceDescriptor}
 */
declare class MappingLookupSourceDescriptor implements Packages.com.glide.element_mapping.MappingLookupSourceDescriptor {
    // TODO: Implement getDependendentTable from com.glide.element_mapping.MappingLookupSourceDescriptor under com.glide.element_mapping.MappingLookupSourceDescriptor
    // TODO: Implement getDependentId       from com.glide.element_mapping.MappingLookupSourceDescriptor under com.glide.element_mapping.MappingLookupSourceDescriptor
    // TODO: Implement getFieldNames        from com.glide.element_mapping.MappingLookupSourceDescriptor under com.glide.element_mapping.MappingLookupSourceDescriptor
    // TODO: Implement getFieldNamesString  from com.glide.element_mapping.MappingLookupSourceDescriptor under com.glide.element_mapping.MappingLookupSourceDescriptor
    // TODO: Implement getRemoteDependent   from com.glide.element_mapping.MappingLookupSourceDescriptor under com.glide.element_mapping.MappingLookupSourceDescriptor
    // TODO: Implement getResolverClassName from com.glide.element_mapping.MappingLookupSourceDescriptor under com.glide.element_mapping.MappingLookupSourceDescriptor
    // TODO: Implement isValid              from com.glide.element_mapping.MappingLookupSourceDescriptor under com.glide.element_mapping.MappingLookupSourceDescriptor
    // TODO: Implement useOutputUI          from com.glide.element_mapping.MappingLookupSourceDescriptor under com.glide.element_mapping.MappingLookupSourceDescriptor
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * ServiceNow processors are equivalent to Java servlets.
 * @class GlideScriptedProcessor
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideScriptedProcessorScopedAPI}
 * @todo Add members to GlideScriptedProcessor
 */
declare class GlideScriptedProcessor implements Packages.com.glide.script.fencing.ScopedGlideScriptedProcessor {
    // TODO: Implement redirect    from com.glide.script.fencing.ScopedGlideScriptedProcessor under com.glide.script.fencing.ScopedGlideScriptedProcessor
    // TODO: Implement writeJSON   from com.glide.script.fencing.ScopedGlideScriptedProcessor under com.glide.script.fencing.ScopedGlideScriptedProcessor
    // TODO: Implement writeOutput from com.glide.script.fencing.ScopedGlideScriptedProcessor under com.glide.script.fencing.ScopedGlideScriptedProcessor
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

declare const g_processor: GlideScriptedProcessor;

/**
 * The GlideServletRequest API is used in processor scripts.
 * @class GlideServletRequest
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideServletRequestScopedAPI}
 * @todo Add members to GlideServletRequest
 */
declare class GlideServletRequest implements Packages.com.glide.script.fencing.ScopedGlideServletRequest {
    // TODO: Implement getContentType    from com.glide.script.fencing.ScopedGlideServletRequest under com.glide.script.fencing.ScopedGlideServletRequest
    // TODO: Implement getHeader         from com.glide.script.fencing.ScopedGlideServletRequest under com.glide.script.fencing.ScopedGlideServletRequest
    // TODO: Implement getHeaderNames    from com.glide.script.fencing.ScopedGlideServletRequest under com.glide.script.fencing.ScopedGlideServletRequest
    // TODO: Implement getHeaders        from com.glide.script.fencing.ScopedGlideServletRequest under com.glide.script.fencing.ScopedGlideServletRequest
    // TODO: Implement getParameter      from com.glide.script.fencing.ScopedGlideServletRequest under com.glide.script.fencing.ScopedGlideServletRequest
    // TODO: Implement getParameter      from com.glide.script.fencing.ScopedGlideServletRequest under com.glide.script.fencing.ScopedGlideServletRequest
    // TODO: Implement getParameterNames from com.glide.script.fencing.ScopedGlideServletRequest under com.glide.script.fencing.ScopedGlideServletRequest
    // TODO: Implement getQueryString    from com.glide.script.fencing.ScopedGlideServletRequest under com.glide.script.fencing.ScopedGlideServletRequest
    // TODO: Implement getRequestURI     from com.glide.script.fencing.ScopedGlideServletRequest under com.glide.script.fencing.ScopedGlideServletRequest
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

declare const g_request: GlideServletRequest;

/**
 * The ScopedGlideServletResponse API is used in processor scripts.
 * @class GlideServletResponse
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideServletResponseScopedAPI}
 * @todo Add members to GlideServletResponse
 */
declare class GlideServletResponse implements Packages.com.glide.script.fencing.ScopedGlideServletResponse {
    // TODO: Implement sendRedirect   from com.glide.script.fencing.ScopedGlideServletResponse under com.glide.script.fencing.ScopedGlideServletResponse
    // TODO: Implement setContentType from com.glide.script.fencing.ScopedGlideServletResponse under com.glide.script.fencing.ScopedGlideServletResponse
    // TODO: Implement setHeader      from com.glide.script.fencing.ScopedGlideServletResponse under com.glide.script.fencing.ScopedGlideServletResponse
    // TODO: Implement setStatus      from com.glide.script.fencing.ScopedGlideServletResponse under com.glide.script.fencing.ScopedGlideServletResponse
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

declare const g_response: GlideServletResponse;

/**
 * Scoped TemplatePrinter handles printing from a mail script to the email message.
 * @class TemplatePrinter
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_TemplatePrinterScopedAPI}
 * @todo Add members to TemplatePrinter
 */
declare class TemplatePrinter implements Packages.com.glide.notification.outbound.ScopedTemplatePrinter {
    // TODO: Implement print from com.glide.notification.outbound.ScopedTemplatePrinter under com.glide.notification.outbound.ScopedTemplatePrinter
    // TODO: Implement space from com.glide.notification.outbound.ScopedTemplatePrinter under com.glide.notification.outbound.ScopedTemplatePrinter
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * The scoped GlideEmailOutbound class implements the email object for scoped applications. You can use the GlideEmailOutbound methods with the email global object available in mail scripts. The email object behaves identically for global and scoped applications.
 * @class GlideEmailOutbound
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideEmailOutboundScopedAPI}
 * @todo Add members to GlideEmailOutbound
 */
declare class GlideEmailOutbound implements Packages.com.glide.notification.outbound.ScopedEmailOutbound {
    // TODO: Implement addAddress   from com.glide.notification.outbound.ScopedEmailOutbound under com.glide.notification.outbound.ScopedEmailOutbound
    // TODO: Implement getSubject   from com.glide.notification.outbound.ScopedEmailOutbound under com.glide.notification.outbound.ScopedEmailOutbound
    // TODO: Implement getWatermark from com.glide.notification.outbound.ScopedEmailOutbound under com.glide.notification.outbound.ScopedEmailOutbound
    // TODO: Implement setBody      from com.glide.notification.outbound.ScopedEmailOutbound under com.glide.notification.outbound.ScopedEmailOutbound
    // TODO: Implement setFrom      from com.glide.notification.outbound.ScopedEmailOutbound under com.glide.notification.outbound.ScopedEmailOutbound
    // TODO: Implement setReplyTo   from com.glide.notification.outbound.ScopedEmailOutbound under com.glide.notification.outbound.ScopedEmailOutbound
    // TODO: Implement setSubject   from com.glide.notification.outbound.ScopedEmailOutbound under com.glide.notification.outbound.ScopedEmailOutbound
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document EmailWrapper
 * @class EmailWrapper
 * @implements {Packages.com.glide.notification.inbound.ScopedEmailWrapper}
 */
declare class EmailWrapper implements Packages.com.glide.notification.inbound.ScopedEmailWrapper {
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document EmailLogger
 * @class EmailLogger
 * @implements {Packages.com.glide.notification.ScopedEmailLogger}
 */
declare class EmailLogger implements Packages.com.glide.notification.ScopedEmailLogger {
    // TODO: Implement error      from com.glide.notification.ScopedEmailLogger under com.glide.notification.ScopedEmailLogger
    // TODO: Implement info       from com.glide.notification.ScopedEmailLogger under com.glide.notification.ScopedEmailLogger
    // TODO: Implement log        from com.glide.notification.ScopedEmailLogger under com.glide.notification.ScopedEmailLogger
    // TODO: Implement logError   from com.glide.notification.ScopedEmailLogger under com.glide.notification.ScopedEmailLogger
    // TODO: Implement logInfo    from com.glide.notification.ScopedEmailLogger under com.glide.notification.ScopedEmailLogger
    // TODO: Implement logWarning from com.glide.notification.ScopedEmailLogger under com.glide.notification.ScopedEmailLogger
    // TODO: Implement warn       from com.glide.notification.ScopedEmailLogger under com.glide.notification.ScopedEmailLogger
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document EmailServiceSendConfig
 * @class EmailServiceSendConfig
 * @implements {Packages.com.glide.email.service.EmailServiceSendConfigJavascriptProxy}
 */
declare class EmailServiceSendConfig implements Packages.com.glide.email.service.EmailServiceSendConfigJavascriptProxy {
    // TODO: Implement get isAppendWatermark from com.glide.email.service.EmailServiceSendConfigJavascriptProxy under com.glide.email.service.EmailServiceSendConfigJavascriptProxy
    // TODO: Implement set appendWatermark from com.glide.email.service.EmailServiceSendConfigJavascriptProxy under com.glide.email.service.EmailServiceSendConfigJavascriptProxy
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document Email
 * @class Email
 * @implements {Packages.com.glide.email.service.EmailJavascriptProxy}
 */
declare class Email implements Packages.com.glide.email.service.EmailJavascriptProxy {
    // TODO: Implement get bcc     from com.glide.email.service.EmailJavascriptProxy under com.glide.email.service.EmailJavascriptProxy
    // TODO: Implement get cc      from com.glide.email.service.EmailJavascriptProxy under com.glide.email.service.EmailJavascriptProxy
    // TODO: Implement get headers from com.glide.email.service.EmailJavascriptProxy under com.glide.email.service.EmailJavascriptProxy
    // TODO: Implement get html    from com.glide.email.service.EmailJavascriptProxy under com.glide.email.service.EmailJavascriptProxy
    // TODO: Implement get id      from com.glide.email.service.EmailJavascriptProxy under com.glide.email.service.EmailJavascriptProxy
    // TODO: Implement get state   from com.glide.email.service.EmailJavascriptProxy under com.glide.email.service.EmailJavascriptProxy
    // TODO: Implement get subject from com.glide.email.service.EmailJavascriptProxy under com.glide.email.service.EmailJavascriptProxy
    // TODO: Implement get text    from com.glide.email.service.EmailJavascriptProxy under com.glide.email.service.EmailJavascriptProxy
    // TODO: Implement get to      from com.glide.email.service.EmailJavascriptProxy under com.glide.email.service.EmailJavascriptProxy
    // TODO: Implement get type    from com.glide.email.service.EmailJavascriptProxy under com.glide.email.service.EmailJavascriptProxy
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document SendEmailResponse
 * @class SendEmailResponse
 * @implements {Packages.com.glide.email.service.SendEmailResponseJavascriptProxy}
 */
declare class SendEmailResponse implements Packages.com.glide.email.service.SendEmailResponseJavascriptProxy {
    // TODO: Implement get id from com.glide.email.service.SendEmailResponseJavascriptProxy under com.glide.email.service.SendEmailResponseJavascriptProxy
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document EmailAttachment
 * @class EmailAttachment
 * @implements {Packages.com.glide.email_parse_attachment.EmailAttachmentJavascriptProxy}
 */
declare class EmailAttachment implements Packages.com.glide.email_parse_attachment.EmailAttachmentJavascriptProxy {
    // TODO: Implement get body_html from com.glide.email_parse_attachment.EmailAttachmentJavascriptProxy under com.glide.email_parse_attachment.EmailAttachmentJavascriptProxy
    // TODO: Implement get body_text from com.glide.email_parse_attachment.EmailAttachmentJavascriptProxy under com.glide.email_parse_attachment.EmailAttachmentJavascriptProxy
    // TODO: Implement get subject   from com.glide.email_parse_attachment.EmailAttachmentJavascriptProxy under com.glide.email_parse_attachment.EmailAttachmentJavascriptProxy
    // TODO: Implement from            from com.glide.email_parse_attachment.EmailAttachmentJavascriptProxy under com.glide.email_parse_attachment.EmailAttachmentJavascriptProxy
    // TODO: Implement headers         from com.glide.email_parse_attachment.EmailAttachmentJavascriptProxy under com.glide.email_parse_attachment.EmailAttachmentJavascriptProxy
    // TODO: Implement parts           from com.glide.email_parse_attachment.EmailAttachmentJavascriptProxy under com.glide.email_parse_attachment.EmailAttachmentJavascriptProxy
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document ParseAttachmentAsAnEmail
 * @class ParseAttachmentAsAnEmail
 * @implements {Packages.com.glide.email_parse_attachment.ParseAttachmentAsAnEmailJavascriptProxy}
 */
declare class ParseAttachmentAsAnEmail implements Packages.com.glide.email_parse_attachment.ParseAttachmentAsAnEmailJavascriptProxy {
    // TODO: Implement static parse from com.glide.email_parse_attachment.ParseAttachmentAsAnEmailJavascriptProxy under com.glide.email_parse_attachment.ParseAttachmentAsAnEmailJavascriptProxy
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideTransformMap
 * @class GlideTransformMap
 * @implements {Packages.com.glide.db.impex.transformer.GlideTransformMap}
 */
declare class GlideTransformMap implements Packages.com.glide.db.impex.transformer.GlideTransformMap {
    // TODO: Implement name         from com.glide.db.impex.transformer.GlideTransformMap under com.glide.db.impex.transformer.GlideTransformMap
    // TODO: Implement order        from com.glide.db.impex.transformer.GlideTransformMap under com.glide.db.impex.transformer.GlideTransformMap
    // TODO: Implement source_table from com.glide.db.impex.transformer.GlideTransformMap under com.glide.db.impex.transformer.GlideTransformMap
    // TODO: Implement sys_id       from com.glide.db.impex.transformer.GlideTransformMap under com.glide.db.impex.transformer.GlideTransformMap
    // TODO: Implement target_table from com.glide.db.impex.transformer.GlideTransformMap under com.glide.db.impex.transformer.GlideTransformMap
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * Creates a GlideTransformLog object to log messages to localhost logs.
 * @class GlideTransformLog
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/GlideTransformLogAPI}
 * @todo Add members to GlideTransformLog
 */
declare class GlideTransformLog implements Packages.com.glide.script.fencing.ScopedTransformLog {
    // TODO: Implement error from com.glide.script.fencing.ScopedTransformLog under com.glide.script.fencing.ScopedTransformLog
    // TODO: Implement info  from com.glide.script.fencing.ScopedTransformLog under com.glide.script.fencing.ScopedTransformLog
    // TODO: Implement warn  from com.glide.script.fencing.ScopedTransformLog under com.glide.script.fencing.ScopedTransformLog
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * The Scoped GlideTableHierarchy API provides methods for handling information about table relationships.
 * @class GlideTableHierarchy
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideTableHierarchyScopedAPI}
 * @todo Add members to GlideTableHierarchy
 */
declare class GlideTableHierarchy implements Packages.com.glide.script.fencing.GlideTableHierarchy {
    // TODO: Implement getAllExtensions   from com.glide.script.fencing.GlideTableHierarchy under com.glide.script.fencing.GlideTableHierarchy
    // TODO: Implement getBase            from com.glide.script.fencing.GlideTableHierarchy under com.glide.script.fencing.GlideTableHierarchy
    // TODO: Implement getHierarchy       from com.glide.script.fencing.GlideTableHierarchy under com.glide.script.fencing.GlideTableHierarchy
    // TODO: Implement getName            from com.glide.script.fencing.GlideTableHierarchy under com.glide.script.fencing.GlideTableHierarchy
    // TODO: Implement getRoot            from com.glide.script.fencing.GlideTableHierarchy under com.glide.script.fencing.GlideTableHierarchy
    // TODO: Implement getTableExtensions from com.glide.script.fencing.GlideTableHierarchy under com.glide.script.fencing.GlideTableHierarchy
    // TODO: Implement getTables          from com.glide.script.fencing.GlideTableHierarchy under com.glide.script.fencing.GlideTableHierarchy
    // TODO: Implement hasExtensions      from com.glide.script.fencing.GlideTableHierarchy under com.glide.script.fencing.GlideTableHierarchy
    // TODO: Implement isBaseClass        from com.glide.script.fencing.GlideTableHierarchy under com.glide.script.fencing.GlideTableHierarchy
    // TODO: Implement isSoloClass        from com.glide.script.fencing.GlideTableHierarchy under com.glide.script.fencing.GlideTableHierarchy
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * The GlideSysAttachment API provides a way to handle attachments.
 * @class GlideSysAttachment
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideSysAttachmentScopedAPI}
 * @todo Add members to GlideSysAttachment
 */
declare class GlideSysAttachment implements Packages.com.glide.script.fencing.GlideSysAttachment {
    /**
     * Creates an instance of GlideSysAttachment.
     * @memberof GlideSysAttachment
     */
    constructor();
    
    /**
     * Copies attachments from the source record to the target record.
     * @static
     * @param {$$rhino.String} sourceTable - Name of the table with the attachments to be copied.
     * @param {$$rhino.String} sourceID - Source table's sys_id.
     * @param {$$rhino.String} targetTable - Name of the table on which to add the attachments.
     * @param {$$rhino.String} targetID - Target table's sys_id.
     * @return {Packages.java.util.ArrayList<$$rhino.String>} Array of sys_ids of the attachments that were copied.
     * @memberof GlideSysAttachment
     */
    static copy(sourceTable: $$rhino.String, sourceID: $$rhino.String, targetTable: $$rhino.String, targetID: $$rhino.String): Packages.java.util.ArrayList<$$rhino.String>;
    
    /**
     * Copies attachments from the source record to the target record.
     * @param {$$rhino.String} sourceTable - Name of the table with the attachments to be copied.
     * @param {$$rhino.String} sourceID - Source table's sys_id.
     * @param {$$rhino.String} targetTable - Name of the table on which to add the attachments.
     * @param {$$rhino.String} targetID - Target table's sys_id.
     * @return {Packages.java.util.ArrayList<$$rhino.String>} Array of sys_ids of the attachments that were copied.
     * @memberof GlideSysAttachment
     */
    copy(sourceTable: $$rhino.String, sourceID: $$rhino.String, targetTable: $$rhino.String, targetID: $$rhino.String): Packages.java.util.ArrayList<$$rhino.String>;

    /**
     * Deletes the specified attachment.
     * @param {$$rhino.String} attachmentID - Attachment's sys_id.
     * @memberof GlideSysAttachment
     */
    deleteAttachment(attachmentID: $$rhino.String): void;

    /**
     * Returns a GlideRecord containing the matching attachment metadata such as name, type, or size.
     * @param {$$rhino.String} tableName - Name of the table to which the attachment belongs; for example, incident.
     * @param {$$rhino.String} sys_id - The sys_id of record to which the attachment belongs.
     * @return {GlideRecord} GlideRecord object containing the matching attachment metadata such as name, type, or size.
     * @memberof GlideSysAttachment
     */
    getAttachments(tableName: $$rhino.String, sys_id: $$rhino.String): GlideRecord;

    /**
     * Returns the attachment content as a string.
     * @param {GlideRecord} sysAttachment - Attachment record.
     * @return {$$rhino.String} Attachment contents as a string. Returns up to 5MB of data.
     * @memberof GlideSysAttachment
     */
    getContent(sysAttachment: GlideRecord): $$rhino.String;

    /**
     * Returns the attachment content as a string with base64 encoding.
     * @param {GlideRecord} sysAttachment - Attachment record.
     * @return {$$rhino.String} Attachment contents as a string with base64 encoding. Returns up to 5MB of data.
     * @memberof GlideSysAttachment
     */
    getContentBase64(sysAttachment: GlideRecord): $$rhino.String;

    /**
     * Returns a GlideScriptableInputStream object given the sys_id of an attachment.
     * @param {$$rhino.String} sysID - Attachment sys_id.
     * @return {GlideScriptableInputStream} Stream that contains the attachment content.
     * @memberof GlideSysAttachment
     */
    getContentStream(sysID: $$rhino.String): GlideScriptableInputStream;

    /**
     * Attaches a specified attachment to the specified record.
     * @param {GlideRecord} record - Record to which to attach the attachment.
     * @param {$$rhino.String} fileName - Attachment file name.
     * @param {$$rhino.String} contentType - Attachment content type.
     * @param {$$rhino.String} content - Attachment content.
     * @return {$$rhino.String | null} Attachment sys_id or null if the attachment was not added.
     * @memberof GlideSysAttachment
     */
    write(record: GlideRecord, fileName: $$rhino.String, contentType: $$rhino.String, content: $$rhino.String): $$rhino.String | null;

    /**
     * 
     * @param {GlideRecord} now_GR - 
     * @param {$$rhino.String} fileName - 
     * @param {$$rhino.String} contentType - 
     * @param {$$rhino.String} content_base64Encoded - 
     * @return {$$rhino.String}
     * @memberof GlideSysAttachment
     */
    writeBase64(now_GR: GlideRecord, fileName: $$rhino.String, contentType: $$rhino.String, content_base64Encoded: $$rhino.String): $$rhino.String;

    /**
     * 
     * @param {GlideRecord} now_GR - 
     * @param {$$rhino.String} fileName - 
     * @param {$$rhino.String} contentType - 
     * @param {GlideScriptableInputStream} inputStream - 
     * @return {$$rhino.String}
     * @memberof GlideSysAttachment
     */
    writeContentStream(now_GR: GlideRecord, fileName: $$rhino.String, contentType: $$rhino.String, inputStream: GlideScriptableInputStream): $$rhino.String;

    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * Interact with data and perform record operations in Service Portal widgets.
 * @class GlideSPScriptable
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideSPScriptableScopedAPI}
 * @todo Add members to GlideSPScriptable
 */
declare class GlideSPScriptable implements Packages.com.glide.service_portal.widget.fencing.ScopedSPScriptable {
    // TODO: Implement addQueryString                   from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement canReadRecord                    from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement canSeePage                       from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getAllKBRecords                  from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getCatalogItem                   from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getCatalogs                      from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getDisplayValue                  from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getField                         from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getFields                        from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getFieldsObject                  from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getFilterBreadcrumbs             from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getForm                          from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getInstanceRecord                from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getKBCategoryArticles            from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getKBCategoryArticleSummaries    from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getKBCategoryArticleSummary      from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getKBCount                       from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getKBRecord                      from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getKBSiblingCategories           from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getKBTopCategoryID               from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getKnowledgeBases                from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getListColumns                   from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getMenuHREF                      from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getMenuItems                     from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getParameter                     from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getPortalRecord                  from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getRecord                        from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getRecordDisplayValues           from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getRecordElements                from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getRecordValues                  from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getRecordVariables               from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getRecordVariablesArray          from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getRelatedList                   from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getSCRecord                      from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getSearchSources                 from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getStream                        from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getStreamEntries                 from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getSubCategories                 from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getUserInitials                  from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getValue                         from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getValues                        from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getVariables                     from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getVariablesArray                from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getWidget                        from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getWidgetFromInstance            from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getWidgetParameters              from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement getWidgetScope                   from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement hasTextIndex                     from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement isUserCriteriaEnabled            from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement log                              from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement logSearch                        from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement logStat                          from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement saveRecord                       from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement showCatalogPrices                from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement stripHTML                        from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement translateTemplate                from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    // TODO: Implement userCanSeeSearchSourceByCriteria from com.glide.service_portal.widget.fencing.ScopedSPScriptable under com.glide.service_portal.widget.fencing.ScopedSPScriptable (category: user interface)
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideTemplate
 * @class GlideTemplate
 * @implements {Packages.com.glide.script.fencing.ScopedGlideTemplate}
 */
declare class GlideTemplate implements Packages.com.glide.script.fencing.ScopedGlideTemplate {
    // TODO: Implement apply                from com.glide.script.fencing.ScopedGlideTemplate under com.glide.script.fencing.ScopedGlideTemplate
    // TODO: Implement setApplyChildren     from com.glide.script.fencing.ScopedGlideTemplate under com.glide.script.fencing.ScopedGlideTemplate
    // TODO: Implement setDoInsert          from com.glide.script.fencing.ScopedGlideTemplate under com.glide.script.fencing.ScopedGlideTemplate
    // TODO: Implement static get           from com.glide.script.fencing.ScopedGlideTemplate under com.glide.script.fencing.ScopedGlideTemplate
    // TODO: Implement static getByName     from com.glide.script.fencing.ScopedGlideTemplate under com.glide.script.fencing.ScopedGlideTemplate
    // TODO: Implement static getFromRecord from com.glide.script.fencing.ScopedGlideTemplate under com.glide.script.fencing.ScopedGlideTemplate
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideExecutionTracker
 * @class GlideExecutionTracker
 * @implements {Packages.com.glide.script.fencing.ScopedGlideExecutionTracker}
 */
declare class GlideExecutionTracker implements Packages.com.glide.script.fencing.ScopedGlideExecutionTracker {
    // TODO: Implement createChildIfAbsent      from com.glide.script.fencing.ScopedGlideExecutionTracker under com.glide.script.fencing.ScopedGlideExecutionTracker
    // TODO: Implement fail                     from com.glide.script.fencing.ScopedGlideExecutionTracker under com.glide.script.fencing.ScopedGlideExecutionTracker
    // TODO: Implement getSource                from com.glide.script.fencing.ScopedGlideExecutionTracker under com.glide.script.fencing.ScopedGlideExecutionTracker
    // TODO: Implement getSourceTable           from com.glide.script.fencing.ScopedGlideExecutionTracker under com.glide.script.fencing.ScopedGlideExecutionTracker
    // TODO: Implement getSysID                 from com.glide.script.fencing.ScopedGlideExecutionTracker under com.glide.script.fencing.ScopedGlideExecutionTracker
    // TODO: Implement incrementPercentComplete from com.glide.script.fencing.ScopedGlideExecutionTracker under com.glide.script.fencing.ScopedGlideExecutionTracker
    // TODO: Implement run                      from com.glide.script.fencing.ScopedGlideExecutionTracker under com.glide.script.fencing.ScopedGlideExecutionTracker
    // TODO: Implement setSource                from com.glide.script.fencing.ScopedGlideExecutionTracker under com.glide.script.fencing.ScopedGlideExecutionTracker
    // TODO: Implement setSourceTable           from com.glide.script.fencing.ScopedGlideExecutionTracker under com.glide.script.fencing.ScopedGlideExecutionTracker
    // TODO: Implement static getLastRunning    from com.glide.script.fencing.ScopedGlideExecutionTracker under com.glide.script.fencing.ScopedGlideExecutionTracker
    // TODO: Implement success                  from com.glide.script.fencing.ScopedGlideExecutionTracker under com.glide.script.fencing.ScopedGlideExecutionTracker
    // TODO: Implement updateResult             from com.glide.script.fencing.ScopedGlideExecutionTracker under com.glide.script.fencing.ScopedGlideExecutionTracker
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideUpgradeUtil
 * @class GlideUpgradeUtil
 * @implements {Packages.com.glide.script.fencing.app_store.ScopedUpgradeUtil}
 */
declare class GlideUpgradeUtil implements Packages.com.glide.script.fencing.app_store.ScopedUpgradeUtil {
    // TODO: Implement getCurrentBuild     from com.glide.script.fencing.app_store.ScopedUpgradeUtil under com.glide.script.fencing.app_store.ScopedUpgradeUtil
    // TODO: Implement getCurrentBuildDate from com.glide.script.fencing.app_store.ScopedUpgradeUtil under com.glide.script.fencing.app_store.ScopedUpgradeUtil
    // TODO: Implement getCurrentBuildName from com.glide.script.fencing.app_store.ScopedUpgradeUtil under com.glide.script.fencing.app_store.ScopedUpgradeUtil
    // TODO: Implement getCurrentBuildTag  from com.glide.script.fencing.app_store.ScopedUpgradeUtil under com.glide.script.fencing.app_store.ScopedUpgradeUtil
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideScriptedHierarchicalWorker
 * @class GlideScriptedHierarchicalWorker
 * @implements {Packages.com.glide.script.fencing.ScopedScriptedHierarchicalWorker}
 */
declare class GlideScriptedHierarchicalWorker implements Packages.com.glide.script.fencing.ScopedScriptedHierarchicalWorker {
    // TODO: Implement getProgressID          from com.glide.script.fencing.ScopedScriptedHierarchicalWorker under com.glide.script.fencing.ScopedScriptedHierarchicalWorker
    // TODO: Implement putConstructorArg      from com.glide.script.fencing.ScopedScriptedHierarchicalWorker under com.glide.script.fencing.ScopedScriptedHierarchicalWorker
    // TODO: Implement putMethodArg           from com.glide.script.fencing.ScopedScriptedHierarchicalWorker under com.glide.script.fencing.ScopedScriptedHierarchicalWorker
    // TODO: Implement setBackground          from com.glide.script.fencing.ScopedScriptedHierarchicalWorker under com.glide.script.fencing.ScopedScriptedHierarchicalWorker
    // TODO: Implement setCannotCancel        from com.glide.script.fencing.ScopedScriptedHierarchicalWorker under com.glide.script.fencing.ScopedScriptedHierarchicalWorker
    // TODO: Implement setProgressName        from com.glide.script.fencing.ScopedScriptedHierarchicalWorker under com.glide.script.fencing.ScopedScriptedHierarchicalWorker
    // TODO: Implement setScriptIncludeMethod from com.glide.script.fencing.ScopedScriptedHierarchicalWorker under com.glide.script.fencing.ScopedScriptedHierarchicalWorker
    // TODO: Implement setScriptIncludeName   from com.glide.script.fencing.ScopedScriptedHierarchicalWorker under com.glide.script.fencing.ScopedScriptedHierarchicalWorker
    // TODO: Implement start                  from com.glide.script.fencing.ScopedScriptedHierarchicalWorker under com.glide.script.fencing.ScopedScriptedHierarchicalWorker
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideZipInputStream
 * @class GlideZipInputStream
 * @implements {Packages.com.glide.script.fencing.app_store.ScopedGlideZipInputStream}
 */
declare class GlideZipInputStream implements Packages.com.glide.script.fencing.app_store.ScopedGlideZipInputStream {
    // TODO: Implement extractAll    from com.glide.script.fencing.app_store.ScopedGlideZipInputStream under com.glide.script.fencing.app_store.ScopedGlideZipInputStream
    // TODO: Implement getExtractDir from com.glide.script.fencing.app_store.ScopedGlideZipInputStream under com.glide.script.fencing.app_store.ScopedGlideZipInputStream
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideZipOutputStream
 * @class GlideZipOutputStream
 * @implements {Packages.com.glide.script.fencing.app_store.ScopedGlideZipOutputStream}
 */
declare class GlideZipOutputStream implements Packages.com.glide.script.fencing.app_store.ScopedGlideZipOutputStream {
    // TODO: Implement close              from com.glide.script.fencing.app_store.ScopedGlideZipOutputStream under com.glide.script.fencing.app_store.ScopedGlideZipOutputStream
    // TODO: Implement closeEntry         from com.glide.script.fencing.app_store.ScopedGlideZipOutputStream under com.glide.script.fencing.app_store.ScopedGlideZipOutputStream
    // TODO: Implement getAttachmentSysID from com.glide.script.fencing.app_store.ScopedGlideZipOutputStream under com.glide.script.fencing.app_store.ScopedGlideZipOutputStream
    // TODO: Implement putNextEntry       from com.glide.script.fencing.app_store.ScopedGlideZipOutputStream under com.glide.script.fencing.app_store.ScopedGlideZipOutputStream
    // TODO: Implement write              from com.glide.script.fencing.app_store.ScopedGlideZipOutputStream under com.glide.script.fencing.app_store.ScopedGlideZipOutputStream
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document ScopedAppDictionaryXMLBuilder
 * @class ScopedAppDictionaryXMLBuilder
 * @implements {Packages.com.glide.script.fencing.app_store.ScopedAppDictionaryXMLBuilder}
 */
declare class ScopedAppDictionaryXMLBuilder implements Packages.com.glide.script.fencing.app_store.ScopedAppDictionaryXMLBuilder {
    // TODO: Implement unloadDictionaryXMLs          from com.glide.script.fencing.app_store.ScopedAppDictionaryXMLBuilder under com.glide.script.fencing.app_store.ScopedAppDictionaryXMLBuilder
    // TODO: Implement unloadPluginStaticContentXMLs from com.glide.script.fencing.app_store.ScopedAppDictionaryXMLBuilder under com.glide.script.fencing.app_store.ScopedAppDictionaryXMLBuilder
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideHTTPUtil
 * @class GlideHTTPUtil
 * @implements {Packages.com.glide.script.fencing.app_store.ScopedGlideHTTPUtil}
 */
declare class GlideHTTPUtil implements Packages.com.glide.script.fencing.app_store.ScopedGlideHTTPUtil {
    // TODO: Implement addHeader              from com.glide.script.fencing.app_store.ScopedGlideHTTPUtil under com.glide.script.fencing.app_store.ScopedGlideHTTPUtil
    // TODO: Implement downloadAttachment     from com.glide.script.fencing.app_store.ScopedGlideHTTPUtil under com.glide.script.fencing.app_store.ScopedGlideHTTPUtil
    // TODO: Implement get                    from com.glide.script.fencing.app_store.ScopedGlideHTTPUtil under com.glide.script.fencing.app_store.ScopedGlideHTTPUtil
    // TODO: Implement getErrorMessage        from com.glide.script.fencing.app_store.ScopedGlideHTTPUtil under com.glide.script.fencing.app_store.ScopedGlideHTTPUtil
    // TODO: Implement getStatusCode          from com.glide.script.fencing.app_store.ScopedGlideHTTPUtil under com.glide.script.fencing.app_store.ScopedGlideHTTPUtil
    // TODO: Implement isQuiet                from com.glide.script.fencing.app_store.ScopedGlideHTTPUtil under com.glide.script.fencing.app_store.ScopedGlideHTTPUtil
    // TODO: Implement post                   from com.glide.script.fencing.app_store.ScopedGlideHTTPUtil under com.glide.script.fencing.app_store.ScopedGlideHTTPUtil
    // TODO: Implement setBasicAuth           from com.glide.script.fencing.app_store.ScopedGlideHTTPUtil under com.glide.script.fencing.app_store.ScopedGlideHTTPUtil
    // TODO: Implement setQuiet               from com.glide.script.fencing.app_store.ScopedGlideHTTPUtil under com.glide.script.fencing.app_store.ScopedGlideHTTPUtil
    // TODO: Implement supportsHttpErrorCodes from com.glide.script.fencing.app_store.ScopedGlideHTTPUtil under com.glide.script.fencing.app_store.ScopedGlideHTTPUtil
    // TODO: Implement uploadAttachments      from com.glide.script.fencing.app_store.ScopedGlideHTTPUtil under com.glide.script.fencing.app_store.ScopedGlideHTTPUtil
    // TODO: Implement urlDecode              from com.glide.script.fencing.app_store.ScopedGlideHTTPUtil under com.glide.script.fencing.app_store.ScopedGlideHTTPUtil
    // TODO: Implement urlEncode              from com.glide.script.fencing.app_store.ScopedGlideHTTPUtil under com.glide.script.fencing.app_store.ScopedGlideHTTPUtil
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideAppLoader
 * @class GlideAppLoader
 * @implements {Packages.com.glide.script.fencing.app_store.ScopedGlideAppLoader}
 */
declare class GlideAppLoader implements Packages.com.glide.script.fencing.app_store.ScopedGlideAppLoader {
    // TODO: Implement installOrUpgradeApp          from com.glide.script.fencing.app_store.ScopedGlideAppLoader under com.glide.script.fencing.app_store.ScopedGlideAppLoader
    // TODO: Implement installOrUpgradeAppWithMutex from com.glide.script.fencing.app_store.ScopedGlideAppLoader under com.glide.script.fencing.app_store.ScopedGlideAppLoader
    // TODO: Implement loadConditionalContent       from com.glide.script.fencing.app_store.ScopedGlideAppLoader under com.glide.script.fencing.app_store.ScopedGlideAppLoader
    // TODO: Implement loadOfflineAppsWithOOB       from com.glide.script.fencing.app_store.ScopedGlideAppLoader under com.glide.script.fencing.app_store.ScopedGlideAppLoader
    // TODO: Implement reapOldLogo                  from com.glide.script.fencing.app_store.ScopedGlideAppLoader under com.glide.script.fencing.app_store.ScopedGlideAppLoader
    // TODO: Implement reapOldPackages              from com.glide.script.fencing.app_store.ScopedGlideAppLoader under com.glide.script.fencing.app_store.ScopedGlideAppLoader
    // TODO: Implement reapOldRemoteApp             from com.glide.script.fencing.app_store.ScopedGlideAppLoader under com.glide.script.fencing.app_store.ScopedGlideAppLoader
    // TODO: Implement setAuthorProperties          from com.glide.script.fencing.app_store.ScopedGlideAppLoader under com.glide.script.fencing.app_store.ScopedGlideAppLoader
    // TODO: Implement unloadDeleteToXML            from com.glide.script.fencing.app_store.ScopedGlideAppLoader under com.glide.script.fencing.app_store.ScopedGlideAppLoader
    // TODO: Implement unloadRecordToXML            from com.glide.script.fencing.app_store.ScopedGlideAppLoader under com.glide.script.fencing.app_store.ScopedGlideAppLoader
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document ScopedGlideSysAttachment
 * @class ScopedGlideSysAttachment
 * @implements {Packages.com.glide.script.fencing.app_store.ScopedGlideSysAttachment}
 */
declare class ScopedGlideSysAttachment implements Packages.com.glide.script.fencing.app_store.ScopedGlideSysAttachment {
    // TODO: Implement copy                                  from com.glide.script.fencing.app_store.ScopedGlideSysAttachment under com.glide.script.fencing.app_store.ScopedGlideSysAttachment
    // TODO: Implement createAttachmentsFromMultipartRequest from com.glide.script.fencing.app_store.ScopedGlideSysAttachment under com.glide.script.fencing.app_store.ScopedGlideSysAttachment
    // TODO: Implement getParameters                         from com.glide.script.fencing.app_store.ScopedGlideSysAttachment under com.glide.script.fencing.app_store.ScopedGlideSysAttachment
    // TODO: Implement readXMLDocument                       from com.glide.script.fencing.app_store.ScopedGlideSysAttachment under com.glide.script.fencing.app_store.ScopedGlideSysAttachment
    // TODO: Implement writeAttachmentToResponse             from com.glide.script.fencing.app_store.ScopedGlideSysAttachment under com.glide.script.fencing.app_store.ScopedGlideSysAttachment
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideUninstallApplicationInfo
 * @class GlideUninstallApplicationInfo
 * @implements {Packages.com.snc.apps.UninstallApplicationInfo}
 */
declare class GlideUninstallApplicationInfo implements Packages.com.snc.apps.UninstallApplicationInfo {
    // TODO: Implement getActive                       from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getApplicationName              from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getDataInfo                     from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getError                        from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getExtensionWarningCount        from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getFieldWarningCount            from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getNumFieldsOnOtherTables       from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getNumOtherTablesThatHaveFields from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getNumRowsOfData                from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getNumTables                    from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getNumTablesWithoutScopePrefix  from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getRcCount                      from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getRcSize                       from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getRcTableLabel                 from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getRcTableName                  from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getRcTableUrl                   from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getWAppClass                    from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getWAppId                       from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getWAppName                     from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getWAppScope                    from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getWAppUrl                      from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getWObjectClass                 from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getWObjectLabel                 from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getWObjectName                  from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getWObjectSysId                 from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getWObjectUrl                   from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getWReason                      from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getWTableId                     from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getWTableLabel                  from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getWTableName                   from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement getWTableUrl                    from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement isAppBootstrapped               from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement rcNext                          from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    // TODO: Implement wNext                           from com.snc.apps.UninstallApplicationInfo under com.snc.apps.UninstallApplicationInfo
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideClientDate
 * @class GlideClientDate
 * @implements {Packages.com.glide.script.fencing.app_store.ScopedGlideClientDate}
 */
declare class GlideClientDate implements Packages.com.glide.script.fencing.app_store.ScopedGlideClientDate {
    // TODO: Implement getDisplayValue from com.glide.script.fencing.app_store.ScopedGlideClientDate under com.glide.script.fencing.app_store.ScopedGlideClientDate
    // TODO: Implement setValue        from com.glide.script.fencing.app_store.ScopedGlideClientDate under com.glide.script.fencing.app_store.ScopedGlideClientDate
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * The scoped GlideSecureRandomUtil API provides methods for generating integers, long values, and strings.
 * @class GlideSecureRandomUtil
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideSecurityUtilsScopedAPIs}
 * @todo Add members to GlideSecureRandomUtil
 */
declare class GlideSecureRandomUtil implements Packages.com.glide.sys.security.SecureRandomUtil {
    // TODO: Implement static getSecureRandomInt      from com.glide.sys.security.SecureRandomUtil under com.glide.sys.security.SecureRandomUtil
    // TODO: Implement static getSecureRandomIntBound from com.glide.sys.security.SecureRandomUtil under com.glide.sys.security.SecureRandomUtil
    // TODO: Implement static getSecureRandomLong     from com.glide.sys.security.SecureRandomUtil under com.glide.sys.security.SecureRandomUtil
    // TODO: Implement static getSecureRandomString   from com.glide.sys.security.SecureRandomUtil under com.glide.sys.security.SecureRandomUtil
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

declare class GlideLRUCache	implements Packages.com.glide.sys.cache.LRUCache {
    equals(obj: any): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
    clear(): void;
    clone(): Packages.java.lang.Object;
    containsKey(key: any): $$rhino.Boolean;
    containsValue(value: any): $$rhino.Boolean;
    entrySet(): Packages.java.util.Set<Packages.java.util.MapEntry<any, any>>;
    get(key: any): any;
    isEmpty(): $$rhino.Boolean;
    keySet(): Packages.java.util.Set<any>;
    put(key: any, value: any): any;
    remove(key: any): any;
    size(): $$rhino.Number;
    values(): Packages.java.util.Collection<any>;
}

/**
 * The scoped GlideDigest class provides methods for creating a message digest from strings or input streams using MD5, SHA1, or SHA256 hash algorithms.
 * Library: glide-16.6.0.3.jar
 * @class GlideDigest
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideDigestScopedAPI}
 */
declare class GlideDigest implements Packages.com.glide.script.fencing.GlideDigest {
    /**
     * Creates an instance of GlideDigest.
     * @memberof GlideDigest
     */
    constructor();

    /**
     * Create a message digest from a string using the MD5 algorithm. The output string is in Base64.
     * @param {$$rhino.String} toHash - The source string.
     * @return {$$rhino.String} The message digest.
     * @memberof GlideDigest
     */
    md5_digest(toHash: $$rhino.String): $$rhino.String;

    /**
     * Create a message digest from a string using the SHA1 algorithm. The output string is in Base64.
     * @param {$$rhino.String} toHash - The source string.
     * @return {$$rhino.String} The message digest.
     * @memberof GlideDigest
     */
    sha1_digest(toHash: $$rhino.String): $$rhino.String;

    /**
     * Create a message digest from a string using the SHA256 algorithm. The output string is in Base64.
     * @param {$$rhino.String} toHash - The source string.
     * @return {$$rhino.String} The message digest.
     * @memberof GlideDigest
     */
    sha256_digest(toHash: $$rhino.String): $$rhino.String;
    
    /**
     * Create a message digest from a string using the MD5 algorithm. The output string is in Base64.
     * @param {$$rhino.String} source - The source string.
     * @return {$$rhino.String} The message digest.
     * @memberof GlideDigest
     */
    getMD5Base64(source: $$rhino.String): $$rhino.String;

    /**
     * Create a message digest from an input stream using the MD5 algorithm. The output string is in Base64.
     * @param {GlideScriptableInputStream} inputStream - The source input stream.
     * @return {$$rhino.String} The message digest.
     * @memberof GlideDigest
     */
    getMD5Base64FromInputStream(inputStream: GlideScriptableInputStream): $$rhino.String;

    /**
     * Create a message digest from a string using the MD5 algorithm. The output string is in hexadecimal.
     * @param {$$rhino.String} source - The source string.
     * @return {$$rhino.String} The message digest.
     * @memberof GlideDigest
     */
    getMD5Hex(source: $$rhino.String): $$rhino.String;

    /**
     * Create a message digest from an input stream using the MD5 algorithm. The output string is in hexadecimal.
     * @param {GlideScriptableInputStream} inputStream - The source input stream.
     * @return {$$rhino.String} The message digest.
     * @memberof GlideDigest
     */
    getMD5HexFromInputStream(inputStream: GlideScriptableInputStream): $$rhino.String;

    /**
     * Create a message digest from a string using the SHA1 algorithm. The output string is in Base64.
     * @param {$$rhino.String} source - The source string.
     * @return {$$rhino.String} The message digest.
     * @memberof GlideDigest
     */
    getSHA1Base64(source: $$rhino.String): $$rhino.String;

    /**
     * Create a message digest from an input stream using the SHA1 algorithm. The output string is in Base64.
     * @param {GlideScriptableInputStream} inputStream - The source input stream.
     * @return {$$rhino.String} The message digest.
     * @memberof GlideDigest
     */
    getSHA1Base64FromInputStream(inputStream: GlideScriptableInputStream): $$rhino.String;

    /**
     * Create a message digest from a string using the SHA1 algorithm. The output string is in hexadecimal.
     * @param {$$rhino.String} source - The source string.
     * @return {$$rhino.String} The message digest.
     * @memberof GlideDigest
     */
    getSHA1Hex(source: $$rhino.String): $$rhino.String;

    /**
     * Create a message digest from an input stream using the SHA1 algorithm. The output string is in hexadecimal.
     * @param {GlideScriptableInputStream} inputStream - The source input stream.
     * @return {$$rhino.String} The message digest.
     * @memberof GlideDigest
     */
    getSHA1HexFromInputStream(inputStream: GlideScriptableInputStream): $$rhino.String;

    /**
     * Create a message digest from a string using the SHA256 algorithm. The output string is in Base64.
     * @param {$$rhino.String} source - The source string.
     * @return {$$rhino.String} The message digest.
     * @memberof GlideDigest
     */
    getSHA256Base64(source: $$rhino.String): $$rhino.String;

    /**
     * Create a message digest from an input stream using the SHA256 algorithm. The output string is in Base64.
     * @param {GlideScriptableInputStream} inputStream - The source input stream.
     * @return {$$rhino.String} The message digest.
     * @memberof GlideDigest
     */
    getSHA256Base64FromInputStream(inputStream: GlideScriptableInputStream): $$rhino.String;

    /**
     * Create a message digest from a string using the SHA256 algorithm. The output string is in hexadecimal.
     * @param {$$rhino.String} source - The source string.
     * @return {$$rhino.String} The message digest.
     * @memberof GlideDigest
     */
    getSHA256Hex(source: $$rhino.String): $$rhino.String;

    /**
     * Create a message digest from an input stream using the SHA256 algorithm. The output string is in hexadecimal.
     * @param {GlideScriptableInputStream} inputStream - The source input stream.
     * @return {$$rhino.String} The message digest.
     * @memberof GlideDigest
     */
    getSHA256HexFromInputStream(inputStream: GlideScriptableInputStream): $$rhino.String;

    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document Digest
 * @class Digest
 * @implements {Packages.com.glide.script.fencing.GlideDigest}
 */
declare class Digest implements Packages.com.glide.script.fencing.GlideDigest {
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * The PAScorecard API enables you to fetch data about indicators and their associated records, such as breakdowns.
 * @class PAScorecard
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/PAScorecard}
 * @todo Add members to PAScorecard
 */
declare class PAScorecard implements Packages.com.snc.pa.api.PAScorecard {
    // TODO: Implement get result from com.snc.pa.api.PAScorecard under com.snc.pa.api.PAScorecard
    // TODO: Implement addParam   from com.snc.pa.api.PAScorecard under com.snc.pa.api.PAScorecard
    // TODO: Implement query      from com.snc.pa.api.PAScorecard under com.snc.pa.api.PAScorecard
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document CIRelationInfoUtil
 * @class CIRelationInfoUtil
 * @implements {Packages.com.snc.cmdb.relations.script.CIRelationInfoUtil}
 */
declare class CIRelationInfoUtil implements Packages.com.snc.cmdb.relations.script.CIRelationInfoUtil {
    // TODO: Implement getAllRelationEntries from com.snc.cmdb.relations.script.CIRelationInfoUtil under com.snc.cmdb.relations.script.CIRelationInfoUtil
    // TODO: Implement getServiceCIs         from com.snc.cmdb.relations.script.CIRelationInfoUtil under com.snc.cmdb.relations.script.CIRelationInfoUtil
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document CertificationProcessing
 * @class CertificationProcessing
 * @implements {Packages.com.snc.certification_core.CertificationProcessing}
 */
declare class CertificationProcessing implements Packages.com.snc.certification_core.CertificationProcessing {
    // TODO: Implement createFollowOnTask from com.snc.certification_core.CertificationProcessing under com.snc.certification_core.CertificationProcessing
    // TODO: Implement getFilterRecords   from com.snc.certification_core.CertificationProcessing under com.snc.certification_core.CertificationProcessing
    // TODO: Implement logAuditResultFail from com.snc.certification_core.CertificationProcessing under com.snc.certification_core.CertificationProcessing
    // TODO: Implement logAuditResultPass from com.snc.certification_core.CertificationProcessing under com.snc.certification_core.CertificationProcessing
    // TODO: Implement previewAudit       from com.snc.certification_core.CertificationProcessing under com.snc.certification_core.CertificationProcessing
    // TODO: Implement runAudit           from com.snc.certification_core.CertificationProcessing under com.snc.certification_core.CertificationProcessing
    // TODO: Implement runControlTest     from com.snc.certification_core.CertificationProcessing under com.snc.certification_core.CertificationProcessing
    // TODO: Implement updateLastRunDate  from com.snc.certification_core.CertificationProcessing under com.snc.certification_core.CertificationProcessing
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document ScopedPAFormula
 * @class ScopedPAFormula
 * @implements {Packages.com.snc.pa.js.ScopedPAFormula}
 */
declare class ScopedPAFormula implements Packages.com.snc.pa.js.ScopedPAFormula {
    // TODO: Implement contains        from com.snc.pa.js.ScopedPAFormula under com.snc.pa.js.ScopedPAFormula
    // TODO: Implement evaluateFormula from com.snc.pa.js.ScopedPAFormula under com.snc.pa.js.ScopedPAFormula
    // TODO: Implement getDisplay      from com.snc.pa.js.ScopedPAFormula under com.snc.pa.js.ScopedPAFormula
    // TODO: Implement getError        from com.snc.pa.js.ScopedPAFormula under com.snc.pa.js.ScopedPAFormula
    // TODO: Implement getFormula      from com.snc.pa.js.ScopedPAFormula under com.snc.pa.js.ScopedPAFormula
    // TODO: Implement getIndicators   from com.snc.pa.js.ScopedPAFormula under com.snc.pa.js.ScopedPAFormula
    // TODO: Implement isValid         from com.snc.pa.js.ScopedPAFormula under com.snc.pa.js.ScopedPAFormula
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * The PASnapshot API enables you to query information about Performance Analytics snapshots. Snapshots are the lists of records (sys_ids) that are collected at the time that the scores for those records are collected. A snapshot is made only for automated indicators with Collect records selected.
 * @class PASnapshot
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/PASnapshot}
 * @todo Add members to PASnapshot
 */
declare class PASnapshot implements Packages.com.snc.pa.js.PASnapshot {
    // TODO: Implement static getCompareIDs           from com.snc.pa.js.PASnapshot under com.snc.pa.js.PASnapshot
    // TODO: Implement static getCompareQuery         from com.snc.pa.js.PASnapshot under com.snc.pa.js.PASnapshot
    // TODO: Implement static getEncodedComparedQuery from com.snc.pa.js.PASnapshot under com.snc.pa.js.PASnapshot
    // TODO: Implement static getEncodedQuery         from com.snc.pa.js.PASnapshot under com.snc.pa.js.PASnapshot
    // TODO: Implement static getIDs                  from com.snc.pa.js.PASnapshot under com.snc.pa.js.PASnapshot
    // TODO: Implement static getQuery                from com.snc.pa.js.PASnapshot under com.snc.pa.js.PASnapshot
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}
/**
 * TODO: Document ScopedPATarget
 * @class ScopedPATarget
 * @implements {Packages.com.snc.pa.js.ScopedPATarget}
 */
declare class ScopedPATarget implements Packages.com.snc.pa.js.ScopedPATarget {
    // TODO: Implement canCreate           from com.snc.pa.js.ScopedPATarget under com.snc.pa.js.ScopedPATarget
    // TODO: Implement canDelete           from com.snc.pa.js.ScopedPATarget under com.snc.pa.js.ScopedPATarget
    // TODO: Implement canRead             from com.snc.pa.js.ScopedPATarget under com.snc.pa.js.ScopedPATarget
    // TODO: Implement canWrite            from com.snc.pa.js.ScopedPATarget under com.snc.pa.js.ScopedPATarget
    // TODO: Implement forIndicator        from com.snc.pa.js.ScopedPATarget under com.snc.pa.js.ScopedPATarget
    // TODO: Implement getDuplicateMSG     from com.snc.pa.js.ScopedPATarget under com.snc.pa.js.ScopedPATarget
    // TODO: Implement isDuplicate         from com.snc.pa.js.ScopedPATarget under com.snc.pa.js.ScopedPATarget
    // TODO: Implement isGlobal            from com.snc.pa.js.ScopedPATarget under com.snc.pa.js.ScopedPATarget
    // TODO: Implement setTargetValue      from com.snc.pa.js.ScopedPATarget under com.snc.pa.js.ScopedPATarget
    // TODO: Implement withAggregate       from com.snc.pa.js.ScopedPATarget under com.snc.pa.js.ScopedPATarget
    // TODO: Implement withAnyElement      from com.snc.pa.js.ScopedPATarget under com.snc.pa.js.ScopedPATarget
    // TODO: Implement withBreakdown       from com.snc.pa.js.ScopedPATarget under com.snc.pa.js.ScopedPATarget
    // TODO: Implement withBreakdownLevel2 from com.snc.pa.js.ScopedPATarget under com.snc.pa.js.ScopedPATarget
    // TODO: Implement withElement         from com.snc.pa.js.ScopedPATarget under com.snc.pa.js.ScopedPATarget
    // TODO: Implement withElementLevel2   from com.snc.pa.js.ScopedPATarget under com.snc.pa.js.ScopedPATarget
    // TODO: Implement withOwner           from com.snc.pa.js.ScopedPATarget under com.snc.pa.js.ScopedPATarget
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * A GlideScriptableInputStream object cannot be instantiated directly, but is used as an opaque object which is used to connect an input stream from GlideSysAttachment.getContentStream() with other streaming APIs, such as GlideTextReader, GlideDigest, and XMLDocument2.
 * @class GlideScriptableInputStream
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideScriptableInpStrmScopedAPI}
 * @todo Add members to GlideScriptableInputStream
 */
declare class GlideScriptableInputStream implements Packages.com.glide.communications.GlideScriptableInputStream {
    read(): $$rhino.Number;
    close(): void;
    reset(): void;
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * Provides methods to work with URLs.
 * @class GlideSecurityUtils
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/GlideSecurityUtilsScopedAPI}
 * @todo Add members to GlideSecurityUtils
 */
declare class GlideSecurityUtils implements Packages.com.glide.sys.security.GlideSecurityUtils {
    // TODO: Implement static cleanURL           from com.glide.sys.security.GlideSecurityUtils under com.glide.sys.security.GlideSecurityUtils
    // TODO: Implement static enforceRelativeURL from com.glide.sys.security.GlideSecurityUtils under com.glide.sys.security.GlideSecurityUtils
    // TODO: Implement static escapeScript       from com.glide.sys.security.GlideSecurityUtils under com.glide.sys.security.GlideSecurityUtils
    // TODO: Implement static isURLWhiteListed   from com.glide.sys.security.GlideSecurityUtils under com.glide.sys.security.GlideSecurityUtils
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document MetadataLinkUtil
 * @class MetadataLinkUtil
 * @implements {Packages.com.glide.metadata.MetadataLinkUtil}
 */
declare class MetadataLinkUtil implements Packages.com.glide.metadata.MetadataLinkUtil {
    // TODO: Implement static isMetadataLinkExempt from com.glide.metadata.MetadataLinkUtil under com.glide.metadata.MetadataLinkUtil
    // TODO: Implement static isTableMetadataLinkExempt from com.glide.metadata.MetadataLinkUtil under com.glide.metadata.MetadataLinkUtil
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document TransactionReplayRunner
 * @class TransactionReplayRunner
 * @implements {Packages.com.glide.transaction_replay.runner.TransactionReplayRunner}
 */
declare class TransactionReplayRunner implements Packages.com.glide.transaction_replay.runner.TransactionReplayRunner {
    // TODO: Implement static doRun from com.glide.transaction_replay.runner.TransactionReplayRunner under com.glide.transaction_replay.runner.TransactionReplayRunner
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document CachedRecord
 * @class CachedRecord
 * @implements {Packages.com.glide.sys.cache.record_change.storage.ScriptableCachedRecord}
 */
declare class CachedRecord implements Packages.com.glide.sys.cache.record_change.storage.ScriptableCachedRecord {
    // TODO: Implement getTableName   from com.glide.sys.cache.record_change.storage.ScriptableCachedRecord under com.glide.sys.cache.record_change.storage.ScriptableCachedRecord
    // TODO: Implement getUniqueValue from com.glide.sys.cache.record_change.storage.ScriptableCachedRecord under com.glide.sys.cache.record_change.storage.ScriptableCachedRecord
    // TODO: Implement getValue       from com.glide.sys.cache.record_change.storage.ScriptableCachedRecord under com.glide.sys.cache.record_change.storage.ScriptableCachedRecord
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * Build functions to perform SQL operations in the database.
 * The GlideDBFunctionBuilder methods provide a way to build Relational Database Management System (RDBMS) functions to perform SQL operations on record data.
 * These methods can be used in both scoped and global server scripts.
 * @class GlideDBFunctionBuilder
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/GlideDBFunctionBuilderScopedAPI}
 */
declare class GlideDBFunctionBuilder implements Packages.com.glide.db.functions.GlideDBFunctionBuilder {
    // TODO: Implement add       from com.glide.db.functions.GlideDBFunctionBuilder under com.glide.db.functions.GlideDBFunctionBuilder
    // TODO: Implement build     from com.glide.db.functions.GlideDBFunctionBuilder under com.glide.db.functions.GlideDBFunctionBuilder
    // TODO: Implement concat    from com.glide.db.functions.GlideDBFunctionBuilder under com.glide.db.functions.GlideDBFunctionBuilder
    // TODO: Implement constant  from com.glide.db.functions.GlideDBFunctionBuilder under com.glide.db.functions.GlideDBFunctionBuilder
    // TODO: Implement datediff  from com.glide.db.functions.GlideDBFunctionBuilder under com.glide.db.functions.GlideDBFunctionBuilder
    // TODO: Implement dayofweek from com.glide.db.functions.GlideDBFunctionBuilder under com.glide.db.functions.GlideDBFunctionBuilder
    // TODO: Implement divide    from com.glide.db.functions.GlideDBFunctionBuilder under com.glide.db.functions.GlideDBFunctionBuilder
    // TODO: Implement endfunc   from com.glide.db.functions.GlideDBFunctionBuilder under com.glide.db.functions.GlideDBFunctionBuilder
    // TODO: Implement field     from com.glide.db.functions.GlideDBFunctionBuilder under com.glide.db.functions.GlideDBFunctionBuilder
    // TODO: Implement length    from com.glide.db.functions.GlideDBFunctionBuilder under com.glide.db.functions.GlideDBFunctionBuilder
    // TODO: Implement multiply  from com.glide.db.functions.GlideDBFunctionBuilder under com.glide.db.functions.GlideDBFunctionBuilder
    // TODO: Implement now       from com.glide.db.functions.GlideDBFunctionBuilder under com.glide.db.functions.GlideDBFunctionBuilder
    // TODO: Implement subtract  from com.glide.db.functions.GlideDBFunctionBuilder under com.glide.db.functions.GlideDBFunctionBuilder
    /**
     * Creates an instance of GlideDBFunctionBuilder.
     * @memberof GlideDBFunctionBuilder
     */
    constructor();

    /**
     * Adds the values of two or more integer fields.
     * Use the {@link #field} method to define fields on which the operation is performed.
     * @memberof GlideDBFunctionBuilder
     */
    add(): void;

    /**
     * Builds the database function defined by the GlideDBFunctionBuilder object.
     * @memberof GlideDBFunctionBuilder
     */
    build(): void;

    /**
     * Concatenates the values of two or more fields.
     * Use the {@link #field} method to define fields on which the operation is performed.
     * @memberof GlideDBFunctionBuilder
     */
    concat(): void;
    
    /**
     * Defines a constant value to use in the function.
     * If used with the {@link #dayofweek} method, the string defines whether to use Sunday or Monday as the first day of the week.
     * @param {$$rhino.String} constant
     * @memberof GlideDBFunctionBuilder
     */
    constant(constant: $$rhino.String): void;

    /**
     * Determines the duration using a given start date/time and end date/time.
     * Use the {@link #field} method to define start and end date/time fields.
     * @memberof GlideDBFunctionBuilder
     */
    datediff(): void;
    
    /**
     * Returns an integer representing the day of the week for a given date.
     * Use the {@link #field} method to define the given date/time. Use the {@link #constant} method to define whether the week starts on a Sunday or Monday.
     * This method can be used with MySQL, Oracle, and Microsoft SQL Server databases only.
     * If using an Oracle database, the NLS_TERRITORY setting must be set to a territory with Sunday as the first day of the week.
     * @return {$$rhino.Number}
     * @memberof GlideDBFunctionBuilder
     */
    dayofweek(): $$rhino.Number;

    /**
     * Divides the value of one integer field by another.
     * Use the {@link #field} method to define fields on which the operation is performed.
     * @memberof GlideDBFunctionBuilder
     */
    divide(): void;
    
    /**
     * Defines a field on which a SQL operation is performed.
     * @param {$$rhino.String} field
     * @memberof GlideDBFunctionBuilder
     */
    field(field: $$rhino.String): void;

    /**
     * Determines the number of code units in a field.
     * Use the {@link #field} method to define fields on which the operation is performed.
     * @memberof GlideDBFunctionBuilder
     */
    length(): void;
    
    /**
     * Multiplies the values of two integer fields.
     * Use the {@link #field} method to define fields on which the operation is performed.
     * @memberof GlideDBFunctionBuilder
     */
    multiply(): void;
    
    /**
     * Subtracts the value of one integer field from another.
     * Use the {@link #field} method to define fields on which the operation is performed.
     * @memberof GlideDBFunctionBuilder
     */
    subtract(): void;
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * Provides methods to remove invalid characters from an XML string, and to validate an XML string.
 * @class GlideXMLUtil
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/GlideXMLUtilAPI}
 * @todo Add members to GlideXMLUtil
 */
declare class GlideXMLUtil implements Packages.com.glide.util.ScopedXMLUtil {
    // TODO: Implement static removeInvalidChars from com.glide.util.ScopedXMLUtil under com.glide.util.ScopedXMLUtil
    // TODO: Implement static validateXML        from com.glide.util.ScopedXMLUtil under com.glide.util.ScopedXMLUtil
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * Provides string handling methods.
 * @class GlideStringUtil
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/GlideStringUtilScopedAPI}
 * @todo Add members to GlideStringUtil
 */
declare class GlideStringUtil implements Packages.com.glide.util.ScopedStringUtil {
    // TODO: Implement static dotToUnderBar            from com.glide.util.ScopedStringUtil under com.glide.util.ScopedStringUtil
    // TODO: Implement static escapeAllQuotes          from com.glide.util.ScopedStringUtil under com.glide.util.ScopedStringUtil
    // TODO: Implement static escapeForHomePage        from com.glide.util.ScopedStringUtil under com.glide.util.ScopedStringUtil
    // TODO: Implement static escapeHTML               from com.glide.util.ScopedStringUtil under com.glide.util.ScopedStringUtil
    // TODO: Implement static escapeNonPrintable       from com.glide.util.ScopedStringUtil under com.glide.util.ScopedStringUtil
    // TODO: Implement static escapeQueryTermSeparator from com.glide.util.ScopedStringUtil under com.glide.util.ScopedStringUtil
    // TODO: Implement static escapeTicks              from com.glide.util.ScopedStringUtil under com.glide.util.ScopedStringUtil
    // TODO: Implement static getHTMLValue             from com.glide.util.ScopedStringUtil under com.glide.util.ScopedStringUtil
    // TODO: Implement static getNumeric               from com.glide.util.ScopedStringUtil under com.glide.util.ScopedStringUtil
    // TODO: Implement static isBase64                 from com.glide.util.ScopedStringUtil under com.glide.util.ScopedStringUtil
    // TODO: Implement static isEligibleSysID          from com.glide.util.ScopedStringUtil under com.glide.util.ScopedStringUtil
    // TODO: Implement static newLinesToBreaks         from com.glide.util.ScopedStringUtil under com.glide.util.ScopedStringUtil
    // TODO: Implement static normalizeWhitespace      from com.glide.util.ScopedStringUtil under com.glide.util.ScopedStringUtil
    // TODO: Implement static unescapeHTML             from com.glide.util.ScopedStringUtil under com.glide.util.ScopedStringUtil
    /**
     * Replaces periods with underscore characters.
     * @param {$$rhino.String} sourceString - Text to process.
     * @return {string} Text with periods replaced with underscores.
     * @memberof GlideStringUtil
     */
    static dotToUnderBar(sourceString: $$rhino.String): string;
    
    /**
     * Removes quotes from a string.
     * @param {$$rhino.String} sourceString - The string to be processed.
     * @return {string} The string with quotes removed.
     * @memberof GlideStringUtil
     */
    static escapeAllQuotes(sourceString: $$rhino.String): string;
    
    /**
     * Replaces problem characters with escape characters.
     * @param {$$rhino.String} sourceString - Text to process.
     * @return {string} Text with problem characters replaced with escape characters.
     * @memberof GlideStringUtil
     */
    static escapeForHomePage(sourceString: $$rhino.String): string;

    /**
     * Replaces illegal characters with their escape codes.
     * @param {$$rhino.String} sourceString - Text to process.
     * @return {string} Text with illegal characters replaced with their escape codes.
     * @memberof GlideStringUtil
     * @description Using this method removes illegal characters that might cause the UI to render improperly, or trigger a client side attack such as JavaScript or HTML injection.
     */
    static escapeHTML(sourceString: $$rhino.String): string;

    /**
     * Replaces non-printable characters with their printable notation.
     * @param {$$rhino.String} sourceString - Text to process.
     * @return {string} Text with non-printable characters replaced with printable notation.
     * @memberof GlideStringUtil
     */
    static escapeNonPrintable(sourceString: $$rhino.String): string;

    /**
     * Replaces query term separators "^" with their escape sequence "^^".
     * @param {string} sourceString - Text to process.
     * @return {string} Text with query term separators replaced with the escape characters.
     * @memberof GlideStringUtil
     */
    static escapeQueryTermSeparator(sourceString: $$rhino.String): string;

    /**
     * Replaces quotes with escape characters by adding a backslash before each quote.
     * @param {string} sourceString - Text to process.
     * @return {string} Text with backslashes added before quotes.
     * @memberof GlideStringUtil
     */
    static escapeTicks(sourceString: $$rhino.String): string;

    /**
     * Replaces illegal HTML characters into HTML notation.
     * @param {$$rhino.String} sourceString - Text to process.
     * @return {string} Text with illegal characters replaced with HTML notation.
     * @memberof GlideStringUtil
     * @description Using this method removes illegal characters that might cause the UI to render improperly, or trigger a client side attack such as JavaScript or HTML injection.
     */
    static getHTMLValue(sourceString: $$rhino.String): string;

    /**
     * Extracts numeric characters from a string.
     * @param {$$rhino.String} sourceString - Text to process.
     * @return {string} Text containing only numeric characters.
     * @memberof GlideStringUtil
     */
    static getNumeric(sourceString: $$rhino.String): string;

    /**
     * Validates whether the specified string is a valid base64 string.
     * @param {$$rhino.String} sourceString - Text to process.
     * @return {boolean} true if the source string is a base64 formatted string; otherwise, false.
     * @memberof GlideStringUtil
     */
    static isBase64(sourceString: $$rhino.String): boolean;

    /**
     * Validates whether the specified string is in valid sys_id format.
     * @param {$$rhino.String} sourceString - Text to process.
     * @return {boolean} true if the source string is a valid sys_id formatted string; otherwise, false.
     * @memberof GlideStringUtil
     * @description The sys_id format is a sequence of 32 hexadecimal characters where all the characters are in the range [0-9, a-f, A-F].
     */
    static isEligibleSysID(sourceString: $$rhino.String): boolean;

    /**
     * Replaces the new line character, /n, with a break code, <br/>.
     * @param {$$rhino.String} sourceString - Text to process.
     * @return {string} Text with new line characters replaced with HTML break code.
     * @memberof GlideStringUtil
     */
    static newLinesToBreaks(sourceString: $$rhino.String): string;

    /**
     * Replaces carriage returns, line feeds, and tabs with spaces, and then removes leading, trailing, and duplicate spaces.
     * @param {$$rhino.String} sourceString - Text to process.
     * @return {string} Text with carriage returns, line feeds, and tabs replaced with spaces, and then leading, trailing, and duplicate spaces removed.
     * @memberof GlideStringUtil
     */
    static normalizeWhitespace(sourceString: $$rhino.String): string;

    /**
     * Replaces escape characters with their respective character.
     * @param {$$rhino.String} htmlString - String to process.
     * @return {string} String with the escape characters replaced.
     * @memberof GlideStringUtil
     * @description This method replaces these escape characters: &lt; &gt: &nbsp; &amp; &quote;.
     */
    static unescapeHTML(htmlString: $$rhino.String): string;
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document FlowTriggerAPI
 * @class FlowTriggerAPI
 * @implements {Packages.com.glide.flow_trigger.trigger.ScopedTriggerAPI}
 */
declare class FlowTriggerAPI implements Packages.com.glide.flow_trigger.trigger.ScopedTriggerAPI {
    // TODO: Implement static createRestTrigger  from com.glide.flow_trigger.trigger.ScopedTriggerAPI under com.glide.flow_trigger.trigger.ScopedTriggerAPI
    // TODO: Implement static createTimerTrigger from com.glide.flow_trigger.trigger.ScopedTriggerAPI under com.glide.flow_trigger.trigger.ScopedTriggerAPI
    // TODO: Implement static fireCatalogTrigger from com.glide.flow_trigger.trigger.ScopedTriggerAPI under com.glide.flow_trigger.trigger.ScopedTriggerAPI
    // TODO: Implement static fireRestTrigger    from com.glide.flow_trigger.trigger.ScopedTriggerAPI under com.glide.flow_trigger.trigger.ScopedTriggerAPI
    // TODO: Implement static fireTimerTrigger   from com.glide.flow_trigger.trigger.ScopedTriggerAPI under com.glide.flow_trigger.trigger.ScopedTriggerAPI
    // TODO: Implement static fireTriggerMessage from com.glide.flow_trigger.trigger.ScopedTriggerAPI under com.glide.flow_trigger.trigger.ScopedTriggerAPI
    // TODO: Implement static getSysTrigger      from com.glide.flow_trigger.trigger.ScopedTriggerAPI under com.glide.flow_trigger.trigger.ScopedTriggerAPI
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document CSSPropertiesRepository
 * @class CSSPropertiesRepository
 * @implements {Packages.com.glide.ui.content.CSSPropertiesScriptableAPI}
 */
declare class CSSPropertiesRepository implements Packages.com.glide.ui.content.CSSPropertiesScriptableAPI {
    // TODO: Implement static getPropertiesForTheme from com.glide.ui.content.CSSPropertiesScriptableAPI under com.glide.ui.content.CSSPropertiesScriptableAPI
    // TODO: Implement static getSessionProperties  from com.glide.ui.content.CSSPropertiesScriptableAPI under com.glide.ui.content.CSSPropertiesScriptableAPI
    // TODO: Implement static getSystemProperties   from com.glide.ui.content.CSSPropertiesScriptableAPI under com.glide.ui.content.CSSPropertiesScriptableAPI
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document UxPageTreeCloner
 * @class UxPageTreeCloner
 * @implements {Packages.com.glide.uxpage.data.UxPageTreeCloner}
 */
declare class UxPageTreeCloner implements Packages.com.glide.uxpage.data.UxPageTreeCloner {
    // TODO: Implement static clonePageElement from com.glide.uxpage.data.UxPageTreeCloner under com.glide.uxpage.data.UxPageTreeCloner
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideAvatarFinder
 * @class GlideAvatarFinder
 * @implements {Packages.com.glide.script.fencing.GlideAvatarFinder}
 */
declare class GlideAvatarFinder implements Packages.com.glide.script.fencing.GlideAvatarFinder {
    // TODO: Implement static getAvatarID from com.glide.script.fencing.GlideAvatarFinder under com.glide.script.fencing.GlideAvatarFinder
    // TODO: Implement static getAvatarPath from com.glide.script.fencing.GlideAvatarFinder under com.glide.script.fencing.GlideAvatarFinder
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideappQuestion
 * @class GlideappQuestion
 * @implements {Packages.com.glideapp.questionset.fencing.ScopedQuestion}
 */
declare class GlideappQuestion implements Packages.com.glideapp.questionset.fencing.ScopedQuestion {
    // TODO: Implement canCreate              from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement canRead                from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement canWrite               from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getChoiceField         from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getChoiceList          from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getChoiceTable         from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getCreateRoles         from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getDisplayValue        from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getED                  from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getId                  from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getLabel               from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getLookupLabel         from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getLookupTable         from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getLookupValue         from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getMacro               from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getName                from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getOrder               from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getQuestion            from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getReadRoles           from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getSummaryMacro        from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getType                from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getValidationMessage   from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getValue               from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement getWriteRoles          from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement hasPricingImplications from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement isActive               from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement isVisibleSummary       from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement setValue               from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    // TODO: Implement validateRegex          from com.glideapp.questionset.fencing.ScopedQuestion under com.glideapp.questionset.fencing.ScopedQuestion
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document UAKeyDescriptorBuilder
 * @class UAKeyDescriptorBuilder
 * @implements {Packages.com.glide.usageanalytics.ScopedUAKeyDescriptorListBuilder}
 */
declare class UAKeyDescriptorBuilder implements Packages.com.glide.usageanalytics.ScopedUAKeyDescriptorListBuilder {
    // TODO: Implement buildKeyType       from com.glide.usageanalytics.ScopedUAKeyDescriptorListBuilder under com.glide.usageanalytics.ScopedUAKeyDescriptorListBuilder
    // TODO: Implement buildKeyTypeLength from com.glide.usageanalytics.ScopedUAKeyDescriptorListBuilder under com.glide.usageanalytics.ScopedUAKeyDescriptorListBuilder
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document EventAnalyticsAggConfig
 * @class EventAnalyticsAggConfig
 * @implements {Packages.com.glide.usageanalytics.framework.event_aggregation.ScopedEventAggConfig}
 */
declare class EventAnalyticsAggConfig implements Packages.com.glide.usageanalytics.framework.event_aggregation.ScopedEventAggConfig {
    // TODO: Implement build                from com.glide.usageanalytics.framework.event_aggregation.ScopedEventAggConfig under com.glide.usageanalytics.framework.event_aggregation.ScopedEventAggConfig
    // TODO: Implement setAggKeys           from com.glide.usageanalytics.framework.event_aggregation.ScopedEventAggConfig under com.glide.usageanalytics.framework.event_aggregation.ScopedEventAggConfig
    // TODO: Implement setAggregationID     from com.glide.usageanalytics.framework.event_aggregation.ScopedEventAggConfig under com.glide.usageanalytics.framework.event_aggregation.ScopedEventAggConfig
    // TODO: Implement setAggregationTable  from com.glide.usageanalytics.framework.event_aggregation.ScopedEventAggConfig under com.glide.usageanalytics.framework.event_aggregation.ScopedEventAggConfig
    // TODO: Implement setEventType         from com.glide.usageanalytics.framework.event_aggregation.ScopedEventAggConfig under com.glide.usageanalytics.framework.event_aggregation.ScopedEventAggConfig
    // TODO: Implement setMetadataVersion   from com.glide.usageanalytics.framework.event_aggregation.ScopedEventAggConfig under com.glide.usageanalytics.framework.event_aggregation.ScopedEventAggConfig
    // TODO: Implement setRawKeysDescriptor from com.glide.usageanalytics.framework.event_aggregation.ScopedEventAggConfig under com.glide.usageanalytics.framework.event_aggregation.ScopedEventAggConfig
    // TODO: Implement setStreamID          from com.glide.usageanalytics.framework.event_aggregation.ScopedEventAggConfig under com.glide.usageanalytics.framework.event_aggregation.ScopedEventAggConfig
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideVScriptableTableAPI
 * @class GlideVScriptableTableAPI
 * @implements {Packages.com.glide.script.vtable.api.GlideVScriptableTableAPI}
 */
declare class GlideVScriptableTableAPI implements Packages.com.glide.script.vtable.api.GlideVScriptableTableAPI {
    equals(obj: object): $$rhino.Boolean;
    // TODO: Implement addRow from com.glide.script.vtable.api.GlideVScriptableTableAPI under com.glide.script.vtable.api.GlideVScriptableTableAP
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideVScriptableQueryAPI
 * @class GlideVScriptableQueryAPI
 * @implements {Packages.com.glide.script.vtable.api.GlideVScriptableQueryAPI}
 */
declare class GlideVScriptableQueryAPI implements Packages.com.glide.script.vtable.api.GlideVScriptableQueryAPI {
    // TODO: Implement getCondition        from com.glide.script.vtable.api.GlideVScriptableQueryAPI under com.glide.script.vtable.api.GlideVScriptableQueryAPI
    // TODO: Implement getEncodedQuery     from com.glide.script.vtable.api.GlideVScriptableQueryAPI under com.glide.script.vtable.api.GlideVScriptableQueryAPI
    // TODO: Implement getFirstOrderBy     from com.glide.script.vtable.api.GlideVScriptableQueryAPI under com.glide.script.vtable.api.GlideVScriptableQueryAPI
    // TODO: Implement getFirstRowWanted   from com.glide.script.vtable.api.GlideVScriptableQueryAPI under com.glide.script.vtable.api.GlideVScriptableQueryAPI
    // TODO: Implement getLastRowWanted    from com.glide.script.vtable.api.GlideVScriptableQueryAPI under com.glide.script.vtable.api.GlideVScriptableQueryAPI
    // TODO: Implement getLimit            from com.glide.script.vtable.api.GlideVScriptableQueryAPI under com.glide.script.vtable.api.GlideVScriptableQueryAPI
    // TODO: Implement getParameter        from com.glide.script.vtable.api.GlideVScriptableQueryAPI under com.glide.script.vtable.api.GlideVScriptableQueryAPI
    // TODO: Implement getSysId            from com.glide.script.vtable.api.GlideVScriptableQueryAPI under com.glide.script.vtable.api.GlideVScriptableQueryAPI
    // TODO: Implement getTextSearch       from com.glide.script.vtable.api.GlideVScriptableQueryAPI under com.glide.script.vtable.api.GlideVScriptableQueryAPI
    // TODO: Implement isGet               from com.glide.script.vtable.api.GlideVScriptableQueryAPI under com.glide.script.vtable.api.GlideVScriptableQueryAPI
    // TODO: Implement isTextSearch        from com.glide.script.vtable.api.GlideVScriptableQueryAPI under com.glide.script.vtable.api.GlideVScriptableQueryAPI
    // TODO: Implement setFirstRowWanted   from com.glide.script.vtable.api.GlideVScriptableQueryAPI under com.glide.script.vtable.api.GlideVScriptableQueryAPI
    // TODO: Implement setLastErrorMessage from com.glide.script.vtable.api.GlideVScriptableQueryAPI under com.glide.script.vtable.api.GlideVScriptableQueryAPI
    // TODO: Implement setLastRowWanted    from com.glide.script.vtable.api.GlideVScriptableQueryAPI under com.glide.script.vtable.api.GlideVScriptableQueryAPI
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document UserSkillAnalyzer
 * @class UserSkillAnalyzer
 * @implements {Packages.com.snc.skills_management.ScriptableUserSkillAnalyzer}
 */
declare class UserSkillAnalyzer implements Packages.com.snc.skills_management.ScriptableUserSkillAnalyzer {
    // TODO: Implement analyzeUserById     from com.snc.skills_management.ScriptableUserSkillAnalyzer under com.snc.skills_management.ScriptableUserSkillAnalyzer
    // TODO: Implement analyzeUserBySkills from com.snc.skills_management.ScriptableUserSkillAnalyzer under com.snc.skills_management.ScriptableUserSkillAnalyzer
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document UserSkillRanking
 * @class UserSkillRanking
 * @implements {Packages.com.snc.skills_management.ScriptableUserSkillRanking}
 */
declare class UserSkillRanking implements Packages.com.snc.skills_management.ScriptableUserSkillRanking {
    // TODO: Implement getQualifiedRankedUsers from com.snc.skills_management.ScriptableUserSkillRanking under com.snc.skills_management.ScriptableUserSkillRanking
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideScopeNameUtil
 * @class GlideScopeNameUtil
 * @implements {Packages.com.glide.app_store.ScopeNameUtilWrapper}
 */
declare class GlideScopeNameUtil implements Packages.com.glide.app_store.ScopeNameUtilWrapper {
    getApplicationScope(applicationLabel: $$rhino.String): $$rhino.String;
    isScopeNameValid(applicationLabel: $$rhino.String): $$rhino.Boolean;
    getVendorCode(): $$rhino.String;
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * TODO: Document GlideCalendarDateTime
 * @class GlideCalendarDateTime
 * @implements {Packages.com.glide.glideobject.CalendarDateTime}
 */
declare class GlideCalendarDateTime implements Packages.com.glide.glideobject.CalendarDateTime {
    // TODO: Implement setValue from com.glide.glideobject.CalendarDateTime under com.glide.glideobject.CalendarDateTime (category: datetime utilities)
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

declare type AggregationType = "AVG" | "COUNT" | "MIN" | "MAX" | "STDDEV" | "SUM";

declare type AggregationInterval = "date" | "dayofweek" | "hour" | "minute" | "quarter" | "value" | "week" | "year";

/**
 * Provides methods to perform operations on Foreign Exchange (FX) Currency fields (also known as Currency2) within the current GlideRecord.
 * @class GlideElementCurrency2
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/GlideElementCurrency2API}
 */
declare class GlideElementCurrency2 implements Packages.com.glide.currency2.GlideElementCurrency2 {
    compareTo(anotherDouble: $$rhino.Number): $$rhino.Number;
    isInfinite(): $$rhino.Boolean;
    isNaN(): $$rhino.Boolean;
    byteValue(): Packages.java.lang.Byte;
    doubleValue(): Packages.java.lang.Double;
    floatValue(): Packages.java.lang.Float;
    intValue(): Packages.java.lang.Integer;
    longValue(): Packages.java.lang.Long;
    shortValue(): Packages.java.lang.Short;
    equals(obj: any): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * Writes log entries directly to the Import Log [import_log] table.
 * @class GlideImportLog
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/GlideImportLogAPI}
 * @todo Add members to GlideImportLog
 */
declare class GlideImportLog {
    // TODO: Is base class Packages.com.glide.db.impex.ImportLog?
}

/**
 * Creates an Import Set Run record which can be consumed by the GlideImportSetTransformer API.
 * @class GlideImportSetRun
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/GlideImportSetRunAPI}
 * @todo Add members to GlideImportSetRun
 */
declare class GlideImportSetRun {
    // TODO: Is base class Packages.com.glide.system_import_set.ImportSetRun?
}

/**
 * Creates an Import Set Transformer object used to execute an Import Set Transform.
 * @class GlideImportSetTransformer
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/GlideImportSetTransformerAPI}
 * @todo Add members to GlideImportSetTransformer
 */
declare class GlideImportSetTransformer {
    // TODO: Is base class com.glide.system_import_set.ImportSetTransformer?
}

/**
 * The NotifyConferenceUtil API provides methods to manage Notify conference calls and SMS messages for various telephony service providers, such as Zoom and WebEx.
 * @class NotifyConferenceUtil
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/NotifyConferenceUtils}
 * @todo Add members to NotifyConferenceUtil
 */
declare class NotifyConferenceUtil {
    // TODO: Find out what is the base class
    // Could not find class
}

/**
 * The RenderProperties API provides methods about the current page and is available in Jelly scripts and in UI-action conditions and scripts.
 * @class RenderProperties
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/RenderProperties-Scoped-API}
 * @todo Add members to RenderProperties
 */
declare class RenderProperties implements Packages.com.glide.script.fencing.ScopedRenderProperties {
    // TODO: Implement getEncodedQuery     from com.glide.script.fencing.ScopedRenderProperties under com.glide.script.fencing.ScopedRenderProperties
    // TODO: Implement getListControl      from com.glide.script.fencing.ScopedRenderProperties under com.glide.script.fencing.ScopedRenderProperties
    // TODO: Implement getParameterValue   from com.glide.script.fencing.ScopedRenderProperties under com.glide.script.fencing.ScopedRenderProperties
    // TODO: Implement getReferringURL     from com.glide.script.fencing.ScopedRenderProperties under com.glide.script.fencing.ScopedRenderProperties
    // TODO: Implement getViewName         from com.glide.script.fencing.ScopedRenderProperties under com.glide.script.fencing.ScopedRenderProperties
    // TODO: Implement getWindowProperties from com.glide.script.fencing.ScopedRenderProperties under com.glide.script.fencing.ScopedRenderProperties
    // TODO: Implement isInDevStudio       from com.glide.script.fencing.ScopedRenderProperties under com.glide.script.fencing.ScopedRenderProperties
    // TODO: Implement isInteractive       from com.glide.script.fencing.ScopedRenderProperties under com.glide.script.fencing.ScopedRenderProperties
    // TODO: Implement isManyToMany        from com.glide.script.fencing.ScopedRenderProperties under com.glide.script.fencing.ScopedRenderProperties
    // TODO: Implement isRelatedList       from com.glide.script.fencing.ScopedRenderProperties under com.glide.script.fencing.ScopedRenderProperties
    equals(obj: any): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

/**
 * The ScopedDCManager API enables you to group data by type.
 * @class ScopedDCManager
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/DCManagerAPIScoped}
 * @todo Add members to ScopedDCManager
 */
declare class ScopedDCManager {
    // TODO: Find out what is the base class
}

/**
 * Define facet items, filters, or mapped queries for a facets object.
 * @class SPScriptedFacet
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/SPScriptedFacetScopedAPI}
 * @todo Add members to SPScriptedFacet
 */
declare class SPScriptedFacet {
    // TODO: Find out what is the base class
}

/**
 * Generate a multi choice or single choice facets object for an advanced search source.
 * @class SPScriptedFacetService
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/SPScriptedFacetServiceScopedAPI}
 * @todo Add members to SPScriptedFacetService
 */
declare class SPScriptedFacetService {
    // TODO: Find out what is the base class
}

/**
 * Scriptable object that represents a query running against a remote table.
 * @class v_query
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/v_queryAPI}
 * @todo Add members to v_query
 */
declare class v_query {
    // TODO: Find out what is the base class
}

/**
 * Scriptable object that enables you to add rows to a remote table.
 * @class v_table
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/v_tableAPI}
 * @todo Add members to v_table
 */
declare class v_table {
    // TODO: Find out what is the base class
}

/**
 * The scoped Workflow API provides methods that can be used in an activity definition script.
 * @class Workflow
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_WorkflowScopedAPI}
 * @todo Add members to Workflow
 */
declare class Workflow implements Packages.com.glideapp.workflow.queue.activity.ScopedWorkflow {
    // TODO: Implement get inputs     from com.glideapp.workflow.queue.activity.Workflow under com.glideapp.workflow.queue.activity.Workflow
    // TODO: Implement get name       from com.glideapp.workflow.queue.activity.Workflow under com.glideapp.workflow.queue.activity.Workflow
    // TODO: Implement get result     from com.glideapp.workflow.queue.activity.Workflow under com.glideapp.workflow.queue.activity.Workflow
    // TODO: Implement get scratchpad from com.glideapp.workflow.queue.activity.Workflow under com.glideapp.workflow.queue.activity.Workflow
    // TODO: Implement debug          from com.glideapp.workflow.queue.activity.Workflow under com.glideapp.workflow.queue.activity.Workflow
    // TODO: Implement error          from com.glideapp.workflow.queue.activity.Workflow under com.glideapp.workflow.queue.activity.Workflow
    // TODO: Implement generate       from com.glideapp.workflow.queue.activity.Workflow under com.glideapp.workflow.queue.activity.Workflow
    // TODO: Implement getVariable    from com.glideapp.workflow.queue.activity.Workflow under com.glideapp.workflow.queue.activity.Workflow
    // TODO: Implement info           from com.glideapp.workflow.queue.activity.Workflow under com.glideapp.workflow.queue.activity.Workflow
    // TODO: Implement removeVariable from com.glideapp.workflow.queue.activity.Workflow under com.glideapp.workflow.queue.activity.Workflow
    // TODO: Implement setResult      from com.glideapp.workflow.queue.activity.Workflow under com.glideapp.workflow.queue.activity.Workflow
    // TODO: Implement setVariable    from com.glideapp.workflow.queue.activity.Workflow under com.glideapp.workflow.queue.activity.Workflow
    // TODO: Implement warn           from com.glideapp.workflow.queue.activity.Workflow under com.glideapp.workflow.queue.activity.Workflow
    equals(obj: any): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

declare class GlideStringList implements Packages.com.glide.collections.StringList {
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
    add(e: $$rhino.String): $$rhino.Boolean;
    add(index: $$rhino.Number, element: $$rhino.String): void;
    addAll(c: Packages.java.util.Collection<$$rhino.String>): $$rhino.Boolean;
    addAll(index: $$rhino.Number, c: Packages.java.util.Collection<$$rhino.String>): $$rhino.Boolean;
    clear(): void;
    clone(): Packages.java.lang.Object;
    contains(o: any): $$rhino.Boolean;
    ensureCapacity(minCapacity: $$rhino.Number): void;
    get(index: $$rhino.Number): $$rhino.String;
    indexOf(o: any): $$rhino.Number;
    isEmpty(): $$rhino.Boolean;
    iterator(): Packages.java.util.Iterator<$$rhino.String>;
    lastIndexOf(o: any): $$rhino.Number;
    listIterator(): Packages.java.util.ListIterator<$$rhino.String>;
    listIterator(index: $$rhino.Number): Packages.java.util.ListIterator<$$rhino.String>;
    remove(index: $$rhino.Number): $$rhino.String;
    remove(o: any): $$rhino.Boolean;
    removeAll(c: Packages.java.util.Collection<any>): $$rhino.Boolean;
    retainAll(c: Packages.java.util.Collection<any>): $$rhino.Boolean;
    set(index: $$rhino.Number, element: $$rhino.String): $$rhino.String;
    size(): $$rhino.Number;
    subList(fromIndex: $$rhino.Number, toIndex: $$rhino.Number): Packages.java.util.List<$$rhino.String>;
    toArray(): string[];
    trimToSize(): void;
    containsAll(c: Packages.java.util.Collection<any>): $$rhino.Boolean;
}

declare class GlideTableDescriptor implements Packages.com.glide.db.TableDescriptor {
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}

declare class GlideCompositeElement implements Packages.com.glide.db.CompositeElement {
    getTargetTD(): GlideTableDescriptor;
    getBaseED(): GlideElementDescriptor;
    getTargetED(): GlideElementDescriptor;
    isValid(): $$rhino.Boolean;
    getTargetField(): $$rhino.String;
    isSimple(): $$rhino.Boolean;
    getFullLabel(): $$rhino.String;
    getDisplayLabel(): $$rhino.String;
    equals(obj: object): $$rhino.Boolean;
    hashCode(): $$rhino.Number;
    toString(): $$rhino.String;
}
