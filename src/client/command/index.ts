import * as vscode from "vscode";
import * as client from "vscode-languageclient";
import * as doClearDiagnostics from "./doClearDiagnostics";
import * as doShowMerlinFiles from "./doShowMerlinFiles";
import * as doSplitCases from "./doSplitCases";
import * as fixEqualsShouldBeArrow from "./fixEqualsShouldBeArrow";
import * as fixMissingSemicolon from "./fixMissingSemicolon";
import * as fixUnusedVariable from "./fixUnusedVariable";

export function registerAll(
  context: vscode.ExtensionContext,
  languageClient: client.LanguageClient,
): void {
  doClearDiagnostics.register(context, languageClient);
  doShowMerlinFiles.register(context, languageClient);
  doSplitCases.register(context, languageClient);
  fixEqualsShouldBeArrow.register(context, languageClient);
  fixMissingSemicolon.register(context, languageClient);
  fixUnusedVariable.register(context, languageClient);
}
