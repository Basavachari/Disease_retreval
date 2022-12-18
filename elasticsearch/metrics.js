function metrics(array) {
    let total = 10;
    const relavent = 1;
    const nonRelavent = 0;
    const totalRelavent = 10;
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element == relavent) {
            relaventRetrived = relaventRetrived+1;
        }
        precision[i] = relaventRetrived/i+1;
        recall[i] = relaventRetrived /totalRelavent; 
    }
    return {precision,recall};
}