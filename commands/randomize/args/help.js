instructions = `
**Permissions:**

User must have role of \`randomizer\` to use this feature.

**Commands:**

\`create-lobby\`

- Arguments: none
- Action: creates a new voice channel called "Lobby." Players will need to join this channel before being assigned to random teams.
- Usage: \`!randomize create-lobby\`

\`remove-lobby\`

- Arguments: none
- Action: deletes the "Lobby" channel generated by \`create-lobby\`.
- Usage: \`!randomize remove-lobby\`

\`start-game\`

- Arguments: number of players per team (integer)
- Action: takes all players in the "Lobby" voice channel and randomly assigns them to team channels based on the players-per-team argument.
- Usage: \`!randomize start-game 2\`

\`end-game\`

- Arguments: none
- Action: deletes the team channels generated by \`start-game\`.
- Usage: \`!randomize end-game\`

\`help\`

- Arguments: none
- Action: displays this text.
- Usage: \`!randomize help\`

`;

module.exports = (client, messsage, ...args) => messsage.reply(instructions);
