PlayerEvents.loggedIn(event => {
    event.player.tell(Text.of("Thanks for playing Linggango!").green())
    event.player.tell(Text.of("Consider supporting me further on Patreon :D!").aqua().underlined().click("https://www.patreon.com/MisanthropyDEV"))
})