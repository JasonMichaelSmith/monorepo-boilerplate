// https://codesandbox.io/embed/j2s8lr?module=/src/Demo.tsx&fontsize=12
import { Grid, Box } from '@mui/material';
import * as React from 'react';

const grid = {
    width: 100,
    height: 100,
} as const;

const check = (array, length) => {
    let value = array[0][0];
    let count = 0;
    for (let i = 0; i < array.length && count !== length; i++) {
        for (let j = 0; j < array[i].length && count !== length; j++) {
            if (value.toString().trim().length > 0 && array[i][j] === value) {
                count++;
            } else {
                value = array[i][j];
                count = 1;
            }
        }
    }
    return count === length;
};

enum BoardState {
    Empty = -1,
    Naught = 0,
    Cross = 1,
}

const board: BoardState[][] = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
];

function MyApp() {
    const [turn, setTurn] = React.useState(0);

    return (
        <>
            <Box id="game" sx={{ display: 'relative', width: grid.width * 3 }}>
                <Grid container>
                    {Array.from(Array(9)).map((_, index) => (
                        <Grid key={index} size={{ xs: 4 }}>
                            <GridBox
                                index={index}
                                turn={turn}
                                onClick={(index) => {
                                    const x = index % 3;
                                    const y = Math.floor(index / 3);

                                    board[x][y] = turn % 2;
                                    console.log(board);
                                    setTurn(turn + 1);

                                    if (turn >= 2) {
                                        // determine a winner
                                        const win = check(board, 9);
                                        console.log('check winner', win);
                                    }
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}

const GridBox = ({ index, turn, onClick }) => {
    const [filled, setFilled] = React.useState(false);

    const permTurn = React.useMemo(() => turn, [filled]);

    return (
        <Box
            sx={{
                backgroundColor: 'lightblue',
                borderColor: 'black',
                border: 1,
                width: grid.width,
                height: grid.height,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onClick={() => {
                if (filled) return;

                setFilled(true);
                onClick(index);
            }}
        >
            {filled ? permTurn % 2 ? <Cross /> : <Naught /> : <></>}
        </Box>
    );
};

const Cross = () => <p>X</p>;
const Naught = () => <p>0</p>;

const Line = ({ x, y }: { x: number; y: number }) => {
    return (
        <>
            <Box
                sx={{
                    position: 'absolute',
                    left: x,
                    top: y,
                    height: 5,
                    width: '100%',
                    backgroundColor: 'red',
                }}
            ></Box>
        </>
    );
};

export default function Demo() {
    return <MyApp />;
}
