import {ServerApp} from "./presentation/server-app"
import {args} from "./plugins/args.plugin"



const main = ()=>{
    const {b:base, l:limit, s:showTable, d:destination, n:fileName} = args

    ServerApp.run({ base, limit, showTable, destination, fileName})
    
}



(()=>{
    main()
})()
