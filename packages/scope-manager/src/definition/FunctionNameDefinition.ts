import { TSESTree } from '@typescript-eslint/experimental-utils';
import { DefinitionType } from './DefinitionType';
import { DefinitionBase } from './DefinitionBase';

class FunctionNameDefinition extends DefinitionBase<
  DefinitionType.FunctionName,
  | TSESTree.FunctionDeclaration
  | TSESTree.FunctionExpression
  | TSESTree.TSDeclareFunction
  | TSESTree.TSEmptyBodyFunctionExpression,
  null
> {
  constructor(name: TSESTree.Identifier, node: FunctionNameDefinition['node']) {
    super(DefinitionType.FunctionName, name, node, null);
  }

  public readonly isTypeDefinition = false;
  public readonly isVariableDefinition = true;
}

export { FunctionNameDefinition };
