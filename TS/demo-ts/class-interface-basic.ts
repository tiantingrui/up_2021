interface Radio {
    switchRadio(trigger: boolean): void;
}

interface Battery {
    checkBatteryStatus(): void;
}

class Car implements Radio {
    switchRadio(trigger: boolean) {

    }
}

// 类可以实现多个接口，我们只需要中间用 逗号 隔开就可以
class Cellphone implements Radio, Battery{
    switchRadio(trigger: boolean) {

    }
    checkBatteryStatus() {}
}

// 同时接口之间也可以继承
interface RadioWithBattery extends Radio {
    checkBatteryStatus(): void;
}

class Cellphone2 implements RadioWithBattery {
    switchRadio(trigger: boolean) {}
    checkBatteryStatus() {}
}