function calculateAge(birthYear, targetYear) {
    const ageDifference = targetYear - birthYear;
​
    if (ageDifference > 0) {
        return `You are ${ageDifference} year${ageDifference === 1 ? '' : 's'} old.`;
    } else if (ageDifference < 0) {
        return `You will be born in ${-ageDifference} year${-ageDifference === 1 ? '' : 's'}.`;
    } else {
        return "You were born this very year!";
    }
}
​
​