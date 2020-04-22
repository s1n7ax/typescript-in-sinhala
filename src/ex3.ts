interface IWeapon {
    calculateDamage(distance: number): number;
}

class AK47 implements IWeapon {
    calculateDamage(distance: number): number {
        if (distance <= 100) return 60;
        if (distance <= 200) return 50;
        return 40;
    }
}

class Sniper implements IWeapon {
    calculateDamage(distance: number): number {
        if (distance <= 100) return 150;
        if (distance <= 200) return 100;
        return 80;
    }
}

class Glock implements IWeapon {
    calculateDamage(distance: number): number {
        if (distance <= 100) return 40;
        if (distance <= 200) return 30;
        return 20;
    }
}

class M4A4 implements IWeapon {
    calculateDamage(distance: number): number {
        if (distance <= 100) return 50;
        if (distance <= 200) return 40;
        return 30;
    }
}

class Player {
    health: number = 100;
    gun: IWeapon;

    constructor(gun: IWeapon) {
        this.gun = gun;
    }
}

class GameEngine {
    static players: Player[] = [];

    static killPlayer(player: Player) {
        const index = GameEngine.players.indexOf(player);
        GameEngine.players.splice(index, 1);
    }

    static getDistance(_player1: Player, _player2: Player): number {
        return Math.floor(Math.random() * Math.floor(400));
    }

    static shoot(from: Player, to: Player) {
        const distance = GameEngine.getDistance(from, to);
        const damage = from.gun.calculateDamage(distance);

        to.health -= damage;
        if (to.health <= 0) GameEngine.killPlayer(to);
    }
}

const ak47 = new Player(new AK47());
const sniper = new Player(new Sniper());
const glock = new Player(new Glock());
const m4a4 = new Player(new M4A4());

GameEngine.players.push(ak47);
GameEngine.players.push(sniper);
GameEngine.players.push(glock);
GameEngine.players.push(m4a4);

GameEngine.shoot(ak47, sniper);
console.log(GameEngine.players);
console.log(sniper.health);

console.log('>>>>>>>>>>');

GameEngine.shoot(glock, sniper);
console.log(GameEngine.players);
console.log(sniper.health);

console.log('>>>>>>>>>>');

GameEngine.shoot(m4a4, sniper);
console.log(GameEngine.players);
console.log(sniper.health);
