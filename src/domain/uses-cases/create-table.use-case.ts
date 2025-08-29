export interface CreateTableUseCase {
    execute: (options: Options)=>string
}

export interface Options {
    base: number,
    limit: number
}





export class CreateTable implements CreateTableUseCase {
    //me tiene que construir la tabla con la base y limite dados
    constructor() {
    }

    execute({base, limit}:Options) {
        let table = 
        `========================================================
                        Tabla del ${base}
========================================================\n\n`
        for(let i=1; i<=limit; i++) {
            if (i<10) table += `${base} x 0${i} = ${base * i}\n`
            else table += `${base} x ${i} = ${base * i}\n`
        }
        table += "\n\n"
        return table    
    }
    


}