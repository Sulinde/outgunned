import { OutgunnedContextMenu } from '../../setup/context-menu.mjs';
import { OutgunnedChecks } from '../../apps/checks.mjs';
import { ItemSelectDialog} from "../../apps/feat-selection-dialog.mjs";
import * as contextMenu from "../actor-cm.mjs";
import { OutgunnedUtilities } from '../../apps/utilities.mjs';
import { OutgunnedCharacterSheet} from "./character.mjs";

export class OutgunnedSuperheroSheet extends OutgunnedCharacterSheet {


  /**@inheritdoc */
  static DEFAULT_OPTIONS = {
      classes: ["outgunned", "sheet", "actor"],
      template: "systems/outgunned/templates/actor/actor-superhero-sheet.html",
      position: {
        width: 880,
        height: 660,
      },
      tabs : {
        // Foundry-provided generic template
        template: "templates/generic/tab-navigation.hbs",
      },
      window: {
        resizable: true,
        title: 'TYPES.Actor.superhero'
      }
  }
/**@inheritdoc */
 static PARTS = {
    tag : 'form',
    form : {
      submitOnChange: true,
      closeOnSubmit: false
    },
    main : {
      template: "./systems/outgunned/templates/actor/actor-superhero-sheet.html"
    }
   }

  async _prepareContext() {
    //Create context for easier access to actor data
    const context = await super._prepareContext();
    context.adrenalineLabel = game.i18n.localize("OG.power")
    return context;
  }

    /** @override */
  _onRender(context) {
      super._onRender(context);
      new OutgunnedContextMenu(
          context,
          ".superpower-name.contextmenu",
          contextMenu.superpowerMenuOptions(this.actor, this.token),
          {parentClassHooks: false, fixed:true}
      );

    }
}
