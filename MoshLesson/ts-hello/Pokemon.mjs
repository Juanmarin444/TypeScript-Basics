export class Pokemon {
    _name;
    type;
    _lvl;
    nickName;
    constructor(_name, type, _lvl, nickName) {
        this._name = _name;
        this.type = type;
        this._lvl = _lvl;
        this.nickName = nickName;
        this.nickName = nickName ? nickName : _name;
    }
    choose() {
        console.log(`You chose ${this.nickName} of type ${this.type} at level ${this._lvl}!`);
        console.log(`${this._name}!!!`);
    }
    nickname(newNickName) {
        this.nickName = newNickName ? newNickName : this.nickName;
        console.log(`Go ${this.nickName}!`);
    }
    // How to display private properties to user!
    get name() {
        return this._name;
    }
    get lvl() {
        return this._lvl;
    }
    // How to modify a private property!
    set giveRareCandy(amount) {
        if (this._lvl + amount > 100)
            throw new Error(`${this.nickName} is at max level!`);
        this._lvl += amount;
        console.log(`${this.nickName} leveled up to ${this.lvl}`);
    }
}
