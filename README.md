# mp-chess-webapp

In order to run this project, type `node server.mjs` into the command line.<br>
You may need to type `npm install` if the command doesn't work as the 
packages could not be installed

<h1>What's in this project?</h1>
<p>
    This project includes online multiplayer, local multiplayer and a board editing function
    The online and local multiplayer are fully functional.
</p>

<p>
    The board editing page is not fully functional and is work in progress.
    You can place pieces but not remove them... Choose wisely!
</p>

<h2>Online multiplayer</h2>
<p>
    Connect to the same game type as your opponent, where the queue is shown on the front page.
    3|2 means that you have 3 minutes, and each time you make a move, your timer will go up 2 seconds.
    10|0 therefore means you have 10 minutes, and your timer will not increase when a move is made.
</p>

<h2>Local multiplayer</h2>
<p>
    Play a game on a single screen with your friend. The board will 
    automatically flip for you so the player making their move is always at the bottom.
    No timer, so play casually until the game is over!
</p>

<h2>Board Editor</h2>
<h3>IN PROGRESS</h3>
<p>
    Place pieces and customise your position, provides you with the FEN string for your position,
    and allows you to choose certain game properties.
</p>