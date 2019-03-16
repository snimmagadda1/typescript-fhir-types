
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Element, IElement} from './RTTI_Element';




            export interface IVerificationResult_Validator {
                
                    /**
                     * Reference to the organization validating information.
                     */
                    organization : IReference;
                    
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * A digital identity certificate associated with the validator.
                     */
                    identityCertificate? : string;
                    

                    /**
                     * Extensions for identityCertificate
                     */
                    _identityCertificate? : IElement;
                    

                    /**
                     * Signed assertion by the validator that they have validated the information.
                     */
                    signedValidatorAttestationString? : string;
                    

                    /**
                     * Extensions for signedValidatorAttestationString
                     */
                    _signedValidatorAttestationString? : IElement;
                    

                    /**
                     * Signed assertion by the validator that they have validated the information.
                     */
                    signedValidatorAttestationUri? : string;
                    

                    /**
                     * Extensions for signedValidatorAttestationUri
                     */
                    _signedValidatorAttestationUri? : IElement;
                    
            }
        


        export const RTTI_VerificationResult_Validator: t.Type<IVerificationResult_Validator> = t.recursion( 'IVerificationResult_Validator', () =>
            t.intersection([
                
        t.type({
           organization: RTTI_Reference
        })
        ,
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identityCertificate: t.string,
_identityCertificate: RTTI_Element,
signedValidatorAttestationString: t.string,
_signedValidatorAttestationString: RTTI_Element,
signedValidatorAttestationUri: t.string,
_signedValidatorAttestationUri: RTTI_Element
        })
        
            ])
        );
        

        