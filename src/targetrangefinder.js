import {registerSettings} from './settings.js';

'use strict';

Hooks.once('init', async () => {
    console.log('day-night-cycle | Initializing day-night-cycle');
    registerSettings();
});

function DEBUG(message) {
    if (game.settings.get("targetrangefinder", 'Debug')) {
        console.log(message);
    }
}

Hooks.on("ready", () => {
    console.log('targetrangefinder | Ready');
});

export class TargetRangeFinder extends Application {
    constructor(options) {
        super(options);

        Hooks.on('controlToken', async (tok, b) => {
            if (relevanttoken(tok.id)) {
                getranges()
            }
        });
        Hooks.on('targetToken', async (user, tok, b) => {
            if (relevanttoken(tok.id)) {
                getranges()
            }
        });
        Hooks.on('updateToken', async (tok, update, other) => {
            if (relevanttoken(tok.id)) {
                getranges(update)
            }
        });

    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            id: "tokenbar-window",
            template: "./modules/targetrangefinder/src/rangemarker.html",
            popOut: false,
            dragDrop: [{ dragSelector: ".token" }],
        });
    }






    }
}