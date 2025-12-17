export interface Coordinate {
  x: number;
  y: number;
}

export enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  bpm: number;
  mood: 'Energetic' | 'Chill' | 'Dark';
}

export type GameStatus = 'IDLE' | 'PLAYING' | 'GAME_OVER' | 'PAUSED';

export interface GameState {
  snake: Coordinate[];
  food: Coordinate;
  direction: Direction;
  score: number;
  highScore: number;
  status: GameStatus;
}
