export default class PGN {

    constructor(PGNarr, FENarr, Data) {
        this.PGNarr = PGNarr;
        this.FENarr = FENarr;
        this.Data = Data;
    }

    update(pieceMovedNotation, FEN, moveCounter) {
        this.PGNarr.push(pieceMovedNotation);
        this.FENarr.push(FEN);

        this.Data.push({
            "moveCounter": moveCounter,
            "PGNarr": [...this.PGNarr],
            "FENarr": [...this.FENarr]
        });
        //every move, a fen needs to be stored,
        //it must be pushed when it is white's turn

    }

    find(moveNum, pgnToFind) {
        for (let i = 0; i < this.Data.length; i++) {
            if (moveNum === this.Data[i].moveCounter) { //if indexed into move to find
                //white's moves happen on even indexes (0, 2, 4, 6)
                //black's happen on odd (1, 3, 5, 7)
                //so to go straight to the indexes, do 2*moveNum - 2
                //e.g. 2*(5) - 2 = 8
                //so, white and black's moves can be found on indexes 8 and 9.
                for (let j = 2*moveNum - 2; j < 2*moveNum; j++){
                    if (this.Data[i].PGNarr[j] === pgnToFind) {
                        return this.Data[i].FENarr[j];
                    }
                }
            }
        }
    }

}