// 属性装饰器
const PropDecorator: PropertyDecorator = (...args: any[]) => {
  console.log(args)
}
class Hd {
  @PropDecorator
  public name: string | undefined
}

// 参数装饰器
const parameterDecorator: ParameterDecorator = (...args: any[]) => {
  console.log(args)
}

class Para {
  public show(id: number = 1, computed: boolean, @parameterDecorator content: string) {}
}