
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_ContactDetail, IContactDetail} from './RTTI_ContactDetail';
import {RTTI_UsageContext, IUsageContext} from './RTTI_UsageContext';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_GraphDefinition_Link, IGraphDefinition_Link} from './RTTI_GraphDefinition_Link';

export enum GraphDefinitionStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
const GraphDefinitionStatusKindKeys = t.keyof({
                [GraphDefinitionStatusKind.draft]: null,
[GraphDefinitionStatusKind.active]: null,
[GraphDefinitionStatusKind.retired]: null,
[GraphDefinitionStatusKind.unknown]: null
            });


            export interface IGraphDefinition {
                
                    /**
                     * This is a GraphDefinition resource
                     */
                    resourceType: 'GraphDefinition';
                    
                
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
                     * An absolute URI that is used to identify this graph definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this graph definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the graph definition is stored on different servers.
                     */
                    url? : string;
                    

                    /**
                     * Extensions for url
                     */
                    _url? : IElement;
                    

                    /**
                     * The identifier that is used to identify this version of the graph definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the graph definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
                     */
                    version? : string;
                    

                    /**
                     * Extensions for version
                     */
                    _version? : IElement;
                    

                    /**
                     * A natural language name identifying the graph definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
                     */
                    name? : string;
                    

                    /**
                     * Extensions for name
                     */
                    _name? : IElement;
                    

                    /**
                     * The status of this graph definition. Enables tracking the life-cycle of the content.
                     */
                    status? : GraphDefinitionStatusKind;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * A Boolean value to indicate that this graph definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
                     */
                    experimental? : boolean;
                    

                    /**
                     * Extensions for experimental
                     */
                    _experimental? : IElement;
                    

                    /**
                     * The date  (and optionally time) when the graph definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the graph definition changes.
                     */
                    date? : string;
                    

                    /**
                     * Extensions for date
                     */
                    _date? : IElement;
                    

                    /**
                     * The name of the organization or individual that published the graph definition.
                     */
                    publisher? : string;
                    

                    /**
                     * Extensions for publisher
                     */
                    _publisher? : IElement;
                    

                    /**
                     * Contact details to assist a user in finding and communicating with the publisher.
                     */
                    contact? : IContactDetail[];
                    

                    /**
                     * A free text natural language description of the graph definition from a consumer's perspective.
                     */
                    description? : string;
                    

                    /**
                     * Extensions for description
                     */
                    _description? : IElement;
                    

                    /**
                     * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate graph definition instances.
                     */
                    useContext? : IUsageContext[];
                    

                    /**
                     * A legal or geographic region in which the graph definition is intended to be used.
                     */
                    jurisdiction? : ICodeableConcept[];
                    

                    /**
                     * Explanation of why this graph definition is needed and why it has been designed as it has.
                     */
                    purpose? : string;
                    

                    /**
                     * Extensions for purpose
                     */
                    _purpose? : IElement;
                    

                    /**
                     * The type of FHIR resource at which instances of this graph start.
                     */
                    start? : string;
                    

                    /**
                     * Extensions for start
                     */
                    _start? : IElement;
                    

                    /**
                     * The profile that describes the use of the base resource.
                     */
                    profile? : string;
                    

                    /**
                     * Links this graph makes rules about.
                     */
                    link? : IGraphDefinition_Link[];
                    
            }
        


        export const RTTI_GraphDefinition: t.Type<IGraphDefinition> = t.recursion( 'IGraphDefinition', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('GraphDefinition')
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
url: t.string,
_url: RTTI_Element,
version: t.string,
_version: RTTI_Element,
name: t.string,
_name: RTTI_Element,
status: GraphDefinitionStatusKindKeys,
_status: RTTI_Element,
experimental: t.boolean,
_experimental: RTTI_Element,
date: t.string,
_date: RTTI_Element,
publisher: t.string,
_publisher: RTTI_Element,
contact: t.array(RTTI_ContactDetail),
description: t.string,
_description: RTTI_Element,
useContext: t.array(RTTI_UsageContext),
jurisdiction: t.array(RTTI_CodeableConcept),
purpose: t.string,
_purpose: RTTI_Element,
start: t.string,
_start: RTTI_Element,
profile: t.string,
link: t.array(RTTI_GraphDefinition_Link)
        })
        
            ])
        );
        

        