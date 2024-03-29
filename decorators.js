// 装饰器
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var moverDecorator = function (target) {
    target.prototype.getPosition = function () {
        return { x: 100, y: 200 };
    };
};
var musicDecorator = function (target) {
    target.prototype.playMusic = function () {
        console.log('播放音乐');
    };
};
var Tank = /** @class */ (function () {
    function Tank() {
    }
    Tank.prototype.getPosition = function () { };
    Tank.prototype.playMusic = function () { };
    Tank = __decorate([
        moverDecorator,
        musicDecorator
    ], Tank);
    return Tank;
}());
var t = new Tank();
console.log(t.getPosition());
t.playMusic();
var Player = /** @class */ (function () {
    function Player() {
    }
    Player = __decorate([
        moverDecorator
    ], Player);
    return Player;
}());
var p = new Player();
console.log(t.getPosition());
