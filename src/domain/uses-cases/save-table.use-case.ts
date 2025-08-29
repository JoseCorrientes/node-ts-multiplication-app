import { mkdir, mkdirSync, writeFileSync } from "fs"

export interface SaveTableUseCase {
    execute: (options:Options)=>boolean
}

export interface Options {
    base: number,
    fileName: string,
    destination: string,
    fileContent: string,

}


export class SaveTable implements SaveTableUseCase {

    constructor(){}
    execute({base, fileName, destination, fileContent}:Options) {
       
        try{
            mkdirSync(destination, { recursive: true})
            writeFileSync(`${destination}/${fileName}-${base}`, fileContent, "utf-8")
            return true
        }catch(error) {
            return false
        }    
        return true
    }
}