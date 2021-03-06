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
export interface GetCharactersCharacterIdFatigueOk {
    /**
     * Character's last jump activation
     */
    lastJumpDate?: Date;
    /**
     * Character's jump fatigue expiry
     */
    jumpFatigueExpireDate?: Date;
    /**
     * Character's last jump update
     */
    lastUpdateDate?: Date;
}
