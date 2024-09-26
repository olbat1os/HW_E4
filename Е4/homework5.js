class ElectricalAppliance
{
  constructor(name, power)
  {
    this.name = name;
    this.power = power;
    this.isIncluded = false;
  }
  
  Included()
  {
    console.log(this.name + " is included");
    this.isIncluded = true;
  }

  Disabled()
  {
    console.log(this.name + " is disabled");
    this.isIncluded = false;
  }
  
  getPowerUsed()
  {
    return this.isIncluded ? this.power : 0;
  }
}


const lampa = new ElectricalAppliance('lampa', 30);
const computer = new ElectricalAppliance('computer', 800);
const tv = new ElectricalAppliance('tv', 550);

console.log(lampa.getPowerUsed() + tv.getPowerUsed()+ computer.getPowerUsed());

lampa.Included();
console.log(lampa.getPowerUsed() + tv.getPowerUsed()+ computer.getPowerUsed());

tv.Disabled();
console.log(lampa.getPowerUsed() + tv.getPowerUsed()+ computer.getPowerUsed());

computer.Included();
console.log(lampa.getPowerUsed() + tv.getPowerUsed() + computer.getPowerUsed());