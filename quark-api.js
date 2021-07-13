//apis for quark 

//sends uri for png
window.addEventListener('message',event =>{
    console.log('receiving a message')
    console.log(event.data)
    if(event.data[fn] == "downloadPNG"){
        
        let uri = calculator.screenshot()
        let type = 'downloadPNG'
        
        event.source.postMessage({
            'type':type,
            'uri':uri
        }, event.origin)
    }
    else if(event.data[fn] == "quark_get_obj"){
        
        let obj = calculator.getState()
        let type = 'calculatorState'
        
        event.source.postMessage({
            'type':type,
            'obj':obj
        }, event.origin)
    }
    else if(event.data[fn] == "quark_set_data"){
        let obj = calculator.setState(event.data[payload])
        let type = 'calculatorState'
    }
},false)



