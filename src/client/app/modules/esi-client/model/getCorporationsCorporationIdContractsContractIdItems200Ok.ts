/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.7.5
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/**
 * 200 ok object
 */
export interface GetCorporationsCorporationIdContractsContractIdItems200Ok {
    /**
     * Unique ID for the item
     */
    recordId: number;
    /**
     * Type ID for item
     */
    typeId: number;
    /**
     * Number of items in the stack
     */
    quantity: number;
    /**
     * -1 indicates that the item is a singleton (non-stackable). If the item happens to be a BlueprintType, -1 is an Original and -2 is a BlueprintType Copy
     */
    rawQuantity?: number;
    /**
     * is_singleton boolean
     */
    isSingleton: boolean;
    /**
     * true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract.
     */
    isIncluded: boolean;
}
