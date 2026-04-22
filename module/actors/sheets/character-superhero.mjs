import { OutgunnedContextMenu } from '../../setup/context-menu.mjs';
import { OutgunnedChecks } from '../../apps/checks.mjs';
import { ItemSelectDialog} from "../../apps/feat-selection-dialog.mjs";
import * as contextMenu from "../actor-cm.mjs";
import { OutgunnedUtilities } from '../../apps/utilities.mjs';
import { OutgunnedCharacterSheet} from "./character.mjs";

export class OutgunnedSuperheroSheet extends OutgunnedCharacterSheet {

  //Turn off App V1 deprecation warnings
  //TODO - move to V2
  static _warnedAppV1 = true

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["outgunned", "sheet", "actor"],
      template: "systems/outgunned/templates/actor/actor-superhero-sheet.html",
      width: 880,
      height: 660,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "feats" }]
    });
  }

  get template() {
    return `systems/outgunned/templates/actor/actor-superhero-sheet.html`;
  }

  async getData() {
    //Create context for easier access to actor data
    const context = await super.getData();
    context.adrenalineLabel = game.i18n.localize("OG.power")
    return context;
  }

    /** @override */
  activateListeners(html) {
      super.activateListeners(html);
      new OutgunnedContextMenu(
          html,
          ".superpower-name.contextmenu",
          contextMenu.superpowerMenuOptions(this.actor, this.token),
          {parentClassHooks: false, fixed:true}
      );

    }
}
