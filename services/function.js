exports.randomNumGen = ()=>{ return Math.floor(1000+Math.random()*9000) }

exports.randomLetterGen =()=>{
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let randomLetter = ''

    for(let i= 0; i< 2; i++) {
        const randomIndex = Math.floor(Math.random()* alphabet.length);
        randomLetter += alphabet[randomIndex];
    }
    return randomLetter;
}