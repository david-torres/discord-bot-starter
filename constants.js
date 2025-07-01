export const Constants = {
    myID: process.env.MY_ID,
    token: process.env.TOKEN,
    clientID: process.env.CLIENT_ID,
    guildID: process.env.GUILD_ID,
    botName: process.env.BOT_NAME,
    botID: process.env.BOT_ID,
    botThumbUrl: process.env.BOT_THUMB_URL,
    gameUrl: process.env.GAME_URL,
    lfgVoiceCategoryID: process.env.LFG_VOICE_CATEGORY_ID,
    readyPlayerRoleID: process.env.READY_PLAYER_ROLE_ID,
    lookingForGamesRoleID: process.env.LOOKING_FOR_GAMES_ROLE_ID,
    playtestingRoleID: process.env.PLAYTESTING_ROLE_ID,
    competitorRoleID: process.env.COMPETITOR_ROLE_ID,
    defaultVoiceChannelID: process.env.DEFAULT_VOICE_CHANNEL_ID,
    tournamentApiUrl: process.env.TOURNAMENT_API_URL,
    tournamentChannelID: process.env.TOURNAMENT_CHANNEL_ID,

    //debugging flags
    debugLFG: !!parseInt(process.env.DEBUG_LFG), // type-cast the string to an int then the int to a bool
    debugScreentop: !!parseInt(process.env.DEBUG_SCREENTOP) // ditto
};