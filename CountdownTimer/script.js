const apocalypse = "1 Jan 2050";

function countdows(){
    const apocalypseDate = new Date(apocalypse);
    const currentDate = new Date();

    const seconds = (apocalypseDate - currentDate) * 1000;

    const days = Math.floor(seconds / 3600 / 24);
}