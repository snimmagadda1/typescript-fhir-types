
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_DetectedIssue_Mitigation, IDetectedIssue_Mitigation} from './RTTI_DetectedIssue_Mitigation';

export enum DetectedIssueSeverityKind {
                high = 'high',
moderate = 'moderate',
low = 'low'
            }
const DetectedIssueSeverityKindKeys = t.keyof({
                [DetectedIssueSeverityKind.high]: null,
[DetectedIssueSeverityKind.moderate]: null,
[DetectedIssueSeverityKind.low]: null
            });


            export interface IDetectedIssue {
                
                    /**
                     * This is a DetectedIssue resource
                     */
                    resourceType: 'DetectedIssue'
                    
                
                    /**
                     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                     */
                    id? : string;
                    

                    /**
                     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                     */
                    meta? : IMeta;
                    

                    /**
                     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                     */
                    implicitRules? : string;
                    

                    /**
                     * Extensions for implicitRules
                     */
                    _implicitRules? : IElement;
                    

                    /**
                     * The base language in which the resource is written.
                     */
                    language? : string;
                    

                    /**
                     * Extensions for language
                     */
                    _language? : IElement;
                    

                    /**
                     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                     */
                    text? : INarrative;
                    

                    /**
                     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                     */
                    // contained? : IResourceList[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * Business identifier associated with the detected issue record.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * Indicates the status of the detected issue.
                     */
                    status? : string;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * Identifies the general type of issue identified.
                     */
                    category? : ICodeableConcept;
                    

                    /**
                     * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
                     */
                    severity? : DetectedIssueSeverityKind;
                    

                    /**
                     * Extensions for severity
                     */
                    _severity? : IElement;
                    

                    /**
                     * Indicates the patient whose record the detected issue is associated with.
                     */
                    patient? : IReference;
                    

                    /**
                     * The date or date-time when the detected issue was initially identified.
                     */
                    date? : string;
                    

                    /**
                     * Extensions for date
                     */
                    _date? : IElement;
                    

                    /**
                     * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
                     */
                    author? : IReference;
                    

                    /**
                     * Indicates the resource representing the current activity or proposed activity that is potentially problematic.
                     */
                    implicated? : IReference[];
                    

                    /**
                     * A textual explanation of the detected issue.
                     */
                    detail? : string;
                    

                    /**
                     * Extensions for detail
                     */
                    _detail? : IElement;
                    

                    /**
                     * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
                     */
                    reference? : string;
                    

                    /**
                     * Extensions for reference
                     */
                    _reference? : IElement;
                    

                    /**
                     * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
                     */
                    mitigation? : IDetectedIssue_Mitigation[];
                    
            }
        


        export const RTTI_DetectedIssue: t.Type<IDetectedIssue> = t.recursion( 'IDetectedIssue', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('DetectedIssue')
        })
        ,
                
        t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
// contained: t.array(RTTI_ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
status: t.string,
_status: RTTI_Element,
category: RTTI_CodeableConcept,
severity: DetectedIssueSeverityKindKeys,
_severity: RTTI_Element,
patient: RTTI_Reference,
date: t.string,
_date: RTTI_Element,
author: RTTI_Reference,
implicated: t.array(RTTI_Reference),
detail: t.string,
_detail: RTTI_Element,
reference: t.string,
_reference: RTTI_Element,
mitigation: t.array(RTTI_DetectedIssue_Mitigation)
        })
        
            ])
        );
        

        