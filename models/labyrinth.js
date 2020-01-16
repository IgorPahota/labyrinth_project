const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const labSchema = new Schema({
    experimentName: String,
    experimentNumber: Number,
    mouseNumber: Number,
    dateOfCreation: {type: String, default: new Date()},
    result: Array,
    field: {
        type: Array, default: [
            [
                {
                    id: {type: String, default: 'a1'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 1},
                    row: {type: Number, default: 1},
                    inner: String
                },
                {
                    id: {type: String, default: 'a2'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 1},
                    row: {type: Number, default: 2},
                    inner: String
                },
                {
                    id: {type: String, default: 'a3'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 1},
                    row: {type: Number, default: 3},
                    inner: String
                },
                {
                    id: {type: String, default: 'a4'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 1},
                    row: {type: Number, default: 4},
                    inner: String
                },
                {
                    id: {type: String, default: 'a5'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 1},
                    row: {type: Number, default: 5},
                    inner: String
                },
                {
                    id: {type: String, default: 'a6'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 1},
                    row: {type: Number, default: 6},
                    inner: String
                },
                {
                    id: {type: String, default: 'a7'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 1},
                    row: {type: Number, default: 7},
                    inner: String
                },
                {
                    id: {type: String, default: 'a8'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 1},
                    row: {type: Number, default: 8},
                    inner: String
                },
                {
                    id: {type: String, default: 'a9'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 1},
                    row: {type: Number, default: 9},
                    inner: String
                },
                {
                    id: {type: String, default: 'a10'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 1},
                    row: {type: Number, default: 10},
                    inner: String
                },
                {
                    id: {type: String, default: 'a11'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 1},
                    row: {type: Number, default: 11},
                    inner: String
                },

            ],
            [
                {
                    id: {type: String, default: 'b1'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 2},
                    row: {type: Number, default: 1},
                    inner: String
                },
                {
                    id: {type: String, default: 'b2'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 2},
                    row: {type: Number, default: 2},
                    inner: String
                },
                {
                    id: {type: String, default: 'b3'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 2},
                    row: {type: Number, default: 3},
                    inner: String
                },
                {
                    id: {type: String, default: 'b4'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 2},
                    row: {type: Number, default: 4},
                    inner: String
                },
                {
                    id: {type: String, default: 'b5'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 2},
                    row: {type: Number, default: 5},
                    inner: String
                },
                {
                    id: {type: String, default: 'b6'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 2},
                    row: {type: Number, default: 6},
                    inner: String
                },
                {
                    id: {type: String, default: 'b7'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 2},
                    row: {type: Number, default: 7},
                    inner: String
                },
                {
                    id: {type: String, default: 'b8'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 2},
                    row: {type: Number, default: 8},
                    inner: String
                },
                {
                    id: {type: String, default: 'b9'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 2},
                    row: {type: Number, default: 9},
                    inner: String
                },
                {
                    id: {type: String, default: 'b10'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 2},
                    row: {type: Number, default: 10},
                    inner: String
                },
                {
                    id: {type: String, default: 'b11'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 2},
                    row: {type: Number, default: 11},
                    inner: String
                },

            ],
            [
                {
                    id: {type: String, default: 'c1'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 3},
                    row: {type: Number, default: 1},
                    inner: String
                },
                {
                    id: {type: String, default: 'c2'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 3},
                    row: {type: Number, default: 2},
                    inner: String
                },
                {
                    id: {type: String, default: 'c3'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 3},
                    row: {type: Number, default: 3},
                    inner: String
                },
                {
                    id: {type: String, default: 'c4'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 3},
                    row: {type: Number, default: 4},
                    inner: String
                },
                {
                    id: {type: String, default: 'c5'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 3},
                    row: {type: Number, default: 5},
                    inner: String
                },
                {
                    id: {type: String, default: 'c6'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 3},
                    row: {type: Number, default: 6},
                    inner: String
                },
                {
                    id: {type: String, default: 'c7'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 3},
                    row: {type: Number, default: 7},
                    inner: String
                },
                {
                    id: {type: String, default: 'c8'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 3},
                    row: {type: Number, default: 8},
                    inner: String
                },
                {
                    id: {type: String, default: 'c9'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 3},
                    row: {type: Number, default: 9},
                    inner: String
                },
                {
                    id: {type: String, default: 'c10'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 3},
                    row: {type: Number, default: 10},
                    inner: String
                },
                {
                    id: {type: String, default: 'c11'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 3},
                    row: {type: Number, default: 11},
                    inner: String
                },

            ],
            [
                {
                    id: {type: String, default: 'd1'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 4},
                    row: {type: Number, default: 1},
                    inner: String
                },
                {
                    id: {type: String, default: 'd2'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 4},
                    row: {type: Number, default: 2},
                    inner: String
                },
                {
                    id: {type: String, default: 'd3'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 4},
                    row: {type: Number, default: 3},
                    inner: String
                },
                {
                    id: {type: String, default: 'd4'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 4},
                    row: {type: Number, default: 4},
                    inner: String
                },
                {
                    id: {type: String, default: 'd5'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 4},
                    row: {type: Number, default: 5},
                    inner: String
                },
                {
                    id: {type: String, default: 'd6'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 4},
                    row: {type: Number, default: 6},
                    inner: String
                },
                {
                    id: {type: String, default: 'd7'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 4},
                    row: {type: Number, default: 7},
                    inner: String
                },
                {
                    id: {type: String, default: 'd8'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 4},
                    row: {type: Number, default: 8},
                    inner: String
                },
                {
                    id: {type: String, default: 'd9'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 4},
                    row: {type: Number, default: 9},
                    inner: String
                },
                {
                    id: {type: String, default: 'd10'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 4},
                    row: {type: Number, default: 10},
                    inner: String
                },
                {
                    id: {type: String, default: 'd11'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 4},
                    row: {type: Number, default: 11},
                    inner: String
                },

            ],
            [
                {
                    id: {type: String, default: 'e1'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 5},
                    row: {type: Number, default: 1},
                    inner: String
                },
                {
                    id: {type: String, default: 'e2'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 5},
                    row: {type: Number, default: 2},
                    inner: String
                },
                {
                    id: {type: String, default: 'e3'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 5},
                    row: {type: Number, default: 3},
                    inner: String
                },
                {
                    id: {type: String, default: 'e4'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 5},
                    row: {type: Number, default: 4},
                    inner: String
                },
                {
                    id: {type: String, default: 'e5'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 5},
                    row: {type: Number, default: 5},
                    inner: String
                },
                {
                    id: {type: String, default: 'e6'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 5},
                    row: {type: Number, default: 6},
                    inner: String
                },
                {
                    id: {type: String, default: 'e7'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 5},
                    row: {type: Number, default: 7},
                    inner: String
                },
                {
                    id: {type: String, default: 'e8'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 5},
                    row: {type: Number, default: 8},
                    inner: String
                },
                {
                    id: {type: String, default: 'e9'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 5},
                    row: {type: Number, default: 9},
                    inner: String
                },
                {
                    id: {type: String, default: 'e10'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 5},
                    row: {type: Number, default: 10},
                    inner: String
                },
                {
                    id: {type: String, default: 'e11'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 5},
                    row: {type: Number, default: 11},
                    inner: String
                },

            ],
            [
                {
                    id: {type: String, default: 'f1'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 6},
                    row: {type: Number, default: 1},
                    inner: String
                },
                {
                    id: {type: String, default: 'f2'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 6},
                    row: {type: Number, default: 2},
                    inner: String
                },
                {
                    id: {type: String, default: 'f3'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 6},
                    row: {type: Number, default: 3},
                    inner: String
                },
                {
                    id: {type: String, default: 'f4'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 6},
                    row: {type: Number, default: 4},
                    inner: String
                },
                {
                    id: {type: String, default: 'f5'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 6},
                    row: {type: Number, default: 5},
                    inner: String
                },
                {
                    id: {type: String, default: 'f6'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 6},
                    row: {type: Number, default: 6},
                    inner: String
                },
                {
                    id: {type: String, default: 'f7'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 6},
                    row: {type: Number, default: 7},
                    inner: String
                },
                {
                    id: {type: String, default: 'f8'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 6},
                    row: {type: Number, default: 8},
                    inner: String
                },
                {
                    id: {type: String, default: 'f9'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 6},
                    row: {type: Number, default: 9},
                    inner: String
                },
                {
                    id: {type: String, default: 'f10'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 6},
                    row: {type: Number, default: 10},
                    inner: String
                },
                {
                    id: {type: String, default: 'f11'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 6},
                    row: {type: Number, default: 11},
                    inner: String
                },

            ],
            [
                {
                    id: {type: String, default: 'g1'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 7},
                    row: {type: Number, default: 1},
                    inner: String
                },
                {
                    id: {type: String, default: 'g2'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 7},
                    row: {type: Number, default: 2},
                    inner: String
                },
                {
                    id: {type: String, default: 'g3'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 7},
                    row: {type: Number, default: 3},
                    inner: String
                },
                {
                    id: {type: String, default: 'g4'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 7},
                    row: {type: Number, default: 4},
                    inner: String
                },
                {
                    id: {type: String, default: 'g5'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 7},
                    row: {type: Number, default: 5},
                    inner: String
                },
                {
                    id: {type: String, default: 'g6'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 7},
                    row: {type: Number, default: 6},
                    inner: String
                },
                {
                    id: {type: String, default: 'g7'},
                    color: {String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 7},
                    row: {type: Number, default: 7},
                    inner: String
                },
                {
                    id: {type: String, default: 'g8'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 7},
                    row: {type: Number, default: 8},
                    inner: String
                },
                {
                    id: {type: String, default: 'g9'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 7},
                    row: {type: Number, default: 9},
                    inner: String
                },
                {
                    id: {type: String, default: 'g10'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 7},
                    row: {type: Number, default: 10},
                    inner: String
                },
                {
                    id: {type: String, default: 'g11'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 7},
                    row: {type: Number, default: 11},
                    inner: String
                },

            ],
            [
                {
                    id: {type: String, default: 'h1'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 8},
                    row: {type: Number, default: 1},
                    inner: String
                },
                {
                    id: {type: String, default: 'h2'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 8},
                    row: {type: Number, default: 2},
                    inner: String
                },
                {
                    id: {type: String, default: 'h3'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 8},
                    row: {type: Number, default: 3},
                    inner: String
                },
                {
                    id: {type: String, default: 'h4'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 8},
                    row: {type: Number, default: 4},
                    inner: String
                },
                {
                    id: {type: String, default: 'h5'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 8},
                    row: {type: Number, default: 5},
                    inner: String
                },
                {
                    id: {type: String, default: 'h6'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 8},
                    row: {type: Number, default: 6},
                    inner: String
                },
                {
                    id: {type: String, default: 'h7'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 8},
                    row: {type: Number, default: 7},
                    inner: String
                },
                {
                    id: {type: String, default: 'h8'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 8},
                    row: {type: Number, default: 8},
                    inner: String
                },
                {
                    id: {type: String, default: 'h9'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 8},
                    row: {type: Number, default: 9},
                    inner: String
                },
                {
                    id: {type: String, default: 'h10'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 8},
                    row: {type: Number, default: 10},
                    inner: String
                },
                {
                    id: {type: String, default: 'h11'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 8},
                    row: {type: Number, default: 11},
                    inner: String
                },

            ],
            [
                {
                    id: {type: String, default: 'i1'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 9},
                    row: {type: Number, default: 1},
                    inner: String
                },
                {
                    id: {type: String, default: 'i2'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 9},
                    row: {type: Number, default: 2},
                    inner: String
                },
                {
                    id: {type: String, default: 'i3'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 9},
                    row: {type: Number, default: 3},
                    inner: String
                },
                {
                    id: {type: String, default: 'i4'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 9},
                    row: {type: Number, default: 4},
                    inner: String
                },
                {
                    id: {type: String, default: 'i5'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 9},
                    row: {type: Number, default: 5},
                    inner: String
                },
                {
                    id: {type: String, default: 'i6'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 9},
                    row: {type: Number, default: 6},
                    inner: String
                },
                {
                    id: {type: String, default: 'i7'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 9},
                    row: {type: Number, default: 7},
                    inner: String
                },
                {
                    id: {type: String, default: 'i8'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 9},
                    row: {type: Number, default: 8},
                    inner: String
                },
                {
                    id: {type: String, default: 'i9'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 9},
                    row: {type: Number, default: 9},
                    inner: String
                },
                {
                    id: {type: String, default: 'i10'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 9},
                    row: {type: Number, default: 10},
                    inner: String
                },
                {
                    id: {type: String, default: 'i11'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 9},
                    row: {type: Number, default: 11},
                    inner: String
                },

            ],
            [
                {
                    id: {type: String, default: 'j1'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 10},
                    row: {type: Number, default: 1},
                    inner: String
                },
                {
                    id: {type: String, default: 'j2'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 10},
                    row: {type: Number, default: 2},
                    inner: String
                },
                {
                    id: {type: String, default: 'j3'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 10},
                    row: {type: Number, default: 3},
                    inner: String
                },
                {
                    id: {type: String, default: 'j4'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 10},
                    row: {type: Number, default: 4},
                    inner: String
                },
                {
                    id: {type: String, default: 'j5'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 10},
                    row: {type: Number, default: 5},
                    inner: String
                },
                {
                    id: {type: String, default: 'j6'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 10},
                    row: {type: Number, default: 6},
                    inner: String
                },
                {
                    id: {type: String, default: 'j7'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 10},
                    row: {type: Number, default: 7},
                    inner: String
                },
                {
                    id: {type: String, default: 'j8'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 10},
                    row: {type: Number, default: 8},
                    inner: String
                },
                {
                    id: {type: String, default: 'j9'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 10},
                    row: {type: Number, default: 9},
                    inner: String
                },
                {
                    id: {type: String, default: 'j10'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 10},
                    row: {type: Number, default: 10},
                    inner: String
                },
                {
                    id: {type: String, default: 'j11'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 10},
                    row: {type: Number, default: 11},
                    inner: String
                },

            ],
            [
                {
                    id: {type: String, default: 'k1'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 11},
                    row: {type: Number, default: 1},
                    inner: String
                },
                {
                    id: {type: String, default: 'k2'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 11},
                    row: {type: Number, default: 2},
                    inner: String
                },
                {
                    id: {type: String, default: 'k3'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 11},
                    row: {type: Number, default: 3},
                    inner: String
                },
                {
                    id: {type: String, default: 'k4'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 11},
                    row: {type: Number, default: 4},
                    inner: String
                },
                {
                    id: {type: String, default: 'k5'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 11},
                    row: {type: Number, default: 5},
                    inner: String
                },
                {
                    id: {type: String, default: 'k6'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 11},
                    row: {type: Number, default: 6},
                    inner: String
                },
                {
                    id: {type: String, default: 'k7'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 11},
                    row: {type: Number, default: 7},
                    inner: String
                },
                {
                    id: {type: String, default: 'k8'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 11},
                    row: {type: Number, default: 8},
                    inner: String
                },
                {
                    id: {type: String, default: 'k9'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 11},
                    row: {type: Number, default: 9},
                    inner: String
                },
                {
                    id: {type: String, default: 'k10'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 11},
                    row: {type: Number, default: 10},
                    inner: String
                },
                {
                    id: {type: String, default: 'k11'},
                    color: {type: String, default: 'lightgrey'},
                    letter: {type: String, default: ''},
                    mouse: {type: Boolean, default: false},
                    column: {type: Number, default: 11},
                    row: {type: Number, default: 11},
                    inner: String
                },

            ]
        ]
    }
});


module.exports = mongoose.model('Lab', labSchema);














//Тестовый коннект
// (async () => {
//     const connection = mongoose.connect('mongodb+srv://labUser:llbbnn123@cluster0-epnwi.mongodb.net/test?retryWrites=true&w=majority',
//         { useNewUrlParser: true,   useUnifiedTopology: true, useCreateIndex: true});
//      await connection.then(() => {
//         console.log('connected')
//     }).catch(err=>{ console.log(Error,err.message)})
//     })()
//
//
//
//
//
// const Lab = mongoose.model('Lab', labSchema);
//
// const first = new Lab ({
//     name: 'test'
// });
//
// first.save();
//
//
// async function test () {
//      test = await Lab.find({});
//     console.log(test);
// }
//
// test();


