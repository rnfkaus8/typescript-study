type direction = 'up' | 'down' | 'left' | 'right';
class Position {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  move(typeOfMove: direction) {
    switch (typeOfMove) {
      case 'up':
        this.y++;
        break;
      case 'down':
        this.y--;
        break;
      case 'left':
        this.x--;
        break;
      case 'right':
        this.x++;
        break;
      default:
        throw new Error('err');
    }
  }

  getPosition() {
    // return `{${this.x}, ${this.y}}`;
    return JSON.stringify(this);
  }
}

const position = new Position(0,0);
console.log(position.getPosition());
position.move('up');
console.log(position.getPosition());
position.move('down');
console.log(position.getPosition());
position.move('left');
console.log(position.getPosition());
position.move('right');
console.log(position.getPosition());
