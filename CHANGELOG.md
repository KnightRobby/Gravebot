<a name="1.4.0" />
## 1.4.0 (Janurary 17th, 2016)

#### Features
- `!lol items` is the first command to return an [image response](https://github.com/Gravestorm/Gravebot/pull/94) instead of text
- `!lol match` command to get player stats of a current match
- `!cat` command to send a cute cat picture
- `!dota2` commands now give stats and builds for DOTA2
- `!videocall` now lets you generate a one click video call and screen share link, either public or private
- `!version` command to load the latest information from this changelog in to Discord
- `!endall` command to end all arguments

#### Bug Fixes
- Spell check everywhere
- Added safeguard to `!roll` command that was causing crashes

<a name="1.3.0" />
## 1.3.0 (Janurary 8th, 2016)

#### Features
- Short hands for `!youtube` and `!wolfram` as `!yt` and `!wfa`
- Support for joining through PMs with just Discord invite links
- `!lol` `bans` and `best` to show the top bans and best champs in their respected positions
- `!lol counters` now sort by Champion.gg calculated stats score rather then win rate
- Better formatting for `!lol` commands
- `manlyman` and `patrick3` memes

#### Bug Fixes
- `!drama`, `!emoji`, and `!quote` commands to have access to all available results

#### Technical Features
- `EMAIL` and `PASSWORD` are checked for on boot
- Docker support with automated images based off Master branch
- Added sentry for error tracking
- Dropped `babel-node` binary to start app


<a name="1.2.0" />
## 1.2.0 (Janurary 5th, 2016)

#### Features
- Wolfram Alpha `!wolfram` commands. Ask anything!
- Emoji `!emoji` command to spam chat with glorious things
- Drama `!drama` command when things are getting a little hot in chat
- Added joined date and roles to `!serverinfo`
- Commands can be used with mentions to Gravebot, `@₪Gravebot₪ pugbomb 3`, and in private messages.

#### Bug Fixes
- Replaced `!yoda` command to rid of all the API errors


<a name="1.1.0" />
## 1.1.0 (Janurary 3rd, 2016)

#### Features
- League of Legends `!lol` commands
- Pugbomb `!pugbomb` command to spam chat with adorable pugs
- Yoda `!yoda` command to make your sentences sound like Yoda

#### Technical Features
- Converted stack to ES6
- Organized project for simpler contributions
- Test and coverage suite *(in progress)*

#### Bug Fixes
- `!youtube` now stops returning undefined and handles playlists
