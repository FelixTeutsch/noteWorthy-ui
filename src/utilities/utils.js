// utils.js

export const formatUpdatedDate = (updated) => {
    const date = new Date(updated);
    const now = new Date();
    const time = ", ".concat(date.toLocaleTimeString('eu-DE', { hour: '2-digit', minute: '2-digit' }));
    const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) {
        return "Today".concat(time);
    } else if (diffInDays === 1) {
        return "Yesterday".concat(time);
    } else if (diffInDays < 7) {
        return date.toLocaleDateString('en-US', { weekday: 'long' }).concat(time);
    } else if (date.getFullYear() === now.getFullYear()) {
        return date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit' }).concat(time);
    } else {
        return date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: '2-digit' }).concat(time);
    }
};
