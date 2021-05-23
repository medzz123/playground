const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;

const splitAndSum = (n: number) => {
  const numberArray = String(Math.abs(n))
    .split('')
    .map((nu) => Number(nu));
  return numberArray.reduce(reducer);
};

const hasMine = (x: number, y: number, safe: number) => {
  return splitAndSum(x) + splitAndSum(y) > safe;
};

function array2d(grid: number) {
  return new Array(grid).fill(false).map(() => new Array(grid).fill(false));
}

const moves = [
  { x: -1, y: 0 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: -1 },
];

export const getMaxArea = (safe: number, axis: number) => {
  const grid = array2d(axis * 2);
  const visited = [];

  visited.push({ x: 0, y: 0 });
  grid[0 + axis][0 + axis] = true;
  let area = 1;

  while (visited.length !== 0) {
    const lastLocation = visited.pop();
    moves.forEach((move) => {
      const newX = lastLocation.x + move.x;
      const newY = lastLocation.y + move.y;
      const isSafe = !hasMine(newX, newY, safe);

      const x = newX + axis;
      const y = newY + axis;

      if (!grid[x][y] && isSafe) {
        grid[x][y] = true;
        area = area + 1;
        visited.push({ x: newX, y: newY });
      }
    });
  }

  return area;
};
