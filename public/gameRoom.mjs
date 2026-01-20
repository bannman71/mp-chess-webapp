export default class GameRoom{

    constructor(roomCode, board, PGN, client, gridData) {
        this.roomCode = roomCode;
        this.board = board;
        this.client = client;
        this.gridData = gridData;
    }
}