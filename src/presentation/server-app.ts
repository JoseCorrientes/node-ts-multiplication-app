import { CreateTable } from "../domain/uses-cases/create-table.use-case"
import { SaveTable } from '../domain/uses-cases/save-table.use-case';

export interface Options {
    base: number,
    limit: number,
    showTable: boolean,
    fileName:string,
    destination: string,
}

export class ServerApp {

    static run({base, limit, showTable, destination, fileName}:Options)  {
        const nuevaTabla = new CreateTable().execute({base, limit})
        const saveReport = new SaveTable().execute({base, destination, fileName, fileContent:nuevaTabla})

        if (showTable) console.log(nuevaTabla)

        if (saveReport) console.log('El Archivo se Grabo correctamente')
        else console.log('Ha habido un error en la grabacion del archivo')

    }


}