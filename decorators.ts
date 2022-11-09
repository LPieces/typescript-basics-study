// 装饰器

const moverDecorator: ClassDecorator = (target: Function) => {
  target.prototype.getPosition = (): { x: number, y: number } => {
    return { x: 100, y: 200 }
  }
}

const musicDecorator: ClassDecorator = (target: Function) => {
  target.prototype.playMusic = (): void => {
    console.log('播放音乐')
  }
}

@moverDecorator
@musicDecorator  // 叠加
class Tank {
  public getPosition(){}
  public playMusic(){}
}
const t = new Tank()
console.log(t.getPosition())
t.playMusic()

@moverDecorator
class Player {}
const p = new Player()
console.log(t.getPosition())