
//Will there be enough space?

const enough =(cap, on, wait) =>  on + wait <= cap? 0 : (on + wait) -cap 