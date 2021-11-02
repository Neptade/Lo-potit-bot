const date = new Date();
export const utils = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    tag(user) {
        return "<@" + user.id + ">"
    }
};
