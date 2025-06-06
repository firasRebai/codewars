function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (dolphin) {
        sharkSpeed /= 2;
    }
    const yourTime = pontoonDistance / youSpeed;
    const sharkTime = sharkDistance / sharkSpeed;
    return yourTime < sharkTime ? "Alive!" : "Shark Bait!";
}
​