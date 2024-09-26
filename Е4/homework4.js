function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isIncluded = false;
} // метод, который определяет прибор как включенный в розетку

ElectricalAppliance.prototype.Included = function() {
    console.log(this.name + " is included!");
    this.isIncluded = true;
}

ElectricalAppliance.prototype.getPowerUsed = function() {
    return this.isIncluded ? this.power : 0;
}

const lampa = new ElectricalAppliance('lampa', 30);
const computer = new ElectricalAppliance('computer', 800);
const tv = new ElectricalAppliance('tv', 550);

console.log(lampa.getPowerUsed() + tv.getPowerUsed()+ computer.getPowerUsed());

lampa.Included();
console.log(lampa.getPowerUsed() + tv.getPowerUsed()+ computer.getPowerUsed());

tv.Included();
console.log(lampa.getPowerUsed() + tv.getPowerUsed()+ computer.getPowerUsed());

computer.Included();
console.log(lampa.getPowerUsed() + tv.getPowerUsed() + computer.getPowerUsed());