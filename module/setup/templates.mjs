/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  return foundry.applications.handlebars.loadTemplates({

    // Actor partials.
    actorGear: "systems/outgunned/templates/actor/parts/actor-gear.html",
    actorDescription: "systems/outgunned/templates/actor/parts/actor-description.html",
    actorFeats: "systems/outgunned/templates/actor/parts/actor-feats.html",
    actorRides: "systems/outgunned/templates/actor/parts/actor-rides.html",
    actorYouLook: "systems/outgunned/templates/actor/parts/actor-youLook.html",
    actorMissionShots: "systems/outgunned/templates/actor/parts/mission-shots.html",
    actorMissionRide: "systems/outgunned/templates/actor/parts/mission-ride.html",
    actorMissionVillain: "systems/outgunned/templates/actor/parts/mission-villain.html",
    actorMissionSupport: "systems/outgunned/templates/actor/parts/mission-support.html",
    actorMissionContacts: "systems/outgunned/templates/actor/parts/mission-contacts.html",
    actorMissionGold: "systems/outgunned/templates/actor/parts/mission-gold.html",
    actorDirectorRide: "systems/outgunned/templates/actor/parts/director-ride.html",
    actorDirectoryVillain: "systems/outgunned/templates/actor/parts/director-villain.html",
    actorDirectorEnemies: "systems/outgunned/templates/actor/parts/director-enemies.html",
    actorDirectorSupport: "systems/outgunned/templates/actor/parts/director-support.html",
    // Item partials
    itemHeader: "systems/outgunned/templates/item/parts/header-fields.html",
    itemHeaderNoImage: "systems/outgunned/templates/item/parts/header-fields-no-image.html",
    // Generic helpers
    editButton: "systems/outgunned/templates/parts/edit-button.html",
    deleteButton: "systems/outgunned/templates/parts/delete-button.html",
  });
};