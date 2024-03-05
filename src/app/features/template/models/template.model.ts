/**
 * Templates model
 *
 * @export
 * @interface Template
 */
export interface Template {
  /**
   * Id of the template
   */
  id: number;
  /**
   * Name of the template
   */
  name: string;
  /**
   * Description of the template
   */
  description: string;
  /**
   * Content of the template
   */
  content: string;
}

export type CreateTemplate = Omit<Template, 'id'>;
