PlayerEvents.loggedIn(event => {
    event.player.tell(Text.of(" ")) 
    event.player.tell(Text.of(" >> Welcome to ").gray()
        .append(Text.of("Linggango").gold().bold())
        .append("!")
    )
    event.player.tell(Text.of(" ")) 
    event.player.tell(Text.of(" Thanks for playing!").gray().bold())
    event.player.tell(Text.of(" ")) 
    event.player.tell(Text.of("Consider supporting me by:").gray())
    
    event.player.tell(Text.of("   ")
        .append(Text.of("[ Patreon ]").aqua().bold()
            .click("https://www.patreon.com/MisanthropyDEV")
            .hover(Text.of("Click to see my Patreon!").aqua()))
        .append("   ") // Space between buttons
        .append(Text.of("[ Discord ]").blue().bold()
            .click("https://discord.gg/linggango")
            .hover(Text.of("Click to join the community!").blue()))
    )

    event.player.tell(Text.of(" "))
})