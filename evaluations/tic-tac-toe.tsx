'use client';

import { Grid, Box } from '@mui/material';
import { memo, useCallback, useState } from 'react';

enum TileType {
    Naught = 0,
    Cross = 1,
    Empty = -1,
}

const styles = {
    tile: { size: 100 },
    board: { size: 3, rows: 3 },
} as const;

export const Test = () => {
    const [board, setBoard] = useState<TileType[][]>(() =>
        Array.from({ length: styles.board.size }, () =>
            Array.from({ length: styles.board.rows }, () => TileType.Empty)
        )
    );

    const [turn, setTurn] = useState<TileType.Naught | TileType.Cross>(
        TileType.Naught
    );

    const [moves, setMoves] = useState<number>(0);

    const onBoardCompleteHandler = useCallback(() => {
        console.log('determine winner');
    }, []);

    const onTileClickHandler = (x: number, y: number) => {
        if (board[x][y] === TileType.Empty) {
            const newBoard = board.map((row) => [...row]);
            newBoard[x][y] = turn;
            setBoard(newBoard);

            setTurn(
                turn === TileType.Naught ? TileType.Cross : TileType.Naught
            );

            const newMoves = moves + 1;
            setMoves(newMoves);

            if (newMoves === styles.board.size * styles.board.rows) {
                onBoardCompleteHandler();
            }
        }
    };

    return (
        <Grid container sx={{ width: styles.tile.size * styles.board.rows }}>
            {board.map((row, x) =>
                row.map((value, y) => (
                    <Tile
                        key={`${x}-${y}`}
                        x={x}
                        y={y}
                        value={value}
                        size={styles.tile.size}
                        onClick={onTileClickHandler}
                    />
                ))
            )}
        </Grid>
    );
};

const TileSymbol = {
    [TileType.Cross]: <>X</>,
    [TileType.Naught]: <>O</>,
    [TileType.Empty]: <></>,
} as const;

const Tile = memo(
    ({
        size,
        x,
        y,
        value,
        onClick,
    }: {
        size: number;
        x: number;
        y: number;
        value: TileType;
        onClick: (x: number, y: number) => void;
    }) => {
        return (
            <Grid
                onClick={() => onClick(x, y)}
                sx={{
                    border: '1px solid red',
                    width: size,
                    height: size,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                size={4}
            >
                <Box>{TileSymbol[value]}</Box>
            </Grid>
        );
    }
);
