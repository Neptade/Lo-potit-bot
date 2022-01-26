const date = new Date();

export enum color {
    RED = "\x1b[31m%s\x1b[0m",
    GREEN = "\x1b[32m%s\x1b[0m",
    GREY = "\x1b[30m%s\x1b[0m",
}

export const utils = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    tag(user) {
        return "<@!" + user.id + ">"
    },
    isPrime(nb):Boolean {
        if (nb <= 3)
            return nb > 1
        else if (nb % 2 == 0 || nb % 3 == 0)
            return false

        let i = 5
        while (i * i <= nb) {
             // console.log("i * i :", i * i)
             // console.log("nb % i :", nb % i)
             // console.log("nb % (i + 2) :", nb % (i + 2))
            if (nb % i == 0 || nb % (i + 2) == 0)
                return false
            i = i + 6
        }
        return true
    },
    randomChoice(array) {
        return array[Math.floor(Math.random() * array.length)]
    }
};
