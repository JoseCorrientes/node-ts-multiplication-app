import yargs from "yargs"
import {hideBin} from "yargs/helpers"

const args = yargs(hideBin(process.argv))
            .option(
                'b',
                {
                    alias:  "base",
                    type: "number",
                    demandOption: true,
                    describe: "Base number"
                }
            )
            .option(
                'l',
                {
                    alias: "limit",
                    type: "number",
                    describe: "Number of Iteractions.",      
                    default: 10,  
                }
            )
            .option(
                's',
                {
                    alias: "showTable",
                    type: "boolean",
                    default: false,
                    describe: "Show the table on screen."
                }
            )
            .option(
                'n',
                {
                    alias: "name",
                    type: "string",
                    describe: "File Name",
                    default: "Archivo-de-Tabla-"
                }
            )    
            .option(
                'd',
                {
                    alias: "destination",
                    type: "string",
                    default: "outputs",
                    describe: "Directory where we'll write the file"
                }
            )
            .parseSync()


export {
    args,
}