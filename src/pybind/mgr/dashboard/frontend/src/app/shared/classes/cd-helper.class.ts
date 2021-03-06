import * as _ from 'lodash';

export class CdHelperClass {
  /**
   * Simple way to only update variables if they have really changed and not just the reference
   *
   * @param componentThis - In order to update the variables if necessary
   * @param change - The variable name (attribute of the object) is followed by the current value
   *                 it would update even if it equals
   */
  static updateChanged(componentThis: any, change: { [publicVarName: string]: any }) {
    Object.keys(change).forEach((publicVarName) => {
      const data = change[publicVarName];
      if (!_.isEqual(data, componentThis[publicVarName])) {
        componentThis[publicVarName] = data;
      }
    });
  }
}
