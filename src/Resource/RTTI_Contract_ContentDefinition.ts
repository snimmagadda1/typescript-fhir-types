
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Element, IElement} from './RTTI_Element';




            export interface IContract_ContentDefinition {
                
                    /**
                     * Precusory content structure and use, i.e., a boilerplate, template, application for a contract such as an insurance policy or benefits under a program, e.g., workers compensation.
                     */
                    type : ICodeableConcept;
                    
                
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
                     * Detailed Precusory content type.
                     */
                    subType? : ICodeableConcept;
                    

                    /**
                     * The  individual or organization that published the Contract precursor content.
                     */
                    publisher? : IReference;
                    

                    /**
                     * The date (and optionally time) when the contract was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the contract changes.
                     */
                    publicationDate? : string;
                    

                    /**
                     * Extensions for publicationDate
                     */
                    _publicationDate? : IElement;
                    

                    /**
                     * draft | active | retired | unknown.
                     */
                    publicationStatus? : string;
                    

                    /**
                     * Extensions for publicationStatus
                     */
                    _publicationStatus? : IElement;
                    

                    /**
                     * A copyright statement relating to Contract precursor content. Copyright statements are generally legal restrictions on the use and publishing of the Contract precursor content.
                     */
                    copyright? : string;
                    

                    /**
                     * Extensions for copyright
                     */
                    _copyright? : IElement;
                    
            }
        


        export const RTTI_Contract_ContentDefinition: t.Type<IContract_ContentDefinition> = t.recursion( 'IContract_ContentDefinition', () =>
            t.intersection([
                
        t.type({
           type: RTTI_CodeableConcept
        })
        ,
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
subType: RTTI_CodeableConcept,
publisher: RTTI_Reference,
publicationDate: t.string,
_publicationDate: RTTI_Element,
publicationStatus: t.string,
_publicationStatus: RTTI_Element,
copyright: t.string,
_copyright: RTTI_Element
        })
        
            ])
        );
        

        