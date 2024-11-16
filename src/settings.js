

export const registerSettings = function () {
    game.settings.register("targetrangefinder", "first-load", {
        scope: "world",
        config: false,
        default: true,
        type: Boolean
    });

    game.settings.register("daytargetrangefinder", "message-number", {
        scope: "world",
        config: false,
        default: 0,
        type: Number
    });

    game.settings.register("targetrangefinder", "default-on", {
        name: "Default to On",
        hint:"",
        scope: "client",
        config: true,
        default: true,
        type: Boolean
    });

    game.settings.register("targetrangefinder", "Debug", {
        name: "Turn on Debug",
        hint:"You probably don't need this on.",
        scope: "world",
        config: true,
        default: false,
        type: Boolean
    });
};
